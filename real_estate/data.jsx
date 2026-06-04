/* eslint-disable no-unused-vars */
// Evoque Assets mock data — Delhi-NCR listings, testimonials, videos, leads.

const PROPERTIES_SEED = [
  {
    id: "AC-1042",
    title: "Sky Residences — 3BHK Corner Unit",
    locality: "Sector 150, Noida",
    price: 24000000,        // 2.4 Cr
    priceLabel: "₹2.40 Cr",
    purpose: "buy",          // buy | rent
    category: "residential", // residential | commercial
    propertyType: "Apartment",
    bhk: 3,
    area: 1850,
    floor: "21 / 32",
    facing: "East",
    furnishing: "Semi-furnished",
    parking: 2,
    age: "1 year",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["Verified", "Ready to Move"],
    featured: true,
    amenities: ["Clubhouse & Pool", "Power backup 100%", "Two reserved car parks", "Fire safety certified", "Children's play area", "24×7 security", "Landscaped lawns", "Yoga & meditation deck", "EV charging point"],
    description: "A top-floor corner apartment in Sector 150's quietest tower, with double-aspect windows facing the green belt to the east. Cross-ventilated, recently painted, and held by the original owner since possession. The society has cleared all maintenance dues and the title is freehold — papers reviewed by our legal panel.",
    consultant: { initials: "RM", name: "Rohan Mehta", title: "Senior Consultant — Residential" }
  },
  {
    id: "AC-2017",
    title: "The Iconic — Grade A Office Floor",
    locality: "Sector 62, Noida",
    price: 85000,
    priceLabel: "₹85,000",
    pricePeriod: "/ month",
    purpose: "rent",
    category: "commercial",
    propertyType: "Office Space",
    bhk: null,
    area: 1200,
    floor: "8 / 14",
    facing: "South-West",
    furnishing: "Fully fitted",
    parking: 4,
    age: "3 years",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1604328471151-b52226907017?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["Fitted", "Metro 4 min"],
    featured: true,
    amenities: ["Open plan + 2 cabins", "12 workstations included", "Conference room", "Pantry", "Reception desk", "Reserved parking ×4", "100% DG backup", "Centralised HVAC", "Fibre internet ready"],
    description: "An eighth-floor corner suite in a Grade A tower, four minutes from Sector 62 Metro. Fitted by the previous tenant: workstations, two cabins and a six-seater conference room stay. Lock-in 11 months, escalation 8%. Owner-direct — no brokerage to the firm; our fee is paid by the lessor and disclosed in writing."
  },
  {
    id: "AC-3304",
    title: "The Aravalli Penthouse",
    locality: "Jaypee Greens, Greater Noida",
    price: 48000000,
    priceLabel: "₹4.80 Cr",
    purpose: "buy",
    category: "residential",
    propertyType: "Penthouse",
    bhk: 4,
    area: 3200,
    floor: "Top / 26",
    facing: "North-East",
    furnishing: "Unfurnished",
    parking: 3,
    age: "5 years",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["Verified", "Golf Course View"],
    featured: true,
    amenities: ["Private terrace (900 sqft)", "Servant quarter", "Three reserved parks", "Golf course view", "Concierge", "Two clubhouses", "Power backup 100%", "Italian marble flooring", "Modular kitchen"],
    description: "A four-bedroom duplex penthouse with a 900 sqft private terrace overlooking the 18th green. Two owners since possession; second owner held for six years. Society dues clear, no encumbrance — we negotiated the asking price down 9% from listing on the previous buyer, and re-negotiated for the current sale."
  },
  {
    id: "AC-4112",
    title: "Maple Heights — 2BHK Park-facing",
    locality: "Sector 78, Noida",
    price: 45000,
    priceLabel: "₹45,000",
    pricePeriod: "/ month",
    purpose: "rent",
    category: "residential",
    propertyType: "Apartment",
    bhk: 2,
    area: 1150,
    floor: "6 / 22",
    facing: "East",
    furnishing: "Furnished",
    parking: 1,
    age: "4 years",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["Furnished", "Family Only"],
    featured: true,
    amenities: ["AC ×3", "Refrigerator + microwave", "Wardrobes in all rooms", "Modular kitchen", "Power backup", "Clubhouse access", "Pool & gym", "Reserved parking", "24×7 security"],
    description: "A fully furnished two-bedroom park-facing apartment in Maple Heights. Owner is relocating to Bengaluru for a 3-year posting and prefers a family tenant; rent is 8% below comparable furnished units in the same tower because the owner wants stability over yield."
  },
  {
    id: "AC-5208",
    title: "Atrium Plaza — Ground Floor Showroom",
    locality: "Sector 18, Noida",
    price: 65000000,
    priceLabel: "₹6.50 Cr",
    purpose: "buy",
    category: "commercial",
    propertyType: "Retail Showroom",
    bhk: null,
    area: 1800,
    floor: "Ground",
    facing: "Main road",
    furnishing: "Bare shell",
    parking: 6,
    age: "8 years",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1604335398980-ededdd2bf5b8?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["High Street", "Tenanted"],
    featured: false,
    amenities: ["18ft frontage", "Mezzanine possible", "Customer parking ×6", "Power load 25 kW", "Service lift access", "Wash area", "Currently tenanted (₹3.4 L/mo)", "Lease ends Mar 2027"],
    description: "Ground-floor showroom on Atrium Plaza's main frontage in Sector 18, with an 18-foot glazed front. Currently tenanted to a regional apparel chain at ₹3.4 L/month — yield ~6.3%. Lease ends March 2027 with renewal clause; we have a full rent roll and TDS receipts on file."
  },
  {
    id: "AC-6033",
    title: "Yamuna Greens — Residential Plot",
    locality: "Sector 22D, Yamuna Expressway",
    price: 9500000,
    priceLabel: "₹95 Lakh",
    purpose: "buy",
    category: "residential",
    propertyType: "Plot",
    bhk: null,
    area: 200,
    areaUnit: "sq yd",
    floor: null,
    facing: "South",
    furnishing: null,
    parking: null,
    age: "Allotment 2022",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["YEIDA Allotted", "Clear Title"],
    featured: false,
    amenities: ["YEIDA allotment", "Corner plot", "30m road", "Sewer & water laid", "Possession given", "Boundary marked", "All dues paid"],
    description: "A 200-sq-yard corner plot on a 30-metre road in YEIDA Sector 22D, possession taken in 2023 and all allotment dues cleared. Owner is consolidating into a single larger plot in Sector 18; we hold the original allotment letter, possession letter and lease deed."
  },
  {
    id: "AC-7156",
    title: "DLF Phase 4 — 3BHK Builder Floor",
    locality: "DLF Phase 4, Gurgaon",
    price: 125000,
    priceLabel: "₹1.25 Lakh",
    pricePeriod: "/ month",
    purpose: "rent",
    category: "residential",
    propertyType: "Builder Floor",
    bhk: 3,
    area: 2200,
    floor: "First / 4",
    facing: "North",
    furnishing: "Semi-furnished",
    parking: 2,
    age: "6 years",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1600566753051-6057f0aef893?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["Private Lift", "Pet-friendly"],
    featured: false,
    amenities: ["Private lift", "Modular kitchen", "Wardrobes", "Servant quarter", "Two reserved parks", "100% power backup", "Terrace access (shared)", "Pet-friendly building"],
    description: "First-floor builder floor with a private lift opening into the foyer, in a four-floor independent building. Owner is moving abroad on a five-year posting and prefers a multi-year tenant. We've already checked municipal dues and the rent agreement template is fair-use approved."
  },
  {
    id: "AC-8074",
    title: "WorkSquare — Furnished Coworking Suite",
    locality: "Sector 132, Noida",
    price: 12000000,
    priceLabel: "₹1.20 Cr",
    purpose: "buy",
    category: "commercial",
    propertyType: "Office Space",
    bhk: null,
    area: 950,
    floor: "12 / 18",
    facing: "West",
    furnishing: "Fully fitted",
    parking: 2,
    age: "2 years",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1400&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1400&q=70",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1604328471151-b52226907017?auto=format&fit=crop&w=1000&q=70"
    ],
    badges: ["Investor-friendly", "Yield 5.8%"],
    featured: false,
    amenities: ["8 workstations", "One cabin", "Pre-leased to coworking operator", "Lock-in 36 months", "Yield 5.8%", "Reserved parking ×2", "Expressway access"],
    description: "Pre-leased commercial floor on the Noida-Greater Noida Expressway, tenanted to a regional coworking operator on a 9-year lease (36-month lock-in remaining). Current yield 5.8%, escalation 12% every three years. Bank loan pre-approval available for serious buyers."
  }
];

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
    name: "Anjali & Vivek Sharma",
    locality: "Bought in Sector 150, Noida",
    service: "Buy — Residential",
    initials: "AS"
  },
  {
    quote: "I was relocating from Bangalore and needed a furnished 2BHK before I'd even seen the city. They sent five video walkthroughs in 48 hours, did the final visit on my behalf, and the rent agreement landed in my inbox the day I flew in. Zero surprises on the security deposit.",
    name: "Pritha Banerjee",
    locality: "Rented in Sector 78, Noida",
    service: "Rent — Residential",
    initials: "PB"
  },
  {
    quote: "Our office fit-out was ten weeks end-to-end. They negotiated 4 months rent-free, handled the interior brief with their studio, and the only invoice I ever signed was the one we'd agreed at the start. No 'coordination charges', no 'site fees'. That's rare.",
    name: "Karan Singhania",
    locality: "Leased in Sector 62, Noida",
    service: "Rent + Interiors",
    initials: "KS"
  }
];

