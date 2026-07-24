import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const LAT_LNG = '39.614194,16.621500'
const EMBED_SRC = `https://maps.google.com/maps?q=${LAT_LNG}&z=16&output=embed`
const GOOGLE_LINK = `https://www.google.com/maps/search/?api=1&query=${LAT_LNG}`
const APPLE_LINK = `https://maps.apple.com/?ll=${LAT_LNG}&q=Dimora%20Checca`

const linkClass = 'text-terracotta underline-offset-2 hover:underline'

/* La mappa di Google non viene incorporata al caricamento della pagina: finché
   l'utente non la richiede esplicitamente non parte alcuna richiesta verso
   Google, quindi nessun cookie di terze parti e nessun banner di consenso. */
export function MapEmbed({ className }: { className?: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={cn(className)}>
      <div className="overflow-hidden rounded-md border border-grafite/10 bg-bianco-calce">
        {loaded ? (
          <iframe
            title="Mappa della Dimora Checca"
            src={EMBED_SRC}
            className="h-80 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="flex h-80 w-full flex-col items-center justify-center gap-4 px-6 text-center md:h-96">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="max-w-sm leading-relaxed text-grafite/80">
              La mappa è fornita da Google. Caricandola, Google può ricevere il
              tuo indirizzo IP e installare cookie sul tuo dispositivo.
            </p>
            <Button type="button" onClick={() => setLoaded(true)}>
              Carica la mappa
            </Button>
            <p className="text-xs text-grafite/70">
              Dettagli nell&apos;<Link to="/privacy" className={linkClass}>
                informativa privacy
              </Link>
              .
            </p>
          </div>
        )}
      </div>

      <p className="mt-3 text-sm text-grafite/70">
        <a
          href={GOOGLE_LINK}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Apri in Google Maps
        </a>
        <span className="mx-2 text-grafite/40">·</span>
        <a
          href={APPLE_LINK}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Apri in Apple Maps
        </a>
      </p>
    </div>
  )
}
