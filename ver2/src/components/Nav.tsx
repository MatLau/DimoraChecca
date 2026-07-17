const NAV_LINKS = [
  { label: 'Camere', href: '#camere' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Come raggiungerci', href: '#raggiungerci' },
  { label: 'Contatti', href: '#contatti' },
]

export function Nav() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-6 md:px-12">
      <a
        href="#"
        className="font-serif text-xl font-semibold tracking-tight text-grafite md:text-2xl"
      >
        B&amp;B Dimora Kekka
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-grafite/70 transition-colors hover:text-grafite"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="tel:+393299855243"
        className="text-sm font-medium text-terracotta transition-colors hover:text-terracotta/80 md:hidden"
      >
        Chiama
      </a>
    </header>
  )
}
