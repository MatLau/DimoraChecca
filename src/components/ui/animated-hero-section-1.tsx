import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface HeroImage {
  src: string
  srcSet: string
  sizes: string
  width: number
  height: number
  alt: string
}

interface AnimatedHeroProps {
  image: HeroImage
  eyebrow?: string
  title: React.ReactNode
  description: string
  ctaButton: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
    external?: boolean
  }
  className?: string
}

const BUTTON_TYPOGRAPHY = 'rounded-full text-sm uppercase tracking-widest'
const CTA_PRIMARY = cn(BUTTON_TYPOGRAPHY)
const CTA_SECONDARY = cn(
  BUTTON_TYPOGRAPHY,
  'border-white/70 text-white hover:bg-white/10',
)

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const containerVariantsReduced: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

const itemVariantsReduced: Variants = {
  hidden: { y: 0, opacity: 1 },
  visible: { y: 0, opacity: 1 },
}

export const AnimatedHero = React.forwardRef<HTMLDivElement, AnimatedHeroProps>(
  (
    { image, eyebrow, title, description, ctaButton, secondaryCta, className },
    ref,
  ) => {
    const reduce = useReducedMotion()

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex min-h-screen w-full flex-col overflow-hidden bg-grafite',
          className,
        )}
      >
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.sizes}
          width={image.width}
          height={image.height}
          alt={image.alt}
          fetchPriority="high"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        {/* scrim alto: rende leggibile la nav fissa sopra l'hero */}
        <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
        {/* scrim basso: rende leggibili titolo e sottotitolo. Banda allungata e più
            scura in alto rispetto a un from/via/to standard: con contenuto ancorato
            in basso (mt-auto) e viewport corte (laptop con barra segnalibri, mobile
            landscape), il titolo può iniziare sopra il 50% dell'altezza — verificato
            che lì il contrasto restasse AA anche in quel caso, non solo nel caso comune */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-4/5 bg-[linear-gradient(to_top,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.15)_75%,transparent_100%)]" />

        <motion.div
          variants={reduce ? containerVariantsReduced : containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 mx-auto mt-auto flex max-w-7xl flex-col items-start px-6 pb-20 pt-24 text-left text-white md:pb-28 lg:px-10"
        >
          {eyebrow && (
            <motion.p
              variants={reduce ? itemVariantsReduced : itemVariants}
              className="mb-4 font-script text-3xl text-ambra md:text-4xl"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={reduce ? itemVariantsReduced : itemVariants}
            className="max-w-4xl font-display text-5xl font-normal leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={reduce ? itemVariantsReduced : itemVariants}
            className="mt-6 max-w-xl text-lg text-white/85"
          >
            {description}
          </motion.p>
          <motion.div
            variants={reduce ? itemVariantsReduced : itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className={CTA_PRIMARY}>
              <a href={ctaButton.href}>{ctaButton.text}</a>
            </Button>
            {secondaryCta && (
              <Button asChild size="lg" variant="outline" className={CTA_SECONDARY}>
                <a
                  href={secondaryCta.href}
                  target={secondaryCta.external ? '_blank' : undefined}
                  rel={secondaryCta.external ? 'noopener noreferrer' : undefined}
                >
                  {secondaryCta.text}
                </a>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    )
  },
)
AnimatedHero.displayName = 'AnimatedHero'
