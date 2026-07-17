import { motion } from 'framer-motion'
import { useSectionMotion } from '@/lib/motion'

function InfoBlock({ titolo, righe }: { titolo: string; righe: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-lg text-grafite">{titolo}</h3>
      <ul className="mt-2 space-y-1.5 text-grafite/75">
        {righe.map((riga) => (
          <li key={riga}>{riga}</li>
        ))}
      </ul>
    </div>
  )
}

export function Contatti() {
  const enter = useSectionMotion()

  return (
    <section className="bg-blu-brezza/5 px-6 py-20 md:px-12 md:py-28">
      <motion.div
        {...enter}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2"
      >
        <div id="raggiungerci" className="scroll-mt-8">
          <h2 className="font-serif text-3xl text-grafite md:text-4xl">
            Come raggiungerci
          </h2>
          <p className="mt-4 text-lg text-grafite/80">
            C/DA Frasso, 84 — 87064 Corigliano Rossano (CS)
          </p>
          <p className="mt-1 text-grafite/70">Coordinate: [DA COMPLETARE]</p>

          <div className="mt-6 flex h-56 w-full items-center justify-center rounded-2xl bg-bianco-calce text-center text-grafite/70">
            <p className="max-w-xs">
              Mappa non disponibile: mancano le coordinate GPS della
              struttura.
              <br />
              [DA COMPLETARE]
            </p>
          </div>
          <p className="mt-3 text-sm text-grafite/60">
            I link "Apri in Google Maps" e "Apri in Apple Maps" compariranno
            qui non appena saranno note le coordinate. [DA COMPLETARE]
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <InfoBlock titolo="In auto" righe={['[DA COMPLETARE]']} />
            <InfoBlock titolo="In treno" righe={['[DA COMPLETARE]']} />
            <InfoBlock titolo="In aereo" righe={['[DA COMPLETARE]']} />
          </div>
        </div>

        <div id="contatti" className="scroll-mt-8">
          <h2 className="font-serif text-3xl text-grafite md:text-4xl">
            Contatti
          </h2>
          <a
            href="tel:+393299855243"
            className="mt-6 block font-serif text-4xl text-terracotta transition-opacity hover:opacity-80"
          >
            329 985 5243
          </a>
          <div className="mt-6 flex flex-col gap-2 text-lg text-grafite/90">
            <a
              href="mailto:antoniogiuseppeurso79@gmail.com"
              className="underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
            >
              antoniogiuseppeurso79@gmail.com
            </a>
            <a
              href="https://www.facebook.com/messages/t/61591586182310/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
            >
              Scrivici su Messenger
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61591586182310"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
            >
              La nostra pagina Facebook
            </a>
          </div>
          <p className="mt-8 text-grafite/80">Se ti perdi, chiamaci.</p>
        </div>
      </motion.div>
    </section>
  )
}
