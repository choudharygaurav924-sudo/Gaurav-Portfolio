/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Images live in /public/images/. Drop your files there using the exact
 *  filenames referenced below and they appear automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ── BRAND ─────────────────────────────────────────────────────────────────── */

export const BRAND = {
  name: "ECHO",
  /** Shown oversized in the footer. Keep it short — it renders very large. */
  wordmark: "ECHO",
  /** Split across two lines in the hero. */
  headlineTop: "BEYOND DESIGN",
  headlineBottom: "BUILT TO MATTER",
  email: "hello@echostudio.com",
  phone: "+1 (555) 234-5678",
  location: "New York, NY",
  timezone: "EST (UTC-5)",
  availability: "Available for Q1 & Q2 projects",
  /** Short paragraph in the footer's first column. */
  footerNote:
    "We are an independent creative studio partnering with ambitious brands to build transformative digital products and visual identities.",
  year: 2026,
} as const;

/* ── NAVIGATION ────────────────────────────────────────────────────────────── */

/**
 * Drives both the StaggeredMenu panel and the footer's Navigate column.
 * `ariaLabel` is what screen readers announce — keep it descriptive.
 */
export const NAV_LINKS = [
  { label: "About", href: "#about", ariaLabel: "Go to the about section" },
  { label: "Work", href: "#work", ariaLabel: "See selected work" },
  { label: "Why us", href: "#why-us", ariaLabel: "Read why to work with us" },
  { label: "Services", href: "#services", ariaLabel: "View services offered" },
  { label: "Process", href: "#process", ariaLabel: "See how we work" },
  { label: "Pricing", href: "#pricing", ariaLabel: "View pricing plans" },
  { label: "Contact", href: "#cta", ariaLabel: "Get in touch" },
] as const;

/** Legal links in the footer's bottom bar. */
export const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Licensing", href: "#" },
] as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://x.com" },
] as const;

/* ── HERO ──────────────────────────────────────────────────────────────────── */

export const HERO: {
  base: string;
  reveal: string;
  statementStrong: string;
  statementMuted: string;
} = {
  /**
   * Cursor-spotlight backdrop. The base layer is always visible; the reveal
   * layer shows only inside the soft circle that trails the pointer, so the
   * scene looks "peeled back" to a second version of itself. Use two images of
   * the *same composition*, cropped identically, so they align pixel-for-pixel.
   * Recommended: ~1280×720+ .webp.
   */
  base: "/images/hero-base.webp",
  reveal: "/images/hero-reveal.webp",
  /** Bottom-left statement. The first half is white, the rest dimmed. */
  statementStrong: "We craft brands, websites, and digital experiences",
  statementMuted: "designed with purpose, clarity, and impact",
};

/* ── ABOUT ─────────────────────────────────────────────────────────────────── */

export const ABOUT = {
  label: "(ABOUT)",
  statementStrong: "We combine years of web design expertise with innovative ",
  statementMuted: "experiences to create meaningful digital stories.",
} as const;

/* ── WORK ──────────────────────────────────────────────────────────────────── */

export interface Project {
  index: string;
  title: string;
  blurb: string;
  image: string;
  href: string;
  year: string;
  tags: readonly string[];
}

export const PROJECTS: readonly Project[] = [
  {
    index: "01",
    title: "Aether OS",
    blurb: "Design system & web app for an AI cloud platform",
    image: "/images/work-1.jpg",
    href: "#",
    year: "2025",
    tags: ["Web Design", "Development"],
  },
  {
    index: "02",
    title: "Veloce Motors",
    blurb: "Brand identity & digital showroom for electric vehicles",
    image: "/images/work-2.jpg",
    href: "#",
    year: "2025",
    tags: ["Branding", "Web Design"],
  },
  {
    index: "03",
    title: "Lumina Audio",
    blurb: "E-commerce experience & spatial 3D showcase for high-end audio",
    image: "/images/work-3.jpg",
    href: "#",
    year: "2026",
    tags: ["Branding", "Motion"],
  },
] as const;

/* ── WHY US / STATS ────────────────────────────────────────────────────────── */

export interface Stat {
  /** Numeric portion — rolls up on scroll. Digits only. */
  value: number;
  /** Rendered immediately after the number, e.g. "+", "%", "M". */
  suffix: string;
  label: string;
}

export const STATS: readonly Stat[] = [
  { value: 8, suffix: "+", label: "Years of experience in the industry" },
  { value: 77, suffix: "%", label: "Customer satisfaction rate" },
  { value: 5, suffix: "M", label: "In client revenue growth" },
] as const;

