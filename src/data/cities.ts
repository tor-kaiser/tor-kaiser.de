// Stadt-Daten für die hyperlokalen Landingpages.
// Jede Stadt mit einzigartigem Content für SEO.

export interface City {
  slug: string;
  name: string;
  postalCodes: string[];
  population: number;
  distanceKm: number;
  driveMinutes: number;
  districts: string[];
  industrialAreas: string[];
  description: string;
  localContext: string;
  serviceNote: string;
  heroImage: string;
  heroImageAlt: string;
}

export const cities: City[] = [
  {
    slug: 'gladbeck',
    name: 'Gladbeck',
    postalCodes: ['45964', '45966', '45968'],
    population: 75500,
    distanceKm: 0,
    driveMinutes: 0,
    districts: ['Mitte', 'Brauck', 'Butendorf', 'Ellinghorst', 'Rentfort', 'Zweckel', 'Schultendorf'],
    industrialAreas: ['Gewerbegebiet Brauck', 'Wittringer Industriegebiet', 'Zweckel-Süd'],
    description:
      'Unser Heimatstandort im nördlichen Ruhrgebiet — seit über 50 Jahren in Gladbeck verwurzelt.',
    localContext:
      'Gladbeck zählt rund 75.500 Einwohner und liegt zentral im Nordwesten des Ruhrgebiets. Die historischen Stadtteile Brauck, Butendorf, Rentfort und Zweckel sind geprägt von Reihenhäusern, freistehenden Einfamilienhäusern und kleineren Mehrfamilienhäusern — alle typisch mit Einzel- oder Doppelgaragen, die mit Sectional- oder Schwingtoren von Hörmann ausgestattet werden. Im Gewerbegebiet Brauck und im Industriegebiet Wittringen finden sich Logistik-, Handwerks- und Produktionsbetriebe, die auf Industrie-Sectionaltore, Schnelllauftore und Rolltore angewiesen sind.',
    serviceNote:
      'Da unser Sitz und Lager in der Bülser Straße in Gladbeck liegen, garantieren wir besonders kurze Reaktionszeiten — im Regelfall noch am selben Tag.',
    heroImage: '/img/produkte/standorte/gladbeck.jpg',
    heroImageAlt: 'Hörmann Schwingtor Berry Motiv 985 in Anthrazitgrau RAL 7016 — montiert in Gladbeck',
  },
  {
    slug: 'bottrop',
    name: 'Bottrop',
    postalCodes: ['46236', '46238', '46240', '46242', '46244'],
    population: 117500,
    distanceKm: 8,
    driveMinutes: 15,
    districts: ['Stadtmitte', 'Eigen', 'Welheim', 'Boy', 'Fuhlenbrock', 'Kirchhellen', 'Grafenwald'],
    industrialAreas: ['ProspectPark', 'Welheimer Mark', 'BernePark', 'Kirchhellener Heide'],
    description:
      'Direkt benachbarte Großstadt im Süden — ein wichtiger Markt im Hörmann-Stammgebiet.',
    localContext:
      'Bottrop ist mit rund 117.500 Einwohnern unsere direkte Nachbarstadt im Süden. Hier bedienen wir sowohl die dichten Wohngebiete in Stadtmitte, Eigen und Welheim als auch die Einfamilienhaussiedlungen in Kirchhellen und Grafenwald. Bottrop ist außerdem Sitz des Hörmann Stammwerks (Steinhagen lieferte das Werk, in Bottrop sind weitere Fertigungsstandorte angesiedelt), sodass eine besonders schnelle Verfügbarkeit von Ersatzteilen und Sonderbauten gegeben ist. Industriebetriebe im Welheimer Mark, im ProspectPark und Kirchhellener Heide setzen auf Industrietore, Schnelllauftore und Rollgitter von Hörmann.',
    serviceNote:
      'Bottrop liegt nur 15 Minuten von unserem Hauptsitz in Gladbeck entfernt — Notdienst und Montage sind besonders schnell verfügbar.',
    heroImage: '/img/produkte/standorte/bottrop.jpg',
    heroImageAlt: 'Hörmann Sectionaltor D-Sicke Silkgrain in Fenstergrau RAL 7040 — Beispielmontage Bottrop',
  },
  {
    slug: 'gelsenkirchen',
    name: 'Gelsenkirchen',
    postalCodes: ['45879', '45881', '45883', '45884', '45886', '45888', '45891', '45892', '45894', '45896', '45897', '45899'],
    population: 260000,
    distanceKm: 10,
    driveMinutes: 18,
    districts: ['Altstadt', 'Bismarck', 'Buer', 'Erle', 'Hassel', 'Horst', 'Resse', 'Rotthausen', 'Schalke', 'Ückendorf'],
    industrialAreas: ['Schalker Verein', 'Gewerbegebiet Bismarck', 'Industriepark Schalker Verein', 'Stadthafen'],
    description:
      'Ruhrgebiets-Großstadt mit starkem Industrieanteil — von der Veltins-Arena bis zur Zeche Nordstern.',
    localContext:
      'Gelsenkirchen mit rund 260.000 Einwohnern ist die größte Nachbarstadt im Osten und ein traditioneller Industriestandort. Im südlichen Stadtgebiet (Ückendorf, Rotthausen, Schalke) bestehen viele Altbauten und Stadthäuser mit kleinformatigen Garagen — hier sind Hörmann Renomatic Sectionaltore und Schwingtore die beliebteste Wahl. Im Norden Buer, Resse und Hassel überwiegen Einfamilienhäuser. Die großen Industrieareale rund um den Schalker Verein, den Stadthafen und das Gewerbegebiet Bismarck setzen seit Jahrzehnten auf Hörmann Industrietore, Rolltore und Schnelllauftore aus unserer Hand.',
    serviceNote:
      'In Gelsenkirchen erreichen wir Sie binnen 20 Minuten — Notdienst und Service-Termine bieten wir hier mit eigener Mannschaft an.',
    heroImage: '/img/produkte/standorte/gelsenkirchen.jpg',
    heroImageAlt: 'Hörmann Schwingtor Berry Motiv 984 in Verkehrsweiß RAL 9016 — Referenz Gelsenkirchen',
  },
  {
    slug: 'essen',
    name: 'Essen',
    postalCodes: ['45127', '45131', '45133', '45134', '45136', '45138', '45139', '45141', '45143', '45144', '45145', '45147', '45149'],
    population: 583000,
    distanceKm: 15,
    driveMinutes: 25,
    districts: ['Stadtmitte', 'Borbeck', 'Altendorf', 'Bredeney', 'Frohnhausen', 'Holsterhausen', 'Kettwig', 'Werden', 'Rüttenscheid'],
    industrialAreas: ['Krupp-Areal', 'Westkreuz', 'Industriegebiet Bottroper Straße', 'Schurenbachhalde'],
    description:
      'Die Metropole im Herzen des Ruhrgebiets — Sitz des OLG Essen, das wir bereits beliefert haben.',
    localContext:
      'Essen ist mit rund 583.000 Einwohnern die größte Stadt im Ruhrgebiet und damit ein zentraler Markt für hochwertige Hörmann Produkte. Im Süden (Bredeney, Werden, Kettwig) finden sich gehobene Einfamilienhaus-Lagen, in denen ThermoSafe Haustüren und Aluminium-Sectionaltore (LPU 67 Thermo) gefragt sind. Die zentralen Stadtteile und Krupp-Areale haben gewerblichen Bedarf an Industrie-Sectionaltoren und Schnelllauftoren. Unser Referenzprojekt Oberlandesgericht (OLG) Essen ist ein Beispiel für die Qualität, mit der wir auch große öffentliche Aufträge umsetzen.',
    serviceNote:
      'Wir bedienen Essen vom gesamten Stadtgebiet bis Kettwig — Anfahrt aus Gladbeck rund 25 Minuten.',
    heroImage: '/img/produkte/standorte/essen.jpg',
    heroImageAlt: 'Hörmann Sectionaltor Duragrain Vertical Design Sheffield — gehobene Wohnlage in Essen',
  },
  {
    slug: 'recklinghausen',
    name: 'Recklinghausen',
    postalCodes: ['45657', '45659', '45661', '45663', '45665', '45699'],
    population: 110000,
    distanceKm: 12,
    driveMinutes: 20,
    districts: ['Stadtmitte', 'König-Ludwig', 'Hochlarmark', 'Ost', 'Süd', 'West', 'Suderwich'],
    industrialAreas: ['Gewerbegebiet Berghäuser Straße', 'Erlbruch', 'Recklinghausen-Süd'],
    description:
      'Kreisstadt im Vest Recklinghausen — etablierter Markt für Privat- und Gewerbekunden.',
    localContext:
      'Recklinghausen mit etwa 110.000 Einwohnern ist Kreisstadt und damit auch Verwaltungszentrum. Die südlichen Stadtteile (Hochlarmark, Süd, König-Ludwig) sind klassische Arbeitersiedlungen mit kleineren Garagen. Im Norden und in Suderwich überwiegen freistehende Einfamilienhäuser auf größeren Grundstücken — hier sind Doppelgaragen mit Sectionaltoren der Standard. Mehrere Speditionen, Logistiker und das Klinikum Vest setzen auf Hörmann Industrietore.',
    serviceNote:
      'Mit unserer Lage in Gladbeck sind wir Ihr nächstgelegener Hörmann-Fachpartner für Recklinghausen — Anfahrt rund 20 Minuten.',
    heroImage: '/img/produkte/standorte/recklinghausen.jpg',
    heroImageAlt: 'Hörmann Seiten-Sectionaltor HST M-Sicke Woodgrain in Verkehrsweiß RAL 9016 — Recklinghausen',
  },
  {
    slug: 'dorsten',
    name: 'Dorsten',
    postalCodes: ['46282', '46284', '46286'],
    population: 75000,
    distanceKm: 13,
    driveMinutes: 22,
    districts: ['Altstadt', 'Wulfen', 'Hervest', 'Holsterhausen', 'Rhade', 'Lembeck', 'Deuten'],
    industrialAreas: ['Gewerbegebiet Marler Straße', 'Wulfen-Barkenberg', 'Hervest-Süd'],
    description:
      'Stadt am nördlichen Ruhrgebietsrand — viel ländlicher Charakter, viele Einzel- und Doppelgaragen.',
    localContext:
      'Dorsten mit rund 75.000 Einwohnern markiert den nördlichen Rand des Ruhrgebiets und bietet überwiegend ländlich geprägte Wohnstrukturen. In den Außenortsteilen Lembeck, Rhade und Deuten überwiegen großzügige Einfamilienhäuser mit Doppelgaragen — Sectional- und Seitensectionaltore (HST) von Hörmann sind hier die häufigste Wahl. Auch die mittelständischen Betriebe im Gewerbegebiet Marler Straße und Wulfen-Barkenberg setzen auf Hörmann Industrietore und Antriebstechnik.',
    serviceNote:
      'Dorsten liegt rund 22 Fahrminuten von Gladbeck entfernt — innerhalb des Vest Recklinghausen sind wir Ihr direkter Hörmann-Ansprechpartner.',
    heroImage: '/img/produkte/standorte/dorsten.jpg',
    heroImageAlt: 'Hörmann Massivholz-Schwingtor Motiv 933 in Nordischer Fichte — Einfamilienhaus in Dorsten',
  },
  {
    slug: 'herten',
    name: 'Herten',
    postalCodes: ['45699', '45701', '45711'],
    population: 60500,
    distanceKm: 7,
    driveMinutes: 12,
    districts: ['Mitte', 'Disteln', 'Langenbochum', 'Bertlich', 'Westerholt', 'Scherlebeck'],
    industrialAreas: ['Gewerbegebiet Süd', 'h2-Herten', 'Newpark / Logistikzentrum'],
    description:
      'Strukturwandelstadt zwischen Gladbeck und Recklinghausen — kurzer Weg, schneller Service.',
    localContext:
      'Herten mit rund 60.500 Einwohnern ist unser direkter östlicher Nachbar und Teil des Vest Recklinghausen. Hier sehen wir besonders viele Sanierungen — alte Garagentore werden gegen moderne Hörmann RenoMatic Sectionaltore getauscht. Das Logistik-Cluster Newpark und der Wasserstoffstandort h2-Herten haben Bedarf an Schnelllauftoren und großformatigen Industrie-Sectionaltoren.',
    serviceNote:
      'Herten ist nur 12 Minuten von Gladbeck entfernt — Notdienst-Reaktionszeiten zählen zu den kürzesten in unserem Gebiet.',
    heroImage: '/img/produkte/standorte/herten.jpg',
    heroImageAlt: 'Hörmann RollMatic Garagen-Rolltor — Sanierungsbeispiel Herten',
  },
  {
    slug: 'marl',
    name: 'Marl',
    postalCodes: ['45768', '45770', '45772'],
    population: 84500,
    distanceKm: 13,
    driveMinutes: 22,
    districts: ['Mitte', 'Drewer', 'Brassert', 'Hüls', 'Hamm', 'Polsum', 'Lenkerbeck', 'Sinsen-Lenkerbeck'],
    industrialAreas: ['Chemiepark Marl', 'Gewerbegebiet Brassert', 'Industriegebiet Auguste-Victoria'],
    description:
      'Chemiestandort mit Industrie- und Wohnbereichen — vielseitiger Bedarf an Toren und Türen.',
    localContext:
      'Marl mit rund 84.500 Einwohnern ist überregional durch den Chemiepark Marl (vormals Chemische Werke Hüls) bekannt. Industriebetriebe und Zulieferer setzen auf Hörmann Industrie-Sectionaltore mit Sicherheits- und Brandschutzfunktionen, Schnelllauftore für Reinraum- und Lagerbereiche sowie Rollgitter für Werkstattzugänge. In den Wohnvierteln Drewer, Brassert und Hüls beraten und montieren wir vornehmlich Garagen-Sectionaltore, Haustüren und Antriebe.',
    serviceNote:
      'Marl liegt etwa 22 Fahrminuten von Gladbeck entfernt — wir liefern und montieren regelmäßig im gesamten Stadtgebiet.',
    heroImage: '/img/produkte/standorte/marl.jpg',
    heroImageAlt: 'Hörmann Sectionaltor D-Sicke RAL 7016 mit ThermoSafe Haustür Motiv 860 — Wohnsiedlung Marl',
  },
];

export function cityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export const primaryCity = cities[0];
export const surroundingCities = cities.slice(1);
