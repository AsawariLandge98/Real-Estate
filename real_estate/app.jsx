/* eslint-disable no-unused-vars */
// Aurum & Co. — main app, routing, tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brandName": "Aurum & Co.",
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

  // Routing state: home | inventory | detail | admin | about | contact | careers | insights
  const [route, setRoute] = useState("home");
  const [propertyId, setPropertyId] = useState(null);
  const [adminAuthed, setAdminAuthed] = useState(false);

  // Mutable property + lead state
  const [properties, setProperties] = useState(window.AURUM_DATA.PROPERTIES_SEED);
  const [leads, setLeads] = useState(window.AURUM_DATA.LEADS_SEED);

  const navigate = (r, opts = {}) => {
    setRoute(r);
    if (r === "home" && opts.anchor) {
      setTimeout(() => document.getElementById(opts.anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  };

  const openProperty = (id) => {
    setPropertyId(id);
    setRoute("detail");
    window.scrollTo({ top: 0 });
  };

  const goContact = () => {
    navigate("contact");
  };

  const property = properties.find((p) => p.id === propertyId);

  /* ----- Admin handlers ----- */
  const handleAddProperty = (p) => setProperties((arr) => [{ ...p, featured: false }, ...arr]);
  const handleEditProperty = (id, p) => setProperties((arr) => arr.map((x) => x.id === id ? { ...x, ...p } : x));
  const handleDeleteProperty = (id) => setProperties((arr) => arr.filter((x) => x.id !== id));
  const handleLeadStatus = (id, status) => setLeads((arr) => arr.map((l) => l.id === id ? { ...l, status } : l));

  /* ----- Tweaks UI ----- */
  const TweaksUI = (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakText label="Firm name" value={tweaks.brandName} onChange={(v) => setTweak("brandName", v)} />
      </TweakSection>

      <TweakSection title="Palette">
        <TweakRadio
          label="Color"
          value={tweaks.palette}
          onChange={(v) => setTweak("palette", v)}
          options={[
            { value: "navy-gold", label: "Navy · Gold" },
            { value: "forest-bronze", label: "Forest · Bronze" },
            { value: "charcoal-saffron", label: "Charcoal · Saffron" },
            { value: "ink-rose", label: "Ink · Rose" }
          ]}
        />
      </TweakSection>

      <TweakSection title="Typography">
        <TweakSelect
          label="Heading font"
          value={tweaks.headingFont}
          onChange={(v) => setTweak("headingFont", v)}
          options={[
            { value: "Cormorant Garamond", label: "Cormorant Garamond (editorial)" },
            { value: "Fraunces", label: "Fraunces (warm)" },
            { value: "DM Serif Display", label: "DM Serif Display (bold)" },
            { value: "Manrope", label: "Manrope (geometric sans)" }
          ]}
        />
        <TweakSelect
          label="Body font"
          value={tweaks.bodyFont}
          onChange={(v) => setTweak("bodyFont", v)}
          options={[
            { value: "Inter", label: "Inter" },
            { value: "DM Sans", label: "DM Sans" },
            { value: "Manrope", label: "Manrope" },
            { value: "IBM Plex Sans", label: "IBM Plex Sans" }
          ]}
        />
      </TweakSection>

      <TweakSection title="Hero">
        <TweakRadio
          label="Image"
          value={tweaks.heroImage}
          onChange={(v) => setTweak("heroImage", v)}
          options={[
            { value: "skyline", label: "Skyline" },
            { value: "interior", label: "Interior" },
            { value: "facade", label: "Facade" },
            { value: "penthouse", label: "Penthouse" }
          ]}
        />
      </TweakSection>

      <TweakSection title="3D storytelling">
        <TweakToggle
          label="Depth effects"
          value={tweaks.depthEffects}
          onChange={(v) => setTweak("depthEffects", v)}
        />
      </TweakSection>

      <TweakSection title="Quick navigation">
        <TweakButton label="View · Home" onClick={() => { setRoute("home"); window.scrollTo({ top: 0 }); }} />
        <TweakButton label="View · Inventory" onClick={() => { setRoute("inventory"); window.scrollTo({ top: 0 }); }} />
        <TweakButton label="View · Property detail" onClick={() => { setPropertyId("AC-1042"); setRoute("detail"); window.scrollTo({ top: 0 }); }} />
        <TweakButton label="View · About" onClick={() => { setRoute("about"); window.scrollTo({ top: 0 }); }} />
        <TweakButton label="View · Contact" onClick={() => { setRoute("contact"); window.scrollTo({ top: 0 }); }} />
        <TweakButton label="View · Careers" onClick={() => { setRoute("careers"); window.scrollTo({ top: 0 }); }} />
        <TweakButton label="View · Insights" onClick={() => { setRoute("insights"); window.scrollTo({ top: 0 }); }} />
        <TweakButton label="View · Admin panel" onClick={() => { setRoute("admin"); window.scrollTo({ top: 0 }); }} />
      </TweakSection>
    </TweaksPanel>
  );

  /* ----- Routes ----- */
  if (route === "admin") {
    return (
      <>
        {adminAuthed
          ? <AdminDashboard
              properties={properties}
              leads={leads}
              onExit={() => { setRoute("home"); setAdminAuthed(false); window.scrollTo({ top: 0 }); }}
              onAddProperty={handleAddProperty}
              onEditProperty={handleEditProperty}
              onDeleteProperty={handleDeleteProperty}
              onLeadStatus={handleLeadStatus}
              brandName={tweaks.brandName}
            />
          : <AdminLogin
              onLogin={() => setAdminAuthed(true)}
              onExit={() => setRoute("home")}
              brandName={tweaks.brandName}
            />}
        {TweaksUI}
      </>
    );
  }

  return (
    <>
      <Header route={route} onNavigate={navigate} brandName={tweaks.brandName} />

      {route === "home" && (
        <>
          <Hero
            onBrowse={() => navigate("inventory")}
            onContact={goContact}
            brandName={tweaks.brandName}
            heroImg={HERO_IMAGES[tweaks.heroImage] || HERO_IMAGES.skyline}
            depthOn={tweaks.depthEffects}
          />
          <TrustBand />
          <Services onContact={goContact} />
          <Process />
          <Storytelling enabled={tweaks.depthEffects} />
          <Featured properties={properties} onOpen={openProperty} onAll={() => navigate("inventory")} tiltOn={tweaks.depthEffects} />
          <InteriorStudio interiors={window.AURUM_DATA.INTERIORS} onContact={goContact} />
          <Videos videos={window.AURUM_DATA.VIDEOS} />
          <Testimonials items={window.AURUM_DATA.TESTIMONIALS} />
          <FinalCta onContact={goContact} />
        </>
      )}

      {route === "inventory" && (
        <Inventory properties={properties} onOpen={openProperty} onContact={goContact} />
      )}

      {route === "detail" && property && (
        <PropertyDetail
          property={property}
          onBack={() => navigate("inventory")}
          onContact={goContact}
        />
      )}

      {route === "about" && (
        <AboutPage onContact={goContact} />
      )}

      {route === "contact" && (
        <ContactPage />
      )}

      {route === "careers" && (
        <CareersPage onContact={goContact} />
      )}

      {route === "insights" && (
        <InsightsPage />
      )}

      <Footer brandName={tweaks.brandName} onNavigate={navigate} />
      {TweaksUI}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
