import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/* Cambiando route il browser mantiene lo scroll corrente: aprendo la privacy
   dal link nel footer si atterrerebbe in fondo alla nuova pagina.

   Regole:
   - cambio pagina con un'ancora (es. /#vi-aspettiamo dal pulsante Prenota):
     si porta sulla sezione, che il router da solo non raggiunge;
   - cambio pagina senza ancora: si torna in cima;
   - ancore nella stessa pagina (#galleria dalla nav): non tocchiamo nulla, le
     gestisce il browser mantenendo lo scorrimento morbido;
   - indietro/avanti: lasciamo al browser il ripristino della posizione;
   - primo caricamento: interveniamo solo se c'è un'ancora, perché all'apertura
     l'elemento non esiste ancora e il browser ha già rinunciato a raggiungerlo.

   Gli spostamenti sono istantanei di proposito: html ha scroll-behavior:
   smooth, quindi un'animazione ripercorrerebbe l'intera pagina. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  const previousPathname = useRef<string | null>(null)

  useEffect(() => {
    const previous = previousPathname.current
    previousPathname.current = pathname

    if (navigationType === 'POP') return
    if (previous === pathname) return

    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'instant' })
        return
      }
    }

    if (previous !== null) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash, navigationType])

  return null
}
