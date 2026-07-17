import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HERO_SRCSET = [640, 960, 1280, 1600, 1920, 2048]
  .map((w) => `/img/hero-${w}.webp ${w}w`)
  .join(', ')

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const noMotion: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const reduce = useReducedMotion()
  const variants = reduce ? noMotion : containerVariants
  const item = reduce ? noMotion : itemVariants

  return (
    <div className="relative flex h-[85vh] min-h-[560px] w-full flex-col overflow-hidden bg-grafite md:h-screen">
      <img
        src="/img/hero-1920.webp"
        srcSet={HERO_SRCSET}
        sizes="100vw"
        width={2048}
        height={1152}
        fetchPriority="high"
        alt="Terrazza del B&B Dimora Kekka con vista su uliveto e montagne"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0.35)_75%,rgba(0,0,0,0.6)_100%)]" />

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center text-white"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium uppercase tracking-[0.2em] text-white/80"
        >
          B&amp;B · Corigliano Rossano
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Accogliente e rilassante, a pochi minuti dal mare
        </motion.h1>
        <motion.p variants={item} className="mt-5 max-w-xl text-lg text-white/90">
          Dimora Kekka. Comfort, relax e tranquillità.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="tel:+393299855243">Chiama ora</a>
          </Button>
          <a
            href="https://www.facebook.com/messages/t/61591586182310/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/90 underline underline-offset-4 transition-colors hover:text-white"
          >
            Scrivici su Messenger
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#benvenuto"
        aria-label="Scorri al contenuto"
        variants={item}
        initial="hidden"
        animate="visible"
        className="relative z-10 mb-8 flex h-11 w-11 cursor-pointer items-center justify-center self-center rounded-full text-white/80 transition-colors hover:text-white"
      >
        <ChevronDown className="h-6 w-6" aria-hidden="true" />
      </motion.a>
    </div>
  )
}
