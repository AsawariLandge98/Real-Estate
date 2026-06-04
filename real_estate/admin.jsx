/* eslint-disable no-unused-vars */
// Admin panel — login, dashboard, properties table, add property form, leads inbox.

function AdminLogin({ onLogin, onExit, brandName }) {
  const [email, setEmail] = useState("admin@evoqueassets.com");
  const [pass, setPass] = useState("aurum2026");
  const submit = (e) => { e.preventDefault(); onLogin(); };
  return (
    <div className="admin-login">
      <form className="admin-login__card" onSubmit={submit}>
        <div className="admin-login__brand">
          <div className="brand__mark">A</div>
          <div>
            <div className="brand__name" style={{ color: "#fff" }}>{brandName}</div>
            <div className="brand__sub" style={{ color: "rgba(255,255,255,0.4)" }}>Internal · Admin Console</div>
          </div>
        </div>
        <h1>Sign in</h1>
        <p>Internal access only. All listings are managed by the firm — this is the only way a property gets published.</p>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        <label>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" />
        <button className="btn btn--gold" type="submit" style={{ width: "100%", justifyContent: "center" }}>
          Sign in <span className="arrow"><Icon.arrow/></span>
        </button>
        <div className="admin-login__hint">DEMO · prefilled credentials — just press Sign in</div>
        <div style={{ textAlign: "center", marginTop: 18 }}>
          <a onClick={(e) => { e.preventDefault(); onExit(); }} href="#"
             style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: ".14em", color: "rgba(255,255,255,0.45)" }}>
            ← Back to public site
          </a>
        </div>
      </form>
    </div>
  );
}

function StatusPill({ status }) {
  const labels = { new: "New", contacted: "Contacted", closed: "Closed" };
  return <span className={"admin-pill admin-pill--" + status}>{labels[status]}</span>;
}

function AdminDashboard({ properties, leads, onExit, onAddProperty, onEditProperty, onDeleteProperty, onLeadStatus, brandName }) {
  const [tab, setTab] = useState("properties"); // dashboard | properties | add | leads
  const [editing, setEditing] = useState(null);

  const newLeads = leads.filter((l) => l.status === "new").length;

  return (
    <div className="admin">
      <div className="admin-layout">
        <aside className="admin-side">
          <div className="admin-side__brand">
            <Brand brandName={brandName} />
          </div>
          {[
            { key: "dashboard", label: "Overview" },
            { key: "properties", label: "Properties", count: properties.length },
            { key: "add", label: "Add property" },
            { key: "leads", label: "Leads", count: newLeads || null }
          ].map((t) => (
            <div key={t.key}
                 className={"admin-side__item" + (tab === t.key ? " is-active" : "")}
                 onClick={() => { setTab(t.key); setEditing(null); }}>
              <span>{t.label}</span>
              {t.count != null && <span className="admin-side__count">{t.count}</span>}
            </div>
          ))}
          <div className="admin-side__bottom">
            <div className="admin-side__exit" onClick={onExit}>← Exit to public site</div>
          </div>
        </aside>

        <main className="admin-main">
          {tab === "dashboard" && (
            <AdminOverview properties={properties} leads={leads} onJump={setTab} />
          )}

          {tab === "properties" && (
            <AdminProperties
              properties={properties}
              onAdd={() => setTab("add")}
              onEdit={(p) => { setEditing(p); setTab("add"); }}
              onDelete={onDeleteProperty}
            />
          )}

          {tab === "add" && (
            <AdminPropertyForm
              editing={editing}
              onSave={(p) => {
                if (editing) onEditProperty(editing.id, p);
                else onAddProperty(p);
                setEditing(null);
                setTab("properties");
              }}
              onCancel={() => { setEditing(null); setTab("properties"); }}
            />
          )}

          {tab === "leads" && (
            <AdminLeads leads={leads} onStatus={onLeadStatus} />
          )}
        </main>
      </div>
    </div>
  );
}

