import { Nav } from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import { Directions } from '@/components/Directions'
import { MapEmbed } from '@/components/MapEmbed'

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

          <MapEmbed className="mt-8" />

          <Directions className="mt-14" />

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
