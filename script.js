/* ============================================================
   script.js  —  Portfolio Logic
   Reads from DATA (data.js) and renders everything.
   You should not need to edit this file.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const D = DATA; // shorthand

  // ── 1. RENDER HERO ──────────────────────────────────────
  (function renderHero() {
    document.title = `${D.personal.name} — Portfolio`;
    document.querySelector('meta[name="description"]').content = D.personal.tagline;

    document.getElementById('hero-label').textContent   = `// ${D.personal.title}`;
    document.getElementById('hero-name').innerHTML      = D.personal.name.replace(' ', '<br><em>');
    // close the <em> properly
    document.getElementById('hero-name').innerHTML =
      D.personal.name.split(' ').map((w, i) => i === 1 ? `<em>${w}</em>` : w).join('<br>');

    document.getElementById('hero-title-line').textContent = D.personal.title;
    document.getElementById('hero-tagline').textContent    = D.personal.tagline;

    const ctaResume  = document.getElementById('hero-cta-resume');
    ctaResume.href   = D.personal.links.resume;
    ctaResume.setAttribute('download', '');
  })();

  // ── 2. RENDER TICKER ────────────────────────────────────
  (function renderTicker() {
    const ticker = document.getElementById('ticker');
    // Duplicate for seamless loop
    const items = [...D.stats, ...D.stats];
    ticker.innerHTML = items.map(s => `
      <span class="ticker-item">
        <span class="ticker-value">${s.value}</span>
        <span class="ticker-label">${s.label}</span>
      </span>
    `).join('');
  })();

  // ── 3. RENDER ABOUT ─────────────────────────────────────
  (function renderAbout() {
    document.getElementById('about-text').textContent = D.personal.about;
    document.getElementById('about-location').innerHTML =
      `<span class="meta-icon">◎</span> ${D.personal.location}`;
    document.getElementById('about-email').innerHTML =
      `<span class="meta-icon">✉</span> ${D.personal.email}`;

    const linkDefs = [
      { key: 'linkedin',  label: 'LinkedIn'  },
      { key: 'github',    label: 'GitHub'    },
      { key: 'leetcode',  label: 'LeetCode'  },
      { key: 'blog',      label: 'Blog'      },
    ];
    const linksEl = document.getElementById('about-links');
    linksEl.innerHTML = linkDefs.map(l =>
      `<a href="${D.personal.links[l.key]}" target="_blank" rel="noopener">${l.label}</a>`
    ).join('');
  })();

  // ── 4. RENDER EXPERIENCE ────────────────────────────────
  (function renderExperience() {
    const list = document.getElementById('experience-list');
    list.innerHTML = D.experience.map((e, i) => `
      <div class="timeline-item reveal" style="transition-delay:${i*0.08}s">
        <div class="t-meta">
          <div class="t-period">${e.period}</div>
          <div class="t-company">${e.company}</div>
        </div>
        <div class="t-body">
          <div class="t-role">${e.role}</div>
          <ul class="t-bullets">
            ${e.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  })();

  // ── 5. RENDER PROJECT CARDS ─────────────────────────────
  (function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = D.projects.map((p, i) => `
      <div
        class="project-card reveal"
        style="--card-color:${p.color}; transition-delay:${i*0.07}s"
        data-project="${p.id}"
        role="button"
        tabindex="0"
        aria-label="Open ${p.title} case study"
      >
        <div class="card-number">0${i+1} / 0${D.projects.length}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-stack">${p.stack.join(' · ')}</div>
        <div class="card-hook">${p.hook}</div>
        <div class="card-open-hint" style="color:${p.color}">
          Read case study
          <span class="hint-arrow">→</span>
        </div>
      </div>
    `).join('');

    // Open modal on click / keyboard
    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.project));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') openModal(card.dataset.project);
      });
    });
  })();

  // ── 6. PROJECT MODAL ────────────────────────────────────
  const overlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  function openModal(id) {
    const p = D.projects.find(x => x.id === id);
    if (!p) return;

    modalContent.innerHTML = `
      <div class="modal-period">${p.period}</div>
      <div class="modal-title">${p.title}</div>
      <div class="modal-stack-row">
        ${p.stack.map(s => `<span class="modal-chip">${s}</span>`).join('')}
      </div>

      <div class="modal-section-label">The Problem</div>
      <p class="modal-text">${p.problem}</p>

      <div class="modal-section-label">The Approach</div>
      <p class="modal-text">${p.approach}</p>

      <div class="modal-section-label">Key Details</div>
      <ul class="modal-bullets">
        ${p.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>

      <div class="modal-section-label">The Outcome</div>
      <p class="modal-text">${p.outcome}</p>

      <div class="modal-divider"></div>
      <div class="modal-links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-primary">Go to Project →</a>` : ''}
        ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="btn-ghost">Live Demo →</a>` : ''}
      </div>
    `;

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── 7. RENDER SKILLS ────────────────────────────────────
  (function renderSkills() {
    const canvas = document.getElementById('skills-canvas');
    const colorMap = {
      '#b8975a': '184,151,90',
      '#5b7fff': '91,127,255',
      '#6bbf8e': '107,191,142',
    };

    canvas.innerHTML = D.skillClusters.map((c, i) => `
      <div
        class="skill-cluster reveal"
        style="--cluster-color:${c.color}; --cluster-rgb:${colorMap[c.color]||'184,151,90'}; transition-delay:${i*0.1}s"
        data-cluster="${c.id}"
      >
        <div class="cluster-label">${c.label}</div>
        <div class="cluster-chips">
          ${c.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
        </div>
      </div>
    `).join('');

    // Stagger chips in when cluster enters viewport
    const clusterObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const chips = entry.target.querySelectorAll('.skill-chip');
        chips.forEach((chip, i) => {
          setTimeout(() => chip.classList.add('in'), i * 45);
        });
        clusterObs.unobserve(entry.target);
      });
    }, { threshold: 0.25 });

    canvas.querySelectorAll('.skill-cluster').forEach(c => clusterObs.observe(c));
  })();

  // ── 8. RENDER EDUCATION & CERTS ─────────────────────────
  (function renderEducation() {
    const edu = D.education;
    document.getElementById('education-block').innerHTML = `
      <div class="edu-institution">${edu.institution}</div>
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-meta">
        <span>${edu.period}</span>
      </div>
      <div class="edu-cgpa">${edu.cgpa}<span>CGPA</span></div>
    `;

    document.getElementById('certs-list').innerHTML =
      D.certifications.map(c => `
        <div class="cert-row">
          <div>
            <div class="cert-name">${c.name}</div>
            <div class="cert-tags">${c.tags}</div>
          </div>
          <div class="cert-date">${c.period}</div>
        </div>
      `).join('');
  })();

  // ── 9. RENDER BLOG ──────────────────────────────────────
  (function renderBlog() {
  const grid    = document.getElementById('blog-posts');
  const allLink = document.getElementById('blog-all-link');
  allLink.href  = D.blog.url;

  grid.innerHTML = '<p class="blog-loading">// Fetching posts...</p>';

  // JSONP — bypasses CORS, Blogger supports this natively
  window._bloggerCallback = function(json) {
    const entries = json.feed?.entry;
    if (!entries || entries.length === 0) {
      grid.innerHTML = `<p class="blog-empty">No posts yet. <a href="${D.blog.url}" target="_blank" style="color:var(--accent)">Visit blog →</a></p>`;
      return;
    }
    grid.innerHTML = entries.slice(0, 3).map((entry, i) => {
      const title   = entry.title?.$t || 'Untitled';
      const link    = entry.link?.find(l => l.rel === 'alternate')?.href || D.blog.url;
      const date    = entry.published?.$t
        ? new Date(entry.published.$t).toLocaleDateString('en-IN', { year:'numeric', month:'short', day:'numeric' })
        : '';
      const snippet = (entry.content?.$t || entry.summary?.$t || '')
        .replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim().slice(0, 130);
      return `
        <a href="${link}" target="_blank" rel="noopener"
           class="blog-card" style="animation-delay:${i * 0.1}s">
          <div class="blog-date">${date}</div>
          <div class="blog-title">${title}</div>
          ${snippet ? `<p class="blog-snippet">${snippet}…</p>` : ''}
          <div class="blog-read">Read post →</div>
        </a>`;
    }).join('');
    setTimeout(() => {
      grid.querySelectorAll('.blog-card').forEach(c => c.classList.add('reveal-in'));
    }, 50);
  };

  const script = document.createElement('script');
  script.src = `${D.blog.url}/feeds/posts/default?alt=json-in-script&callback=_bloggerCallback&max-results=3`;
  script.onerror = () => {
    grid.innerHTML = `<p class="blog-empty">Could not load posts. <a href="${D.blog.url}" target="_blank" style="color:var(--accent)">Visit blog →</a></p>`;
  };
  document.head.appendChild(script);
})();

  // ── 10. RENDER CONTACT ──────────────────────────────────
  (function renderContact() {
    document.getElementById('contact-tagline').textContent =
      "Open to roles. Let's talk if you're building something that should exist.";

    const contactLinks = [
      { icon: '✉', label: D.personal.email,   href: `mailto:${D.personal.email}` },
      { icon: '↗', label: 'LinkedIn',          href: D.personal.links.linkedin, ext: true },
      { icon: '⌨', label: 'GitHub',            href: D.personal.links.github,   ext: true },
      { icon: '✎', label: 'Blog',              href: D.personal.links.blog,     ext: true },
    ];

    document.getElementById('contact-links').innerHTML = contactLinks.map(l => `
      <a href="${l.href}" ${l.ext ? 'target="_blank" rel="noopener"' : ''}
         class="contact-link-row">
        <span class="contact-link-icon">${l.icon}</span>
        <span>${l.label}</span>
      </a>
    `).join('');

    document.getElementById('footer-name').textContent     = D.personal.name;
    document.getElementById('footer-location').textContent = `${D.personal.location} · ${new Date().getFullYear()}`;
  })();

  // ── 11. SCROLL PROGRESS BAR ─────────────────────────────
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });

  // ── 12. SCROLL REVEAL ───────────────────────────────────
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  // Observe all .reveal elements (including dynamically rendered ones)
  function observeReveals() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
  }
  observeReveals();
  setTimeout(observeReveals, 300); // catch dynamically rendered elements
  setTimeout(observeReveals, 800);

  // ── 13. ACTIVE NAV ──────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => navObs.observe(s));

  // ── 14. CUSTOM CURSOR ───────────────────────────────────
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  }, { passive: true });

  function animRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  const hoverTargets = 'a, button, .project-card, .skill-chip, .blog-card, .skill-cluster';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.add('hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('hovering');
  });

});
