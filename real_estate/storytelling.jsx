/* eslint-disable no-unused-vars */
// 3D storytelling — depth hooks + scrollytelling "How a deal moves" section.
// All effects gate on prefers-reduced-motion + touch detection. CSS-only depth.

/* ---------- env detection ---------- */
function useDepthEnabled(enabled = true) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    if (!enabled) { setOk(false); return; }
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.innerWidth < 760;
    setOk(!isTouch && !reduced && !narrow);
  }, [enabled]);
  return ok;
}

/* ---------- 3D mouse tilt hook ----------
   Eased pointer-tracked rotation. Reset to neutral on leave.            */
function useTilt({ max = 6, perspective = 1400, scale = 1.0, enabled = true } = {}) {
  const ref = useRef(null);
  const stateRef = useRef({ rx: 0, ry: 0, trx: 0, try_: 0, raf: null });

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const tick = () => {
      const s = stateRef.current;
      s.rx += (s.trx - s.rx) * 0.12;
      s.ry += (s.try_ - s.ry) * 0.12;
      el.style.transform = `perspective(${perspective}px) rotateX(${s.rx.toFixed(2)}deg) rotateY(${s.ry.toFixed(2)}deg) scale(${scale})`;
      if (Math.abs(s.rx - s.trx) > 0.02 || Math.abs(s.ry - s.try_) > 0.02) {
        s.raf = requestAnimationFrame(tick);
      } else {
        s.raf = null;
      }
    };

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      const s = stateRef.current;
      s.try_ = x * max * 2;
      s.trx = -y * max * 2;
      if (!s.raf) s.raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      const s = stateRef.current;
      s.trx = 0; s.try_ = 0;
      if (!s.raf) s.raf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (stateRef.current.raf) cancelAnimationFrame(stateRef.current.raf);
    };
  }, [max, perspective, scale, enabled]);

  return ref;
}

