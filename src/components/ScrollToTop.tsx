import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/* Cambiando route il browser mantiene lo scroll corrente: aprendo la privacy
   dal link nel footer si atterrerebbe in fondo alla nuova pagina. Riportiamo in
   cima a ogni navigazione "in avanti" (click su un link), lasciando invece al
   browser il ripristino della posizione con i tasti indietro/avanti, dove
   tornare al punto da cui si era partiti è il comportamento atteso.

   Il salto è istantaneo di proposito: html ha scroll-behavior: smooth, quindi
   uno scrollTo animato ripercorrerebbe tutta la pagina dal fondo alla cima. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, navigationType])

  return null
}
