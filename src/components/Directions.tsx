import type { ComponentType } from 'react'
import { Car, TrainFront, Plane, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DirectionItem {
  lead: string
  text: string
}

interface DirectionGroup {
  title: string
  Icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>
  items: DirectionItem[]
}

const groups: DirectionGroup[] = [
  {
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

function DirectionsGroup({
  group,
  defaultOpen,
}: {
  group: DirectionGroup
  defaultOpen?: boolean
}) {
  const { Icon } = group
  return (
    <details
      open={defaultOpen}
      className="group border-t border-grafite/10 last:border-b"
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta/15">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="flex-1 font-display text-2xl text-grafite">
          {group.title}
        </h3>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-grafite/50 duration-300 group-open:rotate-180 motion-safe:transition-transform"
          aria-hidden="true"
        />
      </summary>
      <ul className="space-y-5 pb-6 pl-15 pr-1">
        {group.items.map((item) => (
          <li key={item.lead}>
            <p className="font-semibold text-grafite">{item.lead}</p>
            <p className="mt-1 leading-relaxed text-grafite/70">{item.text}</p>
          </li>
        ))}
      </ul>
    </details>
  )
}

export function Directions({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      {groups.map((group, i) => (
        <DirectionsGroup key={group.title} group={group} defaultOpen={i === 0} />
      ))}
    </div>
  )
}
