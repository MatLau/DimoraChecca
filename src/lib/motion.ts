import { useReducedMotion, type Variants } from 'framer-motion'

/** Fade+rise on scroll-into-view, once. Same shape for every section block. */
export function useSectionMotion() {
  const reduce = useReducedMotion()
  return {
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduce ? 0 : 0.5, ease: 'easeOut' as const },
  }
}

/** Same fade+rise, staggered across grid children (cards, thumbs). */
export function useStaggerMotion() {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  }

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: 'easeOut' },
    },
  }

  return {
    containerProps: {
      initial: 'hidden' as const,
      whileInView: 'visible' as const,
      viewport: { once: true, margin: '-80px' },
      variants: container,
    },
    item,
  }
}