export const WHY_US = {
  label: "(WHY US)",
  heading: "NUMBERS DON'T LIE",
  /** Full-bleed background image behind the stats. */
  image: "/images/why-us.jpg",
} as const;

/* ── FEATURED TESTIMONIAL ──────────────────────────────────────────────────── */

export const FEATURED_TESTIMONIAL = {
  quote:
    "Working with them felt personal. The process was smooth, the design was stunning, and everything had meaning.",
  author: "Client Name",
  role: "Founder at Nova Studio",
  avatar: "/images/avatar-featured.jpg",
  image: "/images/testimonial-highlight.jpg",
} as const;

/* ── SERVICES ──────────────────────────────────────────────────────────────── */

export interface Service {
  index: string;
  title: string;
  blurb: string;
  items: readonly string[];
  image: string;
}

export const SERVICES: readonly Service[] = [
  {
    index: "01",
    title: "Web Design & Development",
    blurb: "High-performance digital experiences with responsive layouts and 60fps animations.",
    items: [],
    image: "/images/service-1.jpg",
  },
  {
    index: "02",
    title: "Branding & Identity",
    blurb: "Comprehensive brand identity, logo design, visual systems, and brand guidelines.",
    items: [],
    image: "/images/service-2.jpg",
  },
  {
    index: "03",
    title: "Social Media & Campaign",
    blurb: "Creative social media graphics, campaign assets, and strategic content templates.",
    items: [],
    image: "/images/service-3.jpg",
  },
  {
    index: "04",
    title: "Motion & 3D Animation",
    blurb: "Dynamic micro-interactions, 3D renders, and compelling product demos.",
    items: [],
    image: "/images/service-4.jpg",
  },
] as const;

/* ── PROCESS ───────────────────────────────────────────────────────────────── */

export interface ProcessStep {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  body: string;
  subsections: string[];
  deliverables: string[];
  image: string;
}

export const PROCESS: readonly ProcessStep[] = [
  {
    id: "step-1",
    step: "STEP 01",
    title: "Discovery",
    subtitle: "Research & Alignment",
    body: "Understanding goals, audience, and scope to define a clear roadmap.",
    subsections: [
      "Brand & Market Audit",
      "User Journey Mapping",
      "Scope & Milestone Timeline",
    ],
    deliverables: ["Strategy Brief", "Project Scope"],
    image: "/images/service-1.jpg",
  },
  {
    id: "step-2",
    step: "STEP 02",
    title: "Concept",
    subtitle: "UX & Visual Direction",
    body: "Creating wireframes, design systems, and visual concepts for user flows.",
    subsections: [
      "Wireframes & Layouts",
      "Color & Type Systems",
      "Interactive Prototypes",
    ],
    deliverables: ["Figma UI Kit", "Prototype"],
    image: "/images/service-2.jpg",
  },
  {
    id: "step-3",
    step: "STEP 03",
    title: "Build",
    subtitle: "Development & Motion",
    body: "Developing clean, high-performance code with smooth 60fps animations.",
    subsections: [
      "Next.js App Router",
      "GSAP Scroll Animations",
      "SEO & Performance Tuning",
    ],
    deliverables: ["Clean Codebase", "Live Build"],
    image: "/images/service-3.jpg",
  },
  {
    id: "step-4",
    step: "STEP 04",
    title: "Launch",
    subtitle: "QA & Handoff",
    body: "Final testing, domain deployment, and ongoing post-launch support.",
    subsections: [
      "Cross-Device QA Testing",
      "Production Deployment",
      "Handoff & Support",
    ],
    deliverables: ["Production Site", "Support"],
    image: "/images/service-4.jpg",
  },
] as const;

/* ── TESTIMONIALS ──────────────────────────────────────────────────────────── */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote: "Echo transformed our brand identity into an immersive digital experience that elevated our market presence.",
    author: "Elena Rostova",
    role: "CEO at Veloce",
    avatar: "/images/avatar-1.jpg",
  },
  {
    quote: "The speed, attention to detail, and smoothness of motion design blew our team away.",
    author: "Marcus Vance",
    role: "Head of Product at Aether",
    avatar: "/images/avatar-2.jpg",
  },
  {
    quote: "Exceptional visual taste and flawless technical execution. They delivered beyond expectations.",
    author: "Sophia Chen",
    role: "Design Lead at Lumina",
    avatar: "/images/avatar-3.jpg",
  },
  {
    quote: "Working with Echo felt like an extension of our internal team. Seamless communication throughout.",
    author: "David Kellar",
    role: "Founder at Apex",
    avatar: "/images/avatar-4.jpg",
  },
] as const;

