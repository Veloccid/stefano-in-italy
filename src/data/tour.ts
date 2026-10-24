// Punti della mappa (proposta F): solo i posti dove Stefano fa tour oggi.
// "anni" e "con" vengono dal curriculum; daCompletare = dettagli da far confermare a Stefano.
// et = posizione dell'etichetta nel disegno (unità della mappa), così le città vicine restano facili da toccare.
export type Tour = { t: string; d: string; anni?: string; con?: string; daCompletare?: boolean };
export type Punto = { id: string; regione: 'toscana' | 'lazio' | 'puglia' | 'veneto' | 'piemonte' | 'liguria'; tipo: 'tour' | 'base'; et: [number, number]; tour: Tour[]; casa?: boolean };

const PUGLIA: Tour = { t: 't.puglia', d: 't.puglia.d', anni: '2025 –', con: 'Michelangelo International', daCompletare: true };

export const PUNTI_MAPPA: Punto[] = [
  { id: 'torino', regione: 'piemonte', tipo: 'tour', et: [92, 200], tour: [{ t: 't.torino', d: 't.torino.d', anni: '2025', con: 'SRISA Santa Reparata International School of Art' }] },
  { id: 'venezia', regione: 'veneto', tipo: 'tour', et: [352, 104], tour: [{ t: 't.venezia', d: 't.venezia.d', anni: '2024', con: 'SRISA Santa Reparata International School of Art' }] },
  { id: 'cinqueterre', regione: 'liguria', tipo: 'tour', et: [152, 264], tour: [{ t: 't.cinque', d: 't.cinque.d', anni: '2024', con: 'Walkabout Florence' }] },
  { id: 'firenze', regione: 'toscana', tipo: 'tour', et: [306, 190], tour: [
    { t: 't.food', d: 'cv.4.d', anni: '2024 – 2025', con: 'Tourist Italy · Streaty' },
    { t: 't.day', d: 'cv.5.d', anni: '2022 – 2025', con: 'Ciao Florence · Walkabout Florence' },
    { t: 't.students', d: 'cv.1.d', anni: '2024 –', con: 'SRISA Santa Reparata International School of Art' },
  ] },
  { id: 'siena', regione: 'toscana', tipo: 'tour', et: [310, 270], tour: [
    { t: 't.day', d: 'cv.3.d', anni: '2022 – 2025', con: 'Walkabout Florence · Ciao Florence', daCompletare: true },
    { t: 't.private', d: 'cv.4.d', anni: '2024 – 2025', con: 'Tourist Italy', daCompletare: true },
  ] },
  { id: 'sora', regione: 'lazio', tipo: 'base', casa: true, et: [300, 402], tour: [
    { t: 't.wine', d: 't.wine.d' },
    { t: 't.cheese', d: 't.cheese.d' },
  ] },
  { id: 'bari', regione: 'puglia', tipo: 'tour', et: [566, 166], tour: [PUGLIA] },
  { id: 'polignano', regione: 'puglia', tipo: 'tour', et: [566, 216], tour: [PUGLIA] },
  { id: 'alberobello', regione: 'puglia', tipo: 'tour', et: [566, 266], tour: [PUGLIA] },
  { id: 'ostuni', regione: 'puglia', tipo: 'tour', et: [566, 316], tour: [PUGLIA] },
  { id: 'lecce', regione: 'puglia', tipo: 'tour', et: [566, 366], tour: [PUGLIA] },
];

/** Inquadratura della mappa: dal Piemonte alla Puglia, dove sono tutti i posti attivi. */
export const INQUADRA = { x: 40, y: 72, w: 600, h: 400 };
