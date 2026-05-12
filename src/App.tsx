import './App.css'
import zehnJahre from '/10jahre.png';
import hands from '/assets/hands.svg';
import partyhat from '/assets/partyhat.svg';
import glass from '/assets/glass.svg';
import glasses from '/assets/glasses.svg';
import girlande from '/assets/girlande.svg';
import { useState } from 'react';

const ORGANIZER_EMAIL = 'klassentreffen27@proton.me'
const subject = encodeURIComponent('Anmeldung zum Klassentreffen 2027');
const WHATSAPP_URL = 'https://chat.whatsapp.com/EXAMPLE'; 
const WHATSAPP_URL_OK = 'https://chat.whatsapp.com/BvYR9LyuCAg311B40X5YEU?mode=gi_t';

function App() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  {/*
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("1");
  const [diet, setDiet] = useState("");
  const [message, setMessage] = useState("");

  const body = encodeURIComponent(`Hallo zusammen,
ich möchte mich hiermit für das Klassentreffen 2027 anmelden. Hier sind meine Details:
Name: ${name}
E-Mail: ${email}
Anzahl Personen: ${guests}
Ernährung / Allergien: ${diet}
Nachricht: ${message}

`);
  
  const mailto = `mailto:${ORGANIZER_EMAIL}?subject=${subject}&body=${body}`;

  */}
  return (
    <main className="relative mx-auto max-w-4xl px-4 sm:px-6 pb-12 sm:pb-20 overflow-hidden">
        <img src={partyhat} className="pointer-events-none absolute -right-4 top-4 h-20 w-20 sm:right-4 sm:-top-2 sm:h-20 sm:w-20 md:h-28 md:w-28 -rotate-12" style={{ color: 'var(--text-h)' }} />
        <img src={glass} className="pointer-events-none absolute -left-12 bottom-4 h-24 w-24 sm:-left-8 sm:bottom-6 sm:h-24 sm:w-24 md:-left-16 md:h-32 md:w-32" style={{ color: 'var(--text-h)' }} />
        <img src={glasses} className="pointer-events-none absolute -right-4 bottom-8 h-24 w-24 sm:-right-8 sm:h-24 sm:w-24 md:h-32 md:w-32 md:block" style={{ color: 'var(--text-h)' }} />
        <img src={girlande} className="pointer-events-none absolute -left-6 -top-4 h-32 w-32 sm:-left-8 sm:h-40 sm:w-40 md:-left-8 md:h-48 md:w-48" style={{ color: 'var(--text-h)' }} />
      <div className="relative overflow-hidden text-primary">
        <header className="text-center relative z-10 flex flex-col items-center justify-center px-4 py-8">
          <img src={zehnJahre} alt="10 Jahre" className="h-24 w-auto sm:h-32 md:h-40" />
          <img src={hands} alt="Hands" className="pointer-events-none h-40 w-80 sm:h-28 sm:w-56 md:h-40 md:w-80" style={{ filter: 'invert(0.25) brightness(0.3)' }} />
          <p className="mt-12 text-sm font-bold uppercase tracking-widest md:text-base">
            Klassentreffen der<br />Abschlussklassen 2017
          </p>
          <p className="mt-10 text-xs tracking-[0.3em] text-muted-foreground">
            2017 — 2027
          </p>
        </header>
      </div>
      {/* Event info */}
        <div className="mt-6 sm:mt-8 rounded-2xl border border-primary/20 bg-card/60 p-4 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">Wann & wo</h2>
          <dl className="mt-5 space-y-3 text-base">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Datum</dt>
              <dd>12. Juni 2027</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Zeit</dt>
              <dd>tbd</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Ort</dt>
              <dd>
                Mensa, Kantonsschule Frauenfeld
                
              </dd>
            </div>
          </dl>
        </div>

        {/* Event info - Accordion */}
        <div className="mt-10 sm:mt-16 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm overflow-hidden">
          <h2 className="text-2xl font-semibold p-4 sm:p-8 pb-4 sm:pb-4">Informationen rund ums Event</h2>
          
          {/* Accordion Item 1 */}
          <div className="border-t border-primary/20">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full flex justify-between items-center p-4 sm:p-8 hover:bg-primary/5 transition"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Anmeldung</dt>
              <span style={{ color: 'var(--text-h)' }} className="text-xl">
                {openAccordion === 0 ? '−' : '+'}
              </span>
            </button>
            {openAccordion === 0 && (
              <div className="px-4 sm:px-8 pb-4 sm:pb-8 text-base">
                <p>Die Anmeldung ist ab dem 01. Januar 2027 über diese Website möglich.</p>
              </div>
            )}
          </div>

          {/* Accordion Item 2 */}
          <div className="border-t border-primary/20 text-left">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center p-4 sm:p-8 hover:bg-primary/5 transition"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Menü</dt>
              <span style={{ color: 'var(--text-h)' }} className="text-xl">
                {openAccordion === 1 ? '−' : '+'}
              </span>
            </button>
            {openAccordion === 1 && (
              <div className="px-4 sm:px-8 pb-4 sm:pb-8 text-base text-left">
                <p className="mb-2">Apéro mit Salzgebäck und Getränken.</p><br/>
                <p className="mb-2">Penneplausch mit Vier verschiedenen Saucen zur Auswahl.</p>
                <p className="mb-2">Dazu gibt es Gemüse und zum Dessert ein leckeres Schoggimousse.</p>
                <p>Getränke werden ebenfalls bereitgestellt.</p>
              </div>
            )}
          </div>

          {/* Accordion Item 3 */}
          <div className="border-t border-primary/20">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center p-4 sm:p-8 hover:bg-primary/5 transition"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Ablauf</dt>
              <span style={{ color: 'var(--text-h)' }} className="text-xl">
                {openAccordion === 2 ? '−' : '+'}
              </span>
            </button>
            {openAccordion === 2 && (
              <div className="px-4 sm:px-8 pb-4 sm:pb-8 text-base text-left">
                <p>Der genaue Ablauf wird noch bekannt gegeben. Bleib gespannt!</p>
              </div>
            )}
          </div>

          {/* Accordion Item 4 */}
          <div className="border-t border-primary/20">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex justify-between items-center p-4 sm:p-8 hover:bg-primary/5 transition"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Kosten</dt>
              <span style={{ color: 'var(--text-h)' }} className="text-xl">
                {openAccordion === 3 ? '−' : '+'}
              </span>
            </button>
            {openAccordion === 3 && (
              <div className="px-4 sm:px-8 pb-4 sm:pb-8 text-base text-left">
                <p>Die Kosten belaufen sich auf 50 CHF pro Person.</p>
                <p>Mit dem Betrag sind Getränke, Essen und die Räumlichkeit inkl. Deko beglichen.</p><br/>
                <p>Die Bezahlung erfolgt bei Anmeldung via Twint.</p><br/>
              </div>
            )}
          </div>

          {/* Accordion Item 5 */}
          <div className="border-t border-primary/20">
            <button
              onClick={() => toggleAccordion(4)}
              className="w-full flex justify-between items-center p-4 sm:p-8 hover:bg-primary/5 transition"
            >
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Mitwirken</dt>
              <span style={{ color: 'var(--text-h)' }} className="text-xl">
                {openAccordion === 4 ? '−' : '+'}
              </span>
            </button>
            {openAccordion === 4 && (
              <div className="px-4 sm:px-8 pb-4 sm:pb-8 text-base text-left">
                <p>Du möchtest bei der Planung und Organisation mithelfen? Super, wir freuen uns über jede Unterstützung!</p>
                <p>Hier kannst du unserer Whatsapp-Gruppe beitreten: <a href={WHATSAPP_URL_OK} target="_blank" rel="noreferrer" className="text-primary hover:underline">WhastApp-Gruppe</a></p>
              </div>
            )}
          </div>

        </div>

        {/* WhatsApp */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold">Bleib auf dem Laufenden</h2>
          <p className="mt-2 text-muted-foreground">
            Tritt unserer WhatsApp-Gruppe bei für Updates und Smalltalk vor dem Treffen.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: 'var(--text-h)' }}
          >
            WhatsApp-Gruppe beitreten
          </a>
        </div>
        {/* Signup form 
        <div className="mt-12 sm:mt-16">
          <h2 className="text-center text-2xl font-semibold">Anmeldung</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Sag uns Bescheid, dass du dabei bist.
          </p>
          <form  onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;}} method="POST" className="mx-auto mt-6 max-w-md space-y-4 rounded-lg border border-primary/20 bg-card/60 p-6 backdrop-blur-sm">
           <input className='border border-primary/30 text-muted-foreground rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1' type="text" name="name" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
            <input className='border border-primary/30 text-muted-foreground rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1' type="email" name="email" placeholder="E-Mail-Adresse" required onChange={(e) => setEmail(e.target.value)} />
            <input className='border border-primary/30 text-muted-foreground rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1' type="number" name="guests" placeholder="Anzahl Personen" min="1" required onChange={(e) => setGuests(e.target.value)} />
            <input className='border border-primary/30 text-muted-foreground rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1' type="text" name="diet" placeholder="Ernährung / Allergien (optional)" onChange={(e) => setDiet(e.target.value)} />
            <textarea className='border border-primary/30 text-muted-foreground rounded-md p-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-1' name="message" placeholder="Besondere Wünsche oder Bemerkungen (optional)" rows={4} onChange={(e) => setMessage(e.target.value)} />
            <button
              type="submit"
              className="mt-4 cursor-pointer w-full rounded-full px-6 sm:px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: 'var(--text-h)' }}
            >
              Anmeldung absenden
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Es öffnet sich dein E-Mail-Programm mit einer vorausgefüllten Nachricht.
            </p>
          </form>
        </div>
        */}
    </main>
  )
}

export default App
