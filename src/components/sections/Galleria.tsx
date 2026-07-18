import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbox, type LightboxImage } from '@/components/ui/lightbox'
import { useSectionMotion, useStaggerMotion } from '@/lib/motion'
import { IMG_BASE } from '@/lib/utils'

const WIDE_WIDTHS = [480, 800, 1280, 1600]
const TALL_WIDTHS = [400, 600, 900, 1200]

const fasciaLarga: LightboxImage[] = [
  {
    name: 'gallery-terrazza2',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Terrazza coperta con vista su montagne e uliveto',
  },
  {
    name: 'gallery-ingresso',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Ingresso con parete in perlinato bianco',
  },
  {
    name: 'gallery-salone',
    widths: WIDE_WIDTHS,
    width: 1600,
    height: 900,
    alt: 'Salone con camino e porta sulla terrazza',
  },
]

const fasciaAlta: LightboxImage[] = [
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
  {
    name: 'gallery-bagno-grigio',
    widths: TALL_WIDTHS,
    width: 900,
    height: 1125,
    alt: 'Bagno con phon a muro',
  },
]

const allImages = [...fasciaLarga, ...fasciaAlta]

function Thumb({
  image,
  index,
  ratioClass,
  onOpen,
}: {
  image: LightboxImage
  index: number
  ratioClass: string
  onOpen: (index: number) => void
}) {
  const { item } = useStaggerMotion()
  const srcSet = image.widths
    .map((w) => `${IMG_BASE}${image.name}-${w}.webp ${w}w`)
    .join(', ')
  return (
    <motion.button
      type="button"
      variants={item}
      onClick={() => onOpen(index)}
      aria-label={`Apri in grande: ${image.alt}`}
      className={`${ratioClass} group block w-full cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta`}
    >
      <img
        src={`${IMG_BASE}${image.name}-${image.widths[1]}.webp`}
        srcSet={srcSet}
        sizes={
          ratioClass.includes('4/5')
            ? '(min-width: 768px) 25vw, 50vw'
            : '(min-width: 768px) 33vw, 100vw'
        }
        width={image.width}
        height={image.height}
        loading="lazy"
        alt={image.alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </motion.button>
  )
}

export function Galleria() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const enter = useSectionMotion()
  const { containerProps } = useStaggerMotion()

  return (
    <section id="galleria" className="scroll-mt-20 px-6 py-20 md:px-12 md:py-28">
      <motion.div {...enter} className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-grafite md:text-4xl">
          Galleria
        </h2>

        <motion.div
          {...containerProps}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {fasciaLarga.map((image, i) => (
            <Thumb
              key={image.name}
              image={image}
              index={i}
              ratioClass="aspect-[16/9]"
              onOpen={setActiveIndex}
            />
          ))}
        </motion.div>

        <motion.div
          {...containerProps}
          className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {fasciaAlta.map((image, i) => (
            <Thumb
              key={image.name}
              image={image}
              index={fasciaLarga.length + i}
              ratioClass="aspect-[4/5]"
              onOpen={setActiveIndex}
            />
          ))}
        </motion.div>
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
