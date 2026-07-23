import { Nav } from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

function InfoBlock({
  titolo,
  righe,
}: {
  titolo: string
  righe: string[]
}) {
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

export function ComeRaggiungerci() {
  return (
    <>
      <Nav
        navLinks={[{ label: 'Torna alla home', href: '/' }]}
        cta={{ label: 'Prenota', href: 'tel:+393299855243' }}
        scrolled
      />

      <main className="px-6 pb-24 pt-20 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl text-grafite md:text-4xl">
            Come raggiungerci
          </h1>
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

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <InfoBlock
              titolo="In auto"
              righe={['[DA COMPLETARE]']}
            />
            <InfoBlock
              titolo="In treno"
              righe={['[DA COMPLETARE]']}
            />
            <InfoBlock
              titolo="In aereo"
              righe={['[DA COMPLETARE]']}
            />
          </div>

          <div className="mt-16 border-t border-grafite/10 pt-8 text-center">
            <p className="text-grafite/80">Se ti perdi, chiamaci.</p>
            <a
              href="tel:+393299855243"
              className="mt-2 inline-block font-display text-3xl text-terracotta transition-opacity hover:opacity-80"
            >
              329 985 5243
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
