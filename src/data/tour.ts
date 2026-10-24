// Mappa della proposta F: regioni dove lavora Stefano e, dentro ognuna, le città con le esperienze.
// Nessun anno, come chiesto. "con" = agenzia o scuola; daCompletare = dettagli da far confermare a Stefano.
import { proietta } from './regioni';

export type Esperienza = { t: string; d: string; con?: string; daCompletare?: boolean };
export type Citta = { id: string; nome: string; nomeK?: string; lon: number; lat: number; lato?: 'l' | 'r'; casa?: boolean; esp: Esperienza[] };
export type Regione = { id: string; k: string; recente?: boolean; citta: Citta[] };

const SRISA = 'SRISA Santa Reparata International School of Art';
const WALK = 'Walkabout Florence';
const giornata = (d: string): Esperienza => ({ t: 't.giornata', d });
const PUGLIA: Esperienza = { t: 't.puglia', d: 't.puglia.d', con: 'Michelangelo International', daCompletare: true };
const COSTIERA: Esperienza = { t: 't.costiera', d: 't.costiera.d', daCompletare: true };
const LIGURIA: Esperienza = { t: 't.giornata', d: 't.liguria.d', con: WALK, daCompletare: true };

export const REGIONI_TOUR: Regione[] = [
  { id: 'piedmont', k: 'mp.piemonte', citta: [
    { id: 'torino', nome: 'Torino', nomeK: 'pl.torino', lon: 7.6869, lat: 45.0703, esp: [{ t: 't.torino', d: 't.torino.d', con: SRISA }] },
  ] },
  { id: 'liguria', k: 'mp.liguria', citta: [
    { id: 'genova', nome: 'Genova', nomeK: 'pl.genova', lon: 8.9463, lat: 44.4056, lato: 'l', esp: [LIGURIA] },
    { id: 'cinqueterre', nome: 'Cinque Terre', lon: 9.6828, lat: 44.1349, lato: 'l', esp: [{ t: 't.cinque', d: 't.cinque.d', con: WALK }] },
    { id: 'laspezia', nome: 'La Spezia', lon: 9.8240, lat: 44.1025, lato: 'r', esp: [LIGURIA] },
    { id: 'portovenere', nome: 'Porto Venere', lon: 9.8360, lat: 44.0503, lato: 'r', esp: [LIGURIA] },
  ] },
  { id: 'veneto', k: 'mp.veneto', citta: [
    { id: 'venezia', nome: 'Venezia', nomeK: 'pl.venezia', lon: 12.3155, lat: 45.4408, esp: [{ t: 't.venezia.giro', d: 't.venezia.giro.d' }, { t: 't.venezia', d: 't.venezia.d', con: SRISA }] },
  ] },
  { id: 'tuscany', k: 'mp.toscana', citta: [
    { id: 'lucca', nome: 'Lucca', lon: 10.5027, lat: 43.8429, lato: 'l', esp: [giornata('t.lucca.d')] },
    { id: 'pisa', nome: 'Pisa', lon: 10.4017, lat: 43.7228, lato: 'l', esp: [giornata('t.pisa.d')] },
    { id: 'firenze', nome: 'Firenze', nomeK: 'pl.firenze', lon: 11.2558, lat: 43.7696, lato: 'r', esp: [
      { t: 't.food', d: 'cv.4.d', con: 'Tourist Italy · Streaty' },
      { t: 't.day', d: 'cv.5.d', con: 'Ciao Florence · Walkabout Florence' },
      { t: 't.students', d: 'cv.1.d', con: SRISA },
    ] },
    { id: 'sangimignano', nome: 'San Gimignano', lon: 11.0433, lat: 43.4677, lato: 'l', esp: [giornata('t.sangimignano.d')] },
    { id: 'chianti', nome: 'Chianti', lon: 11.2860, lat: 43.4700, lato: 'r', esp: [{ t: 't.chianti.docg', d: 't.chianti.docg.d' }, { t: 't.chianti.classico', d: 't.chianti.classico.d' }] },
    { id: 'siena', nome: 'Siena', lon: 11.3308, lat: 43.3188, lato: 'r', esp: [giornata('t.siena.d')] },
    { id: 'montalcino', nome: 'Montalcino', lon: 11.4893, lat: 43.0586, lato: 'l', esp: [{ t: 't.montalcino', d: 't.montalcino.d' }] },
    { id: 'pienza', nome: 'Pienza', lon: 11.6790, lat: 43.0768, lato: 'r', esp: [{ t: 't.pienza', d: 't.pienza.d' }] },
    { id: 'montepulciano', nome: 'Montepulciano', lon: 11.7827, lat: 43.0985, lato: 'r', esp: [{ t: 't.montepulciano', d: 't.montepulciano.d' }] },
  ] },
  { id: 'lazio', k: 'mp.lazio.r', citta: [
    { id: 'sora', nome: 'Sora', lon: 13.6151, lat: 41.7189, casa: true, esp: [{ t: 't.wine', d: 't.wine.d' }, { t: 't.cheese', d: 't.cheese.d' }] },
  ] },
  { id: 'abruzzo', k: 'mp.abruzzo', citta: [
    { id: 'parco', nome: "Parco Nazionale d'Abruzzo", nomeK: 'pl.parco', lon: 13.7883, lat: 41.8048, esp: [{ t: 't.parco', d: 't.parco.d' }] },
  ] },
  { id: 'campania', k: 'mp.campania', citta: [
    { id: 'capri', nome: 'Capri', lon: 14.2426, lat: 40.5509, lato: 'l', esp: [COSTIERA] },
    { id: 'sorrento', nome: 'Sorrento', lon: 14.3758, lat: 40.6263, lato: 'l', esp: [COSTIERA] },
    { id: 'positano', nome: 'Positano', lon: 14.4842, lat: 40.6281, lato: 'l', esp: [COSTIERA] },
    { id: 'amalfi', nome: 'Amalfi', lon: 14.6027, lat: 40.6340, lato: 'r', esp: [COSTIERA] },
    { id: 'ravello', nome: 'Ravello', lon: 14.6119, lat: 40.6491, lato: 'r', esp: [COSTIERA] },
    { id: 'maiori', nome: 'Maiori', lon: 14.6406, lat: 40.6503, lato: 'r', esp: [COSTIERA] },
  ] },
  { id: 'apulia', k: 'mp.puglia', recente: true, citta: [
    { id: 'bari', nome: 'Bari', lon: 16.8719, lat: 41.1171, lato: 'l', esp: [PUGLIA] },
    { id: 'polignano', nome: 'Polignano a Mare', lon: 17.2186, lat: 40.9960, lato: 'r', esp: [PUGLIA] },
    { id: 'alberobello', nome: 'Alberobello', lon: 17.2370, lat: 40.7840, lato: 'l', esp: [PUGLIA] },
    { id: 'ostuni', nome: 'Ostuni', lon: 17.5779, lat: 40.7286, lato: 'r', esp: [PUGLIA] },
    { id: 'lecce', nome: 'Lecce', lon: 18.1720, lat: 40.3515, lato: 'r', esp: [PUGLIA] },
  ] },
];

/** Coordinate di una città sulla mappa delle regioni. */
export const posCitta = (c: Citta) => proietta(c.lon, c.lat);
