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

// Proposta F: pagina Recensioni con 24 posti. La prima è vera, le altre aspettano gli screenshot o le foto delle lettere di Stefano.
// Per aggiungerne una: sostituire il segnaposto con { img, w, h, fonte, tipo }.
export type RecensioneSito = Recensione & { tipo: 'online' | 'lettera' };
export const RECENSIONI_SITO: RecensioneSito[] = [
  { ...RECENSIONI[0], tipo: 'online' },
  ...Array.from({ length: 23 }, (): RecensioneSito => ({ fonte: '', tipo: 'online' })),
];

// Frasi che si alternano in cima alla pagina Recensioni (prese parola per parola dalle recensioni vere).
export const CITAZIONI = [
  { testo: 'Stefano an amazing tour guide.', chi: 'Bridget · Trustpilot' },
  { testo: 'Our tour manager was Stefano & he was just amazing.', chi: 'Bridget · Trustpilot' },
  { testo: 'His knowledge on all subjects was just fantastic. No question went unanswered.', chi: 'Bridget · Trustpilot' },
  { testo: 'I would highly recommend this trip to anyone.', chi: 'Bridget · Trustpilot' },
];
