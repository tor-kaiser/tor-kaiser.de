// Single source of truth für alle Firmen- und NAP-Daten.
// Bei Änderungen NUR hier bearbeiten — alle Komponenten ziehen aus dieser Datei.

export const company = {
  legalName: 'Bauprojekt Kaiser GmbH',
  tradeName: 'Tor-Kaiser',
  managingDirector: 'Paul Kaiser',
  founded: 1975,
  generation: 4,
  // Marketing-Anker: bewusst statisch, NICHT dynamisch aus `founded` berechnen.
  // "50+ Jahre" ist eine Brand-Story (50 = halbes Jahrhundert), kein Counter.
  // Erst in ~2030/2035 manuell auf "55+" / "60" wechseln.
  yearsLabel: '50+',
  yearsLabelLong: 'über 50',
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
  const params = new URLSearchParams();
  params.set('subject', subject);
  if (body) params.set('body', body);
  return `mailto:${company.contact.email}?${params.toString()}`;
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
