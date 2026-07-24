import type { ReactNode } from 'react'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

const EMAIL = 'antoniogiuseppeurso79@gmail.com'

function Section({ titolo, children }: { titolo: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl text-grafite md:text-3xl">{titolo}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-grafite/80">
        {children}
      </div>
    </section>
  )
}

function Term({ termine, children }: { termine: string; children: ReactNode }) {
  return (
    <li>
      <span className="font-semibold text-grafite">{termine}</span> — {children}
    </li>
  )
}

const linkClass =
  'text-terracotta underline-offset-2 transition-colors hover:underline'

export function Privacy() {
  return (
    <>
      <Nav
        navLinks={[{ label: 'Torna alla home', href: '/' }]}
        cta={{ label: 'Prenota', href: 'tel:+393299855243' }}
        scrolled
      />

      <main className="px-6 pb-24 pt-20 md:px-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl text-grafite md:text-4xl">
            Informativa sulla privacy
          </h1>
          <p className="mt-3 text-sm uppercase tracking-widest text-grafite/60">
            Ultimo aggiornamento: 24 luglio 2026
          </p>
          <p className="mt-6 text-lg text-grafite/80">
            Questa pagina spiega quali dati personali trattiamo quando visiti
            questo sito o ci contatti per un soggiorno, ai sensi degli articoli
            13 e 14 del Regolamento (UE) 2016/679 (GDPR).
          </p>

          <Section titolo="Titolare del trattamento">
            <p>
              Dimora Checca — C/DA Frasso, 84, 87064 Corigliano Rossano (CS),
              Italia. CIN IT078157C2Y4E3QZRP.
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${EMAIL}`} className={linkClass}>
                {EMAIL}
              </a>
              <br />
              Telefono:{' '}
              <a href="tel:+393299855243" className={linkClass}>
                329 985 5243
              </a>
            </p>
            <p>
              Per qualsiasi richiesta relativa ai tuoi dati puoi scriverci a
              questo indirizzo.
            </p>
          </Section>

          <Section titolo="Quali dati trattiamo">
            <ul className="space-y-4">
              <Term termine="Dati di navigazione">
                il sito è ospitato su GitHub Pages. Per motivi tecnici e di
                sicurezza i server dell&apos;hosting registrano automaticamente
                dati come l&apos;indirizzo IP, il tipo di browser e di
                dispositivo, la data e l&apos;ora della visita. Non li usiamo
                per identificarti.
              </Term>
              <Term termine="Dati che ci fornisci tu">
                questo sito non contiene moduli di contatto. Se ci scrivi
                un&apos;email o ci telefoni, trattiamo i dati che ci comunichi
                (nome, recapiti, contenuto del messaggio, date e preferenze di
                soggiorno) solo per risponderti e gestire l&apos;eventuale
                prenotazione.
              </Term>
              <Term termine="Dati per il soggiorno">
                se prenoti, siamo tenuti per legge a raccogliere i dati di
                identificazione degli ospiti e a comunicarli alle autorità di
                pubblica sicurezza, oltre agli adempimenti statistici o di
                imposta di soggiorno eventualmente previsti.
              </Term>
            </ul>
          </Section>

          <Section titolo="Perché trattiamo i dati">
            <ul className="space-y-4">
              <Term termine="Rispondere alle tue richieste">
                misure precontrattuali adottate su tua richiesta (art. 6.1.b
                GDPR).
              </Term>
              <Term termine="Gestire la prenotazione e il soggiorno">
                esecuzione del contratto (art. 6.1.b GDPR).
              </Term>
              <Term termine="Comunicazioni alle autorità e adempimenti fiscali">
                obbligo legale (art. 6.1.c GDPR).
              </Term>
              <Term termine="Sicurezza e funzionamento del sito">
                nostro legittimo interesse a erogare il servizio in modo sicuro
                (art. 6.1.f GDPR).
              </Term>
            </ul>
          </Section>

          <Section titolo="Servizi di terze parti">
            <ul className="space-y-4">
              <Term termine="GitHub Pages">
                ospita il sito e tratta i dati di navigazione descritti sopra.
              </Term>
              <Term termine="Google Maps">
                nella sezione &laquo;Come raggiungerci&raquo; è disponibile una
                mappa di Google, che <strong>non viene caricata
                automaticamente</strong>. Solo se premi &laquo;Carica la
                mappa&raquo; il tuo browser contatta Google, che può ricevere il
                tuo indirizzo IP e installare cookie propri.
              </Term>
              <Term termine="Facebook">
                nel footer trovi solo un collegamento alla nostra pagina: nessun
                dato viene trasmesso a Meta finché non lo apri.
              </Term>
            </ul>
            <p>
              I caratteri tipografici sono ospitati direttamente su questo sito:
              non comportano quindi alcuna richiesta a fornitori esterni.
            </p>
            <p>
              Alcuni di questi fornitori possono trasferire dati al di fuori
              dell&apos;Unione Europea, sulla base delle garanzie previste dal
              GDPR.
            </p>
          </Section>

          <Section titolo="Cookie">
            <p>
              Questo sito non installa cookie propri e non utilizza strumenti di
              statistica o di profilazione. Cookie di Google possono essere
              installati soltanto se scegli di caricare la mappa nella sezione
              &laquo;Come raggiungerci&raquo;: finché non lo fai, nessun dato
              viene inviato a Google per questo scopo. Puoi in ogni caso
              gestirli o bloccarli dalle impostazioni del tuo browser.
            </p>
          </Section>

          <Section titolo="Per quanto tempo conserviamo i dati">
            <p>
              Conserviamo le comunicazioni per il tempo necessario a risponderti
              e, in caso di soggiorno, per il periodo richiesto dagli obblighi
              di legge fiscali, amministrativi e di pubblica sicurezza. Trascorsi
              questi termini i dati vengono cancellati.
            </p>
          </Section>

          <Section titolo="A chi comunichiamo i dati">
            <p>
              I tuoi dati non vengono diffusi né ceduti a terzi per finalità
              commerciali. Possono essere comunicati alle autorità di pubblica
              sicurezza e alle amministrazioni competenti nei casi previsti dalla
              legge, oltre che ai fornitori tecnici indicati sopra.
            </p>
          </Section>

          <Section titolo="I tuoi diritti">
            <p>
              Puoi in ogni momento chiedere l&apos;accesso ai tuoi dati, la loro
              rettifica o cancellazione, la limitazione o l&apos;opposizione al
              trattamento e la portabilità (artt. 15-22 GDPR). Per esercitare
              questi diritti scrivi a{' '}
              <a href={`mailto:${EMAIL}`} className={linkClass}>
                {EMAIL}
              </a>
              .
            </p>
            <p>
              Se ritieni che il trattamento dei tuoi dati violi la normativa,
              puoi presentare reclamo al Garante per la protezione dei dati
              personali (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                garanteprivacy.it
              </a>
              ).
            </p>
          </Section>

          <Section titolo="Modifiche a questa informativa">
            <p>
              Eventuali aggiornamenti saranno pubblicati su questa pagina,
              indicando la nuova data di ultimo aggiornamento.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  )
}
