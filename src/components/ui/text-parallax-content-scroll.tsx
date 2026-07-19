import { useRef, type ReactNode, type RefObject } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

const IMG_PADDING = 12

interface TextParallaxContentProps {
  imgSrc: string
  imgSrcSet?: string
  imgAlt: string
  subheading: string
  heading: string
  /** Small rotated note card floating on a corner of the sticky image, e.g. a quote. */
  badge?: string
  /** Slow y-parallax on the background image while the band crosses the viewport. */
  parallax?: boolean
  children?: ReactNode
}

export function TextParallaxContent({
  imgSrc,
  imgSrcSet,
  imgAlt,
  subheading,
  heading,
  badge,
  parallax = false,
  children,
}: TextParallaxContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div ref={containerRef} className="relative h-[150vh]">
        <StickyImage
          src={imgSrc}
          srcSet={imgSrcSet}
          alt={imgAlt}
          badge={badge}
          parallax={parallax}
          containerRef={containerRef}
        />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  )
}

function StickyImage({
  src,
  srcSet,
  alt,
  badge,
  parallax,
  containerRef,
}: {
  src: string
  srcSet?: string
  alt: string
  badge?: string
  parallax: boolean
  containerRef: RefObject<HTMLDivElement | null>
}) {
  const reduce = useReducedMotion()
  const targetRef = useRef<HTMLDivElement>(null)
  const inView = useInView(targetRef)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  // Parallasse lento dell'immagine sull'intera corsa della fascia. L'immagine
  // è scalata 1.15 così i ±40px di corsa non scoprono mai i bordi.
  const { scrollYProgress: bandProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(bandProgress, [0, 1], [-40, 40])
  const parallaxOn = parallax && !reduce

  return (
    <motion.div
      ref={targetRef}
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale: reduce ? 1 : scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.img
        src={src}
        srcSet={srcSet}
        sizes="100vw"
        loading="lazy"
        alt={alt}
        style={{
          y: parallaxOn ? imgY : 0,
          scale: parallaxOn ? 1.15 : 1,
          willChange: parallaxOn && inView ? 'transform' : 'auto',
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-grafite/70"
        style={{ opacity: reduce ? 1 : scrimOpacity }}
      />
      {badge && (
        <div className="absolute bottom-6 left-6 z-10 -rotate-3 rounded-lg bg-bianco-calce px-5 py-3 shadow-lg sm:bottom-10 sm:left-10">
          <p className="font-display text-xl italic text-grafite">{badge}</p>
        </div>
      )}
    </motion.div>
  )
}

function OverlayCopy({
  subheading,
  heading,
}: {
  subheading: string
  heading: string
}) {
  const reduce = useReducedMotion()
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  // Amplitude kept small (not the template's original ±250) so the text never
  // drifts up far enough to pass under the fixed nav (h-20) and become unreadable.
  const y = useTransform(scrollYProgress, [0, 1], [90, -90])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      ref={targetRef}
      style={{
        y: reduce ? 0 : y,
        opacity: reduce ? 1 : opacity,
      }}
      className="absolute inset-x-0 top-20 bottom-0 flex w-full flex-col items-center justify-center px-6 text-center text-white"
    >
      <p className="mb-4 font-script text-3xl text-ambra md:text-4xl">
        {subheading}
      </p>
      <p className="max-w-3xl font-display text-4xl font-normal leading-[0.95] md:text-6xl">
        {heading}
      </p>
    </motion.div>
  )
}
