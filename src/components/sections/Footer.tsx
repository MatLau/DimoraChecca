import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const reduce = useReducedMotion()
  const footerRef = useRef<HTMLElement>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const el = footerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowBackToTop(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      <footer ref={footerRef} className="bg-grafite py-12 text-bianco-calce/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between lg:px-10">
          <div className="leading-none">
            <div className="font-script text-2xl text-ambra">Dimora</div>
            <div className="-mt-1 font-display text-sm uppercase tracking-[0.3em] text-bianco-calce">
              Checca
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-center text-sm md:flex-row md:text-left">
            <div className="space-y-1">
              <p>B&amp;B Dimora Checca — C/DA Frasso, 84, 87064 Corigliano Rossano (CS)</p>
              <p>
                P.IVA [DA COMPLETARE] · CIN IT078157C2Y4E3QZRP · Privacy [DA
                COMPLETARE]
              </p>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61591586182310"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pagina Facebook di B&B Dimora Checca"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-bianco-calce/70 transition-colors hover:text-ambra"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Torna all'inizio della pagina"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-terracotta text-bianco-calce shadow-lg transition-colors hover:bg-terracotta/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
