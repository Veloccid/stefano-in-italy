// Recensioni: screenshot originali forniti da Stefano, in public/img/recensioni/.
// Quando arrivano gli altri screenshot basta aggiungere img, larghezza e altezza.
export type Recensione = { img?: string; w?: number; h?: number; fonte: string };

export const RECENSIONI: Recensione[] = [
  { img: '/img/recensioni/topflight.png', w: 1125, h: 1590, fonte: 'Trustpilot · Topflight' },
  { fonte: 'Google' },
  { fonte: 'TripAdvisor' },
  { fonte: 'GetYourGuide' },
  { fonte: 'Google' },
  { fonte: 'TripAdvisor' },
];

// Frase presa dalla recensione vera (lasciata in inglese, è la voce del cliente).
export const CITAZIONE = {
  titolo: 'Stefano an amazing tour guide.',
  testo: 'His knowledge on all subjects was just fantastic. No question went unanswered.',
};

// Proposta F: pagina Recensioni con almeno 20 posti. La prima è vera, le altre aspettano gli screenshot di Stefano.
// Per aggiungerne una: sostituire il segnaposto con { img, w, h, fonte, tipo }.
export type RecensioneSito = Recensione & { tipo: 'online' | 'lettera' };
const FONTI = ['Google', 'TripAdvisor', 'GetYourGuide', 'Trustpilot'];
export const RECENSIONI_SITO: RecensioneSito[] = [
  { ...RECENSIONI[0], tipo: 'online' },
  ...Array.from({ length: 17 }, (_, i): RecensioneSito => ({ fonte: FONTI[i % FONTI.length], tipo: 'online' })),
  ...Array.from({ length: 6 }, (): RecensioneSito => ({ fonte: 'Lettera', tipo: 'lettera' })),
];
