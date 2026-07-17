import { useEffect, useRef, useState } from 'react'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { Intro } from '@/components/sections/Intro'
import { Camere } from '@/components/sections/Camere'
import { Atmosfera } from '@/components/sections/Atmosfera'
import { Galleria } from '@/components/sections/Galleria'
import { Servizi } from '@/components/sections/Servizi'
import { Prenota } from '@/components/sections/Prenota'
import { Raggiungerci } from '@/components/sections/Raggiungerci'
import { Footer } from '@/components/sections/Footer'

const NAV_LINKS = [
  { label: 'La Dimora', href: '#la-dimora' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Dove siamo', href: '#come-raggiungerci' },
]

const NAV_CTA = { label: 'Prenota', href: '#vi-aspettiamo' }

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px', threshold: 0 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav navLinks={NAV_LINKS} cta={NAV_CTA} scrolled={scrolled} />
      <main>
        <Hero ref={heroRef} />
        <Intro />
        <Camere />
        <Atmosfera />
        <Galleria />
        <Servizi />
        <Prenota />
        <Raggiungerci />
      </main>
      <Footer />
    </>
  )
}
