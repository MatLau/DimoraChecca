# B&B Dimora Kekka — sito vetrina (v2)

Vite + React 19 + TypeScript + Tailwind CSS v4. Vetrina statica, nessun
backend, nessun form: le conversioni sono telefono, email e Messenger.

Questa è una seconda proposta di landing page per lo stesso B&B (stessi
contenuti e foto della v1 nella cartella principale), con un impianto
diverso:

- **Nessuna nav fissa/glass**: una barra semplice in cima, in flusso normale,
  non sovrapposta all'hero. Niente da sincronizzare con lo scroll.
- **Pagina unica**: "Come raggiungerci" e "Contatti" sono sezioni della
  stessa pagina (ancore), non una route separata.
- **Spread editoriali alternati**: blocchi immagine+testo a tutta larghezza
  che alternano lato (`Spread.tsx`), invece di card o pannelli parallax.
- **Camere e Galleria come filmstrip**: righe orizzontali con scroll-snap e
  frecce prev/next, non griglie.
- **Niente parallax/scale/glass**: solo fade + spostamento verticale
  all'ingresso in viewport, una volta sola (`lib/motion.ts`), rispettando
  `prefers-reduced-motion` ovunque.

## Sviluppo

```bash
npm install
npm run dev
```

## Build di produzione

```bash
npm run build
```

## Struttura

```
src/
  components/
    ui/            button, lightbox (riusati dalla v1, generici)
    Nav.tsx        barra superiore semplice, non fissa
    Hero.tsx       hero centrato, singola CTA primaria
    Spread.tsx     blocco editoriale immagine+testo alternato
    RoomsCarousel.tsx   filmstrip camere con scroll-snap
    GalleryStrip.tsx    filmstrip galleria con scroll-snap + lightbox
    Contatti.tsx   sezione unica "Come raggiungerci" + "Contatti"
    Footer.tsx     footer + freccia "torna su"
  lib/
    utils.ts       helper cn() per className
    motion.ts       varianti scroll-reveal condivise (fade+y, once)
  pages/Home.tsx    composizione della pagina
public/img/         stesse foto convertite in WebP della v1 (riusate)
```

Le foto in `public/img/` sono le stesse della v1: stessi crop, stessa
scelta editoriale (vedi `../docs/inventario-foto.md` nel progetto
principale per il ragionamento completo dietro ogni scelta fotografica).

## Cosa resta da completare

Segnalato anche a video con `[DA COMPLETARE]`.

- **Foto della targa "Camera Luna"** — non esiste uno scatto dedicato; la
  card in `RoomsCarousel.tsx` mostra un'illustrazione al posto della foto.
- **P.IVA** e **Privacy policy** — footer.
- **Coordinate GPS della struttura** — servono per la mappa in "Come
  raggiungerci", i link "Apri in Google/Apple Maps" e il campo `geo` nel
  JSON-LD di `index.html`.
- **Indicazioni In auto / In treno / In aereo** — struttura pronta nella
  sezione "Come raggiungerci", mancano i dettagli.

## Note tecniche

- Palette e font (Fraunces/Inter) sono gli stessi della v1, definiti come
  design token in `src/index.css`: sono stati derivati dalle foto reali
  della struttura, non da uno stile scelto a tavolino, quindi restano validi
  a prescindere dal layout.
- Il CIN (`IT078157C2Y4E3QZRP`) è in chiaro nel footer e nel JSON-LD in
  `index.html`.
- Nessun router: essendo una pagina unica non serve `react-router-dom`.
