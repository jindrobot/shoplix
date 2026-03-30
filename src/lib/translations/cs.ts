import type { Translations } from "./types";

export const cs: Translations = {
  locale: "cs",

  header: {
    products: "Produkty",
    contact: "Kontakt",
    terms: "Podmínky",
  },

  footer: {
    tagline:
      "Prémiové nástroje pro české e-shopy. Automatizujte, synchronizujte a rostěte — bez kompromisů.",
    productsHeading: "Produkty",
    infoHeading: "Informace",
    contact: "Kontakt",
    terms: "Obchodní podmínky",
    copyright: "Modkit. Všechna práva vyhrazena.",
    operator: "Provozovatel: Šárka Váňová · IČO: 10817395",
  },

  hero: {
    badge: "Nové: PriceGuard 2.0 s AI predikcí cen",
    title1: "E-shop nástroje,",
    title2: "které skutečně fungují",
    subtitle:
      "Od CSV exportu po monitoring konkurence. Osm nástrojů navržených pro český e-commerce — od 49 Kč.",
    ctaProducts: "Prozkoumat produkty",
    ctaContact: "Kontaktovat nás",
    stats: [
      { value: "850+", label: "E-shopů" },
      { value: "4.2M", label: "Produktů" },
      { value: "99.97%", label: "Uptime" },
    ],
  },

  productsSection: {
    title: "Osm nástrojů pro váš e-shop",
    subtitle:
      "Od jednoduchého CSV exportu až po pokročilý monitoring cen. Jednorázová licence — žádné měsíční poplatky.",
  },

  testimonials: {
    title: "Co říkají naši zákazníci",
    subtitle: "Reálné výsledky od reálných e-shopařů.",
    items: [
      {
        name: "Martin Dvořák",
        role: "Majitel, ElektroShop.cz",
        text: "ShopSync Pro nám ušetří minimálně 15 hodin týdně. Dřív jsme ručně přepisovali produkty mezi Shoptetem a WooCommerce — teď se to děje automaticky.",
        product: "ShopSync Pro",
      },
      {
        name: "Tereza Nováková",
        role: "E-commerce manažerka, ModaCZ",
        text: "ReviewBoost nám zvýšil konverzní poměr o 18 %. Automatické follow-up e-maily fungují skvěle — zákazníci recenzují, aniž bychom je museli prosit.",
        product: "ReviewBoost",
      },
      {
        name: "Jakub Procházka",
        role: "COO, FitnessPro",
        text: "PriceGuard je game changer. Vidíme cenové pohyby konkurence v reálném čase a reagujeme dřív než oni. Marže nám vzrostla o 11 %.",
        product: "PriceGuard",
      },
    ],
  },

  faq: {
    title: "Časté dotazy",
    subtitle: "Odpovědi na to, co nás zákazníci ptají nejčastěji.",
    items: [
      {
        q: "Pro jaké platformy Modkit funguje?",
        a: "Naše nástroje podporují WooCommerce, Shoptet, Shopify, PrestaShop a Magento. Na dalších integracích průběžně pracujeme.",
      },
      {
        q: "Jak dlouho trvá nastavení?",
        a: "Většinu pluginů zprovozníte do 30 minut. Stačí propojit API klíče a nakonfigurovat základní pravidla. Pokud potřebujete pomoc, náš tým vás provede celým procesem.",
      },
      {
        q: "Můžu si nástroje vyzkoušet před nákupem?",
        a: "Ano, ke každému produktu nabízíme 14denní trial zdarma bez zadání karty. Po skončení se nic automaticky neúčtuje.",
      },
      {
        q: "Jak funguje fakturace?",
        a: "Platíte jednorázově za licenci. Přijímáme platby kartou i bankovním převodem. Faktury vystavujeme automaticky.",
      },
      {
        q: "Nabízíte slevu pro více produktů najednou?",
        a: "Při kombinaci 2 a více produktů poskytujeme slevu 15 % z celkové ceny. Kontaktujte nás pro individuální nabídku.",
      },
      {
        q: "Poskytujete technickou podporu?",
        a: "Samozřejmě. E-mailová podpora je dostupná ve všední dny 9–18 h. U dražších plánů nabízíme prioritní support s dobou odezvy do 2 hodin.",
      },
    ],
  },

  cta: {
    title: "Připraveni růst?",
    subtitle:
      "Vyzkoušejte jakýkoli nástroj 14 dní zdarma. Bez karty, bez závazků.",
    button: "Vybrat nástroj",
  },

  kontakt: {
    breadcrumb: "Kontakt",
    title: "Ozvěte se nám",
    subtitle:
      "Máte otázku k produktům, potřebujete pomoc s integrací, nebo chcete individuální nabídku? Napište nám.",
    nameLabel: "Jméno",
    namePlaceholder: "Jan Novák",
    emailLabel: "E-mail",
    emailPlaceholder: "jan@eshop.cz",
    subjectLabel: "Předmět",
    subjectPlaceholder: "Dotaz k produktu ShopSync Pro",
    messageLabel: "Zpráva",
    messagePlaceholder: "Napište nám, s čím vám můžeme pomoci...",
    submit: "Odeslat zprávu",
    emailHeading: "E-mail",
    emailNote: "Odpovídáme ve všední dny, 9–18 h",
    addressHeading: "Fakturační adresa",
    addressLines: [
      "Šárka Váňová",
      "IČO: 10817395",
      "Nová 1415/54, Střekov",
      "400 03 Ústí nad Labem",
    ],
    responseHeading: "Doba odezvy",
    responseItems: [
      { label: "Běžné dotazy", value: "do 24 h" },
      { label: "Technická podpora", value: "do 4 h" },
      { label: "Kritické problémy", value: "do 1 h" },
    ],
  },

  pokladna: {
    breadcrumb: "Pokladna",
    title: "Pokladna",
    subtitle: "Vyberte produkt a vyplňte fakturační údaje.",
    selectProduct: "Vyberte produkt",
    billingDetails: "Fakturační údaje",
    companyLabel: "Firma / Jméno",
    companyPlaceholder: "Váš e-shop s.r.o.",
    icoLabel: "IČO",
    icoPlaceholder: "12345678",
    dicLabel: "DIČ",
    dicPlaceholder: "CZ12345678",
    emailLabel: "E-mail",
    emailPlaceholder: "jan@eshop.cz",
    addressLabel: "Adresa",
    addressPlaceholder: "Ulice 123, 110 00 Praha",
    submitButton: "Pokračovat k platbě",
    submitNote:
      "Platební brána bude připojena brzy. Zatím nás",
    submitNoteLink: "kontaktujte",
    summaryTitle: "Souhrn objednávky",
    licenseType: "Typ licence",
    licenseValue: "Jednorázová",
    total: "Celkem",
    totalValue: "od 49 Kč",
    totalNote: "Cena bez DPH. 14denní trial zdarma.",
  },

  terms: {
    breadcrumb: "Obchodní podmínky",
    title: "Obchodní podmínky",
    effectiveDate: "Platné od 1. 1. 2025",
    sections: [
      {
        title: "I. Provozovatel",
        content:
          '<p><strong>Šárka Váňová</strong></p><p>IČO: 10817395</p><p>Nová 1415/54, Střekov</p><p>400 03 Ústí nad Labem</p><p>Česká republika</p>',
        isCard: true,
      },
      {
        title: "II. Úvodní ustanovení",
        content:
          'Tyto obchodní podmínky (dále jen „podmínky") upravují vztahy mezi provozovatelem služby Modkit (dále jen „poskytovatel") a uživateli služeb (dále jen „zákazník"). Podmínky se vztahují na všechny služby a produkty nabízené prostřednictvím webu modkit.co.',
      },
      {
        title: "III. Předmět smlouvy",
        content:
          "Předmětem smlouvy je poskytování softwarových nástrojů pro e-commerce (QuickCSV, StockAlert, SEO Meta, ShopSync Lite, ReviewBoost, OrderFlow, ShopSync Pro, PriceGuard) formou jednorázové licence. Poskytovatel se zavazuje zpřístupnit zákazníkovi vybraný produkt po zaplacení licence.",
      },
      {
        title: "IV. Objednávka a uzavření smlouvy",
        content:
          "Objednávka se považuje za závaznou okamžikem jejího odeslání prostřednictvím webového formuláře.\nSmlouva je uzavřena okamžikem potvrzení objednávky ze strany poskytovatele.\nKaždý nový zákazník má nárok na 14denní zkušební období zdarma, pokud není uvedeno jinak.",
        isList: true,
      },
      {
        title: "V. Ceny a platební podmínky",
        content:
          "Ceny jsou uvedeny bez DPH.\nPlatba se provádí jednorázově při nákupu licence.\nAkceptujeme platby kartou a bankovním převodem.\nV případě prodlení s platbou delším než 14 dní je poskytovatel oprávněn omezit přístup k službě.",
        isList: true,
      },
      {
        title: "VI. Zkušební období a zrušení",
        content:
          "Zkušební období trvá 14 dní od aktivace a nevyžaduje zadání platební karty.\nPo uplynutí zkušebního období se služba automaticky neúčtuje — zákazník musí aktivně přejít na placený plán.\nPředplatné lze zrušit kdykoli s účinností ke konci aktuálního fakturačního období.",
        isList: true,
      },
      {
        title: "VII. Reklamace a odstoupení od smlouvy",
        content:
          "Zákazník má právo odstoupit od smlouvy do 14 dnů od uzavření bez udání důvodu.\nReklamace vyřizujeme e-mailem na adrese info@modkit.co v zákonné lhůtě 30 dnů.",
        isList: true,
      },
      {
        title: "VIII. Odpovědnost a omezení",
        content:
          "Poskytovatel neodpovídá za škody vzniklé nesprávným použitím služby, výpadky třetích stran (e-shopové platformy, přepravci) nebo za ušlý zisk. Poskytovatel se zavazuje k dostupnosti služby min. 99,5 % času v měsíci.",
      },
      {
        title: "IX. Ochrana osobních údajů",
        content:
          "Zpracování osobních údajů se řídí nařízením GDPR (EU 2016/679). Podrobnosti o zpracování, účelech a právech subjektů údajů jsou dostupné na vyžádání.",
      },
      {
        title: "X. Závěrečná ustanovení",
        content:
          "Tyto podmínky se řídí právním řádem České republiky.\nPoskytovatel si vyhrazuje právo podmínky jednostranně změnit. O změnách bude zákazník informován e-mailem nejméně 30 dní předem.\nPřípadné spory budou řešeny příslušným soudem v České republice.",
        isList: true,
      },
    ],
  },

  produktDetail: {
    breadcrumbProducts: "Produkty",
    buyFor: "Koupit za",
    trialBadge: "14 dní zdarma · Bez karty",
    featuresTitle: (name: string) => `Co umí ${name}`,
    allFeaturesTitle: "Kompletní výčet funkcí",
    integrationsTitle: "Podporované integrace",
    ctaTitle: (name: string) => `Vyzkoušejte ${name} zdarma`,
    ctaSubtitle:
      "14 dní bez omezení, bez zadání karty. Po skončení se nic automaticky neúčtuje.",
    ctaButton: "Začít trial zdarma",
  },

  productCard: {
    detail: "Detail →",
    badgeBestseller: "Bestseller",
    badgeNew: "Novinka",
  },

  productData: {
    quickcsv: {
      tagline: "Export/import produktů do CSV pro Shoptet",
      description:
        "Potřebujete rychle dostat produkty z e-shopu do tabulky a zpět? QuickCSV zvládne hromadný export i import produktů, variant, cen a skladů přes jednoduché CSV soubory. Ideální pro sezónní aktualizace ceníků nebo migraci dat.",
      features: [
        "Export produktů do CSV jedním klikem",
        "Import a hromadná aktualizace dat",
        "Podpora variant a skladových zásob",
        "Mapování sloupců podle potřeby",
        "Kompatibilní se Shoptet, WooCommerce",
        "Automatická detekce kódování",
      ],
      detailFeatures: [
        {
          title: "Rychlý export",
          description:
            "Exportujte tisíce produktů do CSV za pár sekund. Vyberte si sloupce, které potřebujete — ceny, popisy, skladové zásoby, varianty.",
        },
        {
          title: "Chytrý import",
          description:
            "Nahrajte CSV a systém automaticky rozpozná sloupce. Náhled změn před aplikací — žádné překvapení.",
        },
        {
          title: "Mapování sloupců",
          description:
            "Vlastní pojmenování sloupců? Žádný problém. Namapujte si je na pole v e-shopu a uložte šablonu pro příště.",
        },
        {
          title: "Bezpečná aktualizace",
          description:
            "Před každou změnou se vytvoří záloha. Něco se nepovede? Vrátíte se jedním klikem.",
        },
      ],
      stats: [
        { label: "Exportovaných produktů" },
        { label: "Aktivních uživatelů" },
        { label: "Průměrný čas exportu" },
      ],
    },
    stockalert: {
      tagline: "Notifikace při nízkém skladu",
      badge: "Novinka",
      description:
        "Už nikdy neprodávejte produkt, který nemáte skladem. StockAlert sleduje zásoby v reálném čase a upozorní vás e-mailem, SMS nebo přes Slack, když stav klesne pod nastavenou hranici. Předcházejte ztrátám z nedostupnosti.",
      features: [
        "Notifikace při nízkém skladu",
        "E-mail, SMS a Slack alerty",
        "Nastavitelné limity pro každý produkt",
        "Přehledný dashboard skladů",
        "Denní/týdenní reporty",
        "Podpora více skladových lokací",
      ],
      detailFeatures: [
        {
          title: "Chytré limity",
          description:
            "Nastavte si minimální skladovou zásobu pro každý produkt zvlášť. Bestsellery potřebují vyšší buffer než sezónní zboží.",
        },
        {
          title: "Multi-kanálové alerty",
          description:
            "Notifikace tam, kde je potřebujete — e-mail pro účetní, Slack pro sklad, SMS pro šéfa. Každý dostane, co potřebuje.",
        },
        {
          title: "Predikce",
          description:
            "Na základě historie prodejů odhadujeme, kdy dojde zásoba. Objednejte včas, ne až když je pozdě.",
        },
        {
          title: "Report skladu",
          description:
            "Týdenní přehled: co dochází, co se neprodává, co leží mrtvým skladem. Dělejte lepší nákupní rozhodnutí.",
        },
      ],
      stats: [
        { label: "Sledovaných produktů" },
        { label: "Odeslaných alertů/měsíc" },
        { label: "Snížení výpadků skladu" },
      ],
    },
    "seo-meta": {
      tagline: "Hromadná editace meta tagů pro e-shop",
      description:
        "Editujte meta titulky, popisy a Open Graph tagy pro stovky produktů najednou. SEO Meta generuje optimalizované texty na základě šablon a dat produktu. Zlepšete pozice ve vyhledávačích bez hodin ruční práce.",
      features: [
        "Hromadná editace meta tagů",
        "Šablony pro auto-generování",
        "Open Graph a Twitter Cards",
        "Kontrola duplicit a chyb",
        "SEO skóre pro každý produkt",
        "Export/import meta dat",
      ],
      detailFeatures: [
        {
          title: "Šablony",
          description:
            "Nastavte šablonu: '{název} | Koupit za {cena} | {e-shop}' — a vygenerujte meta titulky pro celý katalog najednou.",
        },
        {
          title: "SEO audit",
          description:
            "Automatická kontrola: příliš dlouhý titulek, chybějící popis, duplicitní meta — vše na jednom místě.",
        },
        {
          title: "Náhled ve vyhledávači",
          description:
            "Podívejte se, jak bude váš produkt vypadat ve výsledcích Googlu ještě před publikací.",
        },
        {
          title: "Hromadné operace",
          description:
            "Vyberte 500 produktů, aplikujte šablonu, hotovo. Co by zabralo dny, zvládnete za minuty.",
        },
      ],
      stats: [
        { label: "Optimalizovaných stránek" },
        { label: "Průměrné zlepšení CTR" },
        { label: "Aktivních e-shopů" },
      ],
    },
    "shopsync-lite": {
      tagline: "Synchronizace produktů mezi 2 e-shopy",
      badge: "Bestseller",
      description:
        "Prodáváte na dvou platformách? ShopSync Lite automaticky synchronizuje produkty, ceny a skladové zásoby mezi dvěma e-shopy. Jednoduché nastavení, spolehlivý provoz. Pro větší objemy přejděte na ShopSync Pro.",
      features: [
        "Synchronizace mezi 2 e-shopy",
        "Automatická aktualizace cen a skladu",
        "Podpora Shoptet, WooCommerce, Shopify",
        "Jednosměrná i obousměrná sync",
        "Plánované synchronizace",
        "E-mailové notifikace při chybách",
      ],
      detailFeatures: [
        {
          title: "Snadné propojení",
          description:
            "Zadejte API klíče obou e-shopů a za 10 minut máte synchronizaci. Žádné složité konfigurace.",
        },
        {
          title: "Flexibilní směr",
          description:
            "Zvolte: hlavní e-shop → satelit (jednosměrně), nebo obousměrná sync kde změna kdekoli se promítne všude.",
        },
        {
          title: "Plánování",
          description:
            "Sync každých 15 minut, každou hodinu, nebo jen jednou denně — záleží na vašich potřebách a API limitech.",
        },
        {
          title: "Chybový monitoring",
          description:
            "Pokud sync selže (API timeout, neplatné data), dostanete upozornění a detailní log pro řešení.",
        },
      ],
      stats: [
        { label: "Synchronizovaných produktů" },
        { label: "Připojených e-shopů" },
        { label: "Uptime" },
      ],
    },
    reviewboost: {
      tagline: "Správa a zobrazení recenzí",
      badge: "Bestseller",
      description:
        "Automaticky sbírejte recenze od zákazníků, zobrazujte je na webu a využijte sílu sociálního důkazu. ReviewBoost posílá follow-up e-maily, moderuje obsah a generuje widgety pro váš e-shop.",
      features: [
        "Automatický sběr recenzí",
        "Widgety pro e-shop",
        "Moderace a schvalování",
        "Fotky a videa od zákazníků",
        "Follow-up e-maily",
        "SEO rich snippets",
      ],
      detailFeatures: [
        {
          title: "Sběr recenzí",
          description:
            "Automatický e-mail 7 dní po doručení. Zákazník hodnotí jedním klikem — žádná registrace, žádné zdržování.",
        },
        {
          title: "UGC galerie",
          description:
            "Zákazníci nahrávají fotky svých nákupů. Autentický obsah, který prodává lépe než stockové fotky.",
        },
        {
          title: "Smart widgety",
          description:
            "Vložte recenze kamkoli na web. Karusel, grid, inline — vše responzivní, vše ve vašem brandu.",
        },
        {
          title: "SEO boost",
          description:
            "Automatické rich snippets pro Google. Hvězdičky ve výsledcích vyhledávání = vyšší proklikovost.",
        },
      ],
      stats: [
        { label: "Sesbíraných recenzí" },
        { label: "Průměrné hodnocení" },
        { label: "Nárůst konverzí" },
      ],
    },
    orderflow: {
      tagline: "Automatizace objednávek a fulfillmentu",
      description:
        "OrderFlow přebírá objednávky z vašich kanálů a automaticky je zpracovává — od potvrzení zákazníkovi, přes předání do skladu, až po generování štítků přepravců. Ušetříte hodiny denně.",
      features: [
        "Automatické zpracování objednávek",
        "Generování přepravních štítků",
        "Napojení na Zásilkovnu, PPL, DPD",
        "Pravidla pro fulfillment workflow",
        "Hromadné operace",
        "E-mailové notifikace zákazníkům",
      ],
      detailFeatures: [
        {
          title: "Workflow builder",
          description:
            "Vizuální editor pravidel: pokud objednávka > 2000 Kč → prioritní balení. Sklad v Brně? → DPD. Nastavíte si vlastní logiku.",
        },
        {
          title: "Přepravci",
          description:
            "Nativní integrace s českými přepravci. Zásilkovna, PPL, DPD, Česká pošta — štítky generujeme automaticky.",
        },
        {
          title: "Hromadné operace",
          description:
            "Zpracujte stovky objednávek najednou. Hromadný tisk štítků, hromadné potvrzení, hromadné storno.",
        },
        {
          title: "Zákaznické notifikace",
          description:
            "Automatické e-maily v každé fázi: potvrzení, odeslání, doručení. Šablony v češtině, plně upravitelné.",
        },
      ],
      stats: [
        { label: "Zpracovaných objednávek" },
        { label: "Ušetřených hodin/měsíc" },
        { label: "Aktivních e-shopů" },
      ],
    },
    "shopsync-pro": {
      tagline: "Neomezená synchronizace produktů + API",
      description:
        "Propojte WooCommerce, Shoptet i Shopify do jednoho centrálního systému. ShopSync Pro automaticky synchronizuje katalogy, stavy skladu, ceny a popisy produktů v reálném čase. Až 5 e-shopů, plné API, webhooky a prioritní podpora.",
      features: [
        "Obousměrná synchronizace produktů",
        "Podpora WooCommerce, Shoptet, Shopify",
        "Automatická aktualizace skladu",
        "Mapování kategorií a variant",
        "Plné REST API pro integraci",
        "Webhook notifikace při změnách",
      ],
      detailFeatures: [
        {
          title: "Multi-platform sync",
          description:
            "Propojte až 5 e-shopů najednou. Změna na jednom místě se automaticky promítne všude — ceny, popisy, fotky i skladové zásoby.",
        },
        {
          title: "Mapování variant",
          description:
            "Inteligentní párování velikostí, barev a dalších variant mezi platformami. Žádné duplicity, žádné chyby.",
        },
        {
          title: "REST API",
          description:
            "Plnohodnotné API pro vlastní integrace. Napojte ERP, PIM nebo cokoli dalšího. Dokumentace a SDK v balení.",
        },
        {
          title: "Detailní logy",
          description:
            "Kompletní historie synchronizací s filtry. Sledujte co se kdy změnilo, vraťte změny jedním klikem.",
        },
      ],
      stats: [
        { label: "Synchronizovaných produktů" },
        { label: "Připojených e-shopů" },
        { label: "Uptime" },
      ],
    },
    priceguard: {
      tagline: "Monitoring cen konkurence + auto úpravy",
      description:
        "Sledujte ceny konkurence v reálném čase a automaticky upravujte vlastní ceník. PriceGuard crawluje stovky e-shopů, porovnává ceny a na základě vašich pravidel upravuje vaše ceny tak, abyste zůstali konkurenceschopní.",
      features: [
        "Crawling cen konkurence",
        "Automatické úpravy ceníku",
        "Cenová pravidla a strategie",
        "Denní/hodinové reporty",
        "Sledování až 10 000 produktů",
        "Alerting při výrazných změnách",
      ],
      detailFeatures: [
        {
          title: "Cenový radar",
          description:
            "Crawlujeme e-shopy konkurence každou hodinu. Víte přesně, kdo snížil cenu a o kolik — dříve než vaši zákazníci.",
        },
        {
          title: "Strategie",
          description:
            "Nastavte si: vždy o 2 % levněji než nejlevnější, nepodlézat marži 15 %, víkendové slevy. Pravidla se kombinují.",
        },
        {
          title: "Reporting",
          description:
            "Denní přehled cenových pohybů na trhu. Kdo zdražil, kdo zlevnil, kde jste vy. Export do PDF a CSV.",
        },
        {
          title: "Smart alerty",
          description:
            "Okamžité upozornění při výrazné cenové změně konkurenta. E-mail, Slack, webhook — jak chcete.",
        },
      ],
      stats: [
        { label: "Sledovaných produktů" },
        { label: "Cenových změn/den" },
        { label: "Průměrný nárůst marže" },
      ],
    },
  },
};
