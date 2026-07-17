import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useSectionMotion } from '@/lib/motion'

interface SpreadImage {
  name: string
  widths: number[]
  width: number
  height: number
  alt: string
}

interface SpreadProps {
  id?: string
  image: SpreadImage
  eyebrow: string
  title: string
  children: ReactNode
  /** Puts the image on the right instead of the left (desktop only). */
  reverse?: boolean
  className?: string
}

export function Spread({
  id,
  image,
  eyebrow,
  title,
  children,
  reverse,
  className,
}: SpreadProps) {
  const enter = useSectionMotion()
  const srcSet = image.widths
    .map((w) => `/img/${image.name}-${w}.webp ${w}w`)
    .join(', ')

  return (
    <section id={id} className={cn('scroll-mt-8 px-6 py-20 md:px-12 md:py-28', className)}>
      <motion.div
        {...enter}
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
      >
        <div
          className={cn(
            'aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[5/4]',
            reverse ? 'md:order-2' : 'md:order-1',
          )}
        >
          <img
            src={`/img/${image.name}-${image.widths[1]}.webp`}
            srcSet={srcSet}
            sizes="(min-width: 768px) 50vw, 100vw"
            width={image.width}
            height={image.height}
            loading="lazy"
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className={reverse ? 'md:order-1' : 'md:order-2'}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-grafite md:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-grafite/85">
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
