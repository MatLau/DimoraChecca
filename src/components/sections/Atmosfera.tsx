import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { TextParallaxContent } from '@/components/ui/text-parallax-content-scroll'
import { Button } from '@/components/ui/button'
import { IMG_BASE } from '@/lib/utils'

const WIDTHS = [480, 800, 1280, 1600]

interface Panel {
  name: string
  alt: string
  subheading: string
  heading: string
  paragraph: string
  cta: { text: string; to: string }
}

const panels: Panel[] = [
  {
    name: 'gallery-terrazza2',
    alt: 'Terrazza coperta con vista su montagne e uliveto',
    subheading: 'La terrazza',
    heading: 'Uliveto, montagne, e un caffè al mattino.',
    paragraph:
      "Coperta, arredata con divanetti e tavoli, affacciata sull'uliveto e sulle montagne di Corigliano Rossano. È lo spazio dove passa la maggior parte della giornata chi soggiorna da noi.",
    cta: { text: 'Vedi le camere', to: '#camere' },
  },
  {
    name: 'gallery-salone',
    alt: 'Salone con camino e porta sulla terrazza',
    subheading: 'Il salone',
    heading: 'Un camino, due tavoli, la porta sempre aperta.',
    paragraph:
      "Lo spazio comune della casa, con il camino e l'accesso diretto alla terrazza. Qui la struttura si racconta meglio che in qualsiasi descrizione.",
    cta: { text: 'Scopri la galleria', to: '#galleria' },
  },
  {
    name: 'gallery-ingresso',
    alt: 'Ingresso con parete in perlinato bianco',
    subheading: 'I dettagli',
    heading: 'Targhe dipinte a mano, una per camera.',
    paragraph:
      "Ogni camera ha il proprio cartello, dipinto a mano e appeso all'ingresso. Sono il primo dettaglio che si nota entrando, e il più personale di tutta la casa.",
    cta: { text: 'Come raggiungerci', to: '#come-raggiungerci' },
  },
]

function PanelContent({ panel }: { panel: Panel }) {
  const isRoute = panel.cta.to.startsWith('/')
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 text-center md:px-12">
      <p className="text-lg leading-relaxed text-grafite/80 md:text-xl">
        {panel.paragraph}
      </p>
      <Button asChild size="lg" className="mt-8">
        {isRoute ? (
          <Link to={panel.cta.to}>
            {panel.cta.text}
            <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </Link>
        ) : (
          <a href={panel.cta.to}>
            {panel.cta.text}
            <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </a>
        )}
      </Button>
    </div>
  )
}

export function Atmosfera() {
  return (
    <div className="bg-bianco-calce">
      {panels.map((panel) => {
        const srcSet = WIDTHS.map(
          (w) => `${IMG_BASE}${panel.name}-${w}.webp ${w}w`,
        ).join(', ')
        return (
          <TextParallaxContent
            key={panel.name}
            imgSrc={`${IMG_BASE}${panel.name}-${WIDTHS[1]}.webp`}
            imgSrcSet={srcSet}
            imgAlt={panel.alt}
            subheading={panel.subheading}
            heading={panel.heading}
          >
            <PanelContent panel={panel} />
          </TextParallaxContent>
        )
      })}
    </div>
  )
}
