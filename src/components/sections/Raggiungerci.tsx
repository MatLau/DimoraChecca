import { motion } from 'framer-motion'
import { useSectionMotion } from '@/lib/motion'

function InfoBlock({ titolo, righe }: { titolo: string; righe: string[] }) {
  return (
    <div>
      <h3 className="font-display text-xl text-grafite">{titolo}</h3>
      <ul className="mt-3 space-y-2 text-grafite/80">
        {righe.map((riga) => (
          <li key={riga}>{riga}</li>
        ))}
      </ul>
    </div>
  )
}

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
        <p className="mt-1 text-grafite/70">Coordinate: [DA COMPLETARE]</p>

        <div className="mt-8 flex h-80 w-full items-center justify-center rounded-md bg-bianco-calce text-center text-grafite/70 md:h-96">
          <p className="max-w-xs">
            Mappa non disponibile: mancano le coordinate GPS della struttura.
            <br />
            [DA COMPLETARE]
          </p>
        </div>
        <p className="mt-3 text-sm text-grafite/70">
          I link "Apri in Google Maps" e "Apri in Apple Maps" compariranno
          qui non appena saranno note le coordinate. [DA COMPLETARE]
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <InfoBlock titolo="In auto" righe={['[DA COMPLETARE]']} />
          <InfoBlock titolo="In treno" righe={['[DA COMPLETARE]']} />
          <InfoBlock titolo="In aereo" righe={['[DA COMPLETARE]']} />
        </div>
      </motion.div>
    </section>
  )
}
