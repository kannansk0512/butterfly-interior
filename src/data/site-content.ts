export type ServiceCategory = {
  title: string;
  slug: string;
  summary: string;
  benefits: string[];
  image: string;
  includes: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Staging";
  location: string;
  year: string;
  description: string;
  approach: string;
  materials: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  coverImage: string;
  gallery: string[];
};

export const company = {
  name: "Butterfly Interior",
  tagline: "Luxury interiors shaped around light, material, and the way you live.",
  shortDescription:
    "Butterfly Interior crafts refined residential, commercial, and hospitality spaces with tailored detailing, calm sophistication, and end-to-end design direction.",
  rating: 5,
  reviewCount: 9,
  category: "Interior designer",
  address: "G7R5+XP4, Malayandipattinam, Udumalaipettai, Tamil Nadu 642154",
  phoneDisplay: "+91 63802 07170",
  phoneRaw: "916380207170",
  mapEmbed:
    "https://www.google.com/maps?q=Malayandipattinam%2C%20Udumalaipettai%2C%20Tamil%20Nadu%20642154&z=14&output=embed",
  googleShareUrl: "https://share.google/O6v1Qgmac60UoHi24",
  hours: "Open daily · 9:00 AM – 9:00 PM",
  hoursShort: "Closes soon · 9 pm · Opens 9 am Thu",
  whatsappMessage:
    "Hello Butterfly Interior, I would like to book a consultation for my space.",
};

export const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/portfolio" as const },
  { label: "Testimonials", to: "/testimonials" as const },
  { label: "Contact", to: "/contact" as const },
];

export const studioHighlights = [
  {  value: "10+", label: "Years of experience" },
  { value: "50+", label: "spaces envisioned across home and business" },
  { value: "360°", label: "design support from concept to styling" },
];

