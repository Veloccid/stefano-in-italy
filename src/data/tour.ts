// Punti della mappa (proposta F) e tour fatti in ogni posto.
// I tour vengono dal curriculum di Stefano: "anni" e "con" sono quelli del CV.
// daCompletare = dettagli da far confermare a Stefano (tappe precise, nomi dei tour).
export type Tour = { t: string; d: string; anni: string; con: string; daCompletare?: boolean };
export type Punto = { id: string; tipo: 'tour' | 'formazione' | 'base'; tour: Tour[] };

const PUGLIA: Tour = { t: 't.puglia', d: 't.puglia.d', anni: '2025 –', con: 'Michelangelo International', daCompletare: true };

export const PUNTI_MAPPA: Punto[] = [
  { id: 'firenze', tipo: 'tour', tour: [
    { t: 't.food', d: 'cv.4.d', anni: '2024 – 2025', con: 'Tourist Italy · Streaty' },
    { t: 't.day', d: 'cv.5.d', anni: '2022 – 2025', con: 'Ciao Florence · Walkabout Florence' },
    { t: 't.students', d: 'cv.1.d', anni: '2024 –', con: 'SRISA Santa Reparata International School of Art' },
    { t: 't.welcome', d: 'cv.6.d', anni: '2022 – 2023', con: 'Syracuse University' },
  ] },
  { id: 'siena', tipo: 'tour', tour: [
    { t: 't.day', d: 'cv.3.d', anni: '2022 – 2025', con: 'Walkabout Florence · Ciao Florence', daCompletare: true },
    { t: 't.private', d: 'cv.4.d', anni: '2024 – 2025', con: 'Tourist Italy', daCompletare: true },
  ] },
  { id: 'sora', tipo: 'base', tour: [{ t: 't.dmo', d: 'cv.7.d', anni: '2021 – 2022', con: 'DMO Ciociaria – Valle di Comino' }] },
  { id: 'bari', tipo: 'tour', tour: [PUGLIA] },
  { id: 'polignano', tipo: 'tour', tour: [PUGLIA] },
  { id: 'alberobello', tipo: 'tour', tour: [PUGLIA] },
  { id: 'ostuni', tipo: 'tour', tour: [PUGLIA] },
  { id: 'lecce', tipo: 'tour', tour: [PUGLIA] },
  { id: 'parma', tipo: 'formazione', tour: [{ t: 'cv.8.h', d: 'cv.8.d', anni: '2021', con: 'Forma Futuro' }] },
  { id: 'ferrara', tipo: 'formazione', tour: [{ t: 'cv.9.h', d: 'cv.9.d', anni: '2013 – 2017', con: 'Università di Ferrara' }] },
];
