/* eslint-disable no-unused-vars */
// Evoque Assets — main app, routing, tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brandName": "Evoque Assets",
  "palette": "navy-gold",
  "headingFont": "Cormorant Garamond",
  "bodyFont": "Inter",
  "heroImage": "skyline",
  "depthEffects": true
}/*EDITMODE-END*/;

const PALETTES = {
  "navy-gold":   { navy: "#1F3A5F", navyDeep: "#142A48", navySoft: "#2C4E7A", gold: "#C9A24B", goldSoft: "#E6CB85", goldDeep: "#A6832F" },
  "forest-bronze": { navy: "#23423A", navyDeep: "#162B25", navySoft: "#345A4E", gold: "#B07B3F", goldSoft: "#D9A878", goldDeep: "#8A5D2A" },
  "charcoal-saffron": { navy: "#2A2724", navyDeep: "#1A1816", navySoft: "#403A35", gold: "#D08A3F", goldSoft: "#EFB67A", goldDeep: "#A26521" },
  "ink-rose":    { navy: "#2A2A40", navyDeep: "#191928", navySoft: "#3A3A55", gold: "#B5495A", goldSoft: "#D78892", goldDeep: "#8A2F40" }
};

const HERO_IMAGES = {
  skyline:   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=75",
  interior:  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=75",
  facade:    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=75",
  penthouse: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=75"
};

// ─── URL routing ──────────────────────────────────────────────────────────
// The app keeps its current "page" in React state but mirrors it to the URL
// via the History API, so /properties, /services, etc. are real, shareable,
// refresh-safe paths. Nginx already falls back to index.html for any path
// (try_files ... /index.html), so a hard refresh on a deep link works.
const ROUTE_TO_PATH = {
  home: "/", services: "/services", inventory: "/properties",
  about: "/about", insights: "/insights", contact: "/contact", admin: "/admin"
};
const PATH_TO_ROUTE = {
  "/": "home", "/services": "services", "/properties": "inventory",
  "/about": "about", "/insights": "insights", "/contact": "contact", "/admin": "admin"
};

function parseLocation() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const detail = path.match(/^\/properties\/(.+)$/);
  if (detail) return { route: "detail", propertyId: decodeURIComponent(detail[1]) };
  return { route: PATH_TO_ROUTE[path] || "home", propertyId: null };
}

function routeToPath(route, propertyId) {
  if (route === "detail" && propertyId) return "/properties/" + encodeURIComponent(propertyId);
  return ROUTE_TO_PATH[route] || "/";
}

