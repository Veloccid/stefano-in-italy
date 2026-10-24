// Dati principali di Stefano: cambiali qui e si aggiornano in tutte le proposte.
export const SITO = {
  nome: 'Stefano In Italy',
  sigla: 'SII!',
  persona: 'Stefano Alonzi',
  url: 'https://www.stefanoinitaly.com',
  whatsapp: '393467603667', // solo cifre, con prefisso 39
  email: 'info@stefanoinitaly.com',
  instagram: 'https://www.instagram.com/stefanoinitaly/',
  instagramHandle: '@stefanoinitaly',
};

/** Link WhatsApp con il messaggio già scritto. */
export function linkWhatsApp(messaggio = ''): string {
  return `https://wa.me/${SITO.whatsapp}${messaggio ? `?text=${encodeURIComponent(messaggio)}` : ''}`;
}
