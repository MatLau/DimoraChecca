# B&B Dimora Checca — sito vetrina

Vite + React 19 + TypeScript + Tailwind CSS v4 + react-router-dom.
Vetrina statica, nessun backend, nessun form: le conversioni sono telefono,
email e Messenger.

## Sviluppo

```bash
npm install
npm run dev
```

Apre su `http://localhost:5173`.

## Build di produzione

```bash
npm run build
```

Compila i tipi (`tsc -b`) e crea il bundle in `dist/`. `npm run preview` serve
la build per un controllo locale.

## Struttura

```
src/
  components/
    ui/            componenti riusabili (hero animato, button, lightbox)
    sections/       una sezione = un file (Hero, Intro, Camere, Galleria, Contatti, Footer)
  pages/            Home (/) e ComeRaggiungerci (/come-raggiungerci)
public/img/         foto convertite in WebP, multi-risoluzione
img/                foto originali (non pubblicate, usate solo per generare public/img)
```

Le foto pubblicate sono state ritagliate e convertite da `img/*.jpeg` a WebP a
più risoluzioni con srcset. Gli script di conversione non sono stati
conservati nel progetto: erano script Python una tantum lanciati manualmente
per generare `public/img/*.webp`. Se servono nuovi crop, ripartire dagli
originali in `img/`.

## Cosa resta da completare

Ogni punto sotto è segnalato anche a video con la stringa `[DA COMPLETARE]`,
tranne il primo (il placeholder grafico non porta la scritta, è intenzionale
per non sembrare un errore in home).

- **Foto della targa "Camera Luna"** — non esiste uno scatto dedicato (compare
  solo di sfuggita, troppo piccola, in un angolo di `bb21`). La card in
  `src/components/sections/Camere.tsx` (componente `LunaPlaceholder`) mostra
  un'illustrazione al posto della foto. Quando c'è uno scatto reale (verticale,
  targa centrata, sfondo neutro, come le altre due), sostituire lì.
- **P.IVA** — footer (`src/components/sections/Footer.tsx`).
- **Privacy policy** — footer, stesso file. Manca sia il link sia il testo
  della policy.
- **Coordinate GPS della struttura** — senza queste non è possibile:
  - mostrare la mappa in `/come-raggiungerci` (il contenitore è pronto, vedi
    `src/pages/ComeRaggiungerci.tsx`, ma serve un embed OpenStreetMap con
    bbox/marker basato su lat/lon)
  - generare i link "Apri in Google Maps" / "Apri in Apple Maps"
  - includere `geo` nel JSON-LD in `index.html`
- **Indicazioni In auto / In treno / In aereo** — struttura pronta in
  `/come-raggiungerci`, mancano tempi, uscite autostradali, stazioni.

Nessuno di questi punti è stato inventato o approssimato: dove il dato non
c'era, è rimasto `[DA COMPLETARE]`.

## Note tecniche

- Palette e font (Fraunces/Inter) definiti come design token in
  `src/index.css` (blocco `@theme` di Tailwind v4).
- Lightbox della galleria è custom, senza librerie esterne
  (`src/components/ui/lightbox.tsx`): Esc, frecce, focus trap, ripristino del
  focus alla miniatura di partenza, chiusura al click sullo sfondo, blocco
  scroll del body, swipe orizzontale su mobile.
- Il CIN (`IT078157C2Y4E3QZRP`) è in chiaro nel footer e nel JSON-LD in
  `index.html`.
