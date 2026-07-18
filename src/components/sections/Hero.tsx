import { forwardRef } from 'react'
import { AnimatedHero } from '@/components/ui/animated-hero-section-1'
import { IMG_BASE } from '@/lib/utils'

const HERO_SRCSET = [640, 960, 1280, 1600, 1920, 2048]
  .map((w) => `${IMG_BASE}hero-${w}.webp ${w}w`)
  .join(', ')

export const Hero = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <AnimatedHero
      ref={ref}
      image={{
        src: `${IMG_BASE}hero-1920.webp`,
        srcSet: HERO_SRCSET,
        sizes: '100vw',
        width: 2048,
        height: 1152,
        alt: 'Terrazza del B&B Dimora Checca con vista su uliveto e montagne',
      }}
      eyebrow="Benvenuti"
      title={
        <>
          Accogliente e rilassante, a pochi minuti dal{' '}
          <span className="text-ambra">mare</span>
        </>
      }
      description="Il luogo ideale per trascorrere una vacanza all'insegna del comfort, del relax e della tranquillità."
      ctaButton={{
        text: 'Prenota il tuo soggiorno',
        href: 'tel:+393299855243',
      }}
      secondaryCta={{
        text: 'Scopri la Dimora',
        href: '#la-dimora',
      }}
    />
  )
})
Hero.displayName = 'Hero'
