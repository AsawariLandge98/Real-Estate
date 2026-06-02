/* eslint-disable no-unused-vars */
// Homepage sections — hero, trust band, services, process, featured, interior, videos, testimonials, final CTA, footer.

const HERO_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=75";

function Hero({ onBrowse, onContact, brandName, heroImg, depthOn = true }) {
  const bgRef = useParallax();
  return (
    <section className="hero" id="home">
      <div ref={bgRef} className="hero__bg" style={{ backgroundImage: `url(${heroImg || HERO_IMG})` }} />
      <div className="hero__noise" />
      {depthOn && <HeroLiveCard enabled={depthOn} />}
      <div className="shell hero__content">
        <Reveal>
          <span className="eyebrow hero__eyebrow eyebrow-light">Noida · Gautam Buddha Nagar · Est. 2011</span>
        </Reveal>
        <Reveal>
          <h1 className="h-display">
            Property, the way it <em>should</em> have been all along.
          </h1>
        </Reveal>
        <Reveal>
          <div className="hero__valueline">
            <div>
              <strong>Buy &amp; Sell</strong>
              <span>Only verified properties, negotiated openly, closed in writing.</span>
            </div>
            <div>
              <strong>Rent &amp; Lease</strong>
              <span>Owner-direct listings with fair, transparent agreements.</span>
            </div>
            <div>
              <strong>Interior Design</strong>
              <span>An in-house studio that takes the keys after possession.</span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="hero__ctas">
            <button className="btn btn--gold" onClick={onBrowse}>
              Browse Properties <span className="arrow"><Icon.arrow/></span>
            </button>
            <button className="btn btn--ghost-light" onClick={onContact}>
              Talk to a Consultant
            </button>
          </div>
        </Reveal>
      </div>
      <div className="hero__meta hide-mobile">
        Currently active<br/>
        <span>· 142 verified listings</span><br/>
        <span>· 38 active consultations</span>
      </div>
    </section>
  );
}

/* ---------- Trust band ---------- */
function TrustCell({ target, suffix, prefix, label, start }) {
  const v = useCounter(target, { start, duration: 1800 });
  return (
    <div className="trust__cell">
      <div className="trust__num">
        {prefix && <small>{prefix}</small>}
        <span>{v.toLocaleString("en-IN")}</span>
        {suffix && <small>{suffix}</small>}
      </div>
      <div className="trust__label">{label}</div>
    </div>
  );
}

