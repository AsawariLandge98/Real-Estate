/* eslint-disable no-unused-vars */
// Evoque Assets — Homepage sections

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
          <span className="eyebrow hero__eyebrow eyebrow-light">Noida · Delhi-NCR · Est. 2015</span>
        </Reveal>
        <Reveal>
          <h1 className="h-display">
            Premium property, the way it <em>should</em> always be.
          </h1>
        </Reveal>
        <Reveal>
          <div className="hero__valueline">
            <div>
              <strong>Buy &amp; Sell</strong>
              <span>Verified properties, transparent pricing, every deal in writing.</span>
            </div>
            <div>
              <strong>Rent &amp; Lease</strong>
              <span>Owner-direct listings with fair, legally reviewed agreements.</span>
            </div>
            <div>
              <strong>Interior Design</strong>
              <span>From bare-shell to move-in ready — fixed quote, 10 weeks.</span>
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
        <span>· 200+ verified listings</span><br/>
        <span>· 50+ active consultations</span>
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
          <TrustCell start={seen} target={500} suffix="+" label="Deals closed in writing" />
          <TrustCell start={seen} target={10} suffix="+ yrs" label="Of NCR expertise" />
          <TrustCell start={seen} target={95} suffix=" %" label="Clients return or refer" />
          <TrustCell start={seen} target={0} prefix="₹" label="Hidden charges, ever" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Services (home preview) ---------- */
