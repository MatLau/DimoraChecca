import { useState, type ComponentType } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Car, TrainFront, Plane, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DirectionItem {
  lead: string
  text: string
}

interface DirectionGroup {
  id: string
  title: string
  Icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  items: DirectionItem[]
}

const groups: DirectionGroup[] = [
  {
    id: 'auto',
    title: 'In auto',
    Icon: Car,
    items: [
      {
        lead: 'Da Nord (versante tirrenico — Napoli/Roma)',
        text: "Percorri l'Autostrada A2 (Autostrada del Mediterraneo) in direzione Sud. Prendi l'uscita Sibari/Tarsia Nord/Spezzano Terme, quindi prosegui sulla Strada Statale 534 (SS 534) in direzione Sibari. Una volta giunto allo svincolo costiero, immettiti sulla SS 106 Jonica in direzione Sud (verso Crotone/Reggio Calabria) fino a raggiungere Corigliano-Rossano e seguire le indicazioni per la nostra struttura.",
      },
      {
        lead: 'Da Nord (versante adriatico — Taranto/Bari)',
        text: "Percorri l'Autostrada A14 fino alla barriera terminale di Taranto. Da lì, imbocca la SS 106 Jonica in direzione Sud (verso Reggio Calabria) e seguila costeggiando il litorale per circa 140 km fino ad arrivare a destinazione.",
      },
      {
        lead: 'Da Sud (Sicilia/Reggio Calabria)',
        text: "Se viaggi lungo la costa ionica, percorri la SS 106 Jonica in direzione Nord (verso Taranto/Sibari) fino a Rossano. Se provieni dal versante tirrenico tramite l'Autostrada A2 in direzione Nord, ti consigliamo di uscire a Cosenza Nord, proseguire lungo i raccordi verso la costa ionica e immetterti sulla SS 106 fino a destinazione.",
      },
    ],
  },
  {
    id: 'treno',
    title: 'In treno',
    Icon: TrainFront,
    items: [
      {
        lead: 'Stazioni locali',
        text: 'Le fermate ferroviarie più vicine sono quelle di Rossano e Corigliano Calabro, servite dai treni regionali e intercity della linea ionica. Da queste stazioni è possibile raggiungere la struttura in pochi minuti di taxi o autobus locale.',
      },
      {
        lead: 'Alta velocità',
        text: "Lo snodo principale più vicino per i collegamenti diretti ad Alta Velocità (Frecciarossa/Italo per Roma, Firenze, Bologna, Milano, Torino) è la stazione di Sibari (a circa 25–30 minuti di auto). Un'ottima alternativa è la stazione di Paola sul versante tirrenico, ben collegata tramite linee regionali o autobus verso la costa ionica.",
      },
    ],
  },
  {
    id: 'aereo',
    title: 'In aereo',
    Icon: Plane,
    items: [
      {
        lead: 'Aeroporto Internazionale di Lamezia Terme (SUF)',
        text: "È lo scalo principale e più servito della regione, situato a circa 1 ora e mezza / 2 ore di auto dalla nostra posizione. All'interno del terminal troverai i principali uffici di autonoleggio, oltre a collegamenti in autobus e treno diretti alla costa ionica.",
      },
      {
        lead: 'Aeroporto di Crotone «Sant’Anna» (CRV)',
        text: 'È lo scalo più vicino (circa 1 ora e 15 minuti in auto percorrendo la SS 106 verso Nord), ma servito principalmente da un numero selezionato di tratte nazionali.',
      },
      {
        lead: 'Aeroporto Internazionale di Bari-Palese (BRI)',
        text: "Dista circa 2 ore e mezza / 3 ore di guida, ma rappresenta un'eccellente opzione alternativa data l'altissima frequenza di voli nazionali e internazionali, e un comodo percorso interamente su strada statale a scorrimento veloce (SS 106) per raggiungerci.",
      },
    ],
  },
]

const PANEL_ID = 'indicazioni-panel'

export function Directions({ className }: { className?: string }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const reduce = useReducedMotion()
  const active = groups.find((g) => g.id === activeId) ?? null

  return (
    <div className={cn(className)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {groups.map((group) => {
          const isActive = group.id === activeId
          const { Icon } = group
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveId(isActive ? null : group.id)}
              aria-expanded={isActive}
              aria-controls={PANEL_ID}
              className={cn(
                'flex cursor-pointer flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-colors duration-200',
                isActive
                  ? 'border-terracotta bg-terracotta/5'
                  : 'border-grafite/15 hover:border-terracotta/40 hover:bg-terracotta/5',
              )}
            >
              <span
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-200',
                  isActive
                    ? 'bg-terracotta text-bianco-calce'
                    : 'bg-terracotta/10 text-terracotta',
                )}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-display text-2xl text-grafite">
                {group.title}
              </span>
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-grafite/70">
                {isActive ? 'Nascondi' : 'Vedi le indicazioni'}
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 duration-300 motion-safe:transition-transform',
                    isActive && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </span>
            </button>
          )
        })}
      </div>

      <div id={PANEL_ID}>
        <AnimatePresence mode="wait" initial={false}>
          {active && (
            <motion.div
              key={active.id}
              role="region"
              aria-label={`Indicazioni ${active.title.toLowerCase()}`}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -4 }}
              transition={{ duration: reduce ? 0 : 0.25, ease: 'easeOut' }}
              className="mt-8 border-t border-grafite/10 pt-8"
            >
              <ul className="space-y-5">
                {active.items.map((item) => (
                  <li key={item.lead}>
                    <p className="font-semibold text-grafite">{item.lead}</p>
                    <p className="mt-1 leading-relaxed text-grafite/70">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
