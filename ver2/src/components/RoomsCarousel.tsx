import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSectionMotion, useStaggerMotion } from '@/lib/motion'

interface RoomPhoto {
  name: string
  width: number
  height: number
  alt: string
}

interface RoomCardData {
  nome: string
  tipo: string
  bagno: string
  photo?: RoomPhoto
}

const rooms: RoomCardData[] = [
  {
    nome: 'Brezza blu',
    tipo: 'Matrimoniale',
    bagno: 'Bagno privato',
    photo: {
      name: 'card-brezza-blu',
      width: 800,
      height: 999,
      alt: 'Targa dipinta a mano della camera Brezza blu',
    },
  },
  {
    nome: 'Luna',
    tipo: 'Matrimoniale',
    bagno: 'Bagno privato',
  },
  {
    nome: 'Tramonto',
    tipo: 'Quadrupla',
    bagno: 'Due stanze, un bagno in comune',
    photo: {
      name: 'card-tramonto',
      width: 800,
      height: 1000,
      alt: 'Targa dipinta a mano della camera Tramonto',
    },
  },
]

function RoomPhotoImg({ photo }: { photo: RoomPhoto }) {
  const srcSet = [480, 800, 1200]
    .map((w) => `/img/${photo.name}-${w}.webp ${w}w`)
    .join(', ')
  return (
    <img
      src={`/img/${photo.name}-800.webp`}
      srcSet={srcSet}
      sizes="(min-width: 768px) 420px, 85vw"
      width={photo.width}
      height={photo.height}
      loading="lazy"
      alt={photo.alt}
      className="h-full w-full object-cover"
    />
  )
}

function LunaPlaceholder() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-4 bg-bianco-calce"
      role="img"
      aria-label="Foto della targa Camera Luna non ancora disponibile"
    >
      <svg width="64" height="64" viewBox="0 0 72 72" fill="none" aria-hidden="true">
        <path
          d="M45 12a24 24 0 1 0 15 22.2A18.5 18.5 0 0 1 45 12Z"
          stroke="var(--color-blu-brezza)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-serif text-lg text-grafite/70">Camera Luna</span>
    </div>
  )
}

function RoomCard({ room }: { room: RoomCardData }) {
  const { item } = useStaggerMotion()
  return (
    <motion.div
      variants={item}
      className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-[400px]"
    >
      <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-bianco-calce">
        {room.photo ? <RoomPhotoImg photo={room.photo} /> : <LunaPlaceholder />}
      </div>
      <h3 className="mt-5 font-serif text-2xl text-grafite">{room.nome}</h3>
      <p className="mt-1 text-sm text-grafite/70">
        {room.tipo} · {room.bagno}
      </p>
    </motion.div>
  )
}

export function RoomsCarousel() {
  const enter = useSectionMotion()
  const { containerProps } = useStaggerMotion()
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    const amount = (card?.offsetWidth ?? 320) + 24
    track.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section
      id="camere"
      className="scroll-mt-8 bg-bianco-calce px-6 py-20 md:px-12 md:py-28"
    >
      <motion.div {...enter} className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl text-grafite md:text-4xl">
              Le camere
            </h2>
            <p className="mt-3 max-w-xl text-lg text-grafite/80">
              Climatizzatore e TV in ogni camera.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Camera precedente"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-grafite/15 text-grafite transition-colors hover:bg-grafite/5"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Camera successiva"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-grafite/15 text-grafite transition-colors hover:bg-grafite/5"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          {...containerProps}
          className="snap-strip mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {rooms.map((room) => (
            <RoomCard key={room.nome} room={room} />
          ))}
        </motion.div>
        <p className="mt-2 text-sm text-grafite/50 md:hidden">
          Scorri per vedere tutte le camere →
        </p>
      </motion.div>
    </section>
  )
}
