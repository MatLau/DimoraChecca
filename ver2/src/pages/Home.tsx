import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Spread } from '@/components/Spread'
import { RoomsCarousel } from '@/components/RoomsCarousel'
import { GalleryStrip } from '@/components/GalleryStrip'
import { Contatti } from '@/components/Contatti'
import { Footer } from '@/components/Footer'

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <div id="benvenuto">
          <Hero />
        </div>

        <Spread
          image={{
            name: 'intro-soggiorno',
            widths: [480, 800, 1200, 1448],
            width: 1448,
            height: 1086,
            alt: 'Soggiorno accogliente con divano, vecchia TV e piante di ulivo e agrumi, illuminato dalla luce calda del tramonto',
          }}
          eyebrow="Il benvenuto"
          title="Comfort, relax e tranquillità."
        >
          <p>
            Il luogo ideale per trascorrere una vacanza all'insegna del
            comfort, del relax e della tranquillità.
          </p>
          <p>
            La struttura dispone di 4 camere spaziose e confortevoli, tutte
            dotate di climatizzatore e TV.
          </p>
        </Spread>

        <RoomsCarousel />

        <Spread
          reverse
          image={{
            name: 'gallery-terrazza2',
            widths: [480, 800, 1280, 1600],
            width: 1600,
            height: 900,
            alt: 'Terrazza coperta con vista su montagne e uliveto',
          }}
          eyebrow="La terrazza"
          title="Uliveto, montagne, e un caffè al mattino."
        >
          <p>
            Coperta, arredata con divanetti e tavoli, affacciata sull'uliveto
            e sulle montagne di Corigliano Rossano. È lo spazio dove passa la
            maggior parte della giornata chi soggiorna da noi.
          </p>
        </Spread>

        <GalleryStrip />

        <Contatti />
      </main>
      <Footer />
    </>
  )
}
