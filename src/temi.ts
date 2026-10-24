// Le 10 proposte grafiche. Stessi colori, logo, font, testi e dati: cambiano impaginazione, movimento e interazione.
export type Tema = { id: string; lettera: string; nome: string; idea: string; tipo: string; multi?: boolean };

export const TEMI: Tema[] = [
  { id: 'cammino', lettera: 'A', nome: 'SII! in cammino', tipo: 'Bozza attuale', idea: 'La bozza di partenza: "Stefano In Italy" diventa SII! e Stefano vola nella barra in alto e cammina mentre scorri.' },
  { id: 'essenziale', lettera: 'B', nome: 'Essenziale', tipo: 'Classica', idea: 'Pagina pulita in verde e crema, titoli grandi: chi è, numeri, recensioni e contatto in 30 secondi.' },
  { id: 'rivista', lettera: 'C', nome: 'Rivista di viaggio', tipo: 'Classica', idea: 'Impaginata come un articolo di una rivista: ritratto in prima persona e la recensione citata in grande.' },
  { id: 'verde', lettera: 'D', nome: 'Verde pieno', tipo: 'Classica', idea: 'Tutto su verde bosco come il logo, effetto poster, crema solo per testi e pulsanti.' },
  { id: 'percorso', lettera: 'E', nome: 'Il percorso', tipo: 'In movimento', idea: 'Scorrendo si disegna la linea del viaggio e Stefano la percorre: ogni tappa è un pezzo vero del suo curriculum.' },
  { id: 'sito', lettera: 'F', nome: 'Sito completo', tipo: 'Più pagine', multi: true, idea: 'Un sito vero con più pagine: Home asciutta come la A, Servizi (itinerari su misura con agenzia partner), Mappa dei tour, Recensioni, Curriculum e Contatti.' },
];

export const temaDa = (id: string) => TEMI.find((x) => x.id === id)!;
export const percorsiTemi = () => TEMI.filter((t) => !t.multi).map((tema) => ({ params: { tema: tema.id }, props: { tema } }));
export const link = (tema: Tema | string, percorso = '') =>
  `/proposte/${typeof tema === 'string' ? tema : tema.id}/${percorso}`.replace(/\/+$/, '/') ;
