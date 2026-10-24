// Pagine della proposta F. Quando il sito sarà definitivo, BASE diventerà '/'.
export const BASE = '/proposte/sito/';
export const pagina = (p: string) => BASE + (p ? p + '/' : '');
export const MENU = [
  { id: 'home', p: '', k: 'm.home' },
  { id: 'servizi', p: 'servizi', k: 'm.servizi' },
  { id: 'mappa', p: 'dove', k: 'm.mappa' },
  { id: 'recensioni', p: 'recensioni', k: 'm.recensioni' },
  { id: 'cv', p: 'curriculum', k: 'm.cv' },
  { id: 'contatti', p: 'contatti', k: 'm.contatti' },
];
