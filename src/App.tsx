import './App.css'
import hands from '/assets/hands.svg';
import partyhat from '/assets/partyhat.svg';
import glass from '/assets/glass.svg';
import glasses from '/assets/glasses.svg';
import girlande from '/assets/girlande.svg';
import { useState } from 'react';

const ORGANIZER_EMAIL = ''
const subject = encodeURIComponent('Anmeldung zum Klassentreffen 2027');

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("1");
  const [diet, setDiet] = useState("");
  const [message, setMessage] = useState("");
  
  const body = encodeURIComponent(`Hallo zusammen,

ich möchte mich hiermit für das Klassentreffen am 12. Juni 2027 anmelden.

Name: ${name}
E-Mail: ${email}
Anzahl Personen: ${guests}
Ernährung / Allergien: ${diet}
Nachricht: ${message}`);
  
  const mailto = `mailto:${ORGANIZER_EMAIL}?subject=${subject}&body=${body}`;
  return (
    <main className="relative mx-auto max-w-4xl px-6 pb-20">
        <img src={partyhat} className="pointer-events-none absolute -right-4 top-4 h-20 w-20 sm:right-4 sm:-top-2 sm:h-20 sm:w-20 md:h-28 md:w-28 text-primary/60 -rotate-12" />
        <img src={glass} className="pointer-events-none absolute -left-16 bottom-4 h-24 w-24 sm:bottom-6 sm:h-24 sm:w-24 md:h-32 md:w-32 text-primary/70" />
        <img src={glasses} className="pointer-events-none absolute -right-8 bottom-8 h-24 w-24 sm:h-24 sm:w-24 md:h-32 md:w-32 text-primary/60 md:block" />
        <img src={girlande} className="pointer-events-none absolute -left-8 -top-4 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 text-primary/60" />
      <div className="relative overflow-hidden text-primary">
        <header className="text-center relative z-10 flex flex-col items-center justify-center px-4 py-8">
          <h1 className="text-8xl leading-none md:text-8xl">
            10 Jahre
          </h1>
          <img src={hands} alt="Hands" className="pointer-events-none h-20 w-40 sm:h-28 sm:w-56 md:h-40 md:w-80" />
          <p className="mt-8 text-sm font-bold uppercase tracking-widest md:text-base">
            Klassentreffen der<br />Abschlussklassen 2017
          </p>
          <p className="mt-3 text-base md:text-lg">Frauenfeld</p>
          <p className="mt-10 text-xs tracking-[0.3em] text-muted-foreground">
            2017 — 2027
          </p>
        </header>
      </div>
      {/* Event info */}
        <div className="mt-8 rounded-2xl border border-primary/20 bg-card/60 p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">Wann & wo</h2>
          <dl className="mt-5 space-y-3 text-base">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Datum</dt>
              <dd>12. Juni 2027</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Zeit</dt>
              <dd>18:00 Uhr</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Ort</dt>
              <dd>
                Mensa, Kantonsschule Frauenfeld
                <br />
                <span className="text-muted-foreground">Speicherstrasse 10, 8500 Frauenfeld</span>
              </dd>
            </div>
          </dl>
        </div>
        {/* Signup form */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold">Anmeldung</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Sag uns Bescheid, dass du dabei bist.
          </p>
          <form  onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;}} method="POST" className="mx-auto mt-6 max-w-md space-y-4 rounded-lg border border-primary/20 bg-card/60 p-6 backdrop-blur-sm">
           <input className='border text-muted-foreground rounded-md p-2' type="text" name="name" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
            <input className='border text-muted-foreground rounded-md p-2' type="email" name="email" placeholder="E-Mail-Adresse" required onChange={(e) => setEmail(e.target.value)} />
            <input className='border text-muted-foreground rounded-md p-2' type="number" name="guests" placeholder="Anzahl Personen" min="1" required onChange={(e) => setGuests(e.target.value)} />
            <input className='border text-muted-foreground rounded-md p-2' type="text" name="diet" placeholder="Ernährung / Allergien (optional)" onChange={(e) => setDiet(e.target.value)} />
            <textarea className='border text-muted-foreground rounded-md p-2' name="message" placeholder="Besondere Wünsche oder Bemerkungen (optional)" rows={4} onChange={(e) => setMessage(e.target.value)} />
            <button
              type="submit"
              className="mt-2 cursor-pointer w-half bg-neutral-700 rounded-full px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Anmeldung absenden
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Es öffnet sich dein E-Mail-Programm mit einer vorausgefüllten Nachricht.
            </p>
          </form>
        </div>
    </main>
  )
}

export default App
