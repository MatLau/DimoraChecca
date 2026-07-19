import { useRef } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { TextParallaxContent } from '@/components/ui/text-parallax-content-scroll'
import { Button } from '@/components/ui/button'
import { IMG_BASE } from '@/lib/utils'

const IMG_WIDTHS = [480, 800, 1200, 1448]
const IMG_NAME = 'intro-soggiorno'
const WIDE_WIDTHS = [480, 800, 1280, 1600]

const stats = [
  { value: '4', label: 'Camere' },
  { value: '3', label: 'Unità' },
  { value: '∞', label: 'Tramonti' },
]

function wideSrcSet(name: string) {
  return WIDE_WIDTHS.map((w) => `${IMG_BASE}${name}-${w}.webp ${w}w`).join(', ')
}

/* Due foto sovrapposte e sfalsate (bb7 dietro, bb21 davanti) che scorrono con
   ampiezze diverse — ±25px e ±45px — così sembrano muoversi a profondità
   diverse. Le cornici si muovono nel bianco circostante, quindi non serve
   sovradimensionare le immagini. */
function StaggeredPhotos() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yBack = useTransform(scrollYProgress, [0, 1], [-25, 25])
  const yFront = useTransform(scrollYProgress, [0, 1], [-45, 45])
  const willChange = !reduce && inView ? 'transform' : 'auto'

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{ y: reduce ? 0 : yBack, willChange }}
        className="w-4/5 overflow-hidden rounded-2xl shadow-md"
      >
        <img
          src={`${IMG_BASE}gallery-salone-800.webp`}
          srcSet={wideSrcSet('gallery-salone')}
          sizes="(min-width: 768px) 38vw, 76vw"
          width={1600}
          height={900}
          loading="lazy"
          alt="Salone con camino e porta sulla terrazza"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: reduce ? 0 : yFront, willChange }}
        className="relative z-10 -mt-14 ml-auto w-3/5 md:-mt-20"
      >
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={`${IMG_BASE}gallery-ingresso-800.webp`}
            srcSet={wideSrcSet('gallery-ingresso')}
            sizes="(min-width: 768px) 28vw, 57vw"
            width={1600}
            height={900}
            loading="lazy"
            alt="Ingresso con parete in perlinato bianco"
            className="h-full w-full object-cover"
          />
        </div>
        <span className="absolute -bottom-4 -left-4 rounded-full bg-bianco-calce px-4 py-2 text-xs uppercase tracking-widest text-grafite shadow-md">
          4 camere · 3 unità
        </span>
      </motion.div>
    </div>
  )
}

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
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-28 pt-12 md:grid-cols-2 md:items-center md:gap-16 lg:px-10">
          <div>
            <img
              src={`${IMG_BASE}logo-359.webp`}
              srcSet={`${IMG_BASE}logo-200.webp 200w, ${IMG_BASE}logo-359.webp 359w`}
              sizes="200px"
              width={359}
              height={400}
              loading="lazy"
              alt="Logo di Dimora Checca: illustrazione con bulldog francese e la scritta Dimora Checca"
              className="mb-8 w-[180px] md:w-[200px]"
            />
            <p className="text-lg leading-relaxed text-grafite/80 md:text-xl">
              Il luogo ideale per trascorrere una vacanza all'insegna del
              comfort, del relax e della tranquillità. La struttura dispone di 4
              camere spaziose e confortevoli, tutte dotate di climatizzatore e
              TV.
            </p>

            <div className="mt-10 flex items-center gap-8 sm:gap-12">
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

          <StaggeredPhotos />
        </div>
      </TextParallaxContent>
    </div>
  )
}