export const trustPoints = [
  "Personalized concepts aligned with lifestyle, budget, and architecture",
  "Material-led design decisions with premium, lasting finishes",
  "On-site coordination and styling support for a polished handover",
  "Strong word-of-mouth reputation backed by consistent 5.0 client feedback",
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Residential Interior Design",
    slug: "residential",
    summary:
      "Elegant homes with layered textures, spatial clarity, and bespoke detailing that reflect the people who live there.",
    benefits: [
      "Thoughtful room planning and storage optimization",
      "Cohesive material and color palettes across every room",
      "Furniture, lighting, and styling selections curated to fit daily life",
    ],
    includes: ["Bedroom design", "Kitchen design", "Living room design", "Wardrobe design"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial Design",
    slug: "commercial",
    summary:
      "Professional environments that elevate brand perception, improve flow, and create lasting impressions on clients and teams.",
    benefits: [
      "Brand-aligned spatial storytelling",
      "Improved circulation, zoning, and workplace comfort",
      "Premium finishes that balance function and sophistication",
    ],
    includes: ["Office space design", "Commercial interior design", "Restaurant design", "Hospitality design"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Space Planning & Renovation",
    slug: "planning",
    summary:
      "Clear, efficient planning for refurbishments and layout transformations that make every square foot feel intentional.",
    benefits: [
      "Better flow, storage, and visual balance",
      "Renovation guidance that reduces costly changes later",
      "Detail drawings and finish direction for smooth execution",
    ],
    includes: ["Room planning", "Space planning", "Refurbishment", "Interior architectural design"],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Custom Furniture & Styling",
    slug: "styling",
    summary:
      "Tailored selections for cabinetry, millwork, art, lighting, and décor that complete the space with a signature feel.",
    benefits: [
      "One-of-a-kind details that differentiate the space",
      "Finish layers that feel collected rather than generic",
      "Styling decisions that create immediate visual warmth",
    ],
    includes: ["Cabinetry and hardware design", "Custom art selection", "Lighting design", "Home decor selection"],
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const allServices = [
  "Appliance selection",
  "Bathroom design",
  "Bedroom design",
  "Cabinetry and hardware design",
  "Commercial interior design",
  "Custom art selection",
  "Dining room design",
  "Door design",
  "Flooring selection",
  "Home decor selection",
  "Home staging",
  "Hospitality design",
  "Interior architectural design",
  "Interior decorating",
  "Interior painting",
  "Kitchen design",
  "Lighting design",
  "Living room design",
  "Millwork design",
  "Office space design",
  "Property staging",
  "Refurbishment",
  "Restaurant design",
  "Room planning",
  "Space planning",
  "Stone, brick and stucco design",
  "Wardrobe design",
  "Window design",
];

export const projects: ProjectItem[] = [
  {
    id: "serene-courtyard-residence",
    title: "Serene Courtyard Residence",
    category: "Residential",
    location: "Udumalaipettai",
    year: "2024",
    description:
      "A warm modern family home where natural light, pale stone, and tailored woodwork create a quiet sense of luxury.",
    approach:
      "Butterfly Interior opened up the common spaces, softened the palette with tactile neutrals, and layered in sculptural lighting for understated elegance.",
    materials: ["Travertine-look tile", "Oak veneer", "Brushed brass", "Textured linen"],
    beforeAfter: {
      before:
        "Disconnected rooms with heavy finishes and limited light made the home feel smaller than it was.",
      after:
        "The revised plan now flows effortlessly, with bespoke storage and a calm palette that expands every space.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "atelier-workspace-suite",
    title: "Atelier Workspace Suite",
    category: "Commercial",
    location: "Coimbatore",
    year: "2023",
    description:
      "A premium office interior balancing hospitality warmth with efficient spatial planning for a growing creative team.",
    approach:
      "The design focused on layered lighting, quiet acoustic materials, and lounge-like meeting zones that feel both professional and welcoming.",
    materials: ["Fluted wood", "Powder-coated metal", "Acoustic fabric", "Matte stone"],
    coverImage:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "garden-view-boutique-stay",
    title: "Garden View Boutique Stay",
    category: "Hospitality",
    location: "Pollachi",
    year: "2024",
    description:
      "An intimate hospitality concept using layered natural textures, local craft references, and immersive guest-room detailing.",
    approach:
      "Butterfly Interior designed each touchpoint to feel serene and memorable, from the reception palette to the tactile in-room finishes.",
    materials: ["Handmade tile", "Rattan", "Lime plaster", "Antique brass"],
    coverImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "signature-home-staging",
    title: "Signature Home Staging",
    category: "Staging",
    location: "Tiruppur",
    year: "2023",
    description:
      "A strategic property staging project created to elevate first impressions and improve market readiness.",
    approach:
      "The team used curated styling, art, and lighting edits to make the property feel aspirational while staying accessible to buyers.",
    materials: ["Layered textiles", "Decorative lighting", "Curated artwork", "Soft neutral paint"],
    coverImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export const testimonials = [
  {
    name: "Priya R.",
    role: "Homeowner",
    quote:
      "Butterfly Interior translated our ideas into a home that feels calm, luxurious, and truly ours. Every finish felt intentional.",
  },
  {
    name: "Sathish K.",
    role: "Restaurant Owner",
    quote:
      "Their design thinking elevated the full guest experience. Clients notice the interiors immediately and the workflow improved too.",
  },
  {
    name: "Nivetha M.",
    role: "Property Investor",
    quote:
      "The staging work made the property feel premium without overdoing it. We had stronger interest almost immediately.",
  },
  {
    name: "Arun & Keerthi",
    role: "Residential Clients",
    quote:
      "Professional, warm, and highly detail-oriented. They understood how we wanted the house to feel, not just how it should look.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation & discovery",
    description: "Lifestyle, brand, or property goals are translated into a clear creative direction and scope.",
  },
  {
    step: "02",
    title: "Concept & material curation",
    description: "Layouts, palettes, and finishes are refined into a cohesive design narrative with premium detailing.",
  },
  {
    step: "03",
    title: "Execution guidance",
    description: "Selections, drawings, and on-site coordination keep the project aligned from planning to installation.",
  },
  {
    step: "04",
    title: "Styling & handover",
    description: "The final layers bring the space together for a complete, client-ready reveal.",
  },
];

export const faqs = [
  {
    question: "Do you handle both design and execution guidance?",
    answer:
      "Yes. Butterfly Interior supports clients from concept development through material selection, detailing, and on-site coordination guidance.",
  },
  {
    question: "Can you work on a single room or only full-home projects?",
    answer:
      "Both are possible. The studio takes on focused room transformations as well as full residential and commercial projects.",
  },
  {
    question: "Do you help source furniture, finishes, and décor?",
    answer:
      "Absolutely. The studio offers curated support for cabinetry, furniture, finishes, lighting, art, and styling accessories.",
  },
  {
    question: "Is site consultation available near Udumalaipettai?",
    answer:
      "Yes. Initial discussions can begin remotely, followed by on-site consultation depending on project scope and location.",
  },
];
