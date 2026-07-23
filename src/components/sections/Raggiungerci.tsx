import { motion } from 'framer-motion'
import { useSectionMotion } from '@/lib/motion'
import { Directions } from '@/components/Directions'

export function Raggiungerci() {
  const enter = useSectionMotion()

  return (
    <section
      id="come-raggiungerci"
      className="scroll-mt-20 px-6 py-20 md:px-12 md:py-28"
    >
      <motion.div {...enter} className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-grafite md:text-4xl">
          Come raggiungerci
        </h2>
        <p className="mt-4 text-lg text-grafite/80">
          C/DA Frasso, 84 — 87064 Corigliano Rossano (CS)
        </p>

        <div className="mt-8 overflow-hidden rounded-md bg-bianco-calce">
          <iframe
            title="Mappa della Dimora Checca"
            src="https://maps.google.com/maps?q=39.614194,16.621500&z=16&output=embed"
            className="h-80 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-sm text-grafite/70">
          <a
            href="https://www.google.com/maps/search/?api=1&query=39.614194,16.621500"
            target="_blank"
            rel="noreferrer"
            className="text-terracotta underline-offset-2 hover:underline"
          >
            Apri in Google Maps
          </a>
          <span className="mx-2 text-grafite/40">·</span>
          <a
            href="https://maps.apple.com/?ll=39.614194,16.621500&q=Dimora%20Checca"
            target="_blank"
            rel="noreferrer"
            className="text-terracotta underline-offset-2 hover:underline"
          >
            Apri in Apple Maps
          </a>
        </p>

        <Directions className="mt-14" />
      </motion.div>
    </section>
  )
}
