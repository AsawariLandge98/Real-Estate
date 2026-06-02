/* eslint-disable no-unused-vars */
// Icons, hooks, shared bits.

const { useEffect, useRef, useState, useMemo, useCallback } = React;

/* ---------- Icons (lucide-flavored, inline) ---------- */
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="14" y2="17"/>
    </svg>
  ),
  close: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
    </svg>
  ),
  youtube: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 8.5c-.2-1.5-.5-2.5-1.8-2.8C18.5 5.2 12 5.2 12 5.2s-6.5 0-8.2.5C2.5 6 2.2 7 2 8.5c-.2 1.5-.2 3.5-.2 3.5s0 2 .2 3.5c.2 1.5.5 2.5 1.8 2.8 1.7.5 8.2.5 8.2.5s6.5 0 8.2-.5c1.3-.3 1.6-1.3 1.8-2.8.2-1.5.2-3.5.2-3.5s0-2-.2-3.5z"/><path d="M10 9v6l5-3z" fill="currentColor"/>
    </svg>
  ),
  whats: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}>
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
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setSeen(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setSeen(false);
        }
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
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
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
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

/* ---------- Reveal wrapper ---------- */
function Reveal({ children, className = "", stagger = false, as: As = "div", style }) {
  const [ref, seen] = useReveal();
  const cls = (stagger ? "reveal-stagger" : "reveal") + (seen ? " in" : "") + (className ? " " + className : "");
  return <As ref={ref} className={cls} style={style}>{children}</As>;
}

/* ---------- Brand mark ---------- */
function Brand({ onClick, mode = "light", brandName = "Aurum & Co." }) {
  return (
    <div className="brand" onClick={onClick}>
      <div className="brand__mark">A</div>
      <div>
        <div className="brand__name">{brandName}</div>
        <div className="brand__sub">Property Consultants · Noida</div>
      </div>
    </div>
  );
}

/* ---------- Header ---------- */
function Header({ route, onNavigate, brandName }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { key: "home", label: "Home" },
    { key: "inventory", label: "Inventory" },
    { key: "about", label: "About" },
    { key: "insights", label: "Insights" },
    { key: "careers", label: "Careers" },
    { key: "contact", label: "Contact" }
  ];

  const handle = (item) => {
    onNavigate(item.key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={"header" + (scrolled ? " is-scrolled" : "")}>
      <div className="shell header__inner">
        <Brand onClick={() => { onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} brandName={brandName} />
        <nav className="nav">
          {items.map((it) => (
            <a key={it.key}
               className={route === it.key ? "is-active" : ""}
               onClick={(e) => { e.preventDefault(); handle(it); }}
               href={`#${it.key}`}>
              {it.label}
            </a>
          ))}
        </nav>
        <div className="header__cta">
          <button className="btn btn--ghost btn--sm" onClick={() => onNavigate("admin")}>Admin</button>
          <button className="btn btn--gold btn--sm" onClick={() => {
            if (route !== "home") onNavigate("home", { anchor: "contact" });
            else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}>Book Consultation</button>
          <button className="menu-btn" aria-label="Menu"><Icon.menu/></button>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Icon, useReveal, useCounter, useParallax, Reveal, Brand, Header });
