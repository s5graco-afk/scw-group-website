/* =====================================================================
   SCW site script  ·  scw.js
   ---------------------------------------------------------------------
   Loaded by every page built from _templates/ (with `defer`).
   - Fills the empty <header class="topbar"> and <footer class="site-footer">
     so menu and contacts are edited in ONE place (SITE below).
   - Starts the photo galleries  (<div class="gallery" data-gallery>).
   - Loads analytics (scw-analytics.js, consent-first).
   ===================================================================== */
(() => {
  'use strict';

  /* ---- Site-wide settings: edit here, applies to every page ---- */
  const SITE = {
    whatsapp: '35795956503',
    quoteText: 'Hi! I would like to get a quote.',
    email: 'info@scw-group.com',
    location: 'Cyprus',
    year: 2026,
    logo: 'scw-logo-final.svg',
    nav: [
      ['HOME', 'index.html'],
      ['SERVICES', 'index.html#services'],
      ['BRANDS', 'index.html#brands'],
      ['NEWS', 'news.html'],
      ['SOLUTIONS', 'multimedia.html'],
      ['ABOUT', 'index.html#about'],
    ],
  };

  const waLink = (text) =>
    'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(text);

  const logo =
    '<a class="logo" href="index.html"><img src="' + SITE.logo +
    '" alt="SCW" width="188" height="40"><small>SMIRNOV CUSTOM WORKS</small></a>';

  /* ---- Header ---- */
  function renderHeader(el) {
    // data-nav="news" on <body> marks the active menu item
    const active = (document.body.dataset.nav || '').toUpperCase();
    const nav = SITE.nav
      .map(([label, href]) =>
        '<a href="' + href + '"' + (label === active ? ' class="active"' : '') + '>' + label + '</a>')
      .join('');
    el.innerHTML =
      logo + '<nav aria-label="Main">' + nav + '</nav>' +
      '<a class="btn" href="' + waLink(SITE.quoteText) +
      '" target="_blank" rel="noopener">GET A QUOTE <b>→</b></a>';
  }

  /* ---- Footer ---- */
  function renderFooter(el) {
    el.innerHTML =
      logo +
      '<div><a href="mailto:' + SITE.email + '">' + SITE.email + '</a> · ' + SITE.location + '</div>' +
      '<div><a href="' + waLink('Hi!') + '" target="_blank" rel="noopener">WhatsApp</a></div>' +
      '<div>© ' + SITE.year + ' SCW Group</div>';
  }

  /* ---- Gallery ---- */
  function initGallery(g) {
    const track = g.querySelector('.gallery-track');
    const slides = track ? [...track.children] : [];
    if (slides.length < 2) return;
    let i = 0, startX = 0;

    g.insertAdjacentHTML('beforeend',
      '<button class="gallery-arrow gallery-prev" type="button" aria-label="Previous photo">‹</button>' +
      '<button class="gallery-arrow gallery-next" type="button" aria-label="Next photo">›</button>');
    const dots = document.createElement('div');
    dots.className = 'gallery-dots';
    dots.innerHTML = slides
      .map((_, n) => '<button class="gallery-dot" type="button" aria-label="Photo ' + (n + 1) + '"></button>')
      .join('');
    g.after(dots);
    const dotEls = [...dots.children];

    const show = (n) => {
      i = (n + slides.length) % slides.length;
      track.style.transform = 'translateX(' + (-i * 100) + '%)';
      dotEls.forEach((d, j) => d.classList.toggle('is-active', j === i));
    };
    g.querySelector('.gallery-prev').onclick = () => show(i - 1);
    g.querySelector('.gallery-next').onclick = () => show(i + 1);
    dotEls.forEach((d, j) => (d.onclick = () => show(j)));
    g.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
    g.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
    });
    show(0);
  }

  /* ---- Model catalog filters (brand page) ---- */
  function initCatalog(root) {
    const chips = [...root.querySelectorAll('[data-filter]')];
    const only = root.querySelector('[data-only-ok]');
    const cards = [...root.querySelectorAll('.model-card')];
    const empty = root.querySelector('[data-empty]');
    let cat = 'all', onlyOk = false;
    const apply = () => {
      let shown = 0;
      cards.forEach((c) => {
        const gens = [...c.querySelectorAll('.gen')];
        gens.forEach((g) => (g.hidden = onlyOk && !g.classList.contains('is-ok')));
        const vis = gens.filter((g) => !g.hidden).length;
        c.hidden = !((cat === 'all' || c.dataset.cat === cat) && vis);
        const n = c.querySelector('[data-count]');
        if (n) n.textContent = vis === 1 ? '1 generation' : vis + ' generations';
        if (!c.hidden) shown++;
      });
      chips.forEach((b) => b.classList.toggle('is-active', b.dataset.filter === cat));
      if (only) {
        only.classList.toggle('is-active', onlyOk);
        only.setAttribute('aria-pressed', onlyOk);
        only.textContent = onlyOk ? 'Showing models with solutions' : 'Show only models with solutions';
      }
      if (empty) empty.hidden = shown > 0;
    };
    chips.forEach((b) => b.addEventListener('click', () => { cat = b.dataset.filter; apply(); }));
    if (only) only.addEventListener('click', () => { onlyOk = !onlyOk; apply(); });
    apply();
  }

  /* ---- Analytics ---- */
  function loadAnalytics() {
    const s = document.createElement('script');
    s.src = 'scw-analytics.js';
    document.body.appendChild(s);
  }

  const header = document.querySelector('header.topbar');
  const footer = document.querySelector('footer.site-footer');
  if (header && !header.children.length) renderHeader(header);
  if (footer && !footer.children.length) renderFooter(footer);
  document.querySelectorAll('[data-gallery]').forEach(initGallery);
  document.querySelectorAll('[data-catalog]').forEach(initCatalog);
  loadAnalytics();
})();
