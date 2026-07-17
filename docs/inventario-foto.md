# Inventario foto — B&B Dimora Checca

21 file in `img/`. Tutte scatti da telefono, 2048x1536 (orizzontali) o 1536x2048 (verticali).
Nessun EXIF di orientamento: le dimensioni sul file sono già quelle giuste, non serve ruotare.

Questo inventario è una prima passata. È un punto di partenza da **verificare**, non una fonte
di verità: conteneva già un errore di attribuzione (`bb21` classificata come terrazza quando è
l'ingresso Luna). Apri le foto, conferma o correggi, poi progetta.

---

## 1. Il materiale forte

### La terrazza — `bb1.jpeg`, `bb3.jpeg`
Due scatti quasi uguali della stessa terrazza coperta. Orizzontali, luce piena di mattina,
cielo azzurro senza nuvole, montagne sullo sfondo, uliveto e palme davanti, muretto bianco,
divanetti grigi in resina, tavoli e ombrelloni blu.

Sono le uniche foto luminose, larghe e non storte del lotto. **Sono il sito.**

- Usare `bb1.jpeg` come hero, `bb3.jpeg` in galleria. Sono quasi identiche: valutare se tenerne
  una sola.
- **Crop obbligatorio in alto**: il soffitto in cemento è macchiato e occupa il 20% superiore.
  Tagliarlo. Il crop utile è la fascia centrale: cielo + montagne + uliveto + muretto + arredi.
- 16:9 regge bene dopo il taglio del soffitto. 4:5 no, si perde la vista.
- Zona piatta per il testo: il cielo, terzo superiore dopo il crop. È **chiaro**, quindi il testo
  va scuro, oppure serve uno scrim.

> **Nota sul componente 21st (`landing.md`).** L'hero applica `bg-black/60` sopra l'immagine e
> scrive in bianco. Quell'overlay è tarato su un wallpaper scuro: sulla terrazza soleggiata
> trasforma il mezzogiorno in sera e butta via l'unica cosa buona che abbiamo.
> Sostituire con un gradiente dal basso (`from-black/50 via-black/10 to-transparent`) e tenere
> il testo nella metà inferiore, sopra il muretto e gli arredi. Verificare il contrasto AA lì.

### Le targhe delle camere — `bb20`, `bb9`, `bb10`, `bb11`, `bb8`/`bb19`
Cartelli in legno dipinti a mano, uno per camera, appesi a spago:

| File | Nome | Soggetto dipinto | Formato |
|---|---|---|---|
| `bb20.jpeg` | Camera **Tramonto** | sfumatura rosso-arancio-giallo | vert |
| `bb9.jpeg` | Camera **Sole** | sole giallo su fondo ciano | vert |
| `bb10.jpeg` | Camera **Ulivo** | ramo d'olivo su fondo turchese | vert |
| `bb11.jpeg` | Camera **Brezza blu** | scorcio bianco-blu con bouganville | vert |
| `bb21.jpeg` (orizz) · `bb19.jpeg` (orizz) · `bb8.jpeg` (vert) | Camera **Luna** | targhetta blu glitter su perlinato bianco | 3 scatti dello stesso angolo |

**Questa è l'identità del posto.** Sono fatti a mano, hanno un nome ciascuno, e da soli
raccontano più di qualsiasi testo. Il sito va costruito su questi, non sulle foto delle stanze.

### Come si mappano sulla struttura (confermato dal proprietario)

Cinque targhe = cinque porte, ma **tre sole unità vendibili**:

| Unità | Targa sulla porta | Tipo | Bagno |
|---|---|---|---|
| Brezza blu | `bb11` | matrimoniale | privato |
| Luna | solo in `bb21`, di sfuggita | matrimoniale | privato |
| Tramonto | `bb20` | **quadrupla**: due stanze + un bagno | uno, in comune tra le due stanze |

**Sole (`bb9`) e Ulivo (`bb10`) sono le due stanze interne del Tramonto**, non camere separate.
L'unità è sdoppiabile, ma per decisione del proprietario **il sito espone solo tre opzioni**.
Le loro targhe non vanno usate come card: finirebbero in galleria, come dettaglio.

La frase ufficiale "dispone di 4 camere" resta vera (conta le stanze da letto: Brezza blu, Luna,
Sole, Ulivo) ma **non descrive le opzioni prenotabili**. Va nell'intro, mai nelle card.

⚠️ **Manca la foto della targa Luna.** È l'unica delle tre unità senza uno scatto dedicato:
compare solo piccola e defilata nell'angolo di `bb21`. Serve uno scatto come gli altri — targa
da sola, verticale, centrata, luce naturale. Senza, la terza card non è uniforme alle altre due.

Tutte verticali (tranne `bb19`), 4:5 nativo, fondo neutro. Perfette come card.
`bb11` ha la targa decentrata a destra su parete bianca vuota: buona per un'apertura di sezione.

---

## 2. Le camere (interni)

Fotografano male. Verticali storte, camera puntata verso l'alto, molto soffitto, ingombri in
primo piano. Servono crop aggressivi.

| File | Cosa c'è | Verdetto |
|---|---|---|
| `bb12.jpeg` vert | Copriletto verde, **split AC + TV a muro** visibili, finestra aperta | Tienila. È la prova visiva di "climatizzatore e TV". Storta e con lo stipite in primo piano a destra: crop stretto sul letto + AC. |
| `bb17.jpeg` vert | Copriletto bordeaux, AC, quadretto sacro, comodino | Tienila. La più leggibile delle camere. Crop 4:5 sul letto. |
| `bb15.jpeg` vert | **Testata intagliata scura** (bel pezzo), copriletto blu | Sottoesposta, primo piano occupato da tavolo e coppe di vetro blu. Salvabile solo con crop pesante sulla testata + schiarita. |
| `bb13.jpeg` / `bb14.jpeg` orizz | Angolo con armadio e ulivo finto, obiettivo verso il soffitto | Quasi identiche, entrambe deboli. Al massimo una, ritagliata sull'ulivo finto come dettaglio. Altrimenti scartare entrambe. |

**Quattro camere, quattro foto utilizzabili? No.** Ne ho al massimo due decenti (`bb12`, `bb17`)
e una recuperabile (`bb15`). Non bastano per quattro card una per camera.

---

## 3. Bagni

| File | Cosa c'è | Verdetto |
|---|---|---|
| `bb5.jpeg` vert | **Vasca ad angolo**, piastrelle marmo bianco | Il pezzo forte dei bagni. Una vasca ad angolo è un argomento di vendita vero. |
| `bb4.jpeg` vert | Piano in marmo verde, specchio tondo, finestra | Il bagno più fotogenico. Luce naturale. |
| `bb16.jpeg` vert | Piastrelle grigie, **phon a muro**, box doccia, bidet | Prova visiva del phon. Utile. |
| `bb2.jpeg` orizz | Piano marmo verde, finestra aperta sul verde | Ok, orizzontale, alternativa a `bb4`. |

---

## 4. Spazi comuni

| File | Cosa c'è | Verdetto |
|---|---|---|
| `bb7.jpeg` orizz | Salone grande, **camino**, due tavoli da pranzo, porta-finestra sulla terrazza | Utile: mostra la scala dello spazio e il collegamento con la terrazza. Arredo datato ma onesto. |
| `bb6.jpeg` orizz | Zona pranzo + cucina, divani in velluto senape, frigo, cucina a gas | ⚠️ **C'è una persona nel vano della porta** (figura femminile parziale). Va ritagliata via o la foto va esclusa. Non pubblicare senza liberatoria. |
| `bb21.jpeg` orizz · `bb19.jpeg` orizz · `bb8.jpeg` vert | Ingresso, **parete in perlinato bianco**, porta in legno, applique a conchiglia, porta bianca centinata con battente in ottone, targa Luna | Tre scatti dello stesso angolo. **`bb21` è la migliore**: dritta, luce morbida, porta intera, targa leggibile. Il perlinato bianco è la cosa più carina della casa dopo la terrazza. Tenere solo `bb21`. |
| `bb18.jpeg` vert | Corridoio con due targhe alle pareti | Buio e stretto. Marginale. Solo come texture in galleria, se serve. |

---

## 5. Cosa manca

Nessuna foto di:

- **Esterno / facciata / ingresso dalla strada.** Non c'è. Chi arriva non sa cosa cercare.
- **Il mare.** Il claim è "a pochi minuti dal mare" e non c'è una sola foto del mare o della
  spiaggia. La sezione Dintorni, così, non ha immagini. → **Saltare la sezione Dintorni**, oppure
  procurare foto.
- **La colazione.** Nessuna. Se la colazione c'è, è la foto che manca di più.
- **Dettagli / atmosfera**: niente primi piani, niente luce di sera, niente vita.

---

## 6. Duplicati

- `bb1` ≈ `bb3` (terrazza) → tenerne 1 o 2
- `bb21` ≈ `bb19` ≈ `bb8` (ingresso Luna) → tenerne 1, la migliore è `bb21`
- `bb13` ≈ `bb14` (angolo armadio) → tenerne 0 o 1
- `bb2` e `bb4` sembrano **lo stesso bagno** (piano in marmo verde) da due angoli. Da confermare
  aprendo le due foto: se è così, uno dei quattro bagni non è documentato.

Su 21 file, le scene realmente distinte sono circa **16**.

---

## 7. Palette

Campionata dalle foto, non scelta a tavolino. I valori grezzi presi dalle targhe sono saturi
perché fotografati con luce a incandescenza (il turchese dell'Ulivo esce `#00CDFC`, il giallo
del Sole `#F8F798`): come token UI vanno desaturati. Sotto, i valori già corretti.

```css
:root {
  --blu-brezza:  #1C6E93; /* dal turchese delle targhe Ulivo/Sole, desaturato */
  --azzurro-cielo: #A9C6DC; /* dal cielo della terrazza (#8EB1D0 / #B3CEDD) */
  --terracotta:  #A55939; /* diretto dalla targa Tramonto */
  --verde-ulivo: #6E7A55; /* dalle chiome dell'uliveto */
  --bianco-calce: #F5F2EC; /* dal muretto della terrazza */
  --grafite:     #2A2724; /* testo */
}
```

Il filo conduttore è già lì e non l'ho inventato: **blu, bianco, ulivo, terracotta**. Le targhe
dipinte a mano e la terrazza dicono la stessa cosa. Usare `--terracotta` solo come accento
(CTA, sottolineature), non come fondo.

---

## 8. Conseguenze sul layout

1. **L'hero può venire solo da una foto orizzontale.** Le candidate sono la terrazza (`bb1`),
   il salone col camino (`bb7`) e l'ingresso in perlinato (`bb21`). Vince la terrazza, senza
   discussione: è l'unica con luce piena, profondità e cielo. `bb21` è troppo chiusa per un
   fondo a tutto schermo, ma è ottima come immagine di apertura della sezione camere.
2. **La galleria masonry non ha senso.** 14 foto, metà verticali e metà orizzontali, qualità
   disomogenea. Meglio poche foto grandi e selezionate che una griglia che espone i vuoti.
3. **La sezione camere va costruita sulle targhe, non sugli interni, e ha TRE card.** Una per
   unità vendibile: Brezza blu, Luna, Tramonto. Foto della targa (verticale, 4:5, fondo neutro),
   nome, tipo. Le foto di interni decenti stanno in galleria, non nelle card: non so quale
   interno appartenga a quale camera, e associarli sarebbe inventare.
   Quattro card sarebbero un errore: chi prenota si aspetterebbe quattro opzioni e non le
   troverebbe.
4. **Niente sezione Dintorni** finché non ci sono foto del mare.
