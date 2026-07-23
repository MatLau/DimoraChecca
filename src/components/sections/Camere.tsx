import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Lightbox, type LightboxImage } from '@/components/ui/lightbox'
import { useSectionMotion, useStaggerMotion } from '@/lib/motion'
import { cn, IMG_BASE } from '@/lib/utils'

type RoomPhoto = LightboxImage

interface RoomCardData {
  nome: string
  tipo: string
  bagno: string
  photos: RoomPhoto[]
}

const PLAQUE_WIDTHS = [480, 800, 1200]
const ROOM_WIDTHS = [400, 600, 900, 1200]

// Ogni camera: la targa dipinta a mano per prima, poi le foto degli interni.
const rooms: RoomCardData[] = [
  {
    nome: 'Brezza blu',
    tipo: 'Matrimoniale',
    bagno: 'Bagno privato',
    photos: [
      {
        name: 'card-brezza-blu',
        widths: PLAQUE_WIDTHS,
        width: 800,
        height: 999,
        alt: 'Targa dipinta a mano della camera Brezza blu',
      },
      {
        name: 'room-brezza-blu-1',
        widths: ROOM_WIDTHS,
        width: 1200,
        height: 1600,
        alt: 'Camera Brezza blu con letto matrimoniale, copriletto azzurro e TV',
      },
      {
        name: 'room-brezza-blu-2',
        widths: ROOM_WIDTHS,
        width: 1200,
        height: 1600,
        alt: 'Camera Brezza blu con testiera in legno intagliato e comodini',
      },
    ],
  },
  {
    nome: 'Luna',
    tipo: 'Matrimoniale',
    bagno: 'Bagno privato',
    photos: [
      {
        name: 'card-luna',
        widths: PLAQUE_WIDTHS,
        width: 800,
        height: 1000,
        alt: 'Targa dipinta a mano della camera Luna',
      },
      {
        name: 'room-luna-1',
        widths: ROOM_WIDTHS,
        width: 1200,
        height: 1600,
        alt: 'Camera Luna con letto matrimoniale e climatizzatore',
      },
    ],
  },
  {
    nome: 'Tramonto',
    tipo: 'Quadrupla',
    bagno: 'Due stanze, un bagno in comune',
    photos: [
      {
        name: 'card-tramonto',
        widths: PLAQUE_WIDTHS,
        width: 800,
        height: 1000,
        alt: 'Targa dipinta a mano della camera Tramonto',
      },
      {
        name: 'room-tramonto-1',
        widths: ROOM_WIDTHS,
        width: 1200,
        height: 1600,
        alt: 'Camera Tramonto con copriletto rosso, scrivania e TV',
      },
      {
        name: 'room-tramonto-2',
        widths: ROOM_WIDTHS,
        width: 1200,
        height: 1600,
        alt: 'Camera Tramonto con letto matrimoniale e climatizzatore',
      },
      {
        name: 'room-tramonto-3',
        widths: ROOM_WIDTHS,
        width: 1200,
        height: 900,
        alt: 'Camera Tramonto con pianta di ulivo e disimpegno',
      },
    ],
  },
]

const ChevronIcon = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d={dir === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function RoomCard({ room }: { room: RoomCardData }) {
  const { item } = useStaggerMotion()
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const swiped = useRef(false)

  const count = room.photos.length
  const go = (i: number) => setIndex((i + count) % count)

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
    swiped.current = false
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) {
      swiped.current = true
      go(index - 1)
    } else if (delta < -50) {
      swiped.current = true
      go(index + 1)
    }
    touchStartX.current = null
  }

  function handleOpen() {
    // Ignora il "click" generato al termine di uno swipe.
    if (swiped.current) {
      swiped.current = false
      return
    }
    setLightboxOpen(true)
  }

  return (
    <motion.div
      variants={item}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-bianco-calce shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
        <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-grafite/70 px-3 py-1.5 text-xs uppercase tracking-widest text-bianco-calce backdrop-blur-sm">
          {room.tipo}
        </span>

        <button
          type="button"
          onClick={handleOpen}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label={`Apri le foto della camera ${room.nome}`}
          className="absolute inset-0 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terracotta"
        >
          <div
            className="flex h-full w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {room.photos.map((photo, i) => {
              const srcSet = photo.widths
                .map((w) => `${IMG_BASE}${photo.name}-${w}.webp ${w}w`)
                .join(', ')
              return (
                <img
                  key={photo.name}
                  src={`${IMG_BASE}${photo.name}-${photo.widths[1]}.webp`}
                  srcSet={srcSet}
                  sizes="(min-width: 768px) 320px, (min-width: 640px) 50vw, 100vw"
                  width={photo.width}
                  height={photo.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  draggable={false}
                  alt={photo.alt}
                  className="h-full w-full shrink-0 object-cover transition-transform duration-[400ms] ease-out motion-safe:group-hover:scale-105"
                />
              )
            })}
          </div>
        </button>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Foto precedente"
              className="absolute left-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity hover:bg-black/60 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white group-hover:opacity-100 md:flex"
            >
              <ChevronIcon dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Foto successiva"
              className="absolute right-2 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity hover:bg-black/60 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white group-hover:opacity-100 md:flex"
            >
              <ChevronIcon dir="right" />
            </button>

            <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5">
              {room.photos.map((photo, i) => (
                <button
                  key={photo.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Vai alla foto ${i + 1} di ${count}`}
                  aria-current={i === index}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white',
                    i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/90',
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <h3 className="mt-5 font-display text-2xl text-grafite">{room.nome}</h3>
      <p className="mt-1 text-sm text-grafite/70">{room.bagno}</p>

      {lightboxOpen && (
        <Lightbox
          images={room.photos}
          index={index}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setIndex}
        />
      )}
    </motion.div>
  )
}

export function Camere() {
  const enter = useSectionMotion()
  const { containerProps } = useStaggerMotion()

  return (
    <section id="camere" className="scroll-mt-20 px-6 py-20 md:px-12 md:py-28">
      <motion.div {...enter} className="mx-auto max-w-5xl">
        <h2 className="max-w-2xl font-display text-3xl text-grafite md:text-4xl">
          Le camere
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-grafite/80">
          Climatizzatore e TV in ogni camera.
        </p>
        <motion.div
          {...containerProps}
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8"
        >
          {rooms.map((room) => (
            <RoomCard key={room.nome} room={room} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
