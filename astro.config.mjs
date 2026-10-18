// @ts-check
import { defineConfig } from 'astro/config';

// Le proposte prima erano su /<nome>/: chi ha il vecchio link viene portato su /proposte/<nome>/
const vecchie = ['cammino', 'essenziale', 'rivista', 'verde', 'percorso', 'cartoline', 'mappa'];
const tolte = ['paletta', 'kit', 'bacheca']; // proposte scartate: si torna alla scelta

export default defineConfig({
  site: 'https://www.stefanoinitaly.com',
  redirects: {
    ...Object.fromEntries(vecchie.map((id) => [`/${id}`, `/proposte/${id}/`])),
    ...Object.fromEntries(tolte.flatMap((id) => [[`/${id}`, '/proposte/'], [`/proposte/${id}`, '/proposte/']])),
  },
});
