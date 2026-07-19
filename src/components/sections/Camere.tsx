import { motion, useReducedMotion } from 'framer-motion'
import { useSectionMotion, useStaggerMotion } from '@/lib/motion'
import { IMG_BASE } from '@/lib/utils'

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
    .map((w) => `${IMG_BASE}${photo.name}-${w}.webp ${w}w`)
    .join(', ')
  return (
    <img
      src={`${IMG_BASE}${photo.name}-800.webp`}
      srcSet={srcSet}
      sizes="(min-width: 768px) 33vw, 100vw"
      width={photo.width}
      height={photo.height}
      loading="lazy"
      alt={photo.alt}
      className="h-full w-full object-cover transition-transform duration-[400ms] ease-out motion-safe:group-hover:scale-105"
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
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M45 12a24 24 0 1 0 15 22.2A18.5 18.5 0 0 1 45 12Z"
          stroke="var(--color-blu-brezza)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-lg text-grafite/70">Camera Luna</span>
    </div>
  )
}

function RoomCard({ room }: { room: RoomCardData }) {
  const { item } = useStaggerMotion()
  const reduce = useReducedMotion()
  return (
    <motion.div
      variants={item}
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-bianco-calce shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-grafite/60 px-3 py-1.5 text-xs uppercase tracking-widest text-bianco-calce backdrop-blur-sm">
          {room.tipo}
        </span>
        {room.photo ? <RoomPhotoImg photo={room.photo} /> : <LunaPlaceholder />}
      </div>
      <h3 className="mt-5 font-display text-2xl text-grafite">{room.nome}</h3>
      <p className="mt-1 text-sm text-grafite/70">{room.bagno}</p>
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
