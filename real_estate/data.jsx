/* eslint-disable no-unused-vars */
// Evoque Assets — data.jsx
// Properties & Inquiries ab Django backend API se aate hain.
// Static data (INTERIORS, VIDEOS, TESTIMONIALS, NAV_ITEMS) waise hi rehta hai.

// ─── API CONFIG ────────────────────────────────────────────────────────────────
const API_BASE = "http://127.0.0.1:8000/admin-panel";

// API se property data ko frontend format mein convert karta hai
function mapProperty(p) {
  return {
    id:           p.property_id,
    title:        p.title,
    locality:     p.locality,
    price:        parseFloat(p.price),
    priceLabel:   p.price_label || `₹${Number(p.price).toLocaleString("en-IN")}`,
    pricePeriod:  p.price_period || "",
    purpose:      p.purpose,
    category:     p.category,
    propertyType: p.property_type,
    bhk:          p.bhk || null,
    area:         p.area || null,
    floor:        p.floor || "",
    facing:       p.facing || "",
    furnishing:   p.furnishing || "",
    parking:      p.parking || 0,
    age:          p.age || "",
    image:        p.image || "",
    gallery:      Array.isArray(p.gallery) ? p.gallery : [],
    badges:       Array.isArray(p.badges) ? p.badges : [],
    featured:     p.featured || false,
    amenities:    Array.isArray(p.amenities) ? p.amenities : [],
    description:  p.description || "",
    status:       p.status || "active",
    consultant: p.consultant_name ? {
      initials: p.consultant_initials || p.consultant_name[0],
      name:     p.consultant_name,
      title:    p.consultant_title || ""
    } : null,
  };
}

// Properties fetch karne ka function
async function fetchProperties(params = {}) {
  const qs = new URLSearchParams(params).toString();
  const url = `${API_BASE}/api/properties/${qs ? "?" + qs : ""}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("API error: " + res.status);
  const data = await res.json();
  const list = Array.isArray(data) ? data : (data.results || []);
  return list.map(mapProperty);
}

// Inquiry submit karne ka function
async function submitInquiry(formData) {
  const res = await fetch(`${API_BASE}/api/inquiries/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name:         formData.name || "",
      email:        formData.email || "",
      phone:        formData.phone || "",
      message:      formData.message || "",
      property_ref: formData.property_ref || "",
      source:       "website",
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(JSON.stringify(err));
  }
  return res.json();
}

// ─── STATIC DATA ───────────────────────────────────────────────────────────────

const INTERIORS = [
  { id: "IN-01", title: "Modern Vedic — 4BHK", scope: "Full home", img: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=900&q=70" },
  { id: "IN-02", title: "The Reading Apartment", scope: "Living + library", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=70" },
  { id: "IN-03", title: "Tranquil Greys", scope: "Bedroom suite", img: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=900&q=70" },
  { id: "IN-04", title: "The Quiet Kitchen", scope: "Kitchen", img: "https://images.unsplash.com/photo-1556909114-44e3e9699a2f?auto=format&fit=crop&w=900&q=70" }
];

const VIDEOS = [
  { id: "VD-01", title: "Sky Residences — 3BHK Walkthrough", locality: "Sector 150, Noida", duration: "4:12", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=70" },
  { id: "VD-02", title: "The Aravalli Penthouse — Terrace Tour", locality: "Greater Noida", duration: "6:48", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=70" },
  { id: "VD-03", title: "Atrium Plaza Showroom — Frontage", locality: "Sector 18, Noida", duration: "2:54", img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=70" },
  { id: "VD-04", title: "DLF Builder Floor — Room by Room", locality: "DLF Phase 4, Gurgaon", duration: "5:21", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=70" }
];

const TESTIMONIALS = [
  {
    quote: "We saw 14 apartments with two other brokers before walking into Aurum. They shortlisted four, sent honest write-ups on each, and told us upfront which two had society dues pending. We closed in six weeks — and we still have the negotiation note in writing.",
    name: "Anjali & Vivek Sharma", locality: "Bought in Sector 150, Noida", service: "Buy — Residential", initials: "AS"
  },
  {
    quote: "I was relocating from Bangalore and needed a furnished 2BHK before I'd even seen the city. They sent five video walkthroughs in 48 hours, did the final visit on my behalf, and the rent agreement landed in my inbox the day I flew in.",
    name: "Pritha Banerjee", locality: "Rented in Sector 78, Noida", service: "Rent — Residential", initials: "PB"
  },
  {
    quote: "Our office fit-out was ten weeks end-to-end. They negotiated 4 months rent-free, handled the interior brief with their studio, and the only invoice I ever signed was the one we'd agreed at the start.",
    name: "Karan Singhania", locality: "Leased in Sector 62, Noida", service: "Rent + Interiors", initials: "KS"
  }
];

const NAV_ITEMS = ["Home", "Services", "Properties", "Inventory", "Videos", "About", "Contact"];

// Fallback seed data (agar API down ho to ye use hoga)
const PROPERTIES_SEED = [];
const LEADS_SEED = [];

window.AURUM_DATA = { PROPERTIES_SEED, INTERIORS, VIDEOS, TESTIMONIALS, LEADS_SEED, NAV_ITEMS };
window.AURUM_API  = { fetchProperties, submitInquiry, API_BASE };
