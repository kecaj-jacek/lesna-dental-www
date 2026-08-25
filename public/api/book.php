<?php
// Wymagania: PHP 8.x
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/phpmailer/Exception.php';
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origins = [
    ALLOWED_ORIGIN,
    'https://www.lesnadental.pl',
    'http://localhost:4321',
    'http://localhost:4322',
    'http://localhost:4323',
];

if (in_array($origin, $allowed_origins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit(0);
}

// ---- Rate limiting: max 5 zgłoszeń / godzinę / IP ----
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$ip_hash = md5($ip);
$tmp_dir = sys_get_temp_dir() . '/lesnadental_ratelimit';

if (!is_dir($tmp_dir)) {
    @mkdir($tmp_dir, 0777, true);
}

$rate_file = $tmp_dir . '/' . $ip_hash . '.json';
$current_time = time();

if (file_exists($rate_file)) {
    $rate_data = json_decode(file_get_contents($rate_file), true);
    if ($current_time - $rate_data['first_request'] < 3600) {
        if ($rate_data['count'] >= 5) {
            http_response_code(429);
            echo json_encode(['success' => false, 'message' => 'Przekroczono limit zgłoszeń. Zadzwoń do nas bezpośrednio lub spróbuj ponownie za godzinę.']);
            exit(0);
        }
        $rate_data['count']++;
    } else {
        $rate_data = ['count' => 1, 'first_request' => $current_time];
    }
} else {
    $rate_data = ['count' => 1, 'first_request' => $current_time];
}
file_put_contents($rate_file, json_encode($rate_data));

// ---- Odczyt i walidacja danych ----
$raw_json = file_get_contents('php://input');
$data = json_decode($raw_json, true) ?? [];

$honeypot = $data['honeypot'] ?? '';
$form_time = $data['form_time'] ?? 0;

// Ochrona antyspamowa: pole-pułapka i zbyt szybkie wysłanie formularza
if ($honeypot !== '' || $form_time < 1500) {
    echo json_encode(['success' => true, 'message' => 'Wiadomość wysłana']);
    exit(0);
}

$cel = trim($data['cel'] ?? '');
$preferowanaData = trim($data['data'] ?? '');
$telefon = trim($data['telefon'] ?? '');

$errors = [];

$valid_cele = ['leczenie', 'cbct'];
if (!in_array($cel, $valid_cele, true)) {
    $errors['cel'] = 'Proszę wybrać cel wizyty.';
}

$clean_phone = preg_replace('/[^0-9+]/', '', $telefon);
if (strlen($clean_phone) < 9) {
    $errors['telefon'] = 'Podaj poprawny numer telefonu.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors, 'message' => 'Podaj poprawny numer telefonu.']);
    exit(0);
}

$celLabels = [
    'leczenie' => 'Leczenie',
    'cbct' => 'Badanie CBCT',
];
$celLabel = $celLabels[$cel];
$dataLabel = $preferowanaData !== '' ? $preferowanaData : 'nie podano';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = (SMTP_PORT === 465) ? PHPMailer::ENCRYPTION_SMTPS : (SMTP_ENCRYPTION === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : '');
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(SMTP_FROM, SMTP_FROM_NAME);
    $mail->addAddress(SMTP_TO);

    $mail->isHTML(true);
    $mail->Subject = '[Leśna Dental] Nowe zgłoszenie wizyty: ' . $celLabel;
    $mail->Body    = buildEmailBody($celLabel, $dataLabel, $telefon);
    $mail->AltBody = "Nowe zgłoszenie z formularza na lesnadental.pl\n\nCel wizyty: $celLabel\nPreferowana data: $dataLabel\nTelefon: $telefon";

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Dziękujemy! Oddzwonimy, aby ustalić termin wizyty.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Błąd serwera. Zadzwoń do nas bezpośrednio: 576 979 469.']);
}

function buildEmailBody($celLabel, $dataLabel, $telefon) {
    $date = date('Y-m-d H:i:s');
    return "
    <div style='font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; background: #fafafa; padding: 20px; border-radius: 8px;'>
        <h2 style='background: #5e5e5e; color: #be997f; padding: 15px; border-radius: 6px; text-align: center;'>Nowe zgłoszenie wizyty</h2>
        <table style='width: 100%; border-collapse: collapse; margin-bottom: 20px;'>
            <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Cel wizyty:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$celLabel</td></tr>
            <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Preferowana data:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$dataLabel</td></tr>
            <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Telefon:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'><a href='tel:$telefon'>$telefon</a></td></tr>
        </table>
        <div style='margin-top: 20px; font-size: 11px; color: #999; text-align: center;'>
            Zgłoszenie z formularza na lesnadental.pl | $date
        </div>
    </div>";
}
