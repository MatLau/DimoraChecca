import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Lightbox, type LightboxImage } from '@/components/ui/lightbox'
import { useSectionMotion, useStaggerMotion } from '@/lib/motion'

const WIDE_WIDTHS = [480, 800, 1280, 1600]
const TALL_WIDTHS = [400, 600, 900, 1200]

interface StripImage extends LightboxImage {
  aspectClass: string
}

const images: StripImage[] = [
  {
    name: 'gallery-terrazza2',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Terrazza coperta con vista su montagne e uliveto',
    aspectClass: 'aspect-[16/9]',
  },
  {
    name: 'gallery-salone',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Salone con camino e porta sulla terrazza',
    aspectClass: 'aspect-[16/9]',
  },
  {
    name: 'gallery-vasca',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Bagno con vasca ad angolo',
    aspectClass: 'aspect-[4/5]',
  },
  {
    name: 'gallery-bagno-verde',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Bagno con piano in marmo verde e specchio tondo',
    aspectClass: 'aspect-[4/5]',
  },
  {
    name: 'gallery-camera-verde',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Camera con copriletto verde e climatizzatore',
    aspectClass: 'aspect-[4/5]',
  },
  {
    name: 'gallery-ingresso',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Ingresso con parete in perlinato bianco',
    aspectClass: 'aspect-[16/9]',
  },
  {
    name: 'gallery-camera-bordeaux',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Camera con copriletto bordeaux',
    aspectClass: 'aspect-[4/5]',
  },
  {
    name: 'gallery-targa-sole',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Targa dipinta a mano della stanza Sole',
    aspectClass: 'aspect-[4/5]',
  },
  {
    name: 'gallery-targa-ulivo',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Targa dipinta a mano della stanza Ulivo',
    aspectClass: 'aspect-[4/5]',
  },
  {
    name: 'gallery-bagno-grigio',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Bagno con phon a muro',
    aspectClass: 'aspect-[4/5]',
  },
]

function Thumb({
  image,
  index,
  onOpen,
}: {
  image: StripImage
  index: number
  onOpen: (index: number) => void
}) {
  const { item } = useStaggerMotion()
  const srcSet = image.widths
    .map((w) => `/img/${image.name}-${w}.webp ${w}w`)
    .join(', ')
  const isWide = image.aspectClass.includes('16/9')

  return (
    <motion.button
      type="button"
      variants={item}
      onClick={() => onOpen(index)}
      aria-label={`Apri in grande: ${image.alt}`}
      className={`${image.aspectClass} group block h-72 shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl sm:h-80 md:h-96 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta`}
    >
      <img
        src={`/img/${image.name}-${image.widths[1]}.webp`}
        srcSet={srcSet}
        sizes={isWide ? '70vw' : '40vw'}
        width={image.width}
        height={image.height}
        loading="lazy"
        alt={image.alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </motion.button>
  )
}

export function GalleryStrip() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const enter = useSectionMotion()
  const { containerProps } = useStaggerMotion()
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollStrip(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: 360 * direction, behavior: 'smooth' })
  }

  return (
    <section id="galleria" className="scroll-mt-8 px-6 py-20 md:px-12 md:py-28">
      <motion.div {...enter} className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-grafite md:text-4xl">
            Galleria
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollStrip(-1)}
              aria-label="Scorri indietro"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-grafite/15 text-grafite transition-colors hover:bg-grafite/5"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollStrip(1)}
              aria-label="Scorri avanti"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-grafite/15 text-grafite transition-colors hover:bg-grafite/5"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          {...containerProps}
          className="snap-strip mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {images.map((image, i) => (
            <Thumb key={image.name} image={image} index={i} onOpen={setActiveIndex} />
          ))}
        </motion.div>
        <p className="mt-2 text-sm text-grafite/50 md:hidden">
          Scorri per vedere tutta la galleria →
        </p>
      </motion.div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
