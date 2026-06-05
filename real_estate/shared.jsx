/* eslint-disable no-unused-vars */
// Evoque Assets — shared icons, hooks, brand, header.

const { useEffect, useRef, useState, useMemo, useCallback } = React;

/* ---------- Icons ---------- */
const Icon = {
  arrow: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  ),
  arrowDown: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  ),
  pin: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  bed: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 9V20M2 14h20M22 20V12a3 3 0 0 0-3-3H10v5"/><circle cx="6" cy="11" r="2"/>
    </svg>
  ),
  square: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M3 9h18"/>
    </svg>
  ),
  play: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M8 5v14l11-7L8 5z"/>
    </svg>
  ),
  cam: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>
    </svg>
  ),
  menu: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="15" y2="18"/>
    </svg>
  ),
  close: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  ),
  edit: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  trash: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    </svg>
  ),
  plus: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  insta: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
    </svg>
  ),
  youtube: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M23 7s-.3-2-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.1 3 12 3 12 3s-4.1 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.2.7 11.5v2.1c0 2.3.3 4.5.3 4.5s.3 2 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.2 22 12 22 12 22s4.1 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.7 1.2-2.7 1.2-2.7s.3-2.2.3-4.5v-2.1C23.3 9.2 23 7 23 7zm-13.5 9V8l8 4-8 4z"/>
    </svg>
  ),
  facebook: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.54-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  ),
  linkedin: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.38V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
    </svg>
  ),
  whats: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.3.2-.6.1-1.5-.7-3-1.8-4-3.5-.2-.4-.1-.6.2-.8.2-.2.4-.5.6-.7.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2c-.1-.3-.3-.4-.5-.4h-.6c-.2 0-.5.1-.7.3-1 .9-1.3 2.4-.5 4.1 1.4 3.1 3.4 4.7 5.5 5.7.7.3 1.3.5 1.8.6.5.1 1 .1 1.4.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.3-.3-.4-.6-.5zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.4c1.4.8 3.1 1.3 4.9 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  )
};

/* ---------- Hooks ---------- */
function useReveal({ threshold = 0.12, once = true } = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setSeen(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setSeen(true); if (once) obs.disconnect(); }
        else if (!once) setSeen(false);
      });
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);
  return [ref, seen];
}

function useCounter(target, { duration = 1600, start = false, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setValue(target); return; }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick); else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return decimals === 0 ? Math.round(value) : value.toFixed(decimals);
}

function useParallax() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = r.top + r.height / 2;
        const offset = (center - vh / 2) * -0.12;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        raf = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return ref;
}

function Reveal({ children, className = "", stagger = false, as: As = "div", style }) {
  const [ref, seen] = useReveal();
  const cls = (stagger ? "reveal-stagger" : "reveal") + (seen ? " in" : "") + (className ? " " + className : "");
  return <As ref={ref} className={cls} style={style}>{children}</As>;
}

/* ---------- Brand ---------- */
function Brand({ onClick, brandName = "Evoque Assets" }) {
  return (
    <div className="brand" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="brand__mark">E</div>
      <div>
        <div className="brand__name">{brandName}</div>
        <div className="brand__sub">Premium Real Estate · Noida</div>
      </div>
    </div>
  );
}

/* ---------- Header with full hamburger drawer ---------- */
function Header({ route, onNavigate, brandName }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const items = [
    { key: "home",      label: "Home" },
    { key: "services",  label: "Services" },
    { key: "inventory", label: "Properties" },
    { key: "about",     label: "About" },
    { key: "insights",  label: "Insights" },
    { key: "contact",   label: "Contact" }
  ];

  const handle = (item) => {
    setMenuOpen(false);
    onNavigate(item.key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (key) => route === key;

  return (
    <>
      <header className={"header" + (scrolled ? " is-scrolled" : "")}>
        <div className="shell header__inner">
          <Brand onClick={() => { handle({ key: "home" }); }} brandName={brandName} />

          <nav className="nav">
            {items.map((it) => (
              <a key={it.key}
                 className={isActive(it.key) ? "is-active" : ""}
                 onClick={(e) => { e.preventDefault(); handle(it); }}
                 href={`#${it.key}`}>
                {it.label}
              </a>
            ))}
          </nav>

          <div className="header__cta">
            <button className="btn btn--gold btn--sm" onClick={() => { onNavigate("contact"); setMenuOpen(false); }}>
              Book Consultation
            </button>
            <button
              className={"menu-btn" + (menuOpen ? " is-open" : "")}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? <Icon.close /> : <Icon.menu />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div className={"mobile-drawer" + (menuOpen ? " is-open" : "")}>
        <div className="mobile-drawer__top">
          <Brand brandName={brandName} onClick={() => handle({ key: "home" })} />
          <button className="menu-btn is-open" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <Icon.close />
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          {items.map((it, i) => (
            <a
              key={it.key}
              className={"mobile-drawer__link" + (isActive(it.key) ? " is-active" : "")}
              style={{ transitionDelay: menuOpen ? `${i * 45}ms` : "0ms" }}
              onClick={(e) => { e.preventDefault(); handle(it); }}
              href={`#${it.key}`}
            >
              <span className="mobile-drawer__num">0{i + 1}</span>
              <span className="mobile-drawer__label">{it.label}</span>
              <span className="mobile-drawer__arrow"><Icon.arrow /></span>
            </a>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <button className="btn btn--gold" style={{ width: "100%", justifyContent: "center" }}
            onClick={() => handle({ key: "contact" })}>
            Book a Free Consultation <span className="arrow"><Icon.arrow /></span>
          </button>
          <div className="mobile-drawer__contacts">
            <a href="https://www.instagram.com/evoque.assets/" target="_blank" rel="noopener">Instagram</a>
            <span>·</span>
            <a href="https://www.youtube.com/@EvoqueAssets" target="_blank" rel="noopener">YouTube</a>
            <span>·</span>
            <a href="https://www.facebook.com/evoqueassets/" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>
      </div>
      {menuOpen && <div className="mobile-drawer__overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

Object.assign(window, { Icon, useReveal, useCounter, useParallax, Reveal, Brand, Header });