function TrustBand() {
  const [ref, seen] = useReveal();
  return (
    <section ref={ref} className="trust">
      <div className="shell">
        <div className="trust__grid">
          <TrustCell start={seen} target={1248} suffix="+" label="Deals closed in writing" />
          <TrustCell start={seen} target={13} suffix=" yrs" label="Of local NCR expertise" />
          <TrustCell start={seen} target={94} suffix=" %" label="Clients return or refer" />
          <TrustCell start={seen} target={0}    prefix="₹" label="Hidden charges, ever" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  {
    num: "01",
    title: "Buy",
    blurb: "We shortlist only properties we've verified — title, society dues, structural soundness, fair market price. You see four homes, not forty.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=70"
  },
  {
    num: "02",
    title: "Rent",
    blurb: "Owner-direct listings with rent-agreement templates reviewed by our legal panel. Deposits returned in 30 days, in writing, on move-out.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=70"
  },
  {
    num: "03",
    title: "Interior Design",
    blurb: "An in-house studio that picks up where the sale ends. Modular, furnishings, light — one fixed quote, one project manager, ten weeks.",
    img: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=900&q=70"
  }
];

function Services({ onContact }) {
  return (
    <section className="section" id="services">
      <div className="shell">
        <div className="s-head">
          <div className="s-head__left">
            <Reveal><span className="eyebrow">— What we do</span></Reveal>
            <Reveal><h2 className="h-section">Three services, <em>one</em> standard.</h2></Reveal>
          </div>
          <div className="s-head__right">
            <Reveal><p className="lede">We don't aggregate listings or chase brokerage from both sides. We work for the client, charge a fixed fee that's disclosed upfront, and close every deal in writing.</p></Reveal>
          </div>
        </div>
        <Reveal stagger className="services__grid">
          {SERVICES.map((s) => (
            <article key={s.num} className="service-card">
              <div className="service-card__img" style={{ backgroundImage: `url(${s.img})` }}>
                <span className="service-card__num">{s.num} — {s.title}</span>
              </div>
              <div className="service-card__body">
                <h3 className="h-card">{s.title}</h3>
                <p>{s.blurb}</p>
                <a className="service-card__link" onClick={(e) => { e.preventDefault(); onContact(); }} href="#contact">
                  Learn more <span className="arrow"><Icon.arrow/></span>
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
const PROCESS = [
  { num: "01", title: "Discovery", body: "We sit with you — budget, lifestyle, school radius, work commute, future plans. One conversation, no listings yet." },
  { num: "02", title: "Curation",  body: "Only verified, fair-priced properties make our shortlist. We tell you what's wrong with each one before you visit." },
  { num: "03", title: "Negotiation", body: "Best deal secured — and put in writing. You see the rate comparison, the seller's reasoning, and our final offer note." },
  { num: "04", title: "Handover",  body: "Papers, possession, society induction, and interiors if you want them. We don't disappear after the cheque clears." }
];

function Process() {
  return (
    <section className="section process" id="about">
      <div className="shell">
        <div className="s-head">
          <div className="s-head__left">
            <Reveal><span className="eyebrow">— Our process</span></Reveal>
            <Reveal><h2 className="h-section">A clear path, <em>start</em> to handover.</h2></Reveal>
          </div>
          <div className="s-head__right">
            <Reveal><p className="lede">No surprises, no shifting goalposts. Every step has a deliverable and a timeline — and we'll show you both before we begin.</p></Reveal>
          </div>
        </div>
        <div className="process__rail">
          <div className="process__line" />
          <Reveal stagger className="process__steps">
            {PROCESS.map((p) => (
              <div key={p.num} className="process-step">
                <div className="process-step__dot" />
                <div className="process-step__num">STEP {p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Property card ---------- */
function PropertyCard({ p, onClick, tiltOn = false }) {
  const tiltRef = useTilt({ max: 4, perspective: 1200, enabled: tiltOn });
  return (
    <article ref={tiltRef} className={"prop-card" + (tiltOn ? " has-tilt" : "")} onClick={onClick}>
      <div className="prop-card__media" style={{ backgroundImage: `url(${p.image})` }} loading="lazy">
        <div className="prop-card__badges">
          <span className={"badge " + (p.purpose === "buy" ? "badge--gold" : "badge--navy")}>{p.purpose === "buy" ? "For Sale" : "For Rent"}</span>
          <span className="badge">{p.category === "residential" ? "Residential" : "Commercial"}</span>
        </div>
      </div>
      <div className="prop-card__body">
        <div className="prop-card__price">
          {p.priceLabel}
          {p.pricePeriod && <small>{p.pricePeriod}</small>}
        </div>
        <h3 className="prop-card__title">{p.title}</h3>
        <div className="prop-card__locality"><Icon.pin/> {p.locality}</div>
        <div className="prop-card__specs">
          {p.bhk != null && <span><strong>{p.bhk}</strong>BHK</span>}
          <span><strong>{p.area.toLocaleString("en-IN")}</strong>{p.areaUnit || "sqft"}</span>
          <span><strong>{p.propertyType}</strong></span>
        </div>
      </div>
    </article>
  );
}

/* ---------- Featured properties ---------- */
function Featured({ properties, onOpen, onAll, tiltOn }) {
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="section" id="properties">
      <div className="shell">
        <div className="s-head">
          <div className="s-head__left">
            <Reveal><span className="eyebrow">— Featured</span></Reveal>
            <Reveal><h2 className="h-section">Properties on the books, <em>this</em> month.</h2></Reveal>
          </div>
          <div className="s-head__right" style={{ display: "flex", justifyContent: "flex-end" }}>
            <Reveal>
              <button className="btn btn--ghost" onClick={onAll}>
                See full inventory <span className="arrow"><Icon.arrow/></span>
              </button>
            </Reveal>
          </div>
        </div>
        <Reveal stagger className="props__grid">
          {featured.map((p) => (
            <PropertyCard key={p.id} p={p} tiltOn={tiltOn} onClick={() => onOpen(p.id)} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Interior Studio ---------- */
function InteriorStudio({ interiors, onContact }) {
  return (
    <section className="section interior">
      <div className="shell">
        <div className="interior__split">
          <div>
            <Reveal><span className="eyebrow">— Interior Studio</span></Reveal>
            <Reveal><h2 className="h-section" style={{ marginTop: 18 }}>The keys are <em>just</em> the start.</h2></Reveal>
            <Reveal><p className="lede" style={{ marginTop: 18 }}>
              Our in-house studio takes the home from bare-shell to lived-in. One fixed quote, one project manager, ten weeks. We've delivered over two hundred homes in NCR, and we'll show you every one of them.
            </p></Reveal>
            <Reveal>
              <div className="interior__stat">
                <div className="interior__stat__num">{useCounter(214, { start: true, duration: 2000 })}+</div>
                <div className="interior__stat__label">Homes designed across Delhi-NCR</div>
              </div>
            </Reveal>
            <Reveal>
              <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
                <button className="btn btn--primary" onClick={onContact}>Talk to the Studio <span className="arrow"><Icon.arrow/></span></button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="interior__hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(20,42,72,0) 50%, rgba(20,42,72,0.7) 100%), url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=70)` }} />
          </Reveal>
        </div>
        <Reveal stagger className="interior__tiles">
          {interiors.map((it) => (
            <div key={it.id} className="interior-tile" style={{ backgroundImage: `url(${it.img})` }}>
              <small>{it.scope}</small>
              <span>{it.title}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Videos ---------- */
function Videos({ videos }) {
  return (
    <section className="section" id="videos" style={{ background: "var(--paper)" }}>
      <div className="shell">
        <div className="s-head">
          <div className="s-head__left">
            <Reveal><span className="eyebrow">— Property videos</span></Reveal>
            <Reveal><h2 className="h-section">See it before you <em>see</em> it.</h2></Reveal>
          </div>
          <div className="s-head__right">
            <Reveal><p className="lede">Every shortlisted property gets a full walkthrough on video — rooms, fixtures, society common areas, even the lift wait time. We publish them on YouTube, no edit cuts to hide flaws.</p></Reveal>
          </div>
        </div>
        <Reveal stagger className="videos__grid">
          {videos.map((v) => (
            <div key={v.id} className="video-tile" style={{ backgroundImage: `url(${v.img})` }}>
              <span className="video-tile__duration">{v.duration}</span>
              <div className="video-tile__play"><Icon.play style={{ color: "var(--navy-deep)", marginLeft: 3 }}/></div>
              <div className="video-tile__meta">
                <strong>{v.title}</strong>
                <span><Icon.cam/> {v.locality}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials({ items }) {
  return (
    <section className="section testimonials">
      <div className="shell">
        <div className="s-head">
          <div className="s-head__left">
            <Reveal><span className="eyebrow">— In their words</span></Reveal>
            <Reveal><h2 className="h-section">Closed deals, <em>kept</em> clients.</h2></Reveal>
          </div>
          <div className="s-head__right">
            <Reveal><p className="lede">94% of our clients return for a second transaction or refer someone within two years. These are three of them, in their own words.</p></Reveal>
          </div>
        </div>
        <Reveal stagger className="testimonials__grid">
          {items.map((t, i) => (
            <article key={i} className="testimonial">
              <div className="testimonial__mark">”</div>
              <p className="testimonial__quote">{t.quote}</p>
              <div className="testimonial__attrib">
                <div className="testimonial__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__sub">{t.locality} · {t.service}</div>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCta({ onContact }) {
  return (
    <section className="section finalcta" id="contact">
      <div className="shell finalcta__inner">
        <div>
          <Reveal><span className="eyebrow eyebrow-light">— Book a consultation</span></Reveal>
          <Reveal><h2>A 30-minute conversation — <em>no</em> obligation, no pressure.</h2></Reveal>
          <Reveal><p>Tell us what you're looking for. We'll tell you, honestly, whether we're the right people to help — and if we're not, who is. The first meeting is on us, in person at our Sector 18 office or on a video call.</p></Reveal>
          <Reveal>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn--gold" onClick={onContact}>Book Consultation <span className="arrow"><Icon.arrow/></span></button>
              <a className="btn btn--ghost-light" href="tel:+911204567890">+91 120 4567 890</a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="finalcta__pledge">
            <h4>The Aurum pledge</h4>
            <ul>
              <li>One fixed fee, disclosed before we begin work.</li>
              <li>Only properties we've personally verified.</li>
              <li>Every offer, negotiation and concession in writing.</li>
              <li>Deposits and refunds reconciled within 30 days.</li>
              <li>We never charge brokerage from both sides of a deal.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer({ brandName, onNavigate }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <Brand brandName={brandName} />
            <p>A property consultancy from Noida, built on the conviction that a fair deal is the only good deal. Buy, rent, design — done in writing.</p>
            <div style={{ fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".12em", color: "rgba(255,255,255,0.5)" }}>
              RERA · UP-RERA-12087-2024
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate("inventory")}}>Inventory</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate("about")}}>About Us</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate("insights")}}>Insights</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate("careers")}}>Careers</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault();onNavigate&&onNavigate("contact")}}>Book Consultation</a></li>
            </ul>
          </div>
          <div>
            <h5>Office</h5>
            <ul>
              <li>4th Floor, Atrium Plaza,</li>
              <li>Sector 18, Noida 201301</li>
              <li>Gautam Buddha Nagar, UP</li>
              <li>+91 120 4567 890</li>
              <li>hello@aurum.co.in</li>
            </ul>
          </div>
          <div>
            <h5>Hours</h5>
            <ul>
              <li>Mon — Sat · 10:00–19:00</li>
              <li>Sun · By appointment</li>
              <li style={{ paddingTop: 10 }}>Video calls available daily, 09:00–21:00.</li>
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          <div>© 2026 {brandName}. All rights reserved.</div>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Icon.insta/></a>
            <a href="#" aria-label="YouTube"><Icon.youtube/></a>
            <a href="#" aria-label="WhatsApp"><Icon.whats/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, TrustBand, Services, Process, PropertyCard, Featured, InteriorStudio, Videos, Testimonials, FinalCta, Footer });
