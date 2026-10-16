// Le 10 proposte grafiche. Stessi colori, logo, font, testi e dati: cambiano impaginazione, movimento e interazione.
export type Tema = { id: string; lettera: string; nome: string; idea: string; tipo: string };

export const TEMI: Tema[] = [
  { id: 'cammino', lettera: 'A', nome: 'SII! in cammino', tipo: 'Bozza attuale', idea: 'La bozza di partenza: "Stefano In Italy" diventa SII! e Stefano vola nella barra in alto e cammina mentre scorri.' },
  { id: 'essenziale', lettera: 'B', nome: 'Essenziale', tipo: 'Classica', idea: 'Pagina pulita in verde e crema, titoli grandi: chi è, numeri, recensioni e contatto in 30 secondi.' },
  { id: 'rivista', lettera: 'C', nome: 'Rivista di viaggio', tipo: 'Classica', idea: 'Impaginata come un articolo di una rivista: ritratto in prima persona e la recensione citata in grande.' },
  { id: 'verde', lettera: 'D', nome: 'Verde pieno', tipo: 'Classica', idea: 'Tutto su verde bosco come il logo, effetto poster, crema solo per testi e pulsanti.' },
  { id: 'percorso', lettera: 'E', nome: 'Il percorso', tipo: 'In movimento', idea: 'Scorrendo si disegna la linea del viaggio e Stefano la percorre: ogni tappa è un pezzo vero del suo curriculum.' },
  { id: 'cartoline', lettera: 'F', nome: 'Cartoline', tipo: 'In movimento', idea: 'Esperienze e recensioni come cartoline dai luoghi in cui ha lavorato: si girano per leggere il retro.' },
  { id: 'paletta', lettera: 'G', nome: 'Segui la paletta', tipo: 'In movimento', idea: 'Come in un tour vero: Stefano alza la paletta e indica la tappa, la pagina lo segue sezione dopo sezione.' },
  { id: 'mappa', lettera: 'H', nome: 'Mappa dell\'Italia', tipo: 'Interattiva', idea: 'L\'Italia disegnata con i punti dove ha lavorato: tocchi Firenze, Toscana, Sora… e leggi cosa ha fatto lì.' },
  { id: 'kit', lettera: 'I', nome: 'Il kit del tour leader', tipo: 'Interattiva', idea: 'Una scrivania con gli oggetti del mestiere (paletta, radio, cartellina, taccuino, telefono) da cliccare.' },
  { id: 'bacheca', lettera: 'J', nome: 'Bacheca recensioni', tipo: 'Interattiva', idea: 'Le recensioni come screenshot appesi a una bacheca, da spostare e ingrandire, con le stelle in primo piano.' },
];

export const temaDa = (id: string) => TEMI.find((x) => x.id === id)!;
export const percorsiTemi = () => TEMI.map((tema) => ({ params: { tema: tema.id }, props: { tema } }));
export const link = (tema: Tema | string, percorso = '') =>
  `/proposte/${typeof tema === 'string' ? tema : tema.id}/${percorso}`.replace(/\/+$/, '/') ;
