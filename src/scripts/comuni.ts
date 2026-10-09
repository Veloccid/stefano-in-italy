// Curriculum in finestra ed entrate allo scroll, condivisi da tutte le proposte.
export function avviaCurriculum() {
  const d = document.getElementById('curriculum') as HTMLDialogElement | null;
  if (!d) return;
  const apri = () => { if (!d.open) { d.showModal(); document.documentElement.classList.add('cv-aperto'); d.scrollTop = 0; } };
  const chiudi = () => d.open && d.close();
  d.addEventListener('close', () => document.documentElement.classList.remove('cv-aperto'));
  d.addEventListener('click', (e) => {
    if (e.target !== d) return;
    const r = d.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) chiudi();
  });
  d.querySelector('[data-cv-close]')?.addEventListener('click', chiudi);
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('[data-cv-open]');
    if (a) { e.preventDefault(); apri(); }
  });
  if (location.hash === '#curriculum') apri();
}

export function avviaEntrate() {
  const els = document.querySelectorAll('.entra');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((e) => e.classList.add('visto'));
    return;
  }
  const io = new IntersectionObserver((voci) => voci.forEach((v) => {
    if (v.isIntersecting) { v.target.classList.add('visto'); io.unobserve(v.target); }
  }), { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}
