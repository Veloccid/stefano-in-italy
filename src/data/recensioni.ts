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
