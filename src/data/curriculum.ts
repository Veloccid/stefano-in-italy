// Le tappe del curriculum (testi in src/data/testi.ts, chiavi cv.N.h e cv.N.d).
// "luoghi" serve alla proposta con la mappa.
export type Tappa = { n: number; anni: string; incorso?: boolean; luoghi: string[] };

export const TAPPE: Tappa[] = [
  { n: 0, anni: '2025 –', incorso: true, luoghi: ['italia'] },
  { n: 1, anni: '2024 –', incorso: true, luoghi: ['firenze', 'italia'] },
  { n: 2, anni: '2025', luoghi: ['italia'] },
  { n: 3, anni: '2024 – 2025', luoghi: ['firenze', 'toscana'] },
  { n: 4, anni: '2024 – 2025', luoghi: ['firenze', 'toscana'] },
  { n: 5, anni: '2022 – 2024', luoghi: ['firenze', 'toscana'] },
  { n: 6, anni: '2022 – 2023', luoghi: ['firenze'] },
  { n: 7, anni: '2021 – 2022', luoghi: ['sora'] },
  { n: 8, anni: '2021', luoghi: ['parma'] },
  { n: 9, anni: '2013 – 2017', luoghi: ['ferrara'] },
];

export const LINGUE_PARLATE = ['f.lang.0', 'f.lang.1', 'f.lang.2'];
export const SPECIALITA = ['f.spec.0', 'f.spec.1', 'f.spec.2', 'f.spec.3', 'f.spec.4', 'f.spec.5'];
export const ZONE = ['f.where.0', 'f.where.1', 'f.where.2', 'f.where.3'];
export const SERVIZI = ['col.0', 'col.1', 'col.2'];
