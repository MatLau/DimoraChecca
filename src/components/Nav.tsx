import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavLinkData {
  label: string
  href: string
}

interface NavProps {
  navLinks: NavLinkData[]
  /** true once the nav should show its glass/dark state (past the hero, or no hero at all). */
  scrolled: boolean
  /** Standout pill CTA on the far right (e.g. "Prenota"), separate from the plain text links. */
  cta?: NavLinkData
}

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <Link
      to="/"
      className={cn('leading-none', scrolled ? 'text-grafite' : 'text-bianco-calce')}
    >
      <div className="font-script text-2xl md:text-3xl">Dimora</div>
      <div className="-mt-1 font-display text-lg uppercase tracking-[0.3em] md:text-xl">
        Checca
      </div>
    </Link>
  )
}

function NavLinkItem({
  label,
  href,
  scrolled,
}: NavLinkData & { scrolled: boolean }) {
  const className = cn(
    'text-sm uppercase tracking-widest transition-colors',
    scrolled
      ? 'text-grafite/80 hover:text-terracotta'
      : 'text-bianco-calce/90 hover:text-terracotta [text-shadow:0_1px_3px_rgb(0_0_0/0.5)]',
  )
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}

function MobileNavLinkItem({
  label,
  href,
  onNavigate,
}: NavLinkData & { onNavigate: () => void }) {
  const className =
    'flex min-h-11 cursor-pointer items-center text-sm uppercase tracking-widest text-grafite/90 transition-colors hover:text-terracotta'
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onNavigate}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={className} onClick={onNavigate}>
      {label}
    </a>
  )
}

function NavCta({ label, href, scrolled }: NavLinkData & { scrolled: boolean }) {
  const className = cn(
    'hidden rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-colors md:inline-flex',
    scrolled
      ? 'border-terracotta/50 text-terracotta hover:bg-terracotta hover:text-bianco-calce'
      : 'border-bianco-calce/60 text-bianco-calce hover:bg-bianco-calce hover:text-grafite',
  )
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}

export function Nav({ navLinks, scrolled, cta }: NavProps) {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <motion.header
        initial={reduce ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-20 w-full transition-colors duration-300',
          scrolled
            ? 'border-b border-black/5 bg-bianco-calce/75 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
          <div className="justify-self-start">
            <Logo scrolled={scrolled} />
          </div>

          {navLinks.length > 0 && (
            <nav className="col-start-2 hidden items-center gap-8 justify-self-center md:flex">
              {navLinks.map((link) => (
                <NavLinkItem key={link.label} {...link} scrolled={scrolled} />
              ))}
            </nav>
          )}

          {(navLinks.length > 0 || cta) && (
            <div className="col-start-3 flex items-center gap-6 justify-self-end">
              {cta && <NavCta {...cta} scrolled={scrolled} />}
              {navLinks.length > 0 && (
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-controls="mobile-nav-menu"
                  aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
                  className={cn(
                    'flex h-11 w-11 cursor-pointer items-center justify-center rounded-md transition-colors md:hidden',
                    scrolled ? 'text-grafite' : 'text-bianco-calce',
                  )}
                >
                  {open ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </motion.header>

      {navLinks.length > 0 && open && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-x-0 top-20 z-40 flex flex-col gap-1 border-b border-black/5 bg-bianco-calce/95 px-6 py-4 backdrop-blur-md md:hidden"
        >
          {navLinks.map((link) => (
            <MobileNavLinkItem
              key={link.label}
              {...link}
              onNavigate={() => setOpen(false)}
            />
          ))}
          {cta && (
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-11 items-center justify-center rounded-full bg-terracotta px-5 py-2 text-xs uppercase tracking-widest text-bianco-calce"
            >
              {cta.label}
            </a>
          )}
        </div>
      )}
    </>
  )
}
