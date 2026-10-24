// Cambio lingua nel browser: inglese principale, poi italiano e spagnolo.
const LINGUE = ['en', 'it', 'es'] as const;
type L = (typeof LINGUE)[number];
const WA = '393467603667';
let testi: Record<string, Record<L, string>> = {};

export const lingua = (): L => (document.documentElement.lang as L) || 'en';
export const tr = (k: string, l: L = lingua()) => testi[k]?.[l] ?? testi[k]?.en ?? '';

function applica(l: L, salva: boolean) {
  if (!LINGUE.includes(l)) l = 'en';
  document.documentElement.lang = l;
  document.title = tr(document.documentElement.dataset.titolo || 'meta.title', l);
  document.querySelector('meta[name="description"]')?.setAttribute('content', tr('meta.desc', l));
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => (el.innerHTML = tr(el.dataset.i18n!, l)));
  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', tr(el.dataset.i18nAria!, l)));
  document.querySelectorAll<HTMLElement>('.lingue button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  document.querySelectorAll<HTMLAnchorElement>('.js-wa').forEach((a) => (a.href = `https://wa.me/${WA}?text=${encodeURIComponent(tr(a.dataset.waTesto || 'wa.text', l))}`));
  if (salva) {
    try { localStorage.setItem('sii-lang', l); } catch {}
    try { const u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u); } catch {}
  }
  document.dispatchEvent(new CustomEvent('sii:lingua', { detail: l }));
}

export function avviaLingue() {
  try { testi = JSON.parse(document.getElementById('testi')!.textContent || '{}'); } catch {}
  document.querySelectorAll<HTMLButtonElement>('.lingue button').forEach((b) => b.addEventListener('click', () => applica(b.dataset.lang as L, true)));
  let inizio: L = 'en';
  try {
    const q = new URLSearchParams(location.search).get('lang') as L;
    if (LINGUE.includes(q)) inizio = q;
    else {
      const v = localStorage.getItem('sii-lang') as L;
      const nav = (navigator.language || '').slice(0, 2) as L; // senza scelta salvata: la lingua del telefono/browser
      if (LINGUE.includes(v)) inizio = v; else if (LINGUE.includes(nav)) inizio = nav;
    }
  } catch {}
  applica(inizio, false);
}
