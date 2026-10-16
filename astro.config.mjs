// @ts-check
import { defineConfig } from 'astro/config';

// Le proposte prima erano su /<nome>/: chi ha il vecchio link viene portato su /proposte/<nome>/
const vecchie = ['cammino', 'essenziale', 'rivista', 'verde', 'percorso', 'cartoline', 'paletta', 'mappa', 'kit', 'bacheca'];

export default defineConfig({
  site: 'https://www.stefanoinitaly.com',
  redirects: Object.fromEntries(vecchie.map((id) => [`/${id}`, `/proposte/${id}/`])),
});
