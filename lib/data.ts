/**
 * Single source of truth for portfolio content.
 */

export const BRAND = {
  name: "GAURAV SINGH",
  wordmark: "GAURAV",
  headlineTop: "MARKETING",
  headlineBottom: "CREATIVE / DIGITAL",
  email: "hello@gauravsingh.com",
  phone: "",
  location: "BASED — TORONTO / CANADA",
  timezone: "",
  availability: "Open to meaningful creative opportunities",
  footerNote:
    "I understand marketing strategy, but I also know how to turn ideas into visual experiences.",
  year: 2026,
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about", ariaLabel: "Go to the about section" },
  { label: "Mindset", href: "#mindset", ariaLabel: "Read my marketing mindset" },
  { label: "Work", href: "#work", ariaLabel: "See selected work" },
  { label: "Lab", href: "#lab", ariaLabel: "See self-initiated campaigns" },
  { label: "Resume", href: "#resume", ariaLabel: "View experience and resume" },
  { label: "Contact", href: "#contact", ariaLabel: "Get in touch" },
] as const;

export const FOOTER_LINKS = [{ label: "Back to top", href: "#hero" }] as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;

export const HERO = {
  base: "/images/hero-base.webp",
  reveal: "/images/hero-reveal.webp",
  statementStrong: "I understand marketing strategy,",
  statementMuted: "but I also know how to turn ideas into visual experiences.",
} as const;

export const ABOUT = {
  label: "(ABOUT)",
  statementStrong: "Marketing strategy with a creative point of view. ",
  statementMuted: "I turn audience insight into campaigns, content, and experiences people remember.",
} as const;

export interface Project {
  index: string;
  title: string;
  blurb: string;
  image: string;
  href: string;
  year: string;
  tags: readonly string[];
  status: "real" | "academic" | "self-initiated";
}

export const PROJECTS: readonly Project[] = [
  {
    index: "01",
    title: "Life Is A Special Event",
    blurb:
      "Marketing Team Leader — Co-op. Led a five-person marketing team across digital and social campaigns, content delivery, campaign tracking, and client work. The Ayurveda event campaign sold out.",
    image: "/images/work-1.jpg",
    href: "#work",
    year: "REAL WORK",
    tags: ["Marketing", "Campaigns", "Team Leadership"],
    status: "real",
  },
  {
    index: "02",
    title: "Philer.ai",
    blurb:
      "Marketing Specialist Intern. Digital marketing, targeted outreach, lead generation, Google Sheets CRM, and follow-up systems for a real estate and mortgage audience.",
    image: "/images/work-2.jpg",
    href: "#work",
    year: "REAL WORK",
    tags: ["Digital Marketing", "Lead Generation", "CRM"],
    status: "real",
  },
  {
    index: "03",
    title: "Sheridan / LagerShed",
    blurb:
      "Academic advertising and marketing project shaped through research, audience definition, positioning, campaign strategy, and creative direction.",
    image: "/images/work-3.jpg",
    href: "#work",
    year: "ACADEMIC PROJECT",
    tags: ["Research", "Strategy", "Creative Direction"],
    status: "academic",
  },
] as const;

export const CREATIVE_LAB = [
  {
    title: "NOVA Coffee Co.",
    line: "SUMMER, SERVED COLD.",
    copy:
      "Meet your new summer obsession. NOVA COLD BREW — Smooth. Bold. Ice-cold. Made for slow afternoons, long drives & hot days.",
    image: "/images/service-1.jpg",
    accent: "nova",
  },
  {
    title: "VANTA Athletics",
    line: "ENGINEERED TO MOVE.",
    copy: "MOVE YOUR WAY. BUILT FOR THE EVERYDAY ATHLETE.",
    image: "/images/service-2.jpg",
    accent: "vanta",
  },
  {
    title: "AURA Audio",
    line: "ESCAPE THE NOISE.",
    copy: "FIND YOUR FREQUENCY. IMMERSIVE SOUND. ZERO DISTRACTIONS. YOUR WORLD. YOUR SOUND.",
    image: "/images/service-3.jpg",
    accent: "aura",
  },
] as const;

export const CREATIVE_SYSTEM = [
  ["01", "INSIGHT", "Start with the audience, the tension, and the truth behind the brief."],
  ["02", "STRATEGY", "Find the sharpest direction and the reason for people to care."],
  ["03", "CONCEPT", "Turn the strategy into a big idea with a distinct point of view."],
  ["04", "EXECUTION", "Make the idea real across content, digital, social, and experience."],
  ["05", "IMPACT", "Measure what moved, learn what matters, and sharpen the next idea."],
] as const;

export const CTA = {
  headingLine1: "LET'S MAKE",
  headingLine2: "SOMETHING MATTER.",
  blurb: "For marketing, creative, digital, and campaign opportunities.",
  buttonLabel: "GET IN TOUCH",
  buttonHref: "mailto:hello@gauravsingh.com",
  image: "/images/cta-bg.jpg",
} as const;

export const STATS = [
  { value: 5000, suffix: "+", label: "Targeted outreach interactions" },
  { value: 1000, suffix: "", label: "Approximate client opportunities" },
] as const;

export const WHY_US = {
  label: "(MINDSET)",
  heading: "IDEAS WITH INTENT",
  image: "/images/why-us.jpg",
} as const;

export const FEATURED_TESTIMONIAL = {
  quote: "Ideas should move people before they move numbers.",
  author: "Gaurav Singh",
  role: "Marketing / Creative / Digital",
  avatar: "/images/avatar-featured.jpg",
  image: "/images/testimonial-highlight.jpg",
} as const;

export interface Service {
  index: string;
  title: string;
  blurb: string;
  items: readonly string[];
  image: string;
}

export const SERVICES: readonly Service[] = CREATIVE_SYSTEM.map(([index, title, blurb]) => ({
  index,
  title,
  blurb,
  items: [],
  image: "/images/service-1.jpg",
}));

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

export const PROCESS: readonly ProcessStep[] = CREATIVE_SYSTEM.map(([index, title, body]) => ({
  id: index,
  step: `STEP ${index}`,
  title,
  subtitle: "Creative system",
  body,
  subsections: [],
  deliverables: [],
  image: "/images/service-1.jpg",
}));

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [];

export const TESTIMONIALS_INTRO = {
  label: "(WORKING STYLE)",
  heading: "Clear thinking. Strong ideas. Thoughtful execution.",
  rating: "",
  ratingNote: "",
} as const;

export interface PricingTier {
  name: string;
  blurb: string;
  monthly: number | null;
  annual: number | null;
  features: readonly string[];
  featured: boolean;
  cta: string;
}

export const PRICING: readonly PricingTier[] = [];
export const ANNUAL_DISCOUNT = 0;

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: readonly FaqItem[] = [];

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
}

export const POSTS: readonly Post[] = [];
