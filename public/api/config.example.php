<?php
// Skopiuj ten plik jako config.php (obok, w tym samym folderze) i uzupełnij
// prawdziwe dane logowania SMTP ze skrzynki pocztowej gabinetu (panel hostingu
// → poczta → ustawienia SMTP). config.php jest w .gitignore — nie trafi do
// repozytorium, więc wgraj go ręcznie bezpośrednio na serwer.
define('SMTP_HOST', 'poczta.lesnadental.pl');
define('SMTP_PORT', 465);
define('SMTP_ENCRYPTION', 'ssl');
define('SMTP_USER', 'noreply@lesnadental.pl');
define('SMTP_PASS', 'UZUPEŁNIĆ_HASŁO');
define('SMTP_FROM', 'noreply@lesnadental.pl');
define('SMTP_FROM_NAME', 'Leśna Dental');
define('SMTP_TO', 'kontakt@lesnadental.pl');
define('ALLOWED_ORIGIN', 'https://lesnadental.pl');
