// Le 10 proposte grafiche. Stessi colori, logo, font, testi e dati: cambiano impaginazione, movimento e interazione.
export type Tema = { id: string; lettera: string; nome: string; idea: string; tipo: string };

export const TEMI: Tema[] = [
  { id: 'cammino', lettera: 'A', nome: 'SII! in cammino', tipo: 'Bozza attuale', idea: 'La bozza di partenza: "Stefano In Italy" diventa SII! e Stefano vola nella barra in alto e cammina mentre scorri.' },
  { id: 'essenziale', lettera: 'B', nome: 'Essenziale', tipo: 'Classica', idea: 'Pagina pulita in verde e crema, titoli grandi: chi è, numeri, recensioni e contatto in 30 secondi.' },
  { id: 'rivista', lettera: 'C', nome: 'Rivista di viaggio', tipo: 'Classica', idea: 'Impaginata come un articolo di una rivista: ritratto in prima persona e la recensione citata in grande.' },
  { id: 'verde', lettera: 'D', nome: 'Verde pieno', tipo: 'Classica', idea: 'Tutto su verde bosco come il logo, effetto poster, crema solo per testi e pulsanti.' },
  { id: 'percorso', lettera: 'E', nome: 'Il percorso', tipo: 'In movimento', idea: 'Scorrendo si disegna la linea del viaggio e Stefano la percorre: ogni tappa è un pezzo vero del suo curriculum.' },
  { id: 'cartoline', lettera: 'F', nome: 'Cartoline', tipo: 'In movimento', idea: 'Esperienze e recensioni come cartoline dai luoghi in cui ha lavorato: si girano per leggere il retro.' },
  { id: 'volo', lettera: 'G', nome: 'Volo sull\'Italia', tipo: 'In movimento', idea: 'Scorrendo, la telecamera vola sopra l\'Italia vista in prospettiva, da nord fino alla Puglia: a ogni tappa una scheda, poi si atterra sui contatti.' },
  { id: 'mappa', lettera: 'H', nome: 'Mappa dell\'Italia', tipo: 'Interattiva', idea: 'L\'Italia si disegna da sola e si accende: tocchi una regione e la mappa ci vola dentro, il percorso si disegna e Stefano lo percorre. Puglia in primo piano.' },
  { id: 'paesaggi', lettera: 'I', nome: 'Paesaggi', tipo: 'Interattiva', idea: 'Colline toscane, borghi del Lazio, trulli e mare della Puglia disegnati a strati: scorrendo Stefano ci cammina dentro, e tocchi quello che vedi.' },
  { id: 'piegata', lettera: 'J', nome: 'La mappa piegata', tipo: 'Interattiva', idea: 'Il sito si apre come una vecchia carta stradale piegata: la tocchi e si spiega pannello dopo pannello, con dentro la mappa, Stefano, le recensioni e i contatti.' },
  { id: 'sobria', lettera: 'K', nome: 'SII! sobria', tipo: 'Dopo il questionario', idea: 'La A resa calma: "Stefano In Italy" diventa SII! una volta sola, testi grandi, recensioni subito sotto e email ben visibile.' },
  { id: 'mappa-calma', lettera: 'L', nome: 'La mappa tranquilla', tipo: 'Dopo il questionario', idea: 'La H senza voli né effetti: una mappa elegante e ferma, tocchi una regione e leggi cosa ha fatto lì.' },
  { id: 'lettere', lettera: 'M', nome: 'Le lettere dei viaggiatori', tipo: 'Dopo il questionario', idea: 'Il sito parte dalle recensioni e dalle lettere scritte a mano: la fiducia prima di tutto, poi il curriculum.' },
  { id: 'porte', lettera: 'N', nome: 'Due porte', tipo: 'Dopo il questionario', idea: 'All\'apertura due scelte: agenzia o tour operator, oppure gruppo privato. Ognuno trova i contenuti pensati per lui.' },
];

export const temaDa = (id: string) => TEMI.find((x) => x.id === id)!;
export const percorsiTemi = () => TEMI.map((tema) => ({ params: { tema: tema.id }, props: { tema } }));
export const link = (tema: Tema | string, percorso = '') =>
  `/proposte/${typeof tema === 'string' ? tema : tema.id}/${percorso}`.replace(/\/+$/, '/') ;