function applyTweaks(t) {
  const root = document.documentElement;
  const p = PALETTES[t.palette] || PALETTES["navy-gold"];
  root.style.setProperty("--navy", p.navy);
  root.style.setProperty("--navy-deep", p.navyDeep);
  root.style.setProperty("--navy-soft", p.navySoft);
  root.style.setProperty("--gold", p.gold);
  root.style.setProperty("--gold-soft", p.goldSoft);
  root.style.setProperty("--gold-deep", p.goldDeep);
  root.style.setProperty("--ff-serif", `"${t.headingFont}", Georgia, serif`);
  root.style.setProperty("--ff-sans", `"${t.bodyFont}", system-ui, sans-serif`);
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { applyTweaks(tweaks); }, [tweaks.palette, tweaks.headingFont, tweaks.bodyFont]);

  // Routing state — initialised from the current URL so deep links / refresh work.
  const initialLoc = parseLocation();
  const [route, setRoute] = useState(initialLoc.route);
  const [propertyId, setPropertyId] = useState(initialLoc.propertyId);
  const [adminAuthed, setAdminAuthed] = useState(false);

  // Keep React state in sync when the user presses Back / Forward.
  useEffect(() => {
    const onPop = () => {
      const loc = parseLocation();
      setRoute(loc.route);
      setPropertyId(loc.propertyId);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const [properties, setProperties] = useState(window.AURUM_DATA.PROPERTIES_SEED);
  const [leads, setLeads] = useState(window.AURUM_DATA.LEADS_SEED);
  const [apiLoading, setApiLoading] = useState(true);

  // Backend se properties fetch on mount
  useEffect(() => {
    window.AURUM_API.fetchProperties()
      .then((data) => { if (data.length > 0) setProperties(data); setApiLoading(false); })
      .catch((err) => { console.warn("API unavailable, using seed data:", err.message); setApiLoading(false); });
  }, []);

  const navigate = (r, opts = {}) => {
    const path = routeToPath(r);
    if (window.location.pathname !== path) window.history.pushState({}, "", path);
    setRoute(r);
    if (r === "home" && opts.anchor) {
      setTimeout(() => document.getElementById(opts.anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  };

  const openProperty = (id) => {
    window.history.pushState({}, "", routeToPath("detail", id));
    setPropertyId(id);
    setRoute("detail");
    window.scrollTo({ top: 0 });
  };

  const goContact = () => navigate("contact");

  const property = properties.find((p) => p.id === propertyId);

  const handleAddProperty = (p) => setProperties((arr) => [{ ...p, featured: false }, ...arr]);
  const handleEditProperty = (id, p) => setProperties((arr) => arr.map((x) => x.id === id ? { ...x, ...p } : x));
  const handleDeleteProperty = (id) => setProperties((arr) => arr.filter((x) => x.id !== id));
  const handleLeadStatus = (id, status) => setLeads((arr) => arr.map((l) => l.id === id ? { ...l, status } : l));

  const TweaksUI = (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakText label="Firm name" value={tweaks.brandName} onChange={(v) => setTweak("brandName", v)} />
      </TweakSection>
      <TweakSection title="Palette">
        <TweakRadio label="Color" value={tweaks.palette} onChange={(v) => setTweak("palette", v)}
          options={[
            { value: "navy-gold", label: "Navy · Gold" },
            { value: "forest-bronze", label: "Forest · Bronze" },
            { value: "charcoal-saffron", label: "Charcoal · Saffron" },
            { value: "ink-rose", label: "Ink · Rose" }
          ]}
        />
      </TweakSection>
      <TweakSection title="Typography">
        <TweakSelect label="Heading font" value={tweaks.headingFont} onChange={(v) => setTweak("headingFont", v)}
          options={[
            { value: "Cormorant Garamond", label: "Cormorant Garamond" },
            { value: "Fraunces", label: "Fraunces" },
            { value: "DM Serif Display", label: "DM Serif Display" },
            { value: "Manrope", label: "Manrope" }
          ]}
        />
        <TweakSelect label="Body font" value={tweaks.bodyFont} onChange={(v) => setTweak("bodyFont", v)}
          options={[
            { value: "Inter", label: "Inter" },
            { value: "DM Sans", label: "DM Sans" },
            { value: "Manrope", label: "Manrope" },
            { value: "IBM Plex Sans", label: "IBM Plex Sans" }
          ]}
        />
      </TweakSection>
      <TweakSection title="Hero">
        <TweakRadio label="Image" value={tweaks.heroImage} onChange={(v) => setTweak("heroImage", v)}
          options={[
            { value: "skyline", label: "Skyline" },
            { value: "interior", label: "Interior" },
            { value: "facade", label: "Facade" },
            { value: "penthouse", label: "Penthouse" }
          ]}
        />
      </TweakSection>
      <TweakSection title="3D storytelling">
        <TweakToggle label="Depth effects" value={tweaks.depthEffects} onChange={(v) => setTweak("depthEffects", v)} />
      </TweakSection>
      <TweakSection title="Quick navigation">
        <TweakButton label="View · Home" onClick={() => navigate("home")} />
        <TweakButton label="View · Services" onClick={() => navigate("services")} />
        <TweakButton label="View · Inventory" onClick={() => navigate("inventory")} />
        <TweakButton label="View · Property detail" onClick={() => openProperty("AC-1042")} />
        <TweakButton label="View · About" onClick={() => navigate("about")} />
        <TweakButton label="View · Contact" onClick={() => navigate("contact")} />
        <TweakButton label="View · Insights" onClick={() => navigate("insights")} />
        <TweakButton label="View · Admin panel" onClick={() => navigate("admin")} />
      </TweakSection>
    </TweaksPanel>
  );

  if (route === "admin") {
    return (
      <>
        {adminAuthed
          ? <AdminDashboard
              properties={properties} leads={leads}
              onExit={() => { navigate("home"); setAdminAuthed(false); }}
              onAddProperty={handleAddProperty} onEditProperty={handleEditProperty}
              onDeleteProperty={handleDeleteProperty} onLeadStatus={handleLeadStatus}
              brandName={tweaks.brandName}
            />
          : <AdminLogin onLogin={() => setAdminAuthed(true)} onExit={() => navigate("home")} brandName={tweaks.brandName} />}
        {TweaksUI}
      </>
    );
  }

  return (
    <>
      <Header route={route} onNavigate={navigate} brandName={tweaks.brandName} />

      {route === "home" && (
        <>
          <Hero onBrowse={() => navigate("inventory")} onContact={goContact}
            brandName={tweaks.brandName} heroImg={HERO_IMAGES[tweaks.heroImage] || HERO_IMAGES.skyline}
            depthOn={tweaks.depthEffects}
          />
          <TrustBand />
          <Services onContact={goContact} />
          <Process />
          <Storytelling enabled={tweaks.depthEffects} />
          <Featured properties={properties} onOpen={openProperty} onAll={() => navigate("inventory")} tiltOn={tweaks.depthEffects} />
          <InteriorStudio interiors={window.AURUM_DATA.INTERIORS} onContact={goContact} />
          <YoutubeVideos />
          <Testimonials items={window.AURUM_DATA.TESTIMONIALS} />
          <FinalCta onContact={goContact} />
        </>
      )}

      {route === "services" && <ServicesPage onContact={goContact} onInventory={() => navigate("inventory")} />}
      {route === "inventory" && <Inventory properties={properties} onOpen={openProperty} onContact={goContact} />}
      {route === "detail" && property && <PropertyDetail property={property} onBack={() => navigate("inventory")} onContact={goContact} />}
      {route === "about" && <AboutPage onContact={goContact} />}
      {route === "contact" && <ContactPage />}
      {route === "insights" && <InsightsPage />}

      <Footer brandName={tweaks.brandName} onNavigate={navigate} />
      {TweaksUI}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
