import { motion } from 'framer-motion'
import { useSectionMotion } from '@/lib/motion'

const WIDTHS = [480, 800, 1280, 1600]
const IMG_NAME = 'gallery-terrazza2'

const infoItems = [
  { label: 'Telefono', value: '329 985 5243', href: 'tel:+393299855243' },
  {
    label: 'Email',
    value: 'antoniogiuseppeurso79@gmail.com',
    href: 'mailto:antoniogiuseppeurso79@gmail.com',
  },
  { label: 'Dove siamo', value: 'Corigliano Rossano (CS)' },
]

export function Prenota() {
  const enter = useSectionMotion()
  const srcSet = WIDTHS.map((w) => `/img/${IMG_NAME}-${w}.webp ${w}w`).join(
    ', ',
  )

  return (
    <section
      id="vi-aspettiamo"
      className="relative scroll-mt-20 overflow-hidden py-28 md:py-36"
    >
      <img
        src={`/img/${IMG_NAME}-1280.webp`}
        srcSet={srcSet}
        sizes="100vw"
        loading="lazy"
        width={1600}
        height={900}
        alt="Terrazza coperta con vista su montagne e uliveto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-terracotta/85" />

      <motion.div
        {...enter}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center text-bianco-calce lg:px-10"
      >
        <p className="mb-4 font-script text-3xl text-ambra md:text-4xl">
          Vi aspettiamo
        </p>
        <h2 className="mb-6 font-display text-5xl leading-tight md:text-6xl">
          Prenota il tuo <span className="italic">soggiorno</span>.
        </h2>
        <p className="text-lg text-bianco-calce/85">
          Scrivici o chiamaci per disponibilità e tariffe: niente form,
          rispondiamo noi.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-6 text-left sm:grid-cols-3">
          {infoItems.map((item) => (
            <div key={item.label} className="border-t border-bianco-calce/30 pt-4">
              <div className="mb-2 text-xs uppercase tracking-widest text-bianco-calce/60">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="break-all text-lg transition-colors hover:text-ambra"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-lg">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <a
          href="tel:+393299855243"
          className="mt-12 inline-flex items-center rounded-full bg-bianco-calce px-10 py-4 text-sm uppercase tracking-widest text-grafite transition-colors hover:bg-ambra"
        >
          Prenota il tuo soggiorno
        </a>
      </motion.div>
    </section>
  )
}
