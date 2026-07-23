import { motion } from 'framer-motion'
import { useSectionMotion, useStaggerMotion } from '@/lib/motion'

interface Servizio {
  titolo: string
  descrizione: string
}

const servizi: Servizio[] = [
  {
    titolo: 'Terrazza panoramica',
    descrizione:
      'Vista su uliveto e montagne: lo spazio dove passa la giornata chi soggiorna da noi.',
  },
  {
    titolo: 'Climatizzatore e TV',
    descrizione: 'In ogni camera, senza eccezioni.',
  },
  {
    titolo: 'Salone con camino',
    descrizione: 'Spazio comune con accesso diretto alla terrazza.',
  },
  {
    titolo: 'Bagno privato o condiviso',
    descrizione:
      'Privato per Brezza blu e Luna, in comune tra le due stanze del Tramonto.',
  },
  {
    titolo: 'Wi-Fi',
    descrizione: 'Gratuito e attivo in tutte le camere.',
  },
  {
    titolo: 'Parcheggio',
    descrizione: 'Privato, riservato agli ospiti della struttura.',
  },
]

function ServizioCard({ servizio }: { servizio: Servizio }) {
  const { item } = useStaggerMotion()
  return (
    <motion.div
      variants={item}
      className="bg-bianco-calce p-8 transition-colors duration-150 hover:bg-terracotta/5 md:p-10"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-ambra bg-ambra/30">
        <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
      </div>
      <h3 className="mb-3 font-display text-2xl text-grafite">{servizio.titolo}</h3>
      <p className="leading-relaxed text-grafite/70">{servizio.descrizione}</p>
    </motion.div>
  )
}

export function Servizi() {
  const enter = useSectionMotion()
  const { containerProps } = useStaggerMotion()

  return (
    <section id="servizi" className="scroll-mt-20 py-24 md:py-32">
      <motion.div {...enter} className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-verde-ulivo">
            I nostri servizi
          </p>
          <h2 className="font-display text-4xl text-grafite md:text-5xl">
            Tutto ciò che serve
            <br />
            <span className="italic text-terracotta">per sentirsi a casa.</span>
          </h2>
        </div>

        <motion.div
          {...containerProps}
          className="grid gap-px bg-grafite/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servizi.map((servizio) => (
            <ServizioCard key={servizio.titolo} servizio={servizio} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
