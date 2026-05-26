// Single source of truth für alle Firmen- und NAP-Daten.
// Bei Änderungen NUR hier bearbeiten — alle Komponenten ziehen aus dieser Datei.

export const company = {
  legalName: 'Bauprojekt Kaiser GmbH',
  tradeName: 'Tor-Kaiser',
  managingDirector: 'Paul Kaiser',

  // --- Firmengeschichte · vier Generationen Familienbetrieb ---
  // 1950  Bauunternehmen Bernhard Kaiser — der Urgroßvater gründet den Familienbetrieb im Bauhandwerk
  // 1972  Kaiser Baubedarfartikel GmbH — der Großvater, Beginn der Hörmann-Spezialisierung
  // 2000  Bauprojekt Kaiser GmbH — der Vater, gegründet am 01.04.2000 (heutige Firma)
  // heute Paul Kaiser führt das Unternehmen in 4. Generation fort
  familyBusinessSince: 1950,
  hoermannSince: 1972,
  founded: 2000,
  foundingDate: '2000-04-01',
  generation: 4,

  // Marketing-Anker: bewusst statisch, NICHT dynamisch berechnen.
  // Bezieht sich auf die Familientradition seit 1950 (über 75 Jahre / drei Viertel
  // Jahrhundert). Die Hörmann-Tätigkeit (seit den 1970ern) steht im Text als Phrase.
  // Erst in ~2030 manuell prüfen.
  yearsLabel: '75+',

  partnerStatus: 'Hörmann Fachhändler',

  address: {
    street: 'Bülser Straße 19',
    postalCode: '45964',
    city: 'Gladbeck',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
    countryName: 'Deutschland',
    latitude: 51.5704,
    longitude: 6.9853,
  },

  contact: {
    phone: '02043 / 50 33 798',
    phoneE164: '+4920435033798',
    fax: '02043 / 50 33 799',
    email: 'info@tor-kaiser.de',
    website: 'https://tor-kaiser.de',
  },

  emergency: {
    daytimePhone: '0162 / 542 91 55',
    daytimePhoneE164: '+491625429155',
    daytimeHours: 'Mo–Fr 9:00–14:00 Uhr',
    nightPhone: '05204 / 915 4 915',
    nightPhoneE164: '+4952049154915',
    nightHours: 'Wochenenden, Feiertage & außerhalb der Bürozeiten',
    nightNote: 'Es gelten die üblichen Verbindungskosten Ihres Telefonanbieters',
  },

  openingHours: {
    text: 'Montag bis Freitag 9:00 bis 14:00 Uhr',
    schema: ['Mo-Fr 09:00-14:00'],
  },

  registration: {
    hrb: 'HRB 3835',
    court: 'Amtsgericht Gelsenkirchen',
  },

  // Social-Profile: Leer lassen, bis ein Konto existiert. Leere Strings werden
  // im Schema.org `sameAs` und im Footer automatisch übersprungen.
  social: {
    googleBusiness:
      'https://www.google.de/maps/place/Bauprojekt+Kaiser+GmbH/@51.5778749,6.9978953,17z/data=!3m1!4b1!4m6!3m5!1s0x47b8eedcb3150f49:0xd026083d53411d4c!8m2!3d51.5778716!4d7.0004702!16s%2Fg%2F11c6tb00dx?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D',
    trustpilot: 'https://de.trustpilot.com/review/tor-kaiser.de',
    instagram: '', // z. B. 'https://www.instagram.com/torkaiser/'
    linkedin: '', // z. B. 'https://www.linkedin.com/company/bauprojekt-kaiser-gmbh/'
  },
} as const;

export const phoneHref = `tel:${company.contact.phoneE164}`;
export const emailHref = `mailto:${company.contact.email}`;
export const emergencyDaytimeHref = `tel:${company.emergency.daytimePhoneE164}`;
export const emergencyNightHref = `tel:${company.emergency.nightPhoneE164.replace(/\s/g, '')}`;

export function buildMailto(subject: string, body?: string): string {
  const parts = [`subject=${encodeURIComponent(subject)}`];
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${company.contact.email}?${parts.join('&')}`;
}

export const fullAddress = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;

// --- Social-Profile-Helpers --------------------------------------------------

export type SocialKey = keyof typeof company.social;
export type SocialIcon = 'google' | 'trustpilot' | 'instagram' | 'linkedin';

export interface SocialLink {
  key: SocialKey;
  url: string;
  label: string;
  icon: SocialIcon;
}

const SOCIAL_META: Record<SocialKey, { label: string; icon: SocialIcon }> = {
  googleBusiness: { label: 'Google Business / Maps', icon: 'google' },
  trustpilot: { label: 'Trustpilot Bewertungen', icon: 'trustpilot' },
  instagram: { label: 'Instagram', icon: 'instagram' },
  linkedin: { label: 'LinkedIn', icon: 'linkedin' },
};

// Liste aller befüllten Social-Profile, in Definitionsreihenfolge.
// Leere Strings werden ausgefiltert — sobald du in `company.social` einen Wert
// einträgst, taucht das Icon automatisch im Footer auf und der Link landet im
// LocalBusiness-Schema.
export const socialLinks: SocialLink[] = (Object.entries(company.social) as [SocialKey, string][])
  .filter(([, url]) => Boolean(url))
  .map(([key, url]) => ({
    key,
    url,
    label: SOCIAL_META[key].label,
    icon: SOCIAL_META[key].icon,
  }));

export const socialSameAs: string[] = socialLinks.map((s) => s.url);

// --- Firmengeschichte ------------------------------------------------------
// Datenquelle für die Zeitleiste auf der Über-uns-Seite (Timeline.astro).
// Vier Generationen Familie Kaiser — eine durchgehende Linie von 1950 bis heute.

export interface HistoryEntry {
  year: string;
  title: string;
  person: string;
  text: string;
}

export const history: HistoryEntry[] = [
  {
    year: '1950',
    title: 'Bauunternehmen Bernhard Kaiser',
    person: 'Urgroßvater',
    text: 'Der Urgroßvater legt mit dem Bauunternehmen Bernhard Kaiser den Grundstein — der Beginn einer Familientradition, die bis heute über vier Generationen reicht.',
  },
  {
    year: '1972',
    title: 'Kaiser Baubedarfartikel GmbH',
    person: 'Großvater',
    text: 'Der Großvater eröffnet am Bahnhof Gladbeck-West einen Baumarkt, wie es ihn damals noch selten gab — lange vor den großen Ketten von heute und in der Stadt bestens bekannt. Hier beginnt die Spezialisierung der Familie auf Hörmann.',
  },
  {
    year: '2000',
    title: 'Bauprojekt Kaiser GmbH',
    person: 'Vater',
    text: 'Anfang des Jahres gründet der Vater die heutige Bauprojekt Kaiser GmbH und vereint Beratung, Verkauf und Service an einem Standort in Gladbeck.',
  },
  {
    year: 'Heute',
    title: 'Vierte Generation',
    person: 'Paul Kaiser',
    text: 'Paul Kaiser führt das Unternehmen in vierter Generation fort — mit eingespieltem Team, einem festen Netz an Partnerbetrieben und unverändertem Anspruch an Hörmann-Qualität und persönliche Verlässlichkeit.',
  },
];