export const TESTIMONIALS_INTRO = {
  label: "(TESTIMONIALS)",
  heading:
    "We deliver data-driven and result-focused work. Hear what our partners say about us.",
  rating: "4.9",
  ratingNote: "300+ Verified Reviews on Clutch",
} as const;

/* ── PRICING ───────────────────────────────────────────────────────────────── */

export interface PricingTier {
  name: string;
  blurb: string;
  /** null renders "Let's talk" instead of a number. */
  monthly: number | null;
  annual: number | null;
  features: readonly string[];
  featured: boolean;
  cta: string;
}

/** Discount applied on the annual toggle, shown as a badge. */
export const ANNUAL_DISCOUNT = 20;

export const PRICING: readonly PricingTier[] = [
  {
    name: "Starter",
    blurb: "Perfect for solo founders and early stage brands.",
    monthly: 5999,
    annual: 4799,
    features: [
      "1 Senior designer",
      "72 hours turnaround time",
      "One request at a time",
      "Pause or cancel anytime",
      "Up to 40 hours per month",
      "Async communication",
    ],
    featured: false,
    cta: "Get started",
  },
  {
    name: "Growth",
    blurb: "For scaling teams that ship continuously.",
    monthly: 9999,
    annual: 7999,
    features: [
      "2 Senior designers",
      "48 hours turnaround time",
      "Two requests at a time",
      "Pause or cancel anytime",
      "Up to 80 hours per month",
      "Weekly strategy call",
      "Priority support",
    ],
    featured: true,
    cta: "Get started",
  },
  {
    name: "Bespoke",
    blurb: "Custom scope for complex, multi-team engagements.",
    monthly: null,
    annual: null,
    features: [
      "Dedicated design team",
      "24 hours turnaround time",
      "Unlimited requests",
      "Custom contract terms",
      "Unlimited hours",
      "Dedicated Slack channel",
    ],
    featured: false,
    cta: "Book a call",
  },
] as const;

/* ── FAQ ───────────────────────────────────────────────────────────────────── */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: readonly FaqItem[] = [
  {
    question: "What's your typical process for a new project?",
    answer: "We start with discovery and research, move into interactive design prototypes, and finish with clean development and testing.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most branding and web development projects are completed within 2 to 4 weeks depending on scope.",
  },
  {
    question: "Do you work with clients outside your timezone?",
    answer: "Yes, we work seamlessly with global clients through asynchronous updates and flexible scheduling.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "Just a quick project overview, your brand assets, and a kick-off call to align on goals.",
  },
  {
    question: "Can I pause or cancel my subscription?",
    answer: "Yes, you can pause or cancel your project plan at any time with no lock-in contracts.",
  },
] as const;

/* ── BLOG ──────────────────────────────────────────────────────────────────── */

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
}

export const POSTS: readonly Post[] = [
  {
    title: "Why Clarity Beats Creativity in Web Design",
    excerpt: "How clear messaging and structured layout drive higher engagement than complex visual tricks.",
    date: "Feb 4, 2025",
    category: "Design Strategy",
    image: "/images/post-1.jpg",
    href: "#",
  },
  {
    title: "Why Motion Design Makes Your Website Feel Alive",
    excerpt: "Motion helps your website feel modern and clear. Here's why it matters and how to execute it right.",
    date: "Feb 4, 2025",
    category: "Social Media",
    image: "/images/post-2.jpg",
    href: "#",
  },
  {
    title: "What to Look for in a Premium Framer Template",
    excerpt: "Not all Framer templates are built equal. Here's how to spot the ones worth your time and investment.",
    date: "Feb 4, 2025",
    category: "Branding",
    image: "/images/post-3.jpg",
    href: "#",
  },
] as const;

/* ── CTA ───────────────────────────────────────────────────────────────────── */

export const CTA = {
  headingLine1: "LET'S WORK",
  headingLine2: "TOGETHER",
  blurb:
    "Have a project in mind? We'd love to hear about it. Let's create something great together!",
  buttonLabel: "GET IN TOUCH",
  buttonHref: "mailto:hello@echostudio.com",
  image: "/images/cta-bg.jpg",
} as const;