const LEADS_SEED = [
  { id: "LD-2031", name: "Aanya Kapoor", phone: "+91 98109 ▮▮ 41", interest: "AC-1042 · 3BHK Sector 150", message: "Looking to close in 60 days, can we visit this Sunday?", time: "2 hrs ago", status: "new" },
  { id: "LD-2030", name: "Dr. Rajeev Khanna", phone: "+91 98911 ▮▮ 06", interest: "Buy · Commercial · Noida", message: "Need a 2000-2500 sqft retail space, Sector 18 or 32 only.", time: "Yesterday", status: "contacted" },
  { id: "LD-2029", name: "Sundeep Iyer", phone: "+91 99584 ▮▮ 12", interest: "AC-4112 · 2BHK rent", message: "Relocating from Pune, can you share the agreement template?", time: "Yesterday", status: "contacted" },
  { id: "LD-2028", name: "Mehul Goenka", phone: "+91 98714 ▮▮ 88", interest: "AC-3304 · Penthouse", message: "Site visit done. Sending the final offer by Friday.", time: "3 days ago", status: "closed" },
  { id: "LD-2027", name: "Tanvi Bhardwaj", phone: "+91 99109 ▮▮ 73", interest: "Interior Design Consultation", message: "3BHK in Sector 150, full home, budget 22-26 L.", time: "4 days ago", status: "contacted" }
];

const NAV_ITEMS = ["Home", "Services", "Properties", "Inventory", "Videos", "About", "Contact"];

window.AURUM_DATA = { PROPERTIES_SEED, INTERIORS, VIDEOS, TESTIMONIALS, LEADS_SEED, NAV_ITEMS };
