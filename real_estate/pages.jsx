/* eslint-disable no-unused-vars */
// Evoque Assets — Additional pages: About, Contact, Careers, Insights (Blog)

/* ================================================================
   ABOUT PAGE
   ================================================================ */
function AboutPage({ onContact }) {
  const TEAM = [
    {
      initials: "VK",
      name: "Vikram Kapoor",
      title: "Founder & Managing Director",
      bio: "15 years in Delhi-NCR real estate. Former head of residential at Knight Frank India. Believes every deal should be documented well enough to survive a court.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=70"
    },
    {
      initials: "AM",
      name: "Aditi Malhotra",
      title: "Lead Consultant — Residential",
      bio: "Specialises in Noida Sector 78–150 and Greater Noida West. Has personally closed 340+ residential deals; known for finding the flaw in every shortlist before the client does.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=70"
    },
    {
      initials: "RM",
      name: "Rohan Mehta",
      title: "Senior Consultant — Residential",
      bio: "Handles Sector 128–168 and Jaypee Greens. Previously with JLL. Clients say he's the first broker who told them not to buy something.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=70"
    },
    {
      initials: "PD",
      name: "Priya Dutt",
      title: "Head of Commercial",
      bio: "Eight years placing IT, fintech and e-commerce teams in Noida Expressway towers. Handles Sector 62, 135 and Expressway commercial exclusively.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=70"
    },
    {
      initials: "NS",
      name: "Neha Sharma",
      title: "Principal Designer — Interior Studio",
      bio: "Leads the in-house studio. Trained at NID Ahmedabad. Over 214 residential interiors delivered across NCR. Flat fee, fixed timeline — she built the model herself.",
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=70"
    },
    {
      initials: "AK",
      name: "Arun Kumar",
      title: "Head of Legal & Compliance",
      bio: "Retired from the UP Revenue Dept. Every property we list gets a title search, encumbrance check, and society-dues audit from Arun before it goes on the site.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=70"
    }
  ];

  const VALUES = [
    {
      num: "01",
      title: "One fee, disclosed before we start",
      body: "We charge a fixed consultancy fee, set before we show you a single property. You see it in writing. We do not earn brokerage from sellers — our interest is yours."
    },
    {
      num: "02",
      title: "Only verified listings",
      body: "Every property is title-searched, encumbrance-checked and society-dues-audited by our in-house legal head before it goes live. If we haven't verified it, it isn't on our site."
    },
    {
      num: "03",
      title: "Every negotiation in writing",
      body: "We document every offer, counter-offer, and concession. You will never wonder what was agreed — because it will be in a note you hold."
    },
    {
      num: "04",
      title: "We don't disappear at handover",
      body: "Society induction, title transfer, possession punch list, and interior handover — we remain on record until every line is closed."
    }
  ];

  return (
    <div className="page-about">
      {/* Page Hero */}
      <section className="page-hero page-hero--navy">
        <div className="shell page-hero__inner">
          <Reveal><span className="eyebrow eyebrow-light">— About Evoque Assets</span></Reveal>
          <Reveal><h1 className="h-display">Built on the conviction that<br/> a fair deal is the <em>only</em> good deal.</h1></Reveal>
          <Reveal><p className="lede lede--light">We started in 2011 with one rule: never earn from both sides of a transaction. Fourteen years later, it's still the only rule that matters.</p></Reveal>
        </div>
      </section>

      {/* Origin story */}
      <section className="section">
        <div className="shell">
          <div className="about-origin">
            <div className="about-origin__img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=70)" }} />
            <div>
              <Reveal><span className="eyebrow">— Our story</span></Reveal>
              <Reveal><h2 className="h-section" style={{ marginTop: 16 }}>Noida, 2011. One rule, <em>no exceptions.</em></h2></Reveal>
              <Reveal><p className="lede" style={{ marginTop: 18 }}>Vikram Kapoor had spent eight years watching clients pay brokerage to agents who were simultaneously earning from the seller. He left Knight Frank to start a firm that would charge one side only, publish that fee before a single property was shown, and document every negotiation in writing.</p></Reveal>
              <Reveal><p style={{ marginTop: 16, color: "var(--slate)", lineHeight: 1.8 }}>Evoque Assets opened in a 400 sqft office in Sector 18. The first year was difficult — developers refused to list with us, because we wouldn't take the 3% they were paying other brokers. The second year, clients started returning. The third year, they started referring. By 2016, we had turned down three buyout offers from larger aggregators. We haven't taken one since.</p></Reveal>
              <Reveal><p style={{ marginTop: 16, color: "var(--slate)", lineHeight: 1.8 }}>Today we are sixteen people. We cover Delhi-NCR exclusively. We have closed 1,248 deals, all in writing, all at disclosed fees. We have never charged brokerage from both sides of a single transaction.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values-section">
        <div className="shell">
          <div className="s-head">
            <div className="s-head__left">
              <Reveal><span className="eyebrow">— What we stand for</span></Reveal>
              <Reveal><h2 className="h-section">The four rules we've <em>never</em> broken.</h2></Reveal>
            </div>
            <div className="s-head__right">
              <Reveal><p className="lede">These aren't marketing lines. They're the conditions under which we took our first client in 2011 and under which we take clients today.</p></Reveal>
            </div>
          </div>
          <Reveal stagger className="about-values">
            {VALUES.map((v) => (
              <div key={v.num} className="about-value">
                <div className="about-value__num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="shell">
          <div className="s-head">
            <div className="s-head__left">
              <Reveal><span className="eyebrow">— The team</span></Reveal>
              <Reveal><h2 className="h-section">Sixteen people. <em>All</em> of them available.</h2></Reveal>
            </div>
            <div className="s-head__right">
              <Reveal><p className="lede">We are not a call centre. When you work with us, you have one named consultant — and their number is on your file from day one.</p></Reveal>
            </div>
          </div>
          <Reveal stagger className="team-grid">
            {TEAM.map((m) => (
              <article key={m.initials} className="team-card">
                <div className="team-card__img" style={{ backgroundImage: `url(${m.img})` }}>
                  <div className="team-card__initials">{m.initials}</div>
                </div>
                <div className="team-card__body">
                  <h3>{m.name}</h3>
                  <div className="team-card__title">{m.title}</div>
                  <p>{m.bio}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Office / location */}
      <section className="section about-office">
        <div className="shell">
          <div className="about-office__grid">
            <div>
              <Reveal><span className="eyebrow">— Find us</span></Reveal>
              <Reveal><h2 className="h-section" style={{ marginTop: 16 }}>Sector 18, Noida. <em>Walk in</em> anytime.</h2></Reveal>
              <Reveal><p className="lede" style={{ marginTop: 18 }}>We don't do cold calls or mass email. Conversations start in person, or on a video call you schedule at a time that suits you. The coffee is better here.</p></Reveal>
              <Reveal>
                <div className="about-office__details">
                  <div><strong>Address</strong><span>4th Floor, Atrium Plaza, Sector 18, Noida 201301</span></div>
                  <div><strong>Phone</strong><span>+91 120 4567 890</span></div>
                  <div><strong>Email</strong><span>hello@evoqueassets.com</span></div>
                  <div><strong>Hours</strong><span>Mon–Sat 10:00–19:00 · Video calls daily 09:00–21:00</span></div>
                  <div><strong>RERA</strong><span>UP-RERA-12087-2024</span></div>
                </div>
              </Reveal>
              <Reveal>
                <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn btn--primary" onClick={onContact}>Book a Consultation <span className="arrow"><Icon.arrow/></span></button>
                  <a className="btn btn--ghost" href="tel:+911204567890">Call us now</a>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="about-office__map">
                <div className="about-office__map-inner">
                  <div className="pd__map__pin" />
                  <div className="pd__map__label">Evoque Assets · Sector 18, Noida</div>
                  <div style={{ position: "absolute", bottom: 16, left: 20, fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: ".14em", color: "var(--slate-soft)", textTransform: "uppercase" }}>Approximate location</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   CONTACT PAGE
   ================================================================ */
function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeService, setActiveService] = useState("");
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    window.AURUM_API.submitInquiry({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: `Service: ${form.service || activeService || "General"}\n\n${form.message}`,
      property_ref: "",
    })
      .then(() => { setSubmitted(true); setSubmitting(false); })
      .catch((err) => {
        console.error("Inquiry submit failed:", err);
        setSubmitError("Submit nahi ho paya. Please dobara try karo.");
        setSubmitting(false);
      });
  };

  const SERVICES = [
    { value: "buy",      emoji: "🏠", label: "Buy" },
    { value: "rent",     emoji: "🔑", label: "Rent" },
    { value: "sell",     emoji: "💰", label: "Sell" },
    { value: "lease",    emoji: "🏢", label: "Lease" },
    { value: "interior", emoji: "🛋", label: "Interiors" },
    { value: "other",    emoji: "✦",  label: "Other" }
  ];

  const FAQS = [
    { q: "What is your brokerage fee?", a: "A fixed consultancy fee — agreed and signed before we show you a single property. We quote it in the first call, not after the deal." },
    { q: "Do you charge the seller too?", a: "Never. We work exclusively for the buyer or tenant. Charging both sides is a structural conflict of interest we won't touch." },
    { q: "How quickly do I get a shortlist?", a: "Residential: 3–5 working days. Commercial: 5–7 days. We show 4–6 verified properties, not 40 unverified portals listings." },
    { q: "Which areas do you cover?", a: "All of Delhi-NCR — Noida, Greater Noida, Gurgaon (select sectors), Faridabad, and Delhi. Our deepest expertise is Noida and Greater Noida." },
    { q: "Can you help me sell my property?", a: "Yes, on a case-by-case basis. We take sell-side mandates only when the property is fairly priced and title-clear. Call us to discuss." },
    { q: "How does interior design work?", a: "Fixed quote, one project manager, ten-week delivery. Scope agreed in writing before a single item is ordered — no change-order surprises." }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="cpage">

      {/* ═══════════════════════════════════════
          HERO — full-bleed split
      ═══════════════════════════════════════ */}
      <div className="cpage__hero">

        {/* LEFT — dark info panel */}
        <div className="cpage__left">
          <div className="cpage__left-inner">

            <Reveal>
              <span className="cpage__eyebrow">— Get in touch</span>
            </Reveal>

            <Reveal>
              <h1 className="cpage__headline">
                Talk to us.<br />
                <em>No pressure,</em><br />
                no spam.
              </h1>
            </Reveal>

            <Reveal>
              <p className="cpage__tagline">
                A free 30-minute consultation. Tell us what you need — we'll tell you honestly if we can help.
              </p>
            </Reveal>

            {/* ── Contact details ── */}
            <Reveal>
              <div className="cpage__details">
                <a href="tel:+919999999999" className="cpage__detail">
                  <div className="cpage__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.1 19.79 19.79 0 0 1 1.63 3.5 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="cpage__detail-label">Phone</div>
                    <div className="cpage__detail-value">+91 99999 99999</div>
                  </div>
                </a>

                <a href="mailto:info@evoqueassets.com" className="cpage__detail">
                  <div className="cpage__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="cpage__detail-label">Email</div>
                    <div className="cpage__detail-value">info@evoqueassets.com</div>
                  </div>
                </a>

                <div className="cpage__detail">
                  <div className="cpage__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="cpage__detail-label">Office</div>
                    <div className="cpage__detail-value">Sector 18, Noida 201301</div>
                  </div>
                </div>

                <div className="cpage__detail">
                  <div className="cpage__detail-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="cpage__detail-label">Hours</div>
                    <div className="cpage__detail-value">Mon–Sat · 10:00 – 19:00</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── Social links ── */}
            <Reveal>
              <div className="cpage__socials">
                <a href="https://www.instagram.com/evoque.assets/" target="_blank" rel="noopener" className="cpage__social" aria-label="Instagram">
                  <Icon.insta />
                </a>
                <a href="https://www.youtube.com/@EvoqueAssets" target="_blank" rel="noopener" className="cpage__social cpage__social--yt" aria-label="YouTube">
                  <Icon.youtube />
                </a>
                <a href="https://www.facebook.com/evoqueassets/" target="_blank" rel="noopener" className="cpage__social cpage__social--fb" aria-label="Facebook">
                  <Icon.facebook />
                </a>
                <a href="https://in.linkedin.com/company/evoque_assets" target="_blank" rel="noopener" className="cpage__social cpage__social--li" aria-label="LinkedIn">
                  <Icon.linkedin />
                </a>
              </div>
            </Reveal>

          </div>

          {/* decorative gold ring */}
          <div className="cpage__ring cpage__ring--1" />
          <div className="cpage__ring cpage__ring--2" />
        </div>

        {/* RIGHT — form */}
        <div className="cpage__right">
          <div className="cpage__form-card">

            {submitted ? (
              /* ── Success state ── */
              <div className="cpage__success">
                <div className="cpage__success-icon">
                  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                    <circle cx="28" cy="28" r="26" stroke="var(--gold)" strokeWidth="2"/>
                    <path d="M16 28l8 8 16-16" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="cpage__success-h">We'll call within<br />2 working hours.</h2>
                <p className="cpage__success-p">One named consultant will reach out on the number you shared. No bulk emails, no follow-up pressure.</p>
                <div className="cpage__success-pills">
                  <span>✓ Named consultant</span>
                  <span>✓ Zero spam</span>
                  <span>✓ Fee upfront</span>
                </div>
                <button className="cpage__reset-btn" onClick={() => setSubmitted(false)}>
                  Send another enquiry →
                </button>
              </div>

            ) : (
              /* ── Form state ── */
              <>
                <div className="cpage__form-top">
                  <span className="cpage__form-pill">Free consultation</span>
                  <h2 className="cpage__form-h">Book a call</h2>
                  <p className="cpage__form-sub">We respond within <strong>2 working hours</strong>, every day.</p>
                </div>

                <form className="cpage__form" onSubmit={submit}>

                  {/* Service chips */}
                  <div className="cpage__field">
                    <label className="cpage__label">What are you looking for?</label>
                    <div className="cpage__chips">
                      {SERVICES.map((s) => (
                        <button
                          type="button"
                          key={s.value}
                          className={"cpage__chip" + (activeService === s.value ? " is-on" : "")}
                          onClick={() => { setActiveService(s.value); set("service", s.value); }}
                        >
                          <span className="cpage__chip-emoji">{s.emoji}</span>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Phone */}
                  <div className="cpage__row2">
                    <div className="cpage__field">
                      <label className="cpage__label">Full name <span className="cpage__req">*</span></label>
                      <input
                        className="cpage__input"
                        required
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div className="cpage__field">
                      <label className="cpage__label">Phone <span className="cpage__req">*</span></label>
                      <input
                        className="cpage__input"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="cpage__field">
                    <label className="cpage__label">Email <span className="cpage__opt">optional</span></label>
                    <input
                      className="cpage__input"
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="rahul@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div className="cpage__field">
                    <label className="cpage__label">Message</label>
                    <textarea
                      className="cpage__input cpage__textarea"
                      rows={3}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Budget, locality, timeline — anything useful before the call."
                    />
                  </div>

                  {submitError && <div style={{color:"#E05252",fontSize:"13px",marginBottom:"10px",padding:"10px",background:"rgba(224,82,82,.1)",borderRadius:"6px"}}>{submitError}</div>}
                  <button className="cpage__submit" type="submit" disabled={submitting} style={submitting ? {opacity:0.7,cursor:"not-allowed"} : {}}>
                    Send enquiry
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <path d="M5 12h14M13 5l7 7-7 7"/>
                    </svg>
                  </button>

                  <p className="cpage__privacy">🔒 Your details are never shared with developers or third parties.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          PROMISE STRIP
      ═══════════════════════════════════════ */}
      <section className="cpage__promise">
        <div className="shell">
          <Reveal stagger className="cpage__promise-grid">
            {[
              { icon: "⏱", title: "2-hr callback", body: "We call back within 2 working hours. For urgent matters, call directly — we pick up." },
              { icon: "👤", title: "One consultant", body: "One named person from first call to final handover. No helpdesk, no handoffs." },
              { icon: "📋", title: "Fee upfront",    body: "Fixed fee agreed and signed before we show you a single property. No surprises." },
              { icon: "🤝", title: "No pressure",    body: "We'll tell you honestly if we're not right for your need — and who might be." }
            ].map((p, i) => (
              <div key={i} className="cpage__promise-item">
                <span className="cpage__promise-icon">{p.icon}</span>
                <h3 className="cpage__promise-title">{p.title}</h3>
                <p className="cpage__promise-body">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="section cpage__faq">
        <div className="shell">
          <div className="cpage__faq-wrap">

            {/* Left heading */}
            <div className="cpage__faq-head">
              <Reveal><span className="eyebrow">— Common questions</span></Reveal>
              <Reveal><h2 className="h-section" style={{marginTop:14}}>Questions we hear <em>every</em> week.</h2></Reveal>
              <Reveal>
                <p style={{color:"var(--slate)", lineHeight:1.7, marginTop:16, fontSize:15}}>
                  Thirteen years of consultations, distilled. If yours isn't here — just call us.
                </p>
              </Reveal>
              <Reveal>
                <a href="tel:+919999999999" className="btn btn--primary" style={{marginTop:28, display:"inline-flex"}}>
                  Call us now <span className="arrow"><Icon.arrow/></span>
                </a>
              </Reveal>
            </div>

            {/* Right accordion */}
            <div className="cpage__faq-list">
              {FAQS.map((item, i) => (
                <Reveal key={i}>
                  <div
                    className={"cpage__faq-item" + (openFaq === i ? " is-open" : "")}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <div className="cpage__faq-q">
                      <span>{item.q}</span>
                      <span className="cpage__faq-toggle">{openFaq === i ? "−" : "+"}</span>
                    </div>
                    {openFaq === i && (
                      <div className="cpage__faq-a">{item.a}</div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOCATION FOOTER STRIP
      ═══════════════════════════════════════ */}
      <div className="cpage__location">
        <div className="shell cpage__location-inner">
          <Reveal>
            <div className="cpage__location-text">
              <span className="eyebrow eyebrow-light" style={{marginBottom:12, display:"block"}}>— Find us</span>
              <h3 className="cpage__location-h">Sector 18, Noida.<br/><em>Walk in anytime.</em></h3>
              <p>4th Floor, Sector 18, Noida 201301<br/>Mon – Sat &nbsp;·&nbsp; 10:00 – 19:00</p>
              <div className="cpage__location-btns">
                <a href="tel:+919999999999" className="btn btn--gold">Call now <span className="arrow"><Icon.arrow/></span></a>
                <a href="mailto:info@evoqueassets.com" className="btn btn--ghost-light">Email us</a>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="cpage__map">
              <div className="cpage__map-grid-bg"/>
              <div className="cpage__map-pin">
                <div className="cpage__map-dot"/>
                <div className="cpage__map-pulse"/>
                <div className="cpage__map-pulse cpage__map-pulse--2"/>
              </div>
              <div className="cpage__map-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="11" height="11"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Evoque Assets · Sector 18, Noida
              </div>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  );
}

function CareersPage({ onContact }) {
  const [openRole, setOpenRole] = useState(null);
  const [applyRole, setApplyRole] = useState(null);
  const [appForm, setAppForm] = useState({ name: "", email: "", phone: "", note: "" });
  const [appDone, setAppDone] = useState(false);

  const ROLES = [
    {
      id: "rc-01",
      title: "Residential Consultant",
      type: "Full-time",
      location: "Noida (on-site)",
      exp: "3–7 years",
      desc: "You'll handle a portfolio of 8–12 active clients at any time, from discovery through possession. You'll be responsible for shortlisting, site visits, offer negotiation, and documentation — with support from our legal head at every step. No cold calling. Every lead comes from referrals or the site.",
      skills: ["Strong knowledge of Noida / Greater Noida micro-markets", "Comfortable with property documentation (agreement to sale, sale deed basics)", "Clear communicator — clients will quote you verbatim in testimonials", "RERA registered (or willing to register within 30 days of joining)"]
    },
    {
      id: "rc-02",
      title: "Commercial Leasing Consultant",
      type: "Full-time",
      location: "Noida (on-site)",
      exp: "4–8 years",
      desc: "Sector 62 and the Expressway corridor. You'll work with IT, fintech and D2C tenants — mostly expanding teams looking for 2,000–20,000 sqft. The role requires understanding of Grade A fit-out specs, lock-in structures, and CAM charges. Our commercial pipeline is growing faster than residential right now.",
      skills: ["Office leasing background, preferably Noida Expressway", "Understanding of CAM, FMV benchmarks, and fit-out handover", "Comfortable presenting to C-suite decision-makers", "RERA registered preferred"]
    },
    {
      id: "rc-03",
      title: "Interior Design Project Manager",
      type: "Full-time",
      location: "Noida (on-site, sites across NCR)",
      exp: "3–5 years",
      desc: "You'll manage 4–6 live sites at a time under Neha Sharma's studio. Scope includes modular kitchen and wardrobe coordination, electrical and civil supervision, vendor management, and client communication at each milestone. We work on fixed timelines and fixed-fee quotes — your job is to deliver both.",
      skills: ["Background in interior project execution (not just design)", "Fluent with contractor and vendor coordination", "Meticulous about documentation — every change order in writing", "AutoCAD or SketchUp preferred, not required"]
    },
    {
      id: "rc-04",
      title: "Legal & Due Diligence Associate",
      type: "Full-time",
      location: "Noida (on-site)",
      exp: "2–4 years",
      desc: "Support Arun Kumar in title searches, encumbrance certificates, RERA verification, society NOC tracking, and agreement review. Every property on our site goes through this desk before it goes live. You'll also support clients at registration — we're present, in person, for every registration we facilitate.",
      skills: ["LLB or paralegal background with property law exposure", "Familiarity with UP/Delhi RERA, registration process", "Comfort with revenue records, EC, mutation entries", "Attention to detail that borders on obsessive"]
    },
    {
      id: "rc-05",
      title: "Content & Video Producer",
      type: "Full-time",
      location: "Noida (on-site, shoots across NCR)",
      exp: "2–5 years",
      desc: "Every property we shortlist gets a full walkthrough video before we show it to clients. You'll script, shoot and edit these — plus the brand's YouTube channel, Instagram Reels, and occasional written market commentary. We don't believe in edit cuts that hide flaws; the brief is honest, well-lit, and fast.",
      skills: ["Comfortable shooting in real-estate environments (no studio)", "Proficient with Premiere Pro or DaVinci Resolve", "Strong aesthetic sense — our brand is premium, not flashy", "Writing ability a significant advantage"]
    }
  ];

  const PERKS = [
    { icon: "💰", title: "Fixed + performance fee", body: "Base salary that doesn't require you to panic-close deals, plus a performance share that rewards quality over volume." },
    { icon: "📋", title: "Every deal in writing", body: "You'll never be asked to make a verbal promise you can't keep. Our documentation culture protects clients and consultants equally." },
    { icon: "🎓", title: "RERA & CPD support", body: "We cover registration fees and CPD credits. If there's a relevant programme you want to attend, we fund it." },
    { icon: "🏢", title: "Real office, real team", body: "Sector 18, Noida. Not a co-working space. A 2,400 sqft office where the whole team meets Monday mornings." },
    { icon: "🤝", title: "No cold calling. Ever.", body: "Every lead comes from the site, referrals or repeat clients. You'll spend your time on clients who have already decided to engage." },
    { icon: "📈", title: "Equity path for seniors", body: "Two of our six senior consultants have minority equity stakes. We're building for the long term and we want the team to share in it." }
  ];

  return (
    <div className="page-careers">
      <section className="page-hero page-hero--navy">
        <div className="shell page-hero__inner">
          <Reveal><span className="eyebrow eyebrow-light">— Work with us</span></Reveal>
          <Reveal><h1 className="h-display">Sixteen people doing the work <em>right.</em></h1></Reveal>
          <Reveal><p className="lede lede--light">We are not hiring fast. We hire carefully, onboard thoroughly, and keep people for a long time. If that sounds like the kind of firm you want to build your career at, read on.</p></Reveal>
        </div>
      </section>

      {/* Culture */}
      <section className="section">
        <div className="shell">
          <div className="careers-culture">
            <div>
              <Reveal><span className="eyebrow">— What it's like here</span></Reveal>
              <Reveal><h2 className="h-section" style={{ marginTop: 16 }}>Small team, <em>high</em> standards.</h2></Reveal>
              <Reveal><p className="lede" style={{ marginTop: 18 }}>We are sixteen people. Everyone knows every client. Everyone knows the status of every open deal. There is no "pass it to someone else" culture here — if a client's name is on your file, you are their point of contact until the keys are in their hand.</p></Reveal>
              <Reveal><p style={{ marginTop: 16, color: "var(--slate)", lineHeight: 1.8 }}>We work five and a half days a week. Monday mornings are the whole team together. Saturday afternoons are yours. We don't send client messages after 21:00 unless there is a same-day closing. We take the Diwali week off, together.</p></Reveal>
            </div>
            <div className="careers-culture__imgs">
              <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70)" }} />
              <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=70)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="shell">
          <div className="s-head">
            <div className="s-head__left">
              <Reveal><span className="eyebrow">— What we offer</span></Reveal>
              <Reveal><h2 className="h-section">Six things that <em>aren't</em> table tennis.</h2></Reveal>
            </div>
          </div>
          <Reveal stagger className="perks-grid">
            {PERKS.map((p, i) => (
              <div key={i} className="perk-card">
                <div className="perk-card__icon">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Open roles */}
      <section className="section" id="open-roles">
        <div className="shell">
          <div className="s-head">
            <div className="s-head__left">
              <Reveal><span className="eyebrow">— Open positions</span></Reveal>
              <Reveal><h2 className="h-section">{ROLES.length} roles open <em>right now.</em></h2></Reveal>
            </div>
            <div className="s-head__right">
              <Reveal><p className="lede">We hire for attitude and documentation discipline first, domain knowledge second. If you're close but not an exact match, apply anyway and say so in your note.</p></Reveal>
            </div>
          </div>

          <div className="roles-list">
            {ROLES.map((role) => (
              <div key={role.id} className={"role-item" + (openRole === role.id ? " is-open" : "")}>
                <div className="role-item__head" onClick={() => setOpenRole(openRole === role.id ? null : role.id)}>
                  <div>
                    <h3>{role.title}</h3>
                    <div className="role-item__meta">
                      <span>{role.type}</span>
                      <span>{role.location}</span>
                      <span>{role.exp} experience</span>
                    </div>
                  </div>
                  <div className="role-item__toggle">{openRole === role.id ? "−" : "+"}</div>
                </div>
                {openRole === role.id && (
                  <div className="role-item__body">
                    <p>{role.desc}</p>
                    <h4>What we're looking for</h4>
                    <ul>
                      {role.skills.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                    {appDone && applyRole === role.id ? (
                      <div className="role-applied">
                        <strong>Application received.</strong> We read every one — you'll hear from us within 5 working days.
                      </div>
                    ) : (
                      applyRole === role.id ? (
                        <form className="role-apply-form" onSubmit={(e) => { e.preventDefault(); setAppDone(true); }}>
                          <h4>Apply for {role.title}</h4>
                          <div className="contact-form__row">
                            <div className="contact-form__field">
                              <label>Name *</label>
                              <input required value={appForm.name} onChange={(e) => setAppForm({...appForm, name: e.target.value})} placeholder="Your name" />
                            </div>
                            <div className="contact-form__field">
                              <label>Phone *</label>
                              <input required type="tel" value={appForm.phone} onChange={(e) => setAppForm({...appForm, phone: e.target.value})} placeholder="+91 98xxx xxxxx" />
                            </div>
                          </div>
                          <div className="contact-form__field">
                            <label>Email *</label>
                            <input required type="email" value={appForm.email} onChange={(e) => setAppForm({...appForm, email: e.target.value})} placeholder="you@example.com" />
                          </div>
                          <div className="contact-form__field">
                            <label>A brief note (why this role, what you've done) *</label>
                            <textarea required rows={4} value={appForm.note} onChange={(e) => setAppForm({...appForm, note: e.target.value})} placeholder="Tell us what's relevant. No need to match the JD perfectly — honesty is more useful." />
                          </div>
                          <div style={{ display: "flex", gap: 12 }}>
                            <button className="btn btn--primary" type="submit">Submit application <span className="arrow"><Icon.arrow/></span></button>
                            <button className="btn btn--ghost" type="button" onClick={() => setApplyRole(null)}>Cancel</button>
                          </div>
                        </form>
                      ) : (
                        <button className="btn btn--primary" onClick={() => { setApplyRole(role.id); setAppDone(false); }}>
                          Apply for this role <span className="arrow"><Icon.arrow/></span>
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No match CTA */}
      <section className="section finalcta" style={{ padding: "clamp(60px,8vw,100px) 0" }}>
        <div className="shell finalcta__inner">
          <div>
            <Reveal><span className="eyebrow eyebrow-light">— Don't see a fit?</span></Reveal>
            <Reveal><h2>Drop us a note anyway.</h2></Reveal>
            <Reveal><p>If you're exceptional at what you do and you believe in the way we work, write to us at <a href="mailto:careers@evoqueassets.com" style={{ color: "var(--gold-soft)" }}>careers@evoqueassets.com</a>. We keep unsolicited applications on file for six months.</p></Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   INSIGHTS / BLOG PAGE
   ================================================================ */
const INSIGHTS = [
  {
    id: "ins-001",
    category: "Market",
    title: "Noida Sector 150: What the ₹2.5–4 Cr bracket actually looks like in 2026",
    date: "May 2026",
    readTime: "8 min",
    author: "Aditi Malhotra",
    authorTitle: "Lead Consultant — Residential",
    initials: "AM",
    excerpt: "Sector 150 has been the most talked-about pocket in Noida for three years. We've closed fourteen transactions there in the last eighteen months. Here's what the data actually says, and what the brochures leave out.",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=70",
    featured: true,
    body: `Sector 150 sits at the southern tip of Noida, abutting the Yamuna Expressway and bordered by the Botanical Garden metro extension. Three years ago it was a construction site. Today it houses four completed, RERA-registered townships — and six more under various stages of delivery.

The median transaction price in the 3BHK segment has moved from ₹1.85 Cr in Q1 2024 to ₹2.40 Cr in Q1 2026. That's a 30% appreciation in 24 months. The number gets quoted constantly in developer marketing. What doesn't get quoted is the context.

**What drove it, and what sustains it.** The Expressway completion in 2023 cut Noida-to-Agra drive time from 4 hours to 2. More practically, it put Sector 150 within 35 minutes of Connaught Place on the metro, which hadn't been priced in when the sector was first launched. The metro stations at Sector 148 and Botanical Garden are both fully operational.

**The maintenance dues problem.** Of the fourteen transactions we've facilitated in the sector, nine required negotiation around unpaid maintenance dues from the original buyer. The sector was sold aggressively to NRI buyers between 2016 and 2019; a significant number of those buyers either never took possession or took possession and rented the unit without paying society dues. We will not list a property in this sector without a society dues clearance certificate — and we recommend that any buyer in this sector demand one independently, regardless of what their broker says.

**What the ₹2.5–4 Cr bracket actually buys you.** At ₹2.5 Cr you're looking at a 3BHK in a mid-floor, non-premium tower — good construction, adequate amenities, probably 1,600–1,750 sqft. At ₹3.2–3.5 Cr, you start to see corner units with cross-ventilation, higher-floor options, and better society facilities. Above ₹4 Cr in this sector you're paying for the ATS or Godrej towers specifically — the premium is real, but so is the liquidity when you choose to sell.

**Our honest take.** Sector 150 is a legitimate market now. The appreciation is real and supported by infrastructure. The risk is developer-specific: not all the under-construction towers will deliver on their original timelines. If you're buying ready-to-move in this sector, we think it's a sound decision at the right price. If you're buying under-construction, please verify the RERA completion date and bank tie-up before signing anything.`
  },
  {
    id: "ins-002",
    category: "Legal",
    title: "The five documents you must verify before signing any sale agreement",
    date: "April 2026",
    readTime: "6 min",
    author: "Arun Kumar",
    authorTitle: "Head of Legal & Compliance",
    initials: "AK",
    excerpt: "Most buyers see the sale agreement on the day of signing. We think that's too late. Here are the five documents that should be reviewed — by you, not just your broker — before you sit down at the registrar's office.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=70",
    featured: true,
    body: `In fourteen years of facilitating property transactions in Delhi-NCR, I have seen more deals go wrong at the documentation stage than at any other. The problem is almost always the same: the buyer assumed the broker had checked the documents, and the broker assumed the bank had. Here is what needs to be verified, and by whom.

**1. Title chain for the last 30 years.** The sale deed you are signing needs to trace back through every previous owner for a minimum of three decades. In practice, this means the seller needs to produce sale deeds, gift deeds, or inheritance documents for every transfer in that chain. A 30-year clear title is the minimum standard; we treat anything shorter as a flag.

**2. Encumbrance Certificate (EC) from the Sub-Registrar's office.** An EC lists every registered transaction on the property — mortgages, liens, attachments. It is not the same as a bank's mortgage document. Get it directly from the Sub-Registrar, not from the seller. Banks routinely miss encumbrances that predate their own mortgage.

**3. RERA registration (for under-construction properties).** Verify the project registration number on the UP-RERA or MahaRERA portal directly. Check the listed completion date and the bank account details. If the promoter has changed the escrow bank account, that is a serious flag.

**4. Society NOC and maintenance dues clearance.** This is the most commonly skipped document in resale transactions. Ask for a letter from the society secretary confirming all dues — maintenance, parking, sinking fund — are cleared. Get it dated within the last 30 days.

**5. Property tax receipts for the last five years.** Unpaid property tax in Delhi-NCR creates a first charge on the property that survives a sale. The buyer inherits it. We have seen buyers discover ₹4–7 lakh in outstanding property tax after registration. Ask for the receipts, verify them on the MCD or NMMC portal, and get them cleared in escrow at closing.

A note on bank loans: your bank's legal department will check for these — but only for what protects the bank's mortgage. Their due diligence is not the same as your due diligence.`
  },
  {
    id: "ins-003",
    category: "Interior",
    title: "Modular kitchens in NCR: what a ₹3.5 lakh quote actually includes",
    date: "March 2026",
    readTime: "5 min",
    author: "Neha Sharma",
    authorTitle: "Principal Designer — Interior Studio",
    initials: "NS",
    excerpt: "We see a lot of quotes from modular kitchen vendors. Most of them are structured to look competitive while hiding the real cost in accessories, hardware, and installation. Here's how to read them.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=70",
    featured: false,
    body: ""
  },
  {
    id: "ins-004",
    category: "Market",
    title: "Grade A offices on the Noida Expressway: a tenant's guide for 2026",
    date: "February 2026",
    readTime: "7 min",
    author: "Priya Dutt",
    authorTitle: "Head of Commercial",
    initials: "PD",
    excerpt: "Sector 125–135 on the Expressway now has over 14 million sqft of completed Grade A stock. Vacancy has tightened from 28% to 19% in 18 months. Here's what that means for tenants negotiating leases right now.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=70",
    featured: false,
    body: ""
  },
  {
    id: "ins-005",
    category: "Legal",
    title: "RERA resale rules in UP: what changed in 2025 and what it means for buyers",
    date: "January 2026",
    readTime: "5 min",
    author: "Arun Kumar",
    authorTitle: "Head of Legal & Compliance",
    initials: "AK",
    excerpt: "The UP-RERA amendment of October 2025 introduced new disclosure requirements for resale transactions. Most brokers haven't updated their processes. Here's what's now mandatory.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=70",
    featured: false,
    body: ""
  },
  {
    id: "ins-006",
    category: "Buying Guide",
    title: "First home in Noida: a complete checklist for 2026",
    date: "December 2025",
    readTime: "10 min",
    author: "Vikram Kapoor",
    authorTitle: "Founder & Managing Director",
    initials: "VK",
    excerpt: "Written for anyone buying their first property in Delhi-NCR. Covers budget calculation, locality selection, builder vs resale, the loan process, and the documents you'll need — in the order you'll need them.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=70",
    featured: false,
    body: ""
  }
];

function InsightCard({ item, onOpen }) {
  return (
    <article className="insight-card" onClick={() => onOpen(item.id)}>
      <div className="insight-card__img" style={{ backgroundImage: `url(${item.img})` }}>
        <span className="insight-card__cat">{item.category}</span>
      </div>
      <div className="insight-card__body">
        <div className="insight-card__meta">
          <span>{item.date}</span>
          <span>·</span>
          <span>{item.readTime} read</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <div className="insight-card__author">
          <div className="insight-card__avatar">{item.initials}</div>
          <div>
            <div className="insight-card__author-name">{item.author}</div>
            <div className="insight-card__author-title">{item.authorTitle}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function InsightDetail({ item, onBack }) {
  const paragraphs = item.body.split("\n\n").filter(Boolean);
  return (
    <div className="insight-detail">
      <div className="shell">
        <div className="pd__back" onClick={onBack} style={{ marginBottom: 32 }}>
          <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><Icon.arrow/></span> Back to Insights
        </div>
        <div className="insight-detail__hero" style={{ backgroundImage: `url(${item.img})` }}>
          <span className="insight-card__cat">{item.category}</span>
        </div>
        <div className="insight-detail__layout">
          <article className="insight-detail__article">
            <div className="insight-detail__meta">{item.date} · {item.readTime} read</div>
            <h1>{item.title}</h1>
            <div className="insight-detail__author">
              <div className="insight-card__avatar">{item.initials}</div>
              <div>
                <div className="insight-card__author-name">{item.author}</div>
                <div className="insight-card__author-title">{item.authorTitle}</div>
              </div>
            </div>
            <p className="insight-detail__lede">{item.excerpt}</p>
            <div className="insight-detail__body">
              {paragraphs.map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return <h3 key={i}>{para.slice(2, -2)}</h3>;
                }
                const parts = para.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i}>
                    {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                  </p>
                );
              })}
            </div>
          </article>
          <aside className="insight-detail__side">
            <div className="insight-detail__author-card">
              <div className="insight-card__avatar" style={{ width: 52, height: 52, fontSize: 20 }}>{item.initials}</div>
              <div>
                <div className="insight-card__author-name" style={{ fontSize: 15 }}>{item.author}</div>
                <div className="insight-card__author-title">{item.authorTitle}</div>
              </div>
            </div>
            <div className="insight-detail__disclaimer">
              <h5>A note on our insights</h5>
              <p>These articles are written by our own consultants from their direct transaction experience. We don't publish sponsored content, developer PR, or content we wouldn't stand behind in front of a client.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function InsightsPage() {
  const [openId, setOpenId] = useState(null);
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Market", "Legal", "Interior", "Buying Guide"];

  if (openId) {
    const item = INSIGHTS.find(i => i.id === openId);
    if (item && item.body) {
      return <InsightDetail item={item} onBack={() => setOpenId(null)} />;
    }
  }

  const featured = INSIGHTS.filter(i => i.featured);
  const rest = INSIGHTS.filter(i => !i.featured && (filter === "All" || i.category === filter));
  const all = INSIGHTS.filter(i => filter === "All" || i.category === filter);

  return (
    <div className="page-insights">
      <section className="page-hero page-hero--light">
        <div className="shell page-hero__inner">
          <Reveal><span className="eyebrow">— Insights</span></Reveal>
          <Reveal><h1 className="h-section" style={{ color: "var(--navy-deep)", marginTop: 12 }}>Market intelligence from <em>our own</em> transactions.</h1></Reveal>
          <Reveal><p className="lede" style={{ marginTop: 16 }}>Written by our consultants. No sponsored content. No developer PR. Just what we've learned from closing 1,248 deals in Delhi-NCR.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          {/* Category filter */}
          <div className="insights-cats">
            {cats.map((c) => (
              <button key={c} className={"insights-cat" + (filter === c ? " is-active" : "")} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>

          {filter === "All" && (
            <>
              {/* Featured (2-col) */}
              <div className="insights-featured">
                {featured.map((item) => (
                  <article key={item.id} className="insight-featured" onClick={() => setOpenId(item.id)}>
                    <div className="insight-featured__img" style={{ backgroundImage: `url(${item.img})` }}>
                      <span className="insight-card__cat">{item.category}</span>
                    </div>
                    <div className="insight-featured__body">
                      <div className="insight-card__meta">{item.date} · {item.readTime} read</div>
                      <h2>{item.title}</h2>
                      <p>{item.excerpt}</p>
                      <div className="insight-card__author" style={{ marginTop: "auto", paddingTop: 16 }}>
                        <div className="insight-card__avatar">{item.initials}</div>
                        <div>
                          <div className="insight-card__author-name">{item.author}</div>
                          <div className="insight-card__author-title">{item.authorTitle}</div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="insights-divider"><span>More articles</span></div>
              <Reveal stagger className="insights-grid">
                {rest.map((item) => <InsightCard key={item.id} item={item} onOpen={setOpenId} />)}
              </Reveal>
            </>
          )}

          {filter !== "All" && (
            <Reveal stagger className="insights-grid">
              {all.map((item) => <InsightCard key={item.id} item={item} onOpen={setOpenId} />)}
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}


/* ================================================================
   SERVICES PAGE
   ================================================================ */
function ServicesPage({ onContact, onInventory }) {
  const FULL_SERVICES = [
    {
      id: "s1",
      num: "01",
      title: "Buy a Property",
      subtitle: "Residential & Commercial Purchase",
      icon: "🏠",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=70",
      description: "We help you find, evaluate and negotiate the right property — not the one that earns us the highest commission. Every property on our list has been personally verified for clear title, fair pricing and structural soundness before we show it to you.",
      features: [
        "Personal shortlist of 4–6 verified properties (not 40 unverified ones)",
        "Title search, encumbrance certificate and society-dues audit on every listing",
        "Transparent price benchmarks — you see what comparable properties sold for",
        "Negotiation support with every offer documented in writing",
        "Accompaniment at registration; we stay until papers are in your hand",
        "Post-possession support: society induction, utility transfer, possession punch list"
      ],
      cta: "Find a Property"
    },
    {
      id: "s2",
      num: "02",
      title: "Sell a Property",
      subtitle: "Residential & Commercial Sale",
      icon: "💰",
      img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=70",
      description: "We take sell-side mandates only when we believe the property is fairly priced and clear of encumbrance. You get a named consultant, a realistic pricing report, and a buyer pool built from 10+ years of NCR relationships — not a portal listing that disappears after 30 days.",
      features: [
        "Realistic valuation based on recent registrations in your sector, not portal aspirations",
        "Professional video walkthrough for every listing we take",
        "Buyer pool from our active client base — many deals close before public listing",
        "Structured offer process — no verbal commitments, no side deals",
        "One named consultant from mandate to registration",
        "Fee disclosed and agreed before we begin"
      ],
      cta: "List Your Property"
    },
    {
      id: "s3",
      num: "03",
      title: "Rent a Home",
      subtitle: "Residential Rental",
      icon: "🔑",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=70",
      description: "Owner-direct listings reviewed for fair pricing, legal compliance and basic habitability. Our rent agreements are reviewed by our legal panel and are structured to protect both parties — not just to close the deal quickly.",
      features: [
        "Owner-direct listings — no sub-agents, no double-dealing",
        "Video walkthroughs before you spend time on a site visit",
        "Rent agreement template reviewed by our legal panel",
        "Security deposit clause structured for return within 30 days on move-out",
        "Maintenance responsibility split documented clearly in the agreement",
        "We're available if disputes arise — not just at signing"
      ],
      cta: "Find a Rental"
    },
    {
      id: "s4",
      num: "04",
      title: "Lease Commercial Space",
      subtitle: "Office, Retail & Industrial",
      icon: "🏢",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70",
      description: "Grade A offices on the Noida Expressway, retail frontage in Sector 18, and industrial units across Greater Noida — all verified, all directly from owners or their authorised representatives. We understand CAM charges, lock-in structures and fit-out handovers.",
      features: [
        "Grade A, Grade B and shell inventory across Noida Expressway, Sector 62 & 18",
        "CAM charge breakdown provided for every listing before you visit",
        "Lock-in period, escalation clause and exit fee analysis upfront",
        "Fit-out specifications and DG backup percentage on every commercial listing",
        "Support through lease deed drafting and stamp duty calculation",
        "Renewal negotiation support when your term ends"
      ],
      cta: "Find Office Space"
    },
    {
      id: "s5",
      num: "05",
      title: "Interior Design",
      subtitle: "From Bare Shell to Move-In Ready",
      icon: "🛋",
      img: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=1200&q=70",
      description: "Our in-house studio takes the home from bare-shell to lived-in. One fixed quote before we begin, one project manager for the duration, ten-week delivery commitment. We've completed 214+ homes across Delhi-NCR — and we'll show you every one of them before you decide.",
      features: [
        "Fixed quote — agreed and signed before any work begins, no change-order surprises",
        "One dedicated project manager from design to handover",
        "Ten-week delivery commitment (scope-dependent) with milestone updates",
        "In-house modular kitchen and wardrobe design & execution",
        "Curated vendor relationships for flooring, lighting and false ceiling",
        "214+ completed homes across NCR — full portfolio available on request"
      ],
      cta: "Talk to the Studio"
    },
    {
      id: "s6",
      num: "06",
      title: "Investment Advisory",
      subtitle: "Pre-Leased & Capital Growth",
      icon: "📈",
      img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=70",
      description: "For investors evaluating pre-leased commercial assets, under-construction residential, or plots on the Yamuna Expressway — we provide data-led analysis from our own transaction history, not broker optimism. We'll tell you the yield, the exit risk, and what the brochure won't.",
      features: [
        "Pre-leased commercial analysis: yield, lock-in risk, tenant quality, exit liquidity",
        "Under-construction residential: RERA timeline check, builder track record, escrow status",
        "Plot investment: YEIDA vs private developer comparison with registration data",
        "Price-to-rent ratio analysis for your specific sector and budget",
        "Risk factors documented alongside the upside case — not just in fine print",
        "No incentive to recommend one property over another — fixed advisory fee"
      ],
      cta: "Talk to an Advisor"
    }
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="page-services">
      {/* Hero */}
      <section className="page-hero page-hero--navy">
        <div className="shell page-hero__inner">
          <Reveal><span className="eyebrow eyebrow-light">— Our Services</span></Reveal>
          <Reveal><h1 className="h-display">Everything you need, <em>nothing</em> you don't.</h1></Reveal>
          <Reveal><p className="lede lede--light">Six services, one standard. Every engagement starts with a disclosed fee, every outcome is documented in writing. We work for the client — not the commission.</p></Reveal>
          <Reveal>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--gold" onClick={onContact}>Book a Consultation <span className="arrow"><Icon.arrow/></span></button>
              <button className="btn btn--ghost-light" onClick={onInventory}>View Properties <span className="arrow"><Icon.arrow/></span></button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services overview cards */}
      <section className="section">
        <div className="shell">
          <div className="s-head">
            <div className="s-head__left">
              <Reveal><span className="eyebrow">— What we offer</span></Reveal>
              <Reveal><h2 className="h-section">Six services, <em>one</em> standard.</h2></Reveal>
            </div>
            <div className="s-head__right">
              <Reveal><p className="lede">From first property to investment portfolio — we cover the full range of Delhi-NCR real estate needs, always with the same commitment: your interest first, fee disclosed upfront.</p></Reveal>
            </div>
          </div>

          <div className="svc-overview">
            {FULL_SERVICES.map((s, i) => (
              <Reveal key={s.id}>
                <div className={"svc-item" + (active === s.id ? " is-open" : "")}>
                  {/* Left: number + title */}
                  <div className="svc-item__head" onClick={() => setActive(active === s.id ? null : s.id)}>
                    <div className="svc-item__num">{s.num}</div>
                    <div className="svc-item__title-block">
                      <div className="svc-item__icon">{s.icon}</div>
                      <div>
                        <h3 className="svc-item__title">{s.title}</h3>
                        <div className="svc-item__sub">{s.subtitle}</div>
                      </div>
                    </div>
                    <div className="svc-item__toggle">{active === s.id ? "−" : "+"}</div>
                  </div>

                  {/* Expanded content */}
                  {active === s.id && (
                    <div className="svc-item__body">
                      <div className="svc-item__content">
                        <div className="svc-item__img" style={{ backgroundImage: `url(${s.img})` }} />
                        <div className="svc-item__detail">
                          <p className="svc-item__desc">{s.description}</p>
                          <h4 className="svc-item__features-head">What's included</h4>
                          <ul className="svc-item__features">
                            {s.features.map((f, fi) => (
                              <li key={fi}>
                                <span className="svc-item__check">✓</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
                            <button className="btn btn--primary" onClick={onContact}>{s.cta} <span className="arrow"><Icon.arrow/></span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Evoque */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="shell">
          <div className="s-head">
            <div className="s-head__left">
              <Reveal><span className="eyebrow">— Why choose us</span></Reveal>
              <Reveal><h2 className="h-section">What makes Evoque Assets <em>different.</em></h2></Reveal>
            </div>
          </div>
          <Reveal stagger className="svc-why-grid">
            {[
              { icon: "📋", title: "One fee, disclosed before we start", body: "Fixed consultancy fee, set and signed before we show you a single property. No surprises, no post-deal additions." },
              { icon: "✅", title: "Only verified listings", body: "Title-searched, encumbrance-checked and society-dues-audited by our team before any property goes live." },
              { icon: "📝", title: "Every deal in writing", body: "Every offer, counter-offer and concession is documented. You'll never wonder what was agreed." },
              { icon: "🤝", title: "We never double-dip", body: "We do not earn brokerage from both buyer and seller. Our interest is yours — not a commission from both sides." },
              { icon: "🎬", title: "Video before site visit", body: "Every listing gets a full walkthrough video — rooms, fixtures, society areas — before you spend time travelling." },
              { icon: "📍", title: "We stay through handover", body: "Society induction, title transfer, possession punch list — we remain on record until every item is closed." }
            ].map((w, i) => (
              <div key={i} className="svc-why-card">
                <div className="svc-why-card__icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section finalcta">
        <div className="shell finalcta__inner">
          <div>
            <Reveal><span className="eyebrow eyebrow-light">— Ready to begin?</span></Reveal>
            <Reveal><h2>One conversation. <em>No</em> obligation, no pressure.</h2></Reveal>
            <Reveal><p>Tell us what you need. We'll tell you honestly if we're the right fit — and if we're not, we'll point you to who is.</p></Reveal>
            <Reveal>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn--gold" onClick={onContact}>Book a Free Consultation <span className="arrow"><Icon.arrow/></span></button>
                <button className="btn btn--ghost-light" onClick={onInventory}>Browse Properties</button>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="finalcta__pledge">
              <h4>The Evoque Assets standard</h4>
              <ul>
                <li>Fixed fee disclosed before any work begins.</li>
                <li>Only personally verified properties on our books.</li>
                <li>Every negotiation and offer documented in writing.</li>
                <li>We never charge both buyer and seller.</li>
                <li>One named consultant from day one to handover.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage, ContactPage, CareersPage, InsightsPage, ServicesPage });
