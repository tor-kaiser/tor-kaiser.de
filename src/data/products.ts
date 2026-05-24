// Produkt-Stammdaten für Hörmann-Sortiment.

export interface ProductGalleryImage {
  src: string;
  alt: string;
}

export interface Product {
  slug: string;
  href: string;
  category: 'garagentore' | 'industrietore' | 'tueren' | 'antriebe' | 'service';
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image?: string;
  imageAlt?: string;
  gallery?: ProductGalleryImage[];
  highlights: string[];
}

export const products: Product[] = [
  {
    slug: 'sectionaltore',
    href: '/produkte/garagentore/sectionaltore/',
    category: 'garagentore',
    title: 'Hörmann Garagen-Sectionaltore',
    shortTitle: 'Sectionaltore',
    tagline: 'Platzsparend, sicher, individuell',
    description:
      'Sectionaltore öffnen senkrecht nach oben und liegen platzsparend unter der Decke — ideal, wenn vor der Garage jeder Zentimeter zählt.',
    image: '/img/produkte/sectionaltore/hero.jpg',
    imageAlt:
      'Hörmann Garagen-Sectionaltor D-Sicke Silkgrain in Fenstergrau RAL 7040',
    gallery: [
      {
        src: '/img/produkte/sectionaltore/detail-1.jpg',
        alt: 'Hörmann Sectionaltor Duragrain Vertical Design Sheffield',
      },
      {
        src: '/img/produkte/sectionaltore/detail-2.jpg',
        alt: 'Hörmann Sectionaltor D-Sicke Silkgrain RAL 7016 mit ThermoSafe Haustür Motiv 860',
      },
      {
        src: '/img/produkte/sectionaltore/detail-3.jpg',
        alt: 'Hörmann Sectionaltor D-Sicke Silkgrain in Anthrazitgrau RAL 7016, Motiv 500 mit Holzoptik-Inlay',
      },
    ],
    highlights: [
      'LPU 67 Thermo, LPU 42, EPU 40, LTH/LTE',
      '50 mm wärmegedämmte Lamellen (LPU 67)',
      'Fingerklemmschutz serienmäßig',
      'Mehr als 200 Farb- und Designvarianten',
    ],
  },
  {
    slug: 'schwingtore',
    href: '/produkte/garagentore/schwingtore/',
    category: 'garagentore',
    title: 'Hörmann Garagen-Schwingtore',
    shortTitle: 'Schwingtore',
    tagline: 'Der Klassiker — robust und preiswert',
    description:
      'Das Schwingtor Berry N 80 von Hörmann ist die preiswerte Lösung mit hochwertiger Technik und einteiligem Torblatt aus verzinktem Stahl.',
    image: '/img/produkte/schwingtore/hero.jpg',
    imageAlt: 'Hörmann Schwingtor Berry N 80 Stahl Motiv 985 in Anthrazitgrau RAL 7016',
    gallery: [
      {
        src: '/img/produkte/schwingtore/detail-1.jpg',
        alt: 'Hörmann Schwingtor Stahl Motiv 984 in Verkehrsweiß RAL 9016',
      },
      {
        src: '/img/produkte/schwingtore/detail-2.jpg',
        alt: 'Hörmann Schwingtor Massivholz Motiv 933 in Nordischer Fichte',
      },
      {
        src: '/img/produkte/schwingtore/detail-3.jpg',
        alt: 'Hörmann Berry Schwingtor — Produktansicht',
      },
    ],
    highlights: [
      'Berry N 80 — einteiliges Torblatt',
      'Verzinkter oder feuerverzinkter Stahl',
      'Über 100 Designs und alle RAL-Farben',
      'Komfortantrieb ProMatic / SupraMatic möglich',
    ],
  },
  {
    slug: 'rolltore',
    href: '/produkte/garagentore/rolltore/',
    category: 'garagentore',
    title: 'Hörmann Garagen-Rolltore RollMatic',
    shortTitle: 'Garagen-Rolltore',
    tagline: 'Maximale Raumausnutzung in der Garage',
    description:
      'Das RollMatic Rolltor wickelt sich kompakt unter die Decke und lässt die volle Garagentiefe und -höhe frei.',
    image: '/img/produkte/rolltore/hero.jpg',
    imageAlt: 'Hörmann RollMatic Garagen-Rolltor — Außenansicht',
    gallery: [
      {
        src: '/img/produkte/rolltore/detail-1.jpg',
        alt: 'Hörmann RollMatic OD — Deckenlauftor mit kompakter Aufwicklung',
      },
      {
        src: '/img/produkte/rolltore/detail-2.jpg',
        alt: 'Hörmann Garagen-Rolltor RollMatic — Wohnhaus-Ansicht',
      },
    ],
    highlights: [
      'Kompakter Aufwickelvorgang',
      'Volle Durchfahrtshöhe und Garagenlänge',
      'Integrierter Antrieb',
      'Notentriegelung von außen',
    ],
  },
  {
    slug: 'seitensectionaltore',
    href: '/produkte/garagentore/seitensectionaltore/',
    category: 'garagentore',
    title: 'Hörmann Seiten-Sectionaltore',
    shortTitle: 'Seiten-Sectionaltore',
    tagline: 'Tor öffnet wie eine Schiebetür zur Seite',
    description:
      'Das Hörmann HST seitlich öffnende Sectionaltor ist die elegante Lösung, wenn der Deckenraum knapp oder die Garage auch als Nebenraum genutzt wird.',
    image: '/img/produkte/seitensectionaltore/hero.jpg',
    imageAlt:
      'Hörmann Seiten-Sectionaltor HST M-Sicke Woodgrain in Verkehrsweiß RAL 9016',
    gallery: [
      {
        src: '/img/produkte/seitensectionaltore/detail-1.jpg',
        alt: 'Hörmann Seiten-Sectionaltor M-Sicke in Basaltgrau RAL 7012',
      },
      {
        src: '/img/produkte/seitensectionaltore/detail-2.jpg',
        alt: 'Hörmann Seiten-Sectionaltor — Beispiel einer individuellen Torgestaltung',
      },
    ],
    highlights: [
      'Öffnet zur Seite — Decke bleibt frei',
      'Integrierte Schlupftür ohne Stolperschwelle möglich',
      'Sofort-Stopp-Funktion am Antrieb',
      'Komfort-Öffnung auch teilweise',
    ],
  },
  {
    slug: 'industrie-sectionaltore',
    href: '/produkte/industrietore/sectionaltore/',
    category: 'industrietore',
    title: 'Hörmann Industrie-Sectionaltore',
    shortTitle: 'Industrie-Sectionaltore',
    tagline: 'Robuste Sectional-Lösungen für Industrie und Gewerbe',
    description:
      'Sectionaltore der Baureihe 40, 50 und 60 — verzinkter Stahl oder Aluminium, mit umfangreichen Sicherheits- und Komfortausstattungen für den gewerblichen Dauerbetrieb.',
    image: '/img/produkte/industrie-sectionaltore/hero.jpg',
    imageAlt:
      'Hörmann Industrie-Sectionaltor ALR F42 mit Vollverglasung',
    gallery: [
      {
        src: '/img/produkte/industrie-sectionaltore/detail-1.jpg',
        alt: 'Hörmann ALR F42 Glazing und ALR 67 Thermo Glazing im Vergleich',
      },
      {
        src: '/img/produkte/industrie-sectionaltore/detail-2.jpg',
        alt: 'Hörmann Industrie-Sectionaltor ALR F42 Vitraplan flächenbündig in Glasfassade',
      },
      {
        src: '/img/produkte/industrie-sectionaltore/detail-3.jpg',
        alt: 'Hörmann ALR F42 mit Streckgitterfüllung für Lüftung und Sichtschutz',
      },
    ],
    highlights: [
      'SPU 67 Thermo (67 mm) — bester Wärmeschutz',
      'ALR F42, ALR Vitraplan — Aluminium-Rahmentore',
      'Schlupftür ohne Stolperschwelle möglich',
      'Sicherheit nach EN 13241 mit ASR A1.7',
    ],
  },
  {
    slug: 'industrie-rolltore',
    href: '/produkte/industrietore/rolltore/',
    category: 'industrietore',
    title: 'Hörmann Industrie-Rolltore und Rollgitter',
    shortTitle: 'Industrie-Rolltore',
    tagline: 'HR-Baureihe für Kalt- und Warmhallen',
    description:
      'Rolltore und Rollgitter der HR-Baureihe — kompakte Aufwicklung, hohe Öffnungsgeschwindigkeiten und Wärmedämmung optional.',
    image: '/img/produkte/industrie-rolltore/hero.jpg',
    imageAlt: 'Hörmann Industrie-Rolltor HR-Baureihe',
    gallery: [
      {
        src: '/img/produkte/industrie-rolltore/detail-1.jpg',
        alt: 'Hörmann Rolltor und Rollgitter Kombination SSG DD',
      },
      {
        src: '/img/produkte/industrie-rolltore/detail-2.jpg',
        alt: 'Hörmann Industrie-Rolltor im Anwendungsbeispiel',
      },
    ],
    highlights: [
      'HR 120 Aero — wärmegedämmt',
      'Decotherm — kompakte Lamelle',
      'HG-S Rollgitter für Eingänge',
      'Bis 25 m² Torfläche realisierbar',
    ],
  },
  {
    slug: 'schnelllauftore',
    href: '/produkte/industrietore/schnelllauftore/',
    category: 'industrietore',
    title: 'Hörmann Schnelllauftore',
    shortTitle: 'Schnelllauftore',
    tagline: 'Verkürzte Zykluszeiten — bis 4 m/s',
    description:
      'Schnelllauftore von Hörmann öffnen mit bis zu 4 m/s und reduzieren Zugluft, Energieverlust und Wartezeiten in Werkstätten, Logistik und Reinraum.',
    image: '/img/produkte/schnelllauftore/hero.jpg',
    imageAlt:
      'Hörmann Schnelllauftor V-Serie — flexibles Hochgeschwindigkeitstor für Industrie und Logistik',
    gallery: [
      {
        src: '/img/produkte/schnelllauftore/detail-1.jpg',
        alt: 'Hörmann Schnelllauftor HS 5015 für Lebensmittel- und Reinraum-Anwendungen',
      },
      {
        src: '/img/produkte/schnelllauftore/detail-2.jpg',
        alt: 'Hörmann Schnelllauftore — Produktübersicht und Einsatzbereiche',
      },
    ],
    highlights: [
      'V-Serie für Innen-/Außenbereiche',
      'HS Speed bis 4 m/s Öffnungsgeschwindigkeit',
      'Soft Edge — kein Verletzungsrisiko',
      'Reinraum- und Lebensmittel-tauglich (HS 5015)',
    ],
  },
  {
    slug: 'haustueren',
    href: '/produkte/haustueren/',
    category: 'tueren',
    title: 'Hörmann Haustüren',
    shortTitle: 'Haustüren',
    tagline: 'Aluminium-Haustüren mit Top-Werten',
    description:
      'ThermoSafe und ThermoCarbon — flügelüberdeckende Aluminium-Haustüren mit RC 3 Sicherheit und exzellenter Wärmedämmung (UD ab 0,47 W/m²K).',
    image: '/img/produkte/haustueren/hero.jpg',
    imageAlt: 'Hörmann Aluminium-Haustür ThermoSafe Motiv 860 in RAL 7016',
    gallery: [
      {
        src: '/img/produkte/haustueren/detail-1.jpg',
        alt: 'Hörmann Haustür ThermoCarbon Motiv 308 in Anthrazitgrau matt RAL 7016',
      },
      {
        src: '/img/produkte/haustueren/detail-2.jpg',
        alt: 'Hörmann Haustür Thermo65 Motiv 515 in Matt deluxe Graualuminium CH 9007',
      },
      {
        src: '/img/produkte/haustueren/detail-3.jpg',
        alt: 'Hörmann Fingerleser FL 150 — schlüsselloser Zugang per Fingerabdruck',
      },
    ],
    highlights: [
      'ThermoSafe, ThermoCarbon, Thermo65 / Thermo46',
      '5-fach Verriegelung serienmäßig',
      'RC 3 / RC 2 Einbruchsicherheit',
      'Über 70 Motive zur Auswahl',
    ],
  },
  {
    slug: 'nebentueren',
    href: '/produkte/nebentueren/',
    category: 'tueren',
    title: 'Hörmann Nebentüren und Funktionstüren',
    shortTitle: 'Nebentüren',
    tagline: 'Stahl-Nebeneingangstüren mit System',
    description:
      'NT 60 und MZ Thermo — stabile Funktions- und Nebentüren für Keller, Werkstatt, Lager und Mehrzweckanwendungen. Auch Multifunktionstüren MZ Thermo.',
    image: '/img/produkte/nebentueren/hero.jpg',
    imageAlt: 'Hörmann Nebentür — ansichtsgleich zum Garagentor',
    gallery: [
      {
        src: '/img/produkte/nebentueren/detail-1.jpg',
        alt: 'Hörmann Mehrzwecktür MZ Thermo65 am Einfamilienhaus',
      },
      {
        src: '/img/produkte/nebentueren/detail-2.jpg',
        alt: 'Hörmann Garagen-Rolltor mit ansichtsgleicher Nebentür',
      },
    ],
    highlights: [
      'NT 60 / MZ Thermo — verzinkter Stahl',
      'Mehrzweck-, Keller- und Funktionstüren',
      'Brandschutz- und Rauchschutzvarianten',
      'Maßanfertigung bis 1.250 × 2.500 mm',
    ],
  },
  {
    slug: 'antriebe',
    href: '/produkte/antriebe/',
    category: 'antriebe',
    title: 'Hörmann Tor-Antriebe',
    shortTitle: 'Tor-Antriebe',
    tagline: 'SupraMatic, ProMatic und RotaMatic',
    description:
      'Antriebe für Garagentore, Hof- und Schiebetore — vom kompakten ProMatic bis zum schnellen SupraMatic mit BiSecur Funk.',
    image: '/img/produkte/antriebe/hero.jpg',
    imageAlt: 'Hörmann SupraMatic 4 E Garagentor-Antrieb mit BiSecur Funk',
    gallery: [
      {
        src: '/img/produkte/antriebe/detail-1.jpg',
        alt: 'Hörmann ProMatic 4 — die preisbewusste Standardlösung',
      },
      {
        src: '/img/produkte/antriebe/detail-2.jpg',
        alt: 'Hörmann Handsender HSE 4 BS mit Kunststoffkappen',
      },
      {
        src: '/img/produkte/antriebe/detail-3.jpg',
        alt: 'Hörmann Akku-Modul mit Solar — Antrieb ohne Stromanschluss',
      },
    ],
    highlights: [
      'SupraMatic — schnell, leise, smart-home-fähig',
      'ProMatic — die preisbewusste Standardlösung',
      'RotaMatic für Drehflügeltore',
      'BiSecur Funk — abhörsicher AES 128-Bit',
    ],
  },
  {
    slug: 'ersatzteile',
    href: '/produkte/ersatzteile/',
    category: 'antriebe',
    title: 'Hörmann Original-Ersatzteile',
    shortTitle: 'Ersatzteile',
    tagline: 'Federn, Seile, Handsender, Elektronik',
    description:
      'Original Hörmann Ersatzteile für alle Tor- und Antriebsbaureihen — Torsionsfedern, Laufrollen, Seilbruchsicherungen, Handsender HSE / HS bis 30 Jahre zurück.',
    image: '/img/produkte/ersatzteile/hero.jpg',
    imageAlt: 'Hörmann BiSecur Handsender HSE 4 BS in Anthrazitgrau',
    gallery: [
      {
        src: '/img/produkte/ersatzteile/detail-1.jpg',
        alt: 'Hörmann Mehrfach-Feder-Sicherheitssystem für Sectionaltore',
      },
      {
        src: '/img/produkte/ersatzteile/detail-2.jpg',
        alt: 'Hörmann Original-Laufrollen für Sectionaltore',
      },
      {
        src: '/img/produkte/ersatzteile/detail-3.jpg',
        alt: 'Hörmann Handsender HS 5 BS — BiSecur Funk',
      },
    ],
    highlights: [
      'Verfügbar auch für ältere Modelle',
      'Handsender HSE 2/4 BS, HS 5 BS BiSecur',
      'Torsionsfedern, Laufrollen, Bowdenzüge',
      'Schnelle Versorgung über Hörmann-Lager',
    ],
  },
];

export const productCategories = [
  { slug: 'garagentore', label: 'Garagentore', href: '/produkte/garagentore/' },
  { slug: 'industrietore', label: 'Industrietore', href: '/produkte/industrietore/' },
  { slug: 'tueren', label: 'Türen', href: '/produkte/haustueren/' },
  { slug: 'antriebe', label: 'Antriebe', href: '/produkte/antriebe/' },
] as const;

export function productsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category);
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
