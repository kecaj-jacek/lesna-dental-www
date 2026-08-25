export interface PriceItem {
  name: string;
  description: string | null;
  price: string;
}

export interface PriceCategory {
  categoryName: string;
  items: PriceItem[];
}

export const priceList: PriceCategory[] = [
  {
    categoryName: "Badania i diagnostyka",
    items: [
      {
        name: "Pakiet diagnostyczny Pacjenta pierwszorazowego",
        description: "Obejmuje badanie stomatologiczne, pantomogram, 2 zdjęcia skrzydłowo-zgryzowe, wstępny plan leczenia",
        price: "250 zł"
      },
      {
        name: "Przegląd/  Wizyta kontrolna",
        description: null,
        price: "100 zł"
      },
      {
        name: "Przegląd/  Wizyta kontrolna dziecka",
        description: null,
        price: "100 zł"
      },
      {
        name: "Konsultacja specjalistyczna",
        description: null,
        price: "150 - 200 zł"
      },
    ]
  },
  {
    categoryName: "Radiologia (RTG / Tomografia CBCT)",
    items: [
      {
        name: "Pantomogram",
        description: null,
        price: "100 zł"
      },
      {
        name: "Tomografia komputerowa 3D- szczęka/ żuchwa/ wycinek",
        description: null,
        price: "250 zł"
      },
      {
        name: "Tomografia komputerowa 3D- szczęka i żuchwa",
        description: null,
        price: "300 zł"
      },
      {
        name: "RTG zębowe",
        description: null,
        price: "50 zł"
      },
      {
        name: "RTG skrzydłowo- zgryzowe",
        description: null,
        price: "50 zł"
      },
    ]
  },
  {
    categoryName: "Profilaktyka i higienizacja",
    items: [
      {
        name: "Pakiet higienizacyjny",
        description: "w cenie: scaling, piaskowanie, polerowanie zębów, fluoryzacja",
        price: "400 zł"
      },
      {
        name: "Pakiet higienizacyjny bez fluoryzacji",
        description: "w cenie: scaling, piaskowanie, polerowanie zębów",
        price: "350 zł"
      },
      {
        name: "Scaling",
        description: null,
        price: "200 - 250 zł"
      },
      {
        name: "Piaskowanie",
        description: null,
        price: "150 - 200 zł"
      },
      {
        name: "Fluoryzacja",
        description: null,
        price: "150 zł"
      },
      {
        name: "Lakowanie",
        description: null,
        price: "120 zł"
      },
    ]
  },
  {
    categoryName: "Stomatologia zachowawcza",
    items: [
      {
        name: "Wypełnienie kompozytowe - małe",
        description: null,
        price: "300 zł"
      },
      {
        name: "Wypełnienie kompozytowe - średnie",
        description: null,
        price: "350 zł"
      },
      {
        name: "Wypełnienie kompozytowe - duże",
        description: null,
        price: "400 zł"
      },
      {
        name: "Rozległa odbudowa kompozytowa zęba",
        description: null,
        price: "500 zł"
      },
      {
        name: "Odbudowa zęba po leczeniu kanałowym",
        description: "w cenie wzmocnienie zęba materiałem z włóknem szklanym oraz wykonanie nakładu",
        price: "600 zł"
      },
      {
        name: "Nakład kompozytowy bezpośredni",
        description: null,
        price: "600 zł"
      },
      {
        name: "Wzmocnienie wypełnienia materiałem z włóknem szkalnym",
        description: null,
        price: "100 zł"
      },
      {
        name: "Bonding ( licówka kompozytowa bezpośrednia)",
        description: null,
        price: "800 zł"
      },
      {
        name: "Leczenie biologiczne- Biodentine",
        description: null,
        price: "200 - 250 zł"
      },
      {
        name: "Opatrunek",
        description: null,
        price: "100 zł"
      },
      {
        name: "Opatrunek leczniczy ZnO",
        description: null,
        price: "200 zł"
      },
      {
        name: "Opatrunek leczniczy długoczasowy",
        description: null,
        price: "250 zł"
      },
      {
        name: "ICON ( nieinwazyjne leczenie wczesnej próchnicy)",
        description: null,
        price: "250 zł"
      },
    ]
  },
  {
    categoryName: "Stomatologia dziecięca",
    items: [
      {
        name: "Badanie stomatologiczne",
        description: null,
        price: "100 zł"
      },
      {
        name: "Wizyta adaptacyjna",
        description: null,
        price: "100 zł"
      },
      {
        name: "Wizyta nieefektywna w przypadku braku współpracy",
        description: "30 min",
        price: "100 zł"
      },
      {
        name: "Wypełnienie zęba mlecznego glassjonomerowe",
        description: null,
        price: "200 zł"
      },
      {
        name: "Wypełnienie zęba mlecznego kompozytowe",
        description: "białe lub kolorowe",
        price: "250 zł"
      },
      {
        name: "Wypełnienie zęba mlecznego lecznicze",
        description: null,
        price: "250 zł"
      },
      {
        name: "Dewitalizacja/ otwarcie komory zęba mlecznego",
        description: null,
        price: "200 zł"
      },
      {
        name: "Opatrunek",
        description: null,
        price: "150 zł"
      },
      {
        name: "Usunięcie zęba mlecznego",
        description: null,
        price: "150 - 250 zł"
      },
      {
        name: "Lakierowanie zębów mlecznych ( fluoryzacja)",
        description: null,
        price: "150 zł"
      },
      {
        name: "Lakowanie",
        description: null,
        price: "120 zł"
      },
      {
        name: "Lapisowanie",
        description: null,
        price: "150 zł"
      },
    ]
  },
  {
    categoryName: "Leczenie kanałowe (Endodoncja)",
    items: [
      {
        name: "Wizyta bólowa/ opatrunek leczniczy w kanale",
        description: null,
        price: "250 zł"
      },
      {
        name: "Odbudowa ścian zęba do leczenia kanałowego",
        description: null,
        price: "200 - 250 zł"
      },
      {
        name: "Pierwotne leczenie kanałowe zęba pod mikroskopem - 1 kanał",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "800 zł"
      },
      {
        name: "Pierwotne leczenie kanałowe zęba pod mikroskopem - 2 kanały",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "1000 zł"
      },
      {
        name: "Pierwotne leczenie kanałowe zęba pod mikroskopem - 3 kanały",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "1400 zł"
      },
      {
        name: "Pierwotne leczenie kanałowe zęba pod mikroskopem - 4 kanały",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "1600 zł"
      },
      {
        name: "Powtórne leczenie kanałowe pod mikroskopem - 1 kanał",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "1000 zł"
      },
      {
        name: "Powtórne leczenie kanałowe pod mikroskopem - 2 kanały",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "1200 zł"
      },
      {
        name: "Powtórne leczenie kanałowe pod mikroskopem - 3 kanały",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "1600 zł"
      },
      {
        name: "Powtórne leczenie kanałowe pod mikroskopem - 4 kanały",
        description: "Cena zawiera: znieczulenie, koferdam, maszynowe opracowanie kanałów, wypełnienie kanałów gutaperką na ciepło, kontrolne zdjęcie RTG,  opatrunek.",
        price: "1800 zł"
      },
      {
        name: "Usunięcie złamanego narzędzia",
        description: null,
        price: "300 - 500 zł"
      },
      {
        name: "Zamknięcie perforacji",
        description: null,
        price: "200 - 400 zł"
      },
      {
        name: "Usunięcie wkładu koronowo-korzeniowego",
        description: null,
        price: "200 - 400 zł"
      },
    ]
  },
  {
    categoryName: "Chirurgia stomatologiczna",
    items: [
      {
        name: "Konsultacja chirurgiczna",
        description: null,
        price: "200 zł"
      },
      {
        name: "Usunięcie zęba mlecznego",
        description: null,
        price: "150 - 250 zł"
      },
      {
        name: "Usunięcie zęba stałego jednokorzeniowego",
        description: null,
        price: "250 - 350 zł"
      },
      {
        name: "Usunięcie zęba stałego wielokorzeniowego",
        description: null,
        price: "300 - 500 zł"
      },
      {
        name: "Usunięcie zęba stałego poprzez dłutowanie lub rozseparowanie korzeni",
        description: null,
        price: "400 - 600 zł"
      },
      {
        name: "Usunięcie zęba zatrzymanego",
        description: null,
        price: "600 - 800 zł"
      },
      {
        name: "Resekcja wierzchołka korzenia",
        description: null,
        price: "1000 - 1200 zł"
      },
      {
        name: "Szycie",
        description: null,
        price: "50 zł"
      },
      {
        name: "Plastyka połączenia ustno-zatokowego",
        description: null,
        price: "300 - 400 zł"
      },
      {
        name: "Nacięcie ropnia",
        description: "Cena zawiera znieczulenie, płukanie, sączek, receptę",
        price: "250 zł"
      },
      {
        name: "Plastyka wędzidełka",
        description: null,
        price: "300 - 500 zł"
      },
      {
        name: "Usunięcie zmiany na błonie śluzowej",
        description: null,
        price: "200 - 400 zł"
      },
      {
        name: "Pobranie wycinka do badania histopatologicznego",
        description: null,
        price: "250 zł"
      },
      {
        name: "Leczenie suchego zębodołu",
        description: null,
        price: "100 zł"
      },
      {
        name: "Płukanie kieszeni dziąsłowej z aplikacją leku",
        description: null,
        price: "150 zł"
      },
    ]
  },
  {
    categoryName: "Protetyka",
    items: [
      {
        name: "Konsultacja protetyczna",
        description: null,
        price: "150 zł"
      },
      {
        name: "Konsultacja protetyczna, analiza zdjęć rtg, pisemny plan leczenia",
        description: null,
        price: "250 zł"
      },
      {
        name: "Deprogramator Koisa",
        description: null,
        price: "1000 zł"
      },
      {
        name: "Modele diagnostyczne",
        description: null,
        price: "150 zł"
      },
      {
        name: "Modele drukowane 3D",
        description: null,
        price: "250 zł"
      },
      {
        name: "Cyfrowy projekt uśmiechu, wax-up/ ząb",
        description: null,
        price: "150 zł"
      },
      {
        name: "wkład koronowo- korzeniowy z włókna szklanego",
        description: null,
        price: "600 zł"
      },
      {
        name: "wkład koronowo- korzeniowy z włókna szklanego- kolejny",
        description: null,
        price: "200 zł"
      },
      {
        name: "wkład koronowo- korzeniowy metalowy pojedynczy",
        description: null,
        price: "600 zł"
      },
      {
        name: "wkład koronowo- korzeniowy metalowy składany",
        description: null,
        price: "800 zł"
      },
      {
        name: "wkład typu Rhein",
        description: null,
        price: "900 zł"
      },
      {
        name: "korona porcelanowa na metalu",
        description: null,
        price: "1800 zł"
      },
      {
        name: "korona pełnoceramiczna E.max / cyrkonowa",
        description: null,
        price: "2200 zł"
      },
      {
        name: "korona pełnoceramiczna dwukrzeminan litu/ ceramika skaleniowa",
        description: null,
        price: "2400 zł"
      },
      {
        name: "korona lub licówka pełnoceramiczna- pracownia premium",
        description: "wycena indywidualna",
        price: "2800 - 3000 zł"
      },
      {
        name: "korona na implancie",
        description: null,
        price: "3500 zł"
      },
      {
        name: "korona kompozytowa",
        description: null,
        price: "1000 zł"
      },
      {
        name: "korona tymczasowa wykonana w gabinecie",
        description: null,
        price: "250 zł"
      },
      {
        name: "korona tymczasowa wykonana w pracowni",
        description: null,
        price: "600 zł"
      },
      {
        name: "zdjęcie korony/ mostu",
        description: null,
        price: "200 - 350 zł"
      },
      {
        name: "ponowne zacementowanie korony/mostu",
        description: null,
        price: "250 zł"
      },
      {
        name: "Licówka porcelanowa",
        description: null,
        price: "2200 zł"
      },
      {
        name: "Licówka kompozytowa / bonding",
        description: null,
        price: "800 zł"
      },
      {
        name: "Licówka tymczasowa",
        description: null,
        price: "200 zł"
      },
      {
        name: "Inlay/onlay kompozytowy",
        description: null,
        price: "1100 zł"
      },
      {
        name: "Inlay/onlay ceramiczny",
        description: null,
        price: "1800 zł"
      },
      {
        name: "Most Maryland",
        description: null,
        price: "1500 zł"
      },
      {
        name: "Proteza całkowita osiadająca",
        description: null,
        price: "3000 zł"
      },
      {
        name: "Proteza częściowa osiadająca",
        description: null,
        price: "2700 zł"
      },
      {
        name: "Proteza szkieletowa",
        description: null,
        price: "3200 zł"
      },
      {
        name: "Mikroproteza do 3 zębów",
        description: null,
        price: "900 zł"
      },
      {
        name: "Proteza natychmiastowa",
        description: null,
        price: "900 - 1200 zł"
      },
      {
        name: "Siatka wzmacniająca do protezy",
        description: null,
        price: "350 zł"
      },
      {
        name: "Klamra estetyczna",
        description: null,
        price: "350 zł"
      },
      {
        name: "Zasuwa/ zatrzask",
        description: null,
        price: "500 zł"
      },
      {
        name: "Podścielenie protezy",
        description: null,
        price: "500 zł"
      },
      {
        name: "Naprawa protezy",
        description: null,
        price: "300 - 400 zł"
      },
      {
        name: "Szyna relaksacyjna",
        description: null,
        price: "1000 zł"
      },
      {
        name: "Szyna mock- up",
        description: null,
        price: "500 zł"
      },
      {
        name: "Szynowanie zębów włóknem szklanym",
        description: null,
        price: "200 zł"
      },
    ]
  },
  {
    categoryName: "Wybielanie i estetyka",
    items: [
      {
        name: "Wybielanie nakładkowe",
        description: "w cenie 4 strzykawki żelu wybielającego",
        price: "1200 zł"
      },
      {
        name: "Wybielanie gabinetowe systemem Beyond",
        description: null,
        price: "1400 zł"
      },
      {
        name: "Dodatkowa strzykawka żelu wybielającego",
        description: null,
        price: "100 zł"
      },
      {
        name: "Wybielanie zęba martwego",
        description: null,
        price: "250 zł"
      },
    ]
  },
];
