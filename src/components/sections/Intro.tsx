import { ArrowUpRight } from 'lucide-react'
import { TextParallaxContent } from '@/components/ui/text-parallax-content-scroll'
import { Button } from '@/components/ui/button'
import { IMG_BASE } from '@/lib/utils'

const IMG_WIDTHS = [480, 800, 1200, 1448]
const IMG_NAME = 'intro-soggiorno'

const stats = [
  { value: '4', label: 'Camere' },
  { value: '3', label: 'Unità' },
  { value: '∞', label: 'Tramonti' },
]

export function Intro() {
  const srcSet = IMG_WIDTHS.map((w) => `${IMG_BASE}${IMG_NAME}-${w}.webp ${w}w`).join(
    ', ',
  )

  return (
    <div id="la-dimora" className="scroll-mt-8 bg-bianco-calce pt-32 md:pt-40">
      <TextParallaxContent
        imgSrc={`${IMG_BASE}${IMG_NAME}-800.webp`}
        imgSrcSet={srcSet}
        imgAlt="Soggiorno accogliente con divano, vecchia TV e piante di ulivo e agrumi, illuminato dalla luce calda del tramonto"
        subheading="Il benvenuto"
        heading="Comfort, relax e tranquillità."
        badge="Buongiorno"
      >
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 text-center md:px-12">
          <p className="text-lg leading-relaxed text-grafite/80 md:text-xl">
            Il luogo ideale per trascorrere una vacanza all'insegna del
            comfort, del relax e della tranquillità. La struttura dispone di 4
            camere spaziose e confortevoli, tutte dotate di climatizzatore e
            TV.
          </p>

          <div className="mt-10 flex items-center justify-center gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i > 0 ? 'border-l border-grafite/15 pl-8 sm:pl-12' : ''
                }
              >
                <p className="font-display text-3xl text-terracotta md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-grafite/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="mt-10">
            <a href="#camere">
              Vedi le camere
              <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </a>
          </Button>
        </div>
      </TextParallaxContent>
    </div>
  )
}