function AdminOverview({ properties, leads, onJump }) {
  const newLeads = leads.filter((l) => l.status === "new").length;
  const buyCount = properties.filter((p) => p.purpose === "buy").length;
  const rentCount = properties.filter((p) => p.purpose === "rent").length;
  return (
    <>
      <div className="admin-head">
        <div>
          <h1>Good morning, Aditi.</h1>
          <p>Here's what's moving today — Tuesday, 26 May 2026.</p>
        </div>
      </div>
      <div className="admin-stats">
        <div className="admin-stat" onClick={() => onJump("properties")} style={{ cursor: "pointer" }}>
          <div className="admin-stat__label">Live listings</div>
          <div className="admin-stat__value">{properties.length}</div>
          <div className="admin-stat__delta">{buyCount} buy · {rentCount} rent</div>
        </div>
        <div className="admin-stat" onClick={() => onJump("leads")} style={{ cursor: "pointer" }}>
          <div className="admin-stat__label">New leads</div>
          <div className="admin-stat__value">{newLeads}</div>
          <div className="admin-stat__delta">+ {newLeads} since yesterday</div>
        </div>
        <div className="admin-stat">
          <div className="admin-stat__label">Visits booked (week)</div>
          <div className="admin-stat__value">11</div>
          <div className="admin-stat__delta">3 today, 4 tomorrow</div>
        </div>
        <div className="admin-stat">
          <div className="admin-stat__label">In negotiation</div>
          <div className="admin-stat__value">4</div>
          <div className="admin-stat__delta">₹13.7 Cr aggregate</div>
        </div>
      </div>

      <h2 style={{ fontFamily: "var(--ff-serif)", fontWeight: 500, color: "#fff", margin: "32px 0 16px" }}>
        Recent leads
      </h2>
      <div>
        {leads.slice(0, 4).map((l) => (
          <div key={l.id} className="admin-lead">
            <div>
              <div className="admin-lead__name">{l.name} <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400, fontSize: 13 }}>· {l.interest}</span></div>
              <div className="admin-lead__msg">{l.message}</div>
            </div>
            <div className="admin-lead__meta">{l.time}</div>
            <StatusPill status={l.status} />
          </div>
        ))}
      </div>
    </>
  );
}

