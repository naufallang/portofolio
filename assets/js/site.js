(function(){
  const P = window.PROFILE || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* nav: border on scroll, mobile menu */
  const nav = $('.nav');
  if(nav){
    const onScroll = () => nav.classList.toggle('scrolled', scrollY > 8);
    addEventListener('scroll', onScroll, {passive:true}); onScroll();
    const btn = $('.menu-btn', nav);
    const close = () => { nav.classList.remove('open'); btn && btn.setAttribute('aria-expanded', 'false'); };
    btn && btn.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open));
    });
    $$('.menu a', nav).forEach(a => a.addEventListener('click', close));
    addEventListener('keydown', e => { if(e.key === 'Escape') close(); });

    /* highlight the section in view (home page only) */
    const links = $$('.menu a[href^="#"]', nav);
    const targets = links.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    if(targets.length && 'IntersectionObserver' in window){
      const io = new IntersectionObserver(entries => entries.forEach(e => {
        if(!e.isIntersecting) return;
        links.forEach(a => a.getAttribute('href') === '#' + e.target.id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
      }), {rootMargin:'-40% 0px -55% 0px'});
      targets.forEach(t => io.observe(t));
    }
  }

  /* local time in Indonesia (WIB) */
  const clock = $('[data-clock]');
  if(clock){
    const fmt = new Intl.DateTimeFormat('en-GB', {hour:'2-digit', minute:'2-digit', timeZone:'Asia/Jakarta'});
    const tick = () => { clock.textContent = fmt.format(new Date()) + ' WIB'; };
    tick(); setInterval(tick, 30000);
  }

  /* photo + GPA */
  const portrait = $('.portrait');
  if(portrait && P.photo){
    const img = new Image();
    img.onload = () => { const mono = $('.mono', portrait); mono && mono.remove(); portrait.prepend(img); };
    img.alt = 'Portrait of Muhammad Naufal Hadianto'; img.src = P.photo;
  }
  const gpa = $('[data-gpa]');
  if(gpa && P.gpa){ $('dd', gpa).textContent = P.gpa; gpa.hidden = false; }

  /* contact links */
  const links = [
    P.email && {label:'Email', href:'mailto:' + P.email},
    P.linkedin && {label:'LinkedIn', href:P.linkedin},
    P.github && P.email && {label:'GitHub', href:P.github},
    P.instagram && {label:'Instagram', href:P.instagram}
  ].filter(Boolean);
  $$('[data-socials]').forEach(box => {
    links.forEach(l => {
      const a = document.createElement('a');
      a.className = 'btn small'; a.href = l.href; a.textContent = l.label;
      if(!l.href.startsWith('mailto:')){ a.target = '_blank'; a.rel = 'noopener'; }
      box.appendChild(a);
    });
  });
  const mail = $('[data-mail]');
  if(mail){
    if(P.email){ mail.href = 'mailto:' + P.email; mail.textContent = P.email; }
    else if(P.github){ mail.href = P.github; mail.textContent = P.github.replace(/^https?:\/\/(www\.)?/, ''); mail.target = '_blank'; mail.rel = 'noopener'; }
  }
  $$('[data-cv]').forEach(a => { if(P.cv){ a.href = P.cv; a.hidden = false; } });

  /* lightbox */
  const lb = $('dialog.lightbox');
  const openLightbox = (src, alt, cap) => {
    if(!lb) return;
    $('.lb-img', lb).src = src; $('.lb-img', lb).alt = alt; $('.lb-cap', lb).textContent = cap;
    lb.showModal();
  };
  if(lb){
    $('.lb-close', lb).addEventListener('click', () => lb.close());
    lb.addEventListener('click', e => { if(e.target === lb) lb.close(); });
  }
  $$('.cert-img').forEach(b => b.addEventListener('click', () => {
    const im = $('img', b); openLightbox(im.src, im.alt, b.dataset.cap);
  }));

  /* screenshot viewer (project pages) */
  $$('.viewer').forEach(v => {
    const thumbs = $$('.thumbs button', v), screen = $('.screen', v), img = $('img', screen);
    const cap = $('.v-cap', v), count = $('.v-count', v);
    const url = $('.url', v); if(url) url.textContent = v.dataset.url || '';
    let i = 0;
    function show(n){
      i = (n + thumbs.length) % thumbs.length;
      const t = thumbs[i], timg = $('img', t), src = timg.getAttribute('src');
      thumbs.forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
      if(img.getAttribute('src') !== src){
        screen.classList.add('loading');
        const pre = new Image();
        const swap = () => { img.src = src; img.alt = timg.alt; screen.classList.remove('loading'); };
        pre.onload = swap; pre.onerror = swap; pre.src = src;
        if(pre.complete) swap();
      }
      cap.textContent = t.dataset.cap; count.textContent = (i + 1) + ' of ' + thumbs.length;
    }
    thumbs.forEach((b, k) => b.addEventListener('click', () => show(k)));
    v.addEventListener('keydown', e => {
      if(e.key === 'ArrowRight'){ e.preventDefault(); show(i + 1); thumbs[i].focus(); }
      if(e.key === 'ArrowLeft'){ e.preventDefault(); show(i - 1); thumbs[i].focus(); }
    });
    screen.addEventListener('click', () => openLightbox(img.src, img.alt, cap.textContent));
    show(0);
  });

  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
