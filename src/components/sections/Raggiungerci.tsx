import { motion } from 'framer-motion'
import { useSectionMotion } from '@/lib/motion'
import { Directions } from '@/components/Directions'
import { MapEmbed } from '@/components/MapEmbed'

export function Raggiungerci() {
  const enter = useSectionMotion()

  return (
    <section
      id="come-raggiungerci"
      className="scroll-mt-20 px-6 py-20 md:px-12 md:py-28"
    >
      <motion.div {...enter} className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-grafite md:text-4xl">
          Come raggiungerci
        </h2>
        <p className="mt-4 text-lg text-grafite/80">
          C/DA Frasso, 84 — 87064 Corigliano Rossano (CS)
        </p>

        <MapEmbed className="mt-8" />

        <Directions className="mt-14" />
      </motion.div>
    </section>
  )
}
