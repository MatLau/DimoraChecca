import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbox, type LightboxImage } from '@/components/ui/lightbox'
import { useSectionMotion } from '@/lib/motion'
import { IMG_BASE } from '@/lib/utils'

const WIDE_WIDTHS = [480, 800, 1280, 1600]
const TALL_WIDTHS = [400, 600, 900, 1200]

// Fila 1 (scorre verso sinistra): bb3, bb7, bb21, bb2, bb16
const fila1: LightboxImage[] = [
  {
    name: 'gallery-terrazza2',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Terrazza coperta con vista su montagne e uliveto',
  },
  {
    name: 'gallery-salone',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Salone con camino e porta sulla terrazza',
  },
  {
    name: 'gallery-ingresso',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Ingresso con parete in perlinato bianco',
  },
  {
    name: 'gallery-bagno-marmo',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 1200,
    alt: 'Bagno con piano in marmo verde e finestra aperta sul verde',
  },
  {
    name: 'gallery-bagno-grigio',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Bagno con phon a muro',
  },
]

// Fila 2 (scorre verso destra): bb5, bb4, bb12, bb17, bb9, bb10
const fila2: LightboxImage[] = [
  {
    name: 'gallery-vasca',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Bagno con vasca ad angolo',
  },
  {
    name: 'gallery-bagno-verde',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Bagno con piano in marmo verde e specchio tondo',
  },
  {
    name: 'gallery-camera-verde',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Camera con copriletto verde e climatizzatore',
  },
  {
    name: 'gallery-camera-bordeaux',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Camera con copriletto bordeaux',
  },
  {
    name: 'gallery-targa-sole',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Targa dipinta a mano della stanza Sole',
  },
  {
    name: 'gallery-targa-ulivo',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Targa dipinta a mano della stanza Ulivo',
  },
]

const allImages = [...fila1, ...fila2]

function MarqueePhoto({
  image,
  index,
  dupe,
  onOpen,
}: {
  image: LightboxImage
  index: number
  dupe: boolean
  onOpen: (index: number) => void
}) {
  const srcSet = image.widths
    .map((w) => `${IMG_BASE}${image.name}-${w}.webp ${w}w`)
    .join(', ')
  const desktopW = Math.round((260 * image.width) / image.height)
  const mobileW = Math.round((180 * image.width) / image.height)

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      tabIndex={dupe ? -1 : undefined}
      aria-label={dupe ? undefined : `Apri in grande: ${image.alt}`}
      className="group shrink-0 cursor-pointer overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta"
    >
      <img
        src={`${IMG_BASE}${image.name}-${image.widths[1]}.webp`}
        srcSet={srcSet}
        sizes={`(min-width: 768px) ${desktopW}px, ${mobileW}px`}
        width={image.width}
        height={image.height}
        loading="lazy"
        draggable={false}
        alt={dupe ? '' : image.alt}
        className="h-[180px] w-auto max-w-none transition-transform duration-[400ms] ease-out motion-safe:group-hover:scale-105 md:h-[260px]"
      />
    </button>
  )
}

function MarqueeRow({
  images,
  baseIndex,
  duration,
  reverse,
  onOpen,
}: {
  images: LightboxImage[]
  baseIndex: number
  duration: number
  reverse?: boolean
  onOpen: (index: number) => void
}) {
  return (
    <div className="marquee-row">
      <div
        className="marquee-track flex w-max"
        data-direction={reverse ? 'right' : undefined}
        style={{ animationDuration: `${duration}s` }}
      >
        {[false, true].map((dupe) => (
          <div
            key={String(dupe)}
            className="flex gap-4 pr-4"
            aria-hidden={dupe || undefined}
            data-marquee-dupe={dupe || undefined}
          >
            {images.map((image, i) => (
              <MarqueePhoto
                key={image.name}
                image={image}
                index={baseIndex + i}
                dupe={dupe}
                onOpen={onOpen}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Galleria() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const enter = useSectionMotion()

  return (
    <section id="galleria" className="scroll-mt-20 py-20 md:py-28">
      <motion.div {...enter}>
        <h2 className="mx-auto max-w-6xl px-6 font-display text-3xl text-grafite md:text-4xl lg:px-10">
          Galleria
        </h2>

        <div className="mt-10 space-y-4">
          <MarqueeRow
            images={fila1}
            baseIndex={0}
            duration={40}
            onOpen={setActiveIndex}
          />
          <MarqueeRow
            images={fila2}
            baseIndex={fila1.length}
            duration={55}
            reverse
            onOpen={setActiveIndex}
          />
        </div>
      </motion.div>

      {activeIndex !== null && (
        <Lightbox
          images={allImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
