# Stefano In Italy — sito (Astro)

Sito di Stefano Alonzi, tour leader. Per ora contiene la pagina "lavori in corso" e le **10 proposte grafiche** da far scegliere a Stefano.

- `/` pagina "lavori in corso" (in 3 lingue)
- `/proposte/` pagina di scelta con le proposte A–J
- `/proposte/<proposta>/` ogni proposta (es. `/proposte/cammino/`, `/proposte/mappa/`)
- i vecchi link `/<proposta>/` portano in automatico a `/proposte/<proposta>/`

## Dove si cambiano le cose

- `src/config.ts` → numero WhatsApp, email, Instagram, indirizzo del sito
- `src/data/testi.ts` → tutti i testi in inglese, italiano e spagnolo
- `src/data/curriculum.ts` → tappe del curriculum
- `src/data/recensioni.ts` → screenshot delle recensioni (le immagini vanno in `public/img/recensioni/`)
- `src/temi.ts` → elenco delle proposte
- `src/proposte/<nome>/Home.astro` → la grafica di ogni proposta

## Comandi

```
npm install
npm run dev      # anteprima su http://localhost:4321
npm run build    # prova di pubblicazione
```

Tutte le pagine hanno `noindex`: non finiscono su Google finché non si sceglie la proposta.
