/* eslint-disable no-unused-vars */
// Inventory page (with filters) and Property Detail page.

function Inventory({ properties, onOpen, onContact }) {
  const [filters, setFilters] = useState({
    purpose: "all",
    category: "all",
    propertyType: "all",
    bhk: "all",
    locality: "all",
    budget: "all",
    sort: "default"
  });

  const types = useMemo(() => Array.from(new Set(properties.map(p => p.propertyType))), [properties]);
  const localities = useMemo(() => Array.from(new Set(properties.map(p => p.locality.split(",")[1]?.trim() || p.locality))), [properties]);

  const filtered = useMemo(() => {
    let r = properties.filter((p) => {
      if (filters.purpose !== "all" && p.purpose !== filters.purpose) return false;
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (filters.propertyType !== "all" && p.propertyType !== filters.propertyType) return false;
      if (filters.bhk !== "all" && String(p.bhk || "n/a") !== filters.bhk) return false;
      if (filters.locality !== "all" && !p.locality.includes(filters.locality)) return false;
      if (filters.budget !== "all") {
        const isMonthly = p.purpose === "rent";
        const price = p.price;
        if (filters.budget === "u50L" && (isMonthly || price >= 5000000)) return false;
        if (filters.budget === "50-200L" && (isMonthly || price < 5000000 || price >= 20000000)) return false;
        if (filters.budget === "2-5Cr" && (isMonthly || price < 20000000 || price >= 50000000)) return false;
        if (filters.budget === "5Cr+" && (isMonthly || price < 50000000)) return false;
        if (filters.budget === "rentU60k" && (!isMonthly || price >= 60000)) return false;
        if (filters.budget === "rent60-150k" && (!isMonthly || price < 60000 || price >= 150000)) return false;
      }
      return true;
    });
    if (filters.sort === "price-asc") r = [...r].sort((a, b) => a.price - b.price);
    if (filters.sort === "price-desc") r = [...r].sort((a, b) => b.price - a.price);
    if (filters.sort === "area-desc") r = [...r].sort((a, b) => (b.area || 0) - (a.area || 0));
    return r;
  }, [properties, filters]);

  const reset = () => setFilters({ purpose: "all", category: "all", propertyType: "all", bhk: "all", locality: "all", budget: "all", sort: "default" });
  const set = (k, v) => setFilters((f) => ({ ...f, [k]: v }));

  return (
    <section className="inv">
      <div className="shell">
        <div className="inv__head">
          <Reveal><span className="eyebrow">— Inventory</span></Reveal>
          <Reveal><h1 className="h-section" style={{ marginTop: 14 }}>Every property, <em>fully</em> filterable.</h1></Reveal>
          <Reveal><p className="lede" style={{ marginTop: 16 }}>Eight listings across Delhi-NCR right now. Every entry is verified by our team — title, dues, structural and price benchmark — before it goes live.</p></Reveal>
        </div>

        <div className="inv__filters">
          <div>
            <label>Purpose</label>
            <select value={filters.purpose} onChange={(e) => set("purpose", e.target.value)}>
              <option value="all">All</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div>
            <label>Category</label>
            <select value={filters.category} onChange={(e) => set("category", e.target.value)}>
              <option value="all">All</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div>
            <label>Type</label>
            <select value={filters.propertyType} onChange={(e) => set("propertyType", e.target.value)}>
              <option value="all">All types</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label>BHK</label>
            <select value={filters.bhk} onChange={(e) => set("bhk", e.target.value)}>
              <option value="all">Any</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>
          </div>
          <div>
            <label>Locality</label>
            <select value={filters.locality} onChange={(e) => set("locality", e.target.value)}>
              <option value="all">All NCR</option>
              {localities.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label>Budget</label>
            <select value={filters.budget} onChange={(e) => set("budget", e.target.value)}>
              <option value="all">Any</option>
              <optgroup label="Buy">
                <option value="u50L">Under ₹50 L</option>
                <option value="50-200L">₹50 L – ₹2 Cr</option>
                <option value="2-5Cr">₹2 – 5 Cr</option>
                <option value="5Cr+">₹5 Cr +</option>
              </optgroup>
              <optgroup label="Rent (monthly)">
                <option value="rentU60k">Under ₹60 K</option>
                <option value="rent60-150k">₹60 K – ₹1.5 L</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className="inv__meta">
          <div>Showing <strong>{filtered.length}</strong> of {properties.length} listings</div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <select className="inv-sort" style={{ background: "transparent", border: 0, fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--slate)" }}
              value={filters.sort} onChange={(e) => set("sort", e.target.value)}>
              <option value="default">Sort · Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Largest first</option>
            </select>
            <button className="btn btn--ghost btn--sm" onClick={reset}>Reset</button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="inv__empty">
            <h3>Nothing matches just yet.</h3>
            <p className="muted" style={{ marginBottom: 20 }}>Try widening one of the filters — or talk to a consultant; we may have something off-market.</p>
            <button className="btn btn--primary" onClick={onContact}>Talk to a Consultant <span className="arrow"><Icon.arrow/></span></button>
          </div>
        ) : (
          <div className="props__grid">
            {filtered.map((p) => (
              <PropertyCard key={p.id} p={p} onClick={() => onOpen(p.id)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Property Detail ---------- */
function PropertyDetail({ property, onBack, onContact }) {
  const p = property;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: `I'd like to visit ${p.title} (${p.id}). Please call me to set a time.` });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const gallery = (p.gallery && p.gallery.length ? p.gallery : [p.image]).slice(0, 5);
  while (gallery.length < 5) gallery.push(gallery[gallery.length - 1]);

  const consultant = p.consultant || { initials: "AM", name: "Aditi Malhotra", title: "Lead Consultant" };

  return (
    <section className="pd">
      <div className="shell">
        <div className="pd__back" onClick={onBack}>
          <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><Icon.arrow/></span> Back to inventory
        </div>

        <div className="pd__gallery">
          <div style={{ backgroundImage: `url(${gallery[0]})` }} />
          <div style={{ backgroundImage: `url(${gallery[1]})` }} />
          <div style={{ backgroundImage: `url(${gallery[2]})` }} />
          <div style={{ backgroundImage: `url(${gallery[3]})` }} />
          <div style={{ backgroundImage: `url(${gallery[4]})` }}>
            <div className="pd__gallery__count">
              <Icon.cam/> {gallery.length} photos · 1 walkthrough
            </div>
          </div>
        </div>

        <div className="pd__layout">
          <div className="pd__main">
            <div style={{ fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--slate-soft)", marginBottom: 14 }}>
              Listing {p.id} · Updated 2 days ago
            </div>
            <h1>{p.title}</h1>
            <div className="pd__locality"><Icon.pin/> {p.locality}</div>
            <div className="pd__price">
              {p.priceLabel}{p.pricePeriod && <small>{p.pricePeriod}</small>}
            </div>
            <div className="pd__badges">
              <span className={"badge " + (p.purpose === "buy" ? "badge--gold" : "badge--navy")}>
                {p.purpose === "buy" ? "For Sale" : "For Rent"}
              </span>
              <span className="badge">{p.category === "residential" ? "Residential" : "Commercial"}</span>
              {p.badges.map((b) => <span key={b} className="badge">{b}</span>)}
            </div>

            <div className="pd__specs">
              {p.bhk != null && <div><div className="pd__specs__label">Bedrooms</div><div className="pd__specs__value">{p.bhk} BHK</div></div>}
              <div><div className="pd__specs__label">{p.areaUnit === "sq yd" ? "Plot size" : "Built-up"}</div><div className="pd__specs__value">{p.area.toLocaleString("en-IN")} <span style={{ fontSize: 13, color: "var(--slate-soft)", fontFamily: "var(--ff-sans)" }}>{p.areaUnit || "sqft"}</span></div></div>
              {p.floor && <div><div className="pd__specs__label">Floor</div><div className="pd__specs__value">{p.floor}</div></div>}
              <div><div className="pd__specs__label">Facing</div><div className="pd__specs__value">{p.facing}</div></div>
            </div>

            <div className="pd__section">
              <h3>About this property</h3>
              <p className="pd__desc">{p.description}</p>
            </div>

            <div className="pd__section">
              <h3>Amenities & inclusions</h3>
              <ul className="amenities">
                {p.amenities.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>

            <div className="pd__section">
              <h3>Video walkthrough</h3>
              <div className="pd__video" style={{ backgroundImage: `url(${p.image})` }}>
                <div className="pd__video__play"><div><Icon.play style={{ color: "var(--navy-deep)", marginLeft: 4 }}/></div></div>
              </div>
            </div>

            <div className="pd__section" style={{ marginBottom: 12 }}>
              <h3>Location</h3>
              <div className="pd__map">
                <div className="pd__map__pin" />
                <div className="pd__map__label">{p.locality}</div>
              </div>
              <p className="muted" style={{ fontSize: 13, marginTop: 12 }}>
                Approximate location. Exact address shared with serious buyers after a brief consultation.
              </p>
            </div>
          </div>

          <aside className="pd__side">
            <div className="pd__consultant">
              <div className="pd__consultant__avatar">{consultant.initials}</div>
              <div>
                <div className="pd__consultant__name">{consultant.name}</div>
                <div className="pd__consultant__title">{consultant.title}</div>
              </div>
            </div>

            {submitted ? (
              <div className="pd__form-success">
                <strong>Enquiry received.</strong>
                <p>{consultant.name.split(" ")[0]} will call you within 2 working hours. No mass mailers, no spam — promise.</p>
                <button className="btn btn--ghost btn--sm" style={{ marginTop: 16 }} onClick={() => setSubmitted(false)}>Send another</button>
              </div>
            ) : (
              <form className="pd__form" onSubmit={submit}>
                <div style={{ fontFamily: "var(--ff-serif)", fontSize: 22, color: "var(--navy-deep)", fontWeight: 500, marginBottom: 6 }}>
                  Request a visit
                </div>
                <div style={{ fontSize: 13, color: "var(--slate)", marginBottom: 12, lineHeight: 1.5 }}>
                  We'll call within 2 working hours. No mass mailers.
                </div>
                <div>
                  <label>Your name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Anjali Sharma" />
                </div>
                <div>
                  <label>Phone</label>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98xxx xxxxx" />
                </div>
                <div>
                  <label>Email (optional)</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="anjali@example.com" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button className="btn btn--primary" type="submit">Request a callback <span className="arrow"><Icon.arrow/></span></button>
                <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--slate-soft)", marginTop: 8, textAlign: "center" }}>
                  Or call directly · +91 120 4567 890
                </div>
              </form>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Inventory, PropertyDetail });
