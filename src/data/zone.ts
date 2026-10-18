// Le zone d'Italia dove ha lavorato Stefano, usate dalle proposte con la mappa.
// "tappe" = numeri delle voci di curriculum (src/data/curriculum.ts).
export type Zona = { id: string; k: string; d: string; punti: string[]; tappe: number[]; recente?: boolean };

export const ZONE_MAPPA: Zona[] = [
  { id: 'emilia', k: 'z.emilia', d: 'z.emilia.d', punti: ['parma', 'ferrara'], tappe: [9, 8] },
  { id: 'toscana', k: 'z.toscana', d: 'z.toscana.d', punti: ['firenze', 'siena'], tappe: [5, 3, 4, 1, 6] },
  { id: 'lazio', k: 'z.lazio', d: 'pl.sora.d', punti: ['sora'], tappe: [7] },
  { id: 'puglia', k: 'z.puglia', d: 'z.puglia.d', punti: ['bari', 'polignano', 'alberobello', 'ostuni', 'lecce'], tappe: [0], recente: true },
];

// Nomi dei posti (uguali nelle 3 lingue, tranne Firenze)
export const NOMI: Record<string, string> = {
  parma: 'Parma', ferrara: 'Ferrara', firenze: 'Firenze', siena: 'Siena', sora: 'Sora',
  bari: 'Bari', polignano: 'Polignano a Mare', alberobello: 'Alberobello', ostuni: 'Ostuni', lecce: 'Lecce',
};
export const NOMI_KEY: Record<string, string> = { firenze: 'pl.firenze' };

import { ITALIA_W, ITALIA_H, PUNTI } from './italia';
/** Coordinate di un posto nel disegno della mappa (unità SVG). */
export const xy = (id: string): [number, number] => [(PUNTI[id][0] / 100) * ITALIA_W, (PUNTI[id][1] / 100) * ITALIA_H];
/** Percorso morbido che passa per una lista di posti (curve di Catmull-Rom). */
export function percorso(ids: string[]): string {
  const p = ids.map(xy);
  if (p.length === 1) return `M${p[0][0]} ${p[0][1]}`;
  let d = `M${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}
/** Il viaggio completo da nord a sud: formazione, Toscana, Lazio, Puglia. */
export const VIAGGIO = ['parma', 'ferrara', 'firenze', 'siena', 'sora', 'bari', 'polignano', 'alberobello', 'ostuni', 'lecce'];