function AdminProperties({ properties, onAdd, onEdit, onDelete }) {
  const [q, setQ] = useState("");
  const list = properties.filter((p) =>
    !q || p.title.toLowerCase().includes(q.toLowerCase()) || p.locality.toLowerCase().includes(q.toLowerCase()) || p.id.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <>
      <div className="admin-head">
        <div>
          <h1>Properties</h1>
          <p>All listings on the public site are added and managed here. There is no public submission route.</p>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title, locality, ID…"
            style={{ padding: "10px 14px", background: "#142A48", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, color: "#fff", minWidth: 240, fontSize: 13 }}/>
          <button className="admin-btn" onClick={onAdd}><Icon.plus/> Add property</button>
        </div>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th></th>
            <th>ID · Title</th>
            <th>Locality</th>
            <th>Type</th>
            <th>Purpose</th>
            <th>Price</th>
            <th>Area</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((p) => (
            <tr key={p.id}>
              <td><span className="admin-table__thumb" style={{ backgroundImage: `url(${p.image})` }} /></td>
              <td>
                <div style={{ color: "#fff" }}>{p.title}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontFamily: "var(--ff-mono)", letterSpacing: ".1em", marginTop: 2 }}>{p.id}</div>
              </td>
              <td>{p.locality}</td>
              <td>{p.propertyType}</td>
              <td><span className={"admin-pill admin-pill--" + p.purpose}>{p.purpose === "buy" ? "Buy" : "Rent"}</span></td>
              <td style={{ color: "var(--gold-soft)", fontFamily: "var(--ff-serif)", fontSize: 16 }}>
                {p.priceLabel}<span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--ff-sans)", fontSize: 12 }}>{p.pricePeriod || ""}</span>
              </td>
              <td>{p.area.toLocaleString("en-IN")} {p.areaUnit || "sqft"}</td>
              <td>
                <div className="admin-actions">
                  <button className="admin-icon-btn" title="Edit" onClick={() => onEdit(p)}><Icon.edit/></button>
                  <button className="admin-icon-btn danger" title="Delete" onClick={() => { if (confirm(`Delete ${p.id}?`)) onDelete(p.id); }}><Icon.trash/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function AdminPropertyForm({ editing, onSave, onCancel }) {
  const blank = {
    title: "", locality: "", propertyType: "Apartment", purpose: "buy", category: "residential",
    priceLabel: "", price: 0, area: 0, bhk: 3, description: "", amenities: "", videoUrl: "", image: ""
  };
  const seed = editing ? {
    ...blank,
    title: editing.title, locality: editing.locality, propertyType: editing.propertyType,
    purpose: editing.purpose, category: editing.category,
    priceLabel: editing.priceLabel, price: editing.price, area: editing.area, bhk: editing.bhk || "",
    description: editing.description, amenities: editing.amenities.join(", "), videoUrl: "", image: editing.image
  } : blank;

  const [f, setF] = useState(seed);
  const set = (k, v) => setF((x) => ({ ...x, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    onSave({
      id: editing ? editing.id : `AC-${Math.floor(Math.random() * 9000) + 1000}`,
      title: f.title, locality: f.locality, propertyType: f.propertyType,
      purpose: f.purpose, category: f.category,
      priceLabel: f.priceLabel, price: Number(f.price) || 0,
      pricePeriod: f.purpose === "rent" ? "/ month" : undefined,
      area: Number(f.area) || 0, bhk: f.bhk ? Number(f.bhk) : null,
      description: f.description,
      amenities: f.amenities.split(",").map((s) => s.trim()).filter(Boolean),
      badges: editing ? editing.badges : ["Verified"],
      image: f.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=70",
      gallery: editing ? editing.gallery : [f.image],
      featured: editing ? editing.featured : false,
      floor: editing ? editing.floor : "",
      facing: editing ? editing.facing : "East",
      furnishing: editing ? editing.furnishing : "Semi-furnished",
      parking: editing ? editing.parking : 1,
      age: editing ? editing.age : "New listing"
    });
  };

  return (
    <>
      <div className="admin-head">
        <div>
          <h1>{editing ? "Edit property" : "Add new property"}</h1>
          <p>{editing ? `Updating ${editing.id} — changes go live immediately on the public site.` : "All fields visible to the public unless marked internal."}</p>
        </div>
      </div>
      <form className="admin-form" onSubmit={submit}>
        <div className="admin-form__grid">
          <div className="admin-form__full">
            <label>Listing title</label>
            <input required value={f.title} onChange={(e) => set("title", e.target.value)} placeholder="e.g. Sky Residences — 3BHK Corner Unit" />
          </div>
          <div className="admin-form__full">
            <label>Locality</label>
            <input required value={f.locality} onChange={(e) => set("locality", e.target.value)} placeholder="e.g. Sector 150, Noida" />
          </div>

          <div>
            <label>Purpose</label>
            <select value={f.purpose} onChange={(e) => set("purpose", e.target.value)}>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div>
            <label>Category</label>
            <select value={f.category} onChange={(e) => set("category", e.target.value)}>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div>
            <label>Property type</label>
            <select value={f.propertyType} onChange={(e) => set("propertyType", e.target.value)}>
              <option>Apartment</option><option>Builder Floor</option><option>Penthouse</option>
              <option>Plot</option><option>Office Space</option><option>Retail Showroom</option>
            </select>
          </div>
          <div>
            <label>BHK (residential)</label>
            <select value={f.bhk} onChange={(e) => set("bhk", e.target.value)}>
              <option value="">N/A</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
            </select>
          </div>

          <div>
            <label>Price (₹, in rupees)</label>
            <input required type="number" value={f.price} onChange={(e) => set("price", e.target.value)} placeholder="24000000" />
          </div>
          <div>
            <label>Display price label</label>
            <input required value={f.priceLabel} onChange={(e) => set("priceLabel", e.target.value)} placeholder="₹2.40 Cr" />
          </div>

          <div>
            <label>Area (sqft / sqyd)</label>
            <input required type="number" value={f.area} onChange={(e) => set("area", e.target.value)} placeholder="1850" />
          </div>
          <div>
            <label>Video URL (optional)</label>
            <input value={f.videoUrl} onChange={(e) => set("videoUrl", e.target.value)} placeholder="https://youtube.com/…" />
          </div>

          <div className="admin-form__full">
            <label>Cover image URL</label>
            <input value={f.image} onChange={(e) => set("image", e.target.value)} placeholder="https://…" />
          </div>

          <div className="admin-form__full">
            <label>Amenities (comma-separated)</label>
            <input value={f.amenities} onChange={(e) => set("amenities", e.target.value)} placeholder="Clubhouse, Pool, 24×7 security, EV charging" />
          </div>

          <div className="admin-form__full">
            <label>Description</label>
            <textarea value={f.description} onChange={(e) => set("description", e.target.value)} placeholder="Write honestly — what's right, what's not, why it's fairly priced." />
          </div>

          <div className="admin-form__full">
            <label>Image uploads</label>
            <div className="admin-form__upload">
              <Icon.plus/> &nbsp; Drop photos here, or click to browse <span style={{ display: "block", marginTop: 6, fontSize: 11, fontFamily: "var(--ff-mono)", letterSpacing: ".1em", color: "rgba(255,255,255,0.35)" }}>JPG / PNG / WEBP · up to 8 MB each</span>
            </div>
          </div>
        </div>
        <div className="admin-form__footer">
          <button type="button" className="admin-btn admin-btn--ghost" onClick={onCancel}>Cancel</button>
          <button type="submit" className="admin-btn">{editing ? "Save changes" : "Publish listing"} <Icon.arrow/></button>
        </div>
      </form>
    </>
  );
}

function AdminLeads({ leads, onStatus }) {
  const [filter, setFilter] = useState("all");
  const list = leads.filter((l) => filter === "all" || l.status === filter);
  return (
    <>
      <div className="admin-head">
        <div>
          <h1>Leads & Enquiries</h1>
          <p>Form submissions and consultation requests from the public site.</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { k: "all", l: "All", n: leads.length },
            { k: "new", l: "New", n: leads.filter((x) => x.status === "new").length },
            { k: "contacted", l: "Contacted", n: leads.filter((x) => x.status === "contacted").length },
            { k: "closed", l: "Closed", n: leads.filter((x) => x.status === "closed").length }
          ].map((t) => (
            <button key={t.k} className={"admin-btn " + (filter === t.k ? "" : "admin-btn--ghost")}
              onClick={() => setFilter(t.k)}>{t.l} · {t.n}</button>
          ))}
        </div>
      </div>
      <div>
        {list.map((l) => (
          <div key={l.id} className="admin-lead" style={{ gridTemplateColumns: "1fr auto auto auto" }}>
            <div>
              <div className="admin-lead__name">{l.name} <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400, fontSize: 13 }}>· {l.phone}</span></div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "var(--ff-mono)", letterSpacing: ".08em", marginTop: 2 }}>{l.interest}</div>
              <div className="admin-lead__msg">{l.message}</div>
            </div>
            <div className="admin-lead__meta">{l.time}</div>
            <StatusPill status={l.status} />
            <select value={l.status} onChange={(e) => onStatus(l.id, e.target.value)}
                    style={{ background: "#0E1B2E", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6, padding: "6px 10px", fontSize: 12 }}>
              <option value="new">Mark New</option>
              <option value="contacted">Mark Contacted</option>
              <option value="closed">Mark Closed</option>
            </select>
          </div>
        ))}
        {list.length === 0 && (
          <div style={{ padding: "60px 20px", textAlign: "center", border: "1px dashed rgba(255,255,255,0.15)", borderRadius: 8, color: "rgba(255,255,255,0.5)" }}>
            No leads in this filter.
          </div>
        )}
      </div>
    </>
  );
}

Object.assign(window, { AdminLogin, AdminDashboard });
