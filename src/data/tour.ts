// Punti della mappa (proposta F): solo i posti dove Stefano fa tour oggi.
// "anni" e "con" vengono dal curriculum; daCompletare = dettagli da far confermare a Stefano.
// et = posizione dell'etichetta nel disegno (unità della mappa), così le città vicine restano facili da toccare.
export type Tour = { t: string; d: string; anni?: string; con?: string; daCompletare?: boolean };
export type Punto = { id: string; regione: 'toscana' | 'lazio' | 'puglia'; tipo: 'tour' | 'base'; et: [number, number]; tour: Tour[]; casa?: boolean };

const PUGLIA: Tour = { t: 't.puglia', d: 't.puglia.d', anni: '2025 –', con: 'Michelangelo International', daCompletare: true };

export const PUNTI_MAPPA: Punto[] = [
  { id: 'firenze', regione: 'toscana', tipo: 'tour', et: [300, 196], tour: [
    { t: 't.food', d: 'cv.4.d', anni: '2024 – 2025', con: 'Tourist Italy · Streaty' },
    { t: 't.day', d: 'cv.5.d', anni: '2022 – 2025', con: 'Ciao Florence · Walkabout Florence' },
    { t: 't.students', d: 'cv.1.d', anni: '2024 –', con: 'SRISA Santa Reparata International School of Art' },
  ] },
  { id: 'siena', regione: 'toscana', tipo: 'tour', et: [306, 276], tour: [
    { t: 't.day', d: 'cv.3.d', anni: '2022 – 2025', con: 'Walkabout Florence · Ciao Florence', daCompletare: true },
    { t: 't.private', d: 'cv.4.d', anni: '2024 – 2025', con: 'Tourist Italy', daCompletare: true },
  ] },
  { id: 'sora', regione: 'lazio', tipo: 'base', casa: true, et: [300, 402], tour: [
    { t: 't.wine', d: 't.wine.d' },
    { t: 't.cheese', d: 't.cheese.d' },
  ] },
  { id: 'bari', regione: 'puglia', tipo: 'tour', et: [566, 172], tour: [PUGLIA] },
  { id: 'polignano', regione: 'puglia', tipo: 'tour', et: [566, 216], tour: [PUGLIA] },
  { id: 'alberobello', regione: 'puglia', tipo: 'tour', et: [566, 260], tour: [PUGLIA] },
  { id: 'ostuni', regione: 'puglia', tipo: 'tour', et: [566, 304], tour: [PUGLIA] },
  { id: 'lecce', regione: 'puglia', tipo: 'tour', et: [566, 348], tour: [PUGLIA] },
];

/** Inquadratura della mappa: Italia centro-sud, dove sono tutti i posti attivi. */
export const INQUADRA = { x: 180, y: 128, w: 460, h: 340 };
