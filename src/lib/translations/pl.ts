import type { Translations } from "./types";

export const pl: Translations = {
  locale: "pl",

  header: {
    products: "Produkty",
    contact: "Kontakt",
    terms: "Regulamin",
  },

  footer: {
    tagline:
      "Profesjonalne narzędzia dla e-sklepów. Automatyzuj, synchronizuj i rozwijaj się — bez kompromisów.",
    productsHeading: "Produkty",
    infoHeading: "Informacje",
    contact: "Kontakt",
    terms: "Regulamin",
    copyright: "Modkit. Wszelkie prawa zastrzeżone.",
    operator: "Operator: Šárka Váňová · IČO: 10817395",
  },

  hero: {
    badge: "Nowość: PriceGuard 2.0 z predykcją cen AI",
    title1: "Narzędzia e-commerce,",
    title2: "które naprawdę działają",
    subtitle:
      "Od eksportu CSV po monitoring konkurencji. Osiem narzędzi zaprojektowanych dla e-commerce — od 49 Kč.",
    ctaProducts: "Zobacz produkty",
    ctaContact: "Skontaktuj się z nami",
    stats: [
      { value: "850+", label: "E-sklepów" },
      { value: "4.2M", label: "Produktów" },
      { value: "99.97%", label: "Uptime" },
    ],
  },

  productsSection: {
    title: "Osiem narzędzi dla Twojego e-sklepu",
    subtitle:
      "Od prostego eksportu CSV po zaawansowany monitoring cen. Licencja jednorazowa — bez miesięcznych opłat.",
  },

  testimonials: {
    title: "Co mówią nasi klienci",
    subtitle: "Realne wyniki od prawdziwych sprzedawców.",
    items: [
      {
        name: "Marek Kowalski",
        role: "Właściciel, ElektroSklep.pl",
        text: "ShopSync Pro oszczędza nam co najmniej 15 godzin tygodniowo. Wcześniej ręcznie przepisywaliśmy produkty między platformami — teraz wszystko dzieje się automatycznie.",
        product: "ShopSync Pro",
      },
      {
        name: "Anna Nowak",
        role: "Menedżer e-commerce, ModaPL.pl",
        text: "ReviewBoost zwiększył nasz współczynnik konwersji o 18%. Automatyczne follow-upy działają świetnie — klienci piszą recenzje bez dodatkowych próśb.",
        product: "ReviewBoost",
      },
      {
        name: "Tomasz Wiśniewski",
        role: "COO, FitnessPro.pl",
        text: "PriceGuard to game changer. Widzimy ruchy cenowe konkurencji w czasie rzeczywistym i reagujemy szybciej niż oni. Marża wzrosła nam o 11%.",
        product: "PriceGuard",
      },
    ],
  },

  faq: {
    title: "Najczęściej zadawane pytania",
    subtitle: "Odpowiedzi na pytania, które słyszymy najczęściej.",
    items: [
      {
        q: "Z jakimi platformami działa Modkit?",
        a: "Nasze narzędzia obsługują WooCommerce, Shoptet, Shopify, PrestaShop i Magento. Na bieżąco pracujemy nad kolejnymi integracjami.",
      },
      {
        q: "Ile czasu zajmuje konfiguracja?",
        a: "Większość wtyczek uruchomisz w ciągu 30 minut. Wystarczy podłączyć klucze API i skonfigurować podstawowe reguły. Jeśli potrzebujesz pomocy, nasz zespół przeprowadzi Cię przez cały proces.",
      },
      {
        q: "Czy mogę przetestować narzędzia przed zakupem?",
        a: "Tak, do każdego produktu oferujemy 14-dniowy bezpłatny okres próbny — bez podawania karty. Po zakończeniu nic nie jest automatycznie naliczane.",
      },
      {
        q: "Jak działa fakturowanie?",
        a: "Płacisz jednorazowo za licencję. Akceptujemy płatności kartą i przelewem bankowym. Faktury wystawiamy automatycznie.",
      },
      {
        q: "Czy oferujecie zniżkę przy zakupie kilku produktów?",
        a: "Przy zakupie 2 lub więcej produktów udzielamy 15% rabatu na całość. Skontaktuj się z nami po indywidualną ofertę.",
      },
      {
        q: "Czy zapewniacie wsparcie techniczne?",
        a: "Oczywiście. Wsparcie e-mailowe jest dostępne w dni robocze od 9:00 do 18:00. Przy droższych planach oferujemy priorytetowe wsparcie z czasem reakcji do 2 godzin.",
      },
    ],
  },

  cta: {
    title: "Gotowi na rozwój?",
    subtitle:
      "Wypróbuj dowolne narzędzie przez 14 dni za darmo. Bez karty, bez zobowiązań.",
    button: "Wybierz narzędzie",
  },

  kontakt: {
    breadcrumb: "Kontakt",
    title: "Napisz do nas",
    subtitle:
      "Masz pytanie o produkty, potrzebujesz pomocy z integracją lub chcesz indywidualną ofertę? Napisz do nas.",
    nameLabel: "Imię i nazwisko",
    namePlaceholder: "Jan Kowalski",
    emailLabel: "E-mail",
    emailPlaceholder: "jan@sklep.pl",
    subjectLabel: "Temat",
    subjectPlaceholder: "Pytanie o produkt ShopSync Pro",
    messageLabel: "Wiadomość",
    messagePlaceholder: "Napisz, w czym możemy Ci pomóc...",
    submit: "Wyślij wiadomość",
    emailHeading: "E-mail",
    emailNote: "Odpowiadamy w dni robocze, 9:00–18:00",
    addressHeading: "Adres do fakturowania",
    addressLines: [
      "Šárka Váňová",
      "IČO: 10817395",
      "Nová 1415/54, Střekov",
      "400 03 Ústí nad Labem",
    ],
    responseHeading: "Czas odpowiedzi",
    responseItems: [
      { label: "Pytania ogólne", value: "do 24 godz." },
      { label: "Wsparcie techniczne", value: "do 4 godz." },
      { label: "Problemy krytyczne", value: "do 1 godz." },
    ],
  },

  pokladna: {
    breadcrumb: "Kasa",
    title: "Kasa",
    subtitle: "Wybierz produkt i wypełnij dane do faktury.",
    selectProduct: "Wybierz produkt",
    billingDetails: "Dane do faktury",
    companyLabel: "Firma / Imię i nazwisko",
    companyPlaceholder: "Twoja firma Sp. z o.o.",
    icoLabel: "NIP",
    icoPlaceholder: "1234567890",
    dicLabel: "VAT UE",
    dicPlaceholder: "PL1234567890",
    emailLabel: "E-mail",
    emailPlaceholder: "jan@sklep.pl",
    addressLabel: "Adres",
    addressPlaceholder: "ul. Marszałkowska 1, 00-001 Warszawa",
    submitButton: "Przejdź do płatności",
    submitNote:
      "Bramka płatności zostanie wkrótce podłączona. Na razie",
    submitNoteLink: "skontaktuj się z nami",
    summaryTitle: "Podsumowanie zamówienia",
    licenseType: "Typ licencji",
    licenseValue: "Jednorazowa",
    total: "Razem",
    totalValue: "od 49 Kč",
    totalNote: "Cena netto. 14-dniowy okres próbny gratis.",
  },

  terms: {
    breadcrumb: "Regulamin",
    title: "Regulamin",
    effectiveDate: "Obowiązuje od 1. 1. 2025",
    sections: [
      {
        title: "I. Operator",
        content:
          '<p><strong>Šárka Váňová</strong></p><p>IČO: 10817395</p><p>Nová 1415/54, Střekov</p><p>400 03 Ústí nad Labem</p><p>Republika Czeska</p>',
        isCard: true,
      },
      {
        title: "II. Postanowienia ogólne",
        content:
          'Niniejszy regulamin (dalej „regulamin") określa zasady współpracy między operatorem usługi Modkit (dalej „usługodawca") a użytkownikami usług (dalej „klient"). Regulamin dotyczy wszystkich usług i produktów oferowanych za pośrednictwem strony modkit.co.',
      },
      {
        title: "III. Przedmiot umowy",
        content:
          "Przedmiotem umowy jest udostępnianie narzędzi programistycznych dla e-commerce (QuickCSV, StockAlert, SEO Meta, ShopSync Lite, ReviewBoost, OrderFlow, ShopSync Pro, PriceGuard) w formie licencji jednorazowej. Usługodawca zobowiązuje się udostępnić klientowi wybrany produkt po opłaceniu licencji.",
      },
      {
        title: "IV. Zamówienie i zawarcie umowy",
        content:
          "Zamówienie jest wiążące od momentu jego wysłania za pośrednictwem formularza internetowego.\nUmowa zostaje zawarta w momencie potwierdzenia zamówienia przez usługodawcę.\nKażdy nowy klient ma prawo do 14-dniowego bezpłatnego okresu próbnego, chyba że zaznaczono inaczej.",
        isList: true,
      },
      {
        title: "V. Ceny i warunki płatności",
        content:
          "Ceny podane są bez VAT.\nPłatność dokonywana jest jednorazowo przy zakupie licencji.\nAkceptujemy płatności kartą i przelewem bankowym.\nW przypadku opóźnienia w płatności dłuższego niż 14 dni usługodawca ma prawo ograniczyć dostęp do usługi.",
        isList: true,
      },
      {
        title: "VI. Okres próbny i rezygnacja",
        content:
          "Okres próbny trwa 14 dni od aktywacji i nie wymaga podania karty płatniczej.\nPo zakończeniu okresu próbnego usługa nie jest automatycznie naliczana — klient musi aktywnie przejść na plan płatny.\nSubskrypcję można anulować w dowolnym momencie ze skutkiem na koniec bieżącego okresu rozliczeniowego.",
        isList: true,
      },
      {
        title: "VII. Reklamacje i odstąpienie od umowy",
        content:
          "Klient ma prawo odstąpić od umowy w ciągu 14 dni od jej zawarcia bez podania przyczyny.\nReklamacje rozpatrujemy mailowo pod adresem info@modkit.co w ustawowym terminie 30 dni.",
        isList: true,
      },
      {
        title: "VIII. Odpowiedzialność i ograniczenia",
        content:
          "Usługodawca nie ponosi odpowiedzialności za szkody wynikające z nieprawidłowego korzystania z usługi, awarii stron trzecich (platformy e-commerce, przewoźnicy) ani za utracone zyski. Usługodawca zobowiązuje się do dostępności usługi na poziomie min. 99,5% czasu w miesiącu.",
      },
      {
        title: "IX. Ochrona danych osobowych",
        content:
          "Przetwarzanie danych osobowych odbywa się zgodnie z rozporządzeniem RODO (UE 2016/679). Szczegóły dotyczące przetwarzania, celów i praw osób, których dane dotyczą, są dostępne na życzenie.",
      },
      {
        title: "X. Postanowienia końcowe",
        content:
          "Niniejszy regulamin podlega prawu Republiki Czeskiej.\nUsługodawca zastrzega sobie prawo do jednostronnej zmiany regulaminu. O zmianach klient zostanie poinformowany e-mailem z co najmniej 30-dniowym wyprzedzeniem.\nEwentualne spory będą rozstrzygane przez właściwy sąd w Republice Czeskiej.",
        isList: true,
      },
    ],
  },

  produktDetail: {
    breadcrumbProducts: "Produkty",
    buyFor: "Kup za",
    trialBadge: "14 dni za darmo · Bez karty",
    featuresTitle: (name: string) => `Co potrafi ${name}`,
    allFeaturesTitle: "Pełna lista funkcji",
    integrationsTitle: "Obsługiwane integracje",
    ctaTitle: (name: string) => `Wypróbuj ${name} za darmo`,
    ctaSubtitle:
      "14 dni bez ograniczeń, bez podawania karty. Po zakończeniu nic nie jest automatycznie naliczane.",
    ctaButton: "Rozpocznij okres próbny",
  },

  productCard: {
    detail: "Szczegóły →",
    badgeBestseller: "Bestseller",
    badgeNew: "Nowość",
  },

  productData: {
    quickcsv: {
      tagline: "Eksport/import produktów do CSV dla Shoptet",
      description:
        "Potrzebujesz szybko przenieść produkty ze sklepu do arkusza i z powrotem? QuickCSV obsługuje masowy eksport i import produktów, wariantów, cen i stanów magazynowych przez proste pliki CSV. Idealny do sezonowych aktualizacji cenników lub migracji danych.",
      features: [
        "Eksport produktów do CSV jednym kliknięciem",
        "Import i masowa aktualizacja danych",
        "Obsługa wariantów i stanów magazynowych",
        "Mapowanie kolumn według potrzeb",
        "Kompatybilny z Shoptet, WooCommerce",
        "Automatyczne wykrywanie kodowania",
      ],
      detailFeatures: [
        {
          title: "Szybki eksport",
          description:
            "Eksportuj tysiące produktów do CSV w kilka sekund. Wybierz kolumny, których potrzebujesz — ceny, opisy, stany magazynowe, warianty.",
        },
        {
          title: "Inteligentny import",
          description:
            "Wgraj CSV, a system automatycznie rozpozna kolumny. Podgląd zmian przed zastosowaniem — bez niespodzianek.",
        },
        {
          title: "Mapowanie kolumn",
          description:
            "Własne nazwy kolumn? Żaden problem. Przypisz je do pól w sklepie i zapisz szablon na przyszłość.",
        },
        {
          title: "Bezpieczna aktualizacja",
          description:
            "Przed każdą zmianą tworzona jest kopia zapasowa. Coś poszło nie tak? Przywrócisz jednym kliknięciem.",
        },
      ],
      stats: [
        { label: "Wyeksportowanych produktów" },
        { label: "Aktywnych użytkowników" },
        { label: "Średni czas eksportu" },
      ],
    },
    stockalert: {
      tagline: "Powiadomienia o niskim stanie magazynowym",
      badge: "Nowość",
      description:
        "Już nigdy nie sprzedawaj produktu, którego nie masz na stanie. StockAlert monitoruje zapasy w czasie rzeczywistym i powiadamia Cię e-mailem, SMS-em lub przez Slack, gdy stan spadnie poniżej ustawionego progu. Zapobiegaj stratom z powodu braku dostępności.",
      features: [
        "Powiadomienia o niskim stanie magazynowym",
        "Alerty e-mail, SMS i Slack",
        "Konfigurowalne limity dla każdego produktu",
        "Przejrzysty dashboard magazynu",
        "Raporty dzienne/tygodniowe",
        "Obsługa wielu lokalizacji magazynowych",
      ],
      detailFeatures: [
        {
          title: "Inteligentne limity",
          description:
            "Ustaw minimalny stan magazynowy dla każdego produktu osobno. Bestsellery wymagają wyższego bufora niż towary sezonowe.",
        },
        {
          title: "Alerty wielokanałowe",
          description:
            "Powiadomienia tam, gdzie ich potrzebujesz — e-mail dla księgowej, Slack dla magazynu, SMS dla szefa. Każdy dostaje to, czego potrzebuje.",
        },
        {
          title: "Predykcja",
          description:
            "Na podstawie historii sprzedaży szacujemy, kiedy skończy się zapas. Zamów na czas, nie kiedy jest już za późno.",
        },
        {
          title: "Raport magazynowy",
          description:
            "Tygodniowy przegląd: co się kończy, co się nie sprzedaje, co zalega na stanie. Podejmuj lepsze decyzje zakupowe.",
        },
      ],
      stats: [
        { label: "Monitorowanych produktów" },
        { label: "Wysłanych alertów/mies." },
        { label: "Redukcja braków magazynowych" },
      ],
    },
    "seo-meta": {
      tagline: "Masowa edycja meta tagów dla e-sklepu",
      description:
        "Edytuj meta tytuły, opisy i tagi Open Graph dla setek produktów jednocześnie. SEO Meta generuje zoptymalizowane teksty na podstawie szablonów i danych produktu. Popraw pozycje w wyszukiwarkach bez godzin ręcznej pracy.",
      features: [
        "Masowa edycja meta tagów",
        "Szablony do automatycznego generowania",
        "Open Graph i Twitter Cards",
        "Kontrola duplikatów i błędów",
        "Wynik SEO dla każdego produktu",
        "Eksport/import meta danych",
      ],
      detailFeatures: [
        {
          title: "Szablony",
          description:
            "Ustaw szablon: '{nazwa} | Kup za {cena} | {sklep}' — i wygeneruj meta tytuły dla całego katalogu jednocześnie.",
        },
        {
          title: "Audyt SEO",
          description:
            "Automatyczna kontrola: za długi tytuł, brakujący opis, zduplikowane meta — wszystko w jednym miejscu.",
        },
        {
          title: "Podgląd w wyszukiwarce",
          description:
            "Zobacz, jak Twój produkt będzie wyglądał w wynikach Google jeszcze przed publikacją.",
        },
        {
          title: "Operacje masowe",
          description:
            "Zaznacz 500 produktów, zastosuj szablon, gotowe. To, co zajęłoby dni, zrobisz w minuty.",
        },
      ],
      stats: [
        { label: "Zoptymalizowanych stron" },
        { label: "Średnia poprawa CTR" },
        { label: "Aktywnych e-sklepów" },
      ],
    },
    "shopsync-lite": {
      tagline: "Synchronizacja produktów między 2 sklepami",
      badge: "Bestseller",
      description:
        "Sprzedajesz na dwóch platformach? ShopSync Lite automatycznie synchronizuje produkty, ceny i stany magazynowe między dwoma e-sklepami. Prosta konfiguracja, niezawodne działanie. Dla większych wolumenów przejdź na ShopSync Pro.",
      features: [
        "Synchronizacja między 2 e-sklepami",
        "Automatyczna aktualizacja cen i stanów",
        "Obsługa Shoptet, WooCommerce, Shopify",
        "Synchronizacja jedno- i dwukierunkowa",
        "Zaplanowane synchronizacje",
        "Powiadomienia e-mail o błędach",
      ],
      detailFeatures: [
        {
          title: "Łatwe połączenie",
          description:
            "Wprowadź klucze API obu sklepów i w 10 minut masz synchronizację. Bez skomplikowanych konfiguracji.",
        },
        {
          title: "Elastyczny kierunek",
          description:
            "Wybierz: główny sklep → satelita (jednokierunkowo), lub synchronizacja dwukierunkowa, gdzie zmiana w jednym miejscu pojawia się wszędzie.",
        },
        {
          title: "Planowanie",
          description:
            "Synchronizacja co 15 minut, co godzinę lub raz dziennie — zależy od Twoich potrzeb i limitów API.",
        },
        {
          title: "Monitoring błędów",
          description:
            "Jeśli synchronizacja się nie powiedzie (timeout API, nieprawidłowe dane), dostaniesz powiadomienie i szczegółowy log do analizy.",
        },
      ],
      stats: [
        { label: "Zsynchronizowanych produktów" },
        { label: "Podłączonych e-sklepów" },
        { label: "Uptime" },
      ],
    },
    reviewboost: {
      tagline: "Zarządzanie i wyświetlanie recenzji",
      badge: "Bestseller",
      description:
        "Automatycznie zbieraj recenzje od klientów, wyświetlaj je na stronie i wykorzystaj siłę społecznego dowodu słuszności. ReviewBoost wysyła follow-upy, moderuje treści i generuje widgety dla Twojego e-sklepu.",
      features: [
        "Automatyczne zbieranie recenzji",
        "Widgety dla e-sklepu",
        "Moderacja i zatwierdzanie",
        "Zdjęcia i filmy od klientów",
        "Follow-up e-maile",
        "SEO rich snippets",
      ],
      detailFeatures: [
        {
          title: "Zbieranie recenzji",
          description:
            "Automatyczny e-mail 7 dni po dostawie. Klient ocenia jednym kliknięciem — bez rejestracji, bez czekania.",
        },
        {
          title: "Galeria UGC",
          description:
            "Klienci wgrywają zdjęcia swoich zakupów. Autentyczna treść, która sprzedaje lepiej niż stockowe fotografie.",
        },
        {
          title: "Inteligentne widgety",
          description:
            "Umieść recenzje gdziekolwiek na stronie. Karuzela, siatka, inline — wszystko responsywne, wszystko w Twoim stylu.",
        },
        {
          title: "Boost SEO",
          description:
            "Automatyczne rich snippets dla Google. Gwiazdki w wynikach wyszukiwania = wyższa klikalność.",
        },
      ],
      stats: [
        { label: "Zebranych recenzji" },
        { label: "Średnia ocena" },
        { label: "Wzrost konwersji" },
      ],
    },
    orderflow: {
      tagline: "Automatyzacja zamówień i fulfillmentu",
      description:
        "OrderFlow przejmuje zamówienia z Twoich kanałów i automatycznie je przetwarza — od potwierdzenia dla klienta, przez przekazanie do magazynu, po generowanie etykiet przewoźników. Oszczędzasz godziny dziennie.",
      features: [
        "Automatyczne przetwarzanie zamówień",
        "Generowanie etykiet wysyłkowych",
        "Integracja z Zásilkovna, PPL, DPD",
        "Reguły workflow fulfillmentu",
        "Operacje masowe",
        "Powiadomienia e-mail dla klientów",
      ],
      detailFeatures: [
        {
          title: "Kreator workflow",
          description:
            "Wizualny edytor reguł: jeśli zamówienie > 2000 Kč → priorytetowe pakowanie. Magazyn w Brnie? → DPD. Ustawiasz własną logikę.",
        },
        {
          title: "Przewoźnicy",
          description:
            "Natywna integracja z przewoźnikami. Zásilkovna, PPL, DPD, Česká pošta — etykiety generujemy automatycznie.",
        },
        {
          title: "Operacje masowe",
          description:
            "Przetwarzaj setki zamówień jednocześnie. Masowy druk etykiet, masowe potwierdzenia, masowe anulowanie.",
        },
        {
          title: "Powiadomienia dla klientów",
          description:
            "Automatyczne e-maile na każdym etapie: potwierdzenie, wysyłka, dostarczenie. Szablony w pełni edytowalne.",
        },
      ],
      stats: [
        { label: "Przetworzonych zamówień" },
        { label: "Zaoszczędzonych godz./mies." },
        { label: "Aktywnych e-sklepów" },
      ],
    },
    "shopsync-pro": {
      tagline: "Nieograniczona synchronizacja produktów + API",
      description:
        "Połącz WooCommerce, Shoptet i Shopify w jeden centralny system. ShopSync Pro automatycznie synchronizuje katalogi, stany magazynowe, ceny i opisy produktów w czasie rzeczywistym. Do 5 e-sklepów, pełne API, webhooki i priorytetowe wsparcie.",
      features: [
        "Dwukierunkowa synchronizacja produktów",
        "Obsługa WooCommerce, Shoptet, Shopify",
        "Automatyczna aktualizacja magazynu",
        "Mapowanie kategorii i wariantów",
        "Pełne REST API do integracji",
        "Powiadomienia webhook o zmianach",
      ],
      detailFeatures: [
        {
          title: "Synchronizacja multi-platform",
          description:
            "Połącz do 5 e-sklepów jednocześnie. Zmiana w jednym miejscu automatycznie pojawia się wszędzie — ceny, opisy, zdjęcia i stany magazynowe.",
        },
        {
          title: "Mapowanie wariantów",
          description:
            "Inteligentne parowanie rozmiarów, kolorów i innych wariantów między platformami. Bez duplikatów, bez błędów.",
        },
        {
          title: "REST API",
          description:
            "Pełnowartościowe API do własnych integracji. Podłącz ERP, PIM lub cokolwiek innego. Dokumentacja i SDK w pakiecie.",
        },
        {
          title: "Szczegółowe logi",
          description:
            "Pełna historia synchronizacji z filtrami. Śledź co i kiedy się zmieniło, cofnij zmiany jednym kliknięciem.",
        },
      ],
      stats: [
        { label: "Zsynchronizowanych produktów" },
        { label: "Podłączonych e-sklepów" },
        { label: "Uptime" },
      ],
    },
    priceguard: {
      tagline: "Monitoring cen konkurencji + automatyczne korekty",
      description:
        "Śledź ceny konkurencji w czasie rzeczywistym i automatycznie dostosowuj własny cennik. PriceGuard crawluje setki e-sklepów, porównuje ceny i na podstawie Twoich reguł modyfikuje Twoje ceny, abyś pozostał konkurencyjny.",
      features: [
        "Crawling cen konkurencji",
        "Automatyczne korekty cennika",
        "Reguły cenowe i strategie",
        "Raporty dzienne/godzinowe",
        "Monitoring do 10 000 produktów",
        "Alerty przy znaczących zmianach",
      ],
      detailFeatures: [
        {
          title: "Radar cenowy",
          description:
            "Crawlujemy e-sklepy konkurencji co godzinę. Wiesz dokładnie, kto obniżył cenę i o ile — zanim dowiedzą się Twoi klienci.",
        },
        {
          title: "Strategie",
          description:
            "Ustaw: zawsze o 2% taniej niż najtańszy, nie schodzić poniżej marży 15%, weekendowe rabaty. Reguły łączą się ze sobą.",
        },
        {
          title: "Raportowanie",
          description:
            "Dzienny przegląd ruchów cenowych na rynku. Kto podrożył, kto obniżył, gdzie jesteś Ty. Eksport do PDF i CSV.",
        },
        {
          title: "Inteligentne alerty",
          description:
            "Natychmiastowe powiadomienie o znaczącej zmianie ceny konkurenta. E-mail, Slack, webhook — jak wolisz.",
        },
      ],
      stats: [
        { label: "Monitorowanych produktów" },
        { label: "Zmian cenowych/dzień" },
        { label: "Średni wzrost marży" },
      ],
    },
  },
};
