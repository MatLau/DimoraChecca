export const EMAIL = 'antoniogiuseppeurso79@gmail.com'
export const TELEFONO = 'tel:+393299855243'

/** CTA "Prenota il tuo soggiorno": apre il client di posta con l'oggetto già
 *  compilato, così la richiesta arriva riconoscibile. */
export const MAILTO_PRENOTAZIONE = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Richiesta di disponibilità',
)}`

/** Sezione "Vi aspettiamo" nella home: destinazione del pulsante Prenota nella
 *  barra di navigazione delle pagine interne. */
export const ANCORA_PRENOTA = '/#vi-aspettiamo'
