/* eslint-disable no-unused-vars */
// Aurum & Co. — Additional pages: About, Contact, Careers, Insights (Blog)

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
          <Reveal><span className="eyebrow eyebrow-light">— About Aurum & Co.</span></Reveal>
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
              <Reveal><p style={{ marginTop: 16, color: "var(--slate)", lineHeight: 1.8 }}>Aurum & Co. opened in a 400 sqft office in Sector 18. The first year was difficult — developers refused to list with us, because we wouldn't take the 3% they were paying other brokers. The second year, clients started returning. The third year, they started referring. By 2016, we had turned down three buyout offers from larger aggregators. We haven't taken one since.</p></Reveal>
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
                  <div><strong>Email</strong><span>hello@aurum.co.in</span></div>
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
                  <div className="pd__map__label">Aurum & Co. · Sector 18, Noida</div>
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
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "buy", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  const OFFICES = [
    { city: "Noida (HQ)", address: "4th Floor, Atrium Plaza, Sector 18, Noida 201301", phone: "+91 120 4567 890", email: "noida@aurum.co.in", hours: "Mon–Sat · 10:00–19:00" },
    { city: "Greater Noida", address: "B-12, Knowledge Park III, Greater Noida 201310", phone: "+91 120 4567 891", email: "gnida@aurum.co.in", hours: "Mon–Sat · 10:00–18:00" }
  ];

  return (
    <div className="page-contact">
      <section className="page-hero page-hero--navy">
        <div className="shell page-hero__inner">
          <Reveal><span className="eyebrow eyebrow-light">— Get in touch</span></Reveal>
          <Reveal><h1 className="h-display">A 30-minute call. <em>No</em> pressure, no spam.</h1></Reveal>
          <Reveal><p className="lede lede--light">Tell us what you're looking for — even if it's just "I'm not sure yet." We'll tell you honestly whether we can help, and if we can't, we'll tell you who can.</p></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon">✓</div>
                  <h2>We'll call you within 2 hours.</h2>
                  <p>Your consultant will reach out on the number you've shared. No mass mailers, no follow-up spam — just a single call from a named person on our team.</p>
                  <button className="btn btn--ghost" style={{ marginTop: 24 }} onClick={() => setSubmitted(false)}>Send another enquiry</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <h2 style={{ fontFamily: "var(--ff-serif)", fontSize: "clamp(24px,3vw,32px)", color: "var(--navy-deep)", marginBottom: 6 }}>Book a consultation</h2>
                  <p style={{ color: "var(--slate)", marginBottom: 28, lineHeight: 1.6 }}>Fill this in and we'll call within 2 working hours. Or call us directly: <a href="tel:+911204567890" style={{ color: "var(--gold-deep)" }}>+91 120 4567 890</a></p>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label>Your name *</label>
                      <input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Anjali Sharma" />
                    </div>
                    <div className="contact-form__field">
                      <label>Phone *</label>
                      <input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98xxx xxxxx" />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label>Email (optional)</label>
                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="anjali@example.com" />
                  </div>

                  <div className="contact-form__field">
                    <label>I'm looking to…</label>
                    <select value={form.service} onChange={(e) => set("service", e.target.value)}>
                      <option value="buy">Buy a property</option>
                      <option value="rent">Rent a property</option>
                      <option value="sell">Sell my property</option>
                      <option value="lease">Lease commercial space</option>
                      <option value="interior">Interior design</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label>Message</label>
                    <textarea rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Budget, locality preference, timeline — anything you want us to know before the call." />
                  </div>

                  <button className="btn btn--primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                    Send enquiry <span className="arrow"><Icon.arrow/></span>
                  </button>

                  <p style={{ fontSize: 12, color: "var(--slate-soft)", marginTop: 12, textAlign: "center", fontFamily: "var(--ff-mono)", letterSpacing: ".1em" }}>
                    WE NEVER SHARE YOUR DETAILS WITH DEVELOPERS OR THIRD PARTIES.
                  </p>
                </form>
              )}
            </div>

            {/* Side info */}
            <div className="contact-side">
              <div className="contact-side__block">
                <h4>Response time</h4>
                <p>We call back within <strong>2 working hours</strong>. For urgent queries, call directly — we pick up.</p>
              </div>

              {OFFICES.map((o) => (
                <div key={o.city} className="contact-side__block">
                  <h4>{o.city}</h4>
                  <div className="contact-side__list">
                    <div><span>Address</span><strong>{o.address}</strong></div>
                    <div><span>Phone</span><a href={`tel:${o.phone.replace(/\s/g,"")}`}>{o.phone}</a></div>
                    <div><span>Email</span><a href={`mailto:${o.email}`}>{o.email}</a></div>
                    <div><span>Hours</span><strong>{o.hours}</strong></div>
                  </div>
                </div>
              ))}

              <div className="contact-side__block">
                <h4>Video calls</h4>
                <p>Available daily <strong>09:00–21:00</strong>. Google Meet or Zoom — your choice. We screen-share the shortlist so you can see everything we see.</p>
              </div>

              <div className="contact-side__pledge">
                <h4>Our pledge to you</h4>
                <ul>
                  <li>One named consultant from first call to handover</li>
                  <li>No spam, no cold follow-up after the call</li>
                  <li>We'll tell you if we're not the right fit</li>
                  <li>Fee disclosed before any property is shown</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="shell">
          <div className="s-head">
            <div className="s-head__left">
              <Reveal><span className="eyebrow">— Before you call</span></Reveal>
              <Reveal><h2 className="h-section">Questions we get <em>every</em> week.</h2></Reveal>
            </div>
          </div>
          <Reveal stagger className="faq-grid">
            {[
              { q: "What is your fee?", a: "A fixed consultancy fee, agreed and documented before we show you any property. The amount depends on the type of transaction — we quote it in the first conversation, not the last." },
              { q: "Do you charge the seller too?", a: "Never. We work for the buyer or tenant exclusively. Charging both sides is structurally a conflict of interest, and we won't do it." },
              { q: "How quickly can I get a shortlist?", a: "For residential: typically 3–5 working days after our first call. For commercial, 5–7 days. We show you four properties, not forty." },
              { q: "Do you cover areas outside Noida?", a: "We cover all of Delhi-NCR: Noida, Greater Noida, Gurgaon (select sectors), Faridabad, and Delhi (select areas). Our core strength is Noida and Greater Noida." },
              { q: "What if I want to sell my property?", a: "We take sell-side mandates on a case-by-case basis. We'll list only if we believe the property is fairly priced and clear of encumbrance. Call us to discuss." },
              { q: "How does the interior design service work?", a: "Our in-house studio takes over at possession. Fixed quote, one project manager, ten-week delivery commitment. The scope is agreed in writing before a single item is ordered." }
            ].map((item, i) => (
              <div key={i} className="faq-item">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ================================================================
   CAREERS PAGE
   ================================================================ */
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
            <Reveal><p>If you're exceptional at what you do and you believe in the way we work, write to us at <a href="mailto:careers@aurum.co.in" style={{ color: "var(--gold-soft)" }}>careers@aurum.co.in</a>. We keep unsolicited applications on file for six months.</p></Reveal>
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

Object.assign(window, { AboutPage, ContactPage, CareersPage, InsightsPage });