/* ---------- Hero floating glass card ---------- */
function HeroLiveCard({ enabled }) {
  const tiltRef = useTilt({ max: 8, enabled });
  return (
    <div className="hero-live" ref={tiltRef} aria-hidden="true">
      <div className="hero-live__inner">
        <div className="hero-live__head">
          <span className="hero-live__dot" />
          <span>LIVE · Currently active</span>
        </div>
        <div className="hero-live__row">
          <div className="hero-live__big">142</div>
          <div className="hero-live__lab">Verified<br/>listings</div>
        </div>
        <div className="hero-live__row">
          <div className="hero-live__big" style={{ color: "var(--gold-soft)" }}>38</div>
          <div className="hero-live__lab">Active<br/>consultations</div>
        </div>
        <div className="hero-live__foot">
          <span style={{ opacity: 0.7 }}>Updated 2 min ago</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Scrollytelling: "How a deal moves" ----------
   300vh outer · sticky 100vh stage · 3 chapters cross-fade.            */
const CHAPTERS = [
  {
    eyebrow: "Chapter 01",
    title: "We verify, before you visit.",
    body: "Title checked, society dues confirmed, structural soundness inspected, fair-price benchmark calculated. You see four homes, not forty — and we tell you what's wrong with each one before you walk in.",
    statLabel: "Of shortlisted homes rejected at verification",
    statValue: 62,
    statSuffix: "%",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=70",
    doc: "VERIFICATION NOTE\nSky Residences · 3BHK\n— Title: Freehold ✓\n— Dues: ₹0 outstanding\n— Structural: Pass\n— Price benchmark: 4% below"
  },
  {
    eyebrow: "Chapter 02",
    title: "We negotiate — in writing.",
    body: "Rate comparison sheet, seller's reasoning, our final offer note. Every concession recorded. You see exactly how the price moved from ask to close — and why. No verbal handshakes, no shifting goalposts.",
    statLabel: "Average price negotiated below ask",
    statValue: 9.2,
    statSuffix: "%",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=70",
    doc: "NEGOTIATION RECORD\nAsk: ₹2.64 Cr\nMarket median: ₹2.47 Cr\n— Offer #1: ₹2.30 Cr\n— Counter:  ₹2.55 Cr\n— Closed:   ₹2.40 Cr"
  },
  {
    eyebrow: "Chapter 03",
    title: "We never charge both sides.",
    body: "One fee, disclosed upfront, paid by the side that retained us. No coordination charges, no site fees, no surprise invoices. If we're saving you money on one side, we won't quietly take it from the other.",
    statLabel: "Of clients return or refer within 24 months",
    statValue: 94,
    statSuffix: "%",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70",
    doc: "FEE DISCLOSURE\nClient side:    Buyer\nFlat fee:       ₹2,40,000\nPaid by:        Buyer only\nOther side:     ₹0 to Aurum\nDated & signed: 14 May 2026"
  }
];

function Storytelling({ enabled = true }) {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 within active chapter

  const depth = useDepthEnabled(enabled);

  useEffect(() => {
    if (!enabled) return;
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = wrap.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        if (total <= 0) { raf = null; return; }
        const pRaw = Math.max(0, Math.min(1, -r.top / total));
        const n = CHAPTERS.length;
        const seg = 1 / n;
        let idx = Math.min(n - 1, Math.floor(pRaw / seg));
        const within = (pRaw - idx * seg) / seg;
        setActive(idx);
        setProgress(within);
        raf = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <section className="story" ref={wrapRef}>
      <div className="story__stage">
        <div className="shell story__inner">
          <div className="story__left">
            <Reveal>
              <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>— The Aurum method</span>
              <h2 className="h-section" style={{ color: "var(--cream)", marginTop: 18 }}>
                How a deal <em>moves</em> through us.
              </h2>
              <p className="lede" style={{ color: "rgba(255,255,255,0.66)", marginTop: 18 }}>
                Three chapters. Three principles. Each one auditable, each one in writing.
              </p>
            </Reveal>

            <div className="story__chapters">
              {CHAPTERS.map((c, i) => (
                <div key={i} className={"story-chap" + (i === active ? " is-active" : "") + (i < active ? " is-past" : "")}>
                  <div className="story-chap__bar"><span style={{ width: i === active ? `${progress * 100}%` : (i < active ? "100%" : "0%") }} /></div>
                  <div className="story-chap__eyebrow">{c.eyebrow}</div>
                  <h3 className="story-chap__title">{c.title}</h3>
                  <p className="story-chap__body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="story__right">
            <div className="story-scene">
              {CHAPTERS.map((c, i) => (
                <StoryScene
                  key={i}
                  chapter={c}
                  delta={i - active - progress}
                  isActive={i === active}
                  depth={depth}
                />
              ))}
            </div>

            <div className="story__progress" aria-hidden="true">
              {CHAPTERS.map((c, i) => (
                <span key={i} className={"story__dot" + (i === active ? " is-on" : "")} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryScene({ chapter: c, delta, isActive, depth }) {
  // delta = how far this chapter is from "now". 0 = front-and-centre.
  const d = Math.max(-2, Math.min(2, delta));
  const abs = Math.abs(d);
  const opacity = Math.max(0, 1 - abs * 1.4);
  const z = -abs * 240;
  const ty = d * 30;
  const rx = d * -3;
  const sceneStyle = depth
    ? { transform: `translate3d(0, ${ty}px, ${z}px) rotateX(${rx}deg)`, opacity }
    : { opacity: isActive ? 1 : 0 };

  // Plate (photo) gets a tiny extra parallax forward
  const plateZ = depth ? `translateZ(20px)` : "none";
  // Floating glass with stat
  const glassZ = depth ? `translate3d(-22%, 30%, 80px) rotateY(-6deg)` : "translate(-22%, 30%)";
  // Tilted "document"
  const docZ = depth ? `translate3d(36%, -32%, 110px) rotateZ(7deg) rotateY(8deg)` : "translate(36%, -32%) rotate(7deg)";

  const v = useCounter(c.statValue, { start: isActive, duration: 1400, decimals: c.statValue % 1 !== 0 ? 1 : 0 });

  return (
    <div className="story-scene__layer" style={sceneStyle} aria-hidden={!isActive}>
      <div className="story-plate" style={{ transform: plateZ }}>
        <div className="story-plate__img" style={{ backgroundImage: `url(${c.img})` }} />
        <div className="story-plate__frame" />
      </div>

      <div className="story-glass" style={{ transform: glassZ }}>
        <div className="story-glass__big">
          {v}<small>{c.statSuffix}</small>
        </div>
        <div className="story-glass__lab">{c.statLabel}</div>
      </div>

      <div className="story-doc" style={{ transform: docZ }}>
        <div className="story-doc__corner" />
        <pre>{c.doc}</pre>
        <div className="story-doc__seal">VERIFIED</div>
      </div>
    </div>
  );
}

Object.assign(window, { useDepthEnabled, useTilt, HeroLiveCard, Storytelling });