const SERVICES_DATA = [
  {
    num: "01",
    title: "Buy",
    blurb: "We shortlist only properties we've personally verified — title, society dues, structural check, fair market price. You see four homes, not forty.",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=70"
  },
  {
    num: "02",
    title: "Rent",
    blurb: "Owner-direct listings with rent agreements reviewed by our legal panel. Deposits returned in 30 days, documented and in writing on move-out.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=70"
  },
  {
    num: "03",
    title: "Interior Design",
    blurb: "An in-house studio that picks up where the sale ends. Modular, furnishings, lighting — one fixed quote, one project manager, ten weeks.",
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
            <Reveal><p className="lede">We don't aggregate listings or chase brokerage from both sides. We work for the client, charge a fixed fee disclosed upfront, and close every deal in writing.</p></Reveal>
          </div>
        </div>
        <Reveal stagger className="services__grid">
          {SERVICES_DATA.map((s) => (
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
      <div className="prop-card__media" style={{ backgroundImage: `url(${p.image})` }}>
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
          {p.area != null && <span><strong>{p.area.toLocaleString("en-IN")}</strong>{p.areaUnit || "sqft"}</span>}
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
              Our in-house studio takes the home from bare-shell to lived-in. One fixed quote, one project manager, ten weeks. We've delivered over two hundred homes in NCR.
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

/* ---------- YouTube Videos (Evoque Assets channel) ---------- */
const EVOQUE_YOUTUBE_VIDEOS = [
  {
    id: "yt-01",
    title: "Sky Residences — 3BHK Corner Unit Walkthrough",
    locality: "Sector 150, Noida",
    duration: "4:12",
    thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=70",
    url: "https://www.youtube.com/@EvoqueAssets"
  },
  {
    id: "yt-02",
    title: "The Aravalli Penthouse — Terrace & Interior Tour",
    locality: "Jaypee Greens, Greater Noida",
    duration: "6:48",
    thumb: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=70",
    url: "https://www.youtube.com/@EvoqueAssets"
  },
  {
    id: "yt-03",
    title: "Atrium Plaza Grade A Office — Full Showcase",
    locality: "Sector 18, Noida",
    duration: "2:54",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70",
    url: "https://www.youtube.com/@EvoqueAssets"
  },
  {
    id: "yt-04",
    title: "DLF Builder Floor — Room by Room Walkthrough",
    locality: "DLF Phase 4, Gurgaon",
    duration: "5:21",
    thumb: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=70",
    url: "https://www.youtube.com/@EvoqueAssets"
  }
];

function YoutubeVideos() {
  return (
    <section className="section yt-section" id="videos" style={{ background: "var(--paper)" }}>
      <div className="shell">
        <div className="s-head">
          <div className="s-head__left">
            <Reveal><span className="eyebrow">— Evoque Assets on YouTube</span></Reveal>
            <Reveal><h2 className="h-section">See it before you <em>visit.</em></h2></Reveal>
          </div>
          <div className="s-head__right">
            <Reveal>
              <p className="lede">Every shortlisted property gets a full video walkthrough — rooms, fixtures, society areas, even the lift wait time. No edit cuts to hide flaws.</p>
              <a
                href="https://www.youtube.com/@EvoqueAssets"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost yt-channel-btn"
                style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <Icon.youtube style={{ color: "#FF0000" }} />
                Visit our YouTube Channel
                <span className="arrow"><Icon.arrow/></span>
              </a>
            </Reveal>
          </div>
        </div>
        <Reveal stagger className="videos__grid">
          {EVOQUE_YOUTUBE_VIDEOS.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-tile"
              style={{ backgroundImage: `url(${v.thumb})`, textDecoration: "none", display: "block" }}
            >
              <span className="video-tile__duration">{v.duration}</span>
              <div className="video-tile__play"><Icon.play style={{ color: "var(--navy-deep)", marginLeft: 3 }}/></div>
              <div className="video-tile__meta">
                <strong>{v.title}</strong>
                <span><Icon.cam/> {v.locality}</span>
              </div>
              <div className="video-tile__yt-badge">
                <Icon.youtube style={{ color: "#FF0000", width: 14, height: 14 }} />
                <span>YouTube</span>
              </div>
            </a>
          ))}
        </Reveal>
        <Reveal>
          <div className="yt-subscribe-bar">
            <div className="yt-subscribe-bar__text">
              <Icon.youtube style={{ color: "#FF0000", width: 24, height: 24, flexShrink: 0 }} />
              <div>
                <strong>Subscribe to Evoque Assets</strong>
                <span>New property walkthroughs every week. No spam, only properties.</span>
              </div>
            </div>
            <a href="https://www.youtube.com/@EvoqueAssets" target="_blank" rel="noopener noreferrer"
               className="btn btn--primary yt-subscribe-btn">
              Subscribe on YouTube <span className="arrow"><Icon.arrow/></span>
            </a>
          </div>
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
            <Reveal><p className="lede">95% of our clients return for a second transaction or refer someone within two years. These are three of them, in their own words.</p></Reveal>
          </div>
        </div>
        <Reveal stagger className="testimonials__grid">
          {items.map((t, i) => (
            <article key={i} className="testimonial">
              <div className="testimonial__mark">"</div>
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
          <Reveal><p>Tell us what you're looking for. We'll tell you, honestly, whether we're the right people to help — and if we're not, who is. The first meeting is on us.</p></Reveal>
          <Reveal>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn--gold" onClick={onContact}>Book Consultation <span className="arrow"><Icon.arrow/></span></button>
              <a className="btn btn--ghost-light" href="tel:+919999999999">Call Us Now</a>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="finalcta__pledge">
            <h4>The Evoque Assets pledge</h4>
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
  const nav = (route) => (e) => { e.preventDefault(); onNavigate && onNavigate(route); window.scrollTo({ top: 0 }); };
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <Brand brandName={brandName} />
            <p>Premium real estate consultancy from Noida — buy, sell, rent, and interior design. Every deal documented, every fee disclosed upfront.</p>
            <div className="footer__rera">RERA · UP-RERA-12087-2024</div>
            <div className="footer__social-row">
              <a href="https://www.instagram.com/evoque.assets/" target="_blank" rel="noopener" aria-label="Instagram" className="footer__social-link">
                <Icon.insta/>
              </a>
              <a href="https://www.youtube.com/@EvoqueAssets" target="_blank" rel="noopener" aria-label="YouTube" className="footer__social-link footer__social-link--yt">
                <Icon.youtube/>
              </a>
              <a href="https://www.facebook.com/evoqueassets/" target="_blank" rel="noopener" aria-label="Facebook" className="footer__social-link footer__social-link--fb">
                <Icon.facebook/>
              </a>
              <a href="https://in.linkedin.com/company/evoque_assets" target="_blank" rel="noopener" aria-label="LinkedIn" className="footer__social-link footer__social-link--li">
                <Icon.linkedin/>
              </a>
            </div>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="#" onClick={nav("services")}>Our Services</a></li>
              <li><a href="#" onClick={nav("inventory")}>Property Inventory</a></li>
              <li><a href="#" onClick={nav("about")}>About Us</a></li>
              <li><a href="#" onClick={nav("insights")}>Insights & Market</a></li>
              <li><a href="#" onClick={nav("contact")}>Book Consultation</a></li>
            </ul>
          </div>
          <div>
            <h5>Office</h5>
            <ul>
              <li>Evoque Assets</li>
              <li>Sector 18, Noida 201301</li>
              <li>Gautam Buddha Nagar, UP</li>
              <li><a href="tel:+919999999999">+91 99999 99999</a></li>
              <li><a href="mailto:info@evoqueassets.com">info@evoqueassets.com</a></li>
            </ul>
          </div>
          <div>
            <h5>Follow Us</h5>
            <ul>
              <li>
                <a href="https://www.instagram.com/evoque.assets/" target="_blank" rel="noopener" className="footer__follow-link">
                  📸 Instagram — @evoque.assets
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@EvoqueAssets" target="_blank" rel="noopener" className="footer__follow-link">
                  ▶ YouTube — @EvoqueAssets
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/evoqueassets/" target="_blank" rel="noopener" className="footer__follow-link">
                  👍 Facebook — evoqueassets
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/company/evoque_assets" target="_blank" rel="noopener" className="footer__follow-link">
                  💼 LinkedIn — evoque_assets
                </a>
              </li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <h5>Hours</h5>
              <ul>
                <li>Mon — Sat · 10:00–19:00</li>
                <li>Sun · By appointment</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <div>© 2026 {brandName}. All rights reserved.</div>
          <div className="footer__social">
            <a href="https://www.instagram.com/evoque.assets/" target="_blank" rel="noopener" aria-label="Instagram"><Icon.insta/></a>
            <a href="https://www.youtube.com/@EvoqueAssets" target="_blank" rel="noopener" aria-label="YouTube"><Icon.youtube/></a>
            <a href="https://www.facebook.com/evoqueassets/" target="_blank" rel="noopener" aria-label="Facebook"><Icon.facebook/></a>
            <a href="https://in.linkedin.com/company/evoque_assets" target="_blank" rel="noopener" aria-label="LinkedIn"><Icon.linkedin/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, TrustBand, Services, Process, PropertyCard, Featured, InteriorStudio, YoutubeVideos, Testimonials, FinalCta, Footer });
