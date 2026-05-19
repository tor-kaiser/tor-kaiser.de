# tor-kaiser.de

Website der **Bauprojekt Kaiser GmbH** – Hörmann Fachhändler in Gladbeck.

Gebaut mit [Astro 5](https://astro.build) und Tailwind v4, deployed automatisch via GitHub Actions auf GitHub Pages (Custom Domain `tor-kaiser.de`).

## Entwicklung

Voraussetzungen: Node.js ≥ 20.

```bash
npm install
npm run dev          # Lokaler Dev-Server auf http://localhost:4321
npm run build        # Production-Build nach ./dist
npm run preview      # Vorschau des Production-Builds
```

## Projektstruktur

```
.
├── .github/workflows/   # GitHub Actions (auto-deploy)
├── public/              # Statische Assets (img/, CNAME, robots.txt)
├── src/
│   ├── components/      # Header, Footer, Hero, FAQ, CTA, ...
│   ├── data/            # company.ts (NAP), products.ts, cities.ts
│   ├── layouts/         # BaseLayout mit Meta + Schema.org
│   ├── pages/           # Alle Seiten (Astro File-based Routing)
│   │   ├── produkte/    # Produktkategorien + Detail-Seiten
│   │   ├── service/     # Montage, Wartung, Reparatur, Notdienst
│   │   ├── standorte/   # [city].astro — 8 Stadt-Landingpages
│   │   └── ratgeber/    # Blog-Artikel
│   └── styles/global.css
└── astro.config.mjs
```

## Daten-Single-Source-of-Truth

Alle Firmen-, Produkt- und Stadtdaten kommen aus `src/data/`. Änderungen an Adresse,
Telefon, Notdienst-Nummern usw. werden **nur** in `src/data/company.ts` gepflegt.

## Deployment

**Branch-Strategie**: Entwicklung läuft auf `dev`. Bei einem Push (z. B. via PR) nach
`publish` triggert `.github/workflows/deploy.yml` automatisch das Live-Deployment auf
GitHub Pages.

Bei jedem Push nach `publish` läuft `.github/workflows/deploy.yml`:

1. `npm ci`
2. `astro build` → `./dist`
3. Upload als Pages-Artifact
4. Deploy auf GitHub Pages

Custom Domain wird über `public/CNAME` (`tor-kaiser.de`) verdrahtet. DNS muss auf
GitHub Pages zeigen (siehe `todo.txt` im Oberordner).

## Wichtige offene Punkte

Siehe `../todo.txt` für die vollständige Liste (Bildmaterial, GA4-ID, Trustpilot-URL, …).

## Lizenz

Inhalte © Bauprojekt Kaiser GmbH (CC BY-NC-ND 4.0). Quellcode-Layout (Astro-Templates,
Komponenten) für interne Verwendung.
