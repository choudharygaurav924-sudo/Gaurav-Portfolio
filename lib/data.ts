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

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;

export const ABOUT = {
  label: "(ABOUT)",
  statementStrong: "Marketing strategy with a creative point of view. ",
  statementMuted: "I turn audience insight into campaigns, content, and experiences people remember.",
} as const;

export const CREATIVE_LAB = [
  {
    title: "NOVA Coffee Co.",
    line: "SUMMER, SERVED COLD.",
    copy: "Meet your new summer obsession. NOVA COLD BREW — Smooth. Bold. Ice-cold. Made for slow afternoons, long drives & hot days.",
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

export const CASE_STUDIES = [
  {
    index: "01",
    anchor: "life-is-a-special-event",
    title: "LIFE IS A SPECIAL EVENT",
    label: "REAL WORK",
    type: "Marketing / Campaign Development",
    role: "MARKETING TEAM LEADER — CO-OP",
    image: "/images/work-1.jpg",
    description: "A campaign-led marketing role built around coordination, content, client work, and tracking across multiple digital and social initiatives.",
    tags: ["Digital / Social", "Campaign Tracking", "Content / Client Work"],
    story: [["THE CHALLENGE", "Coordinate multiple campaigns and keep the work moving across a five-person marketing team."], ["THE APPROACH", "Lead the team while connecting campaign planning, content, client work, and tracking."]],
  },
  {
    index: "02",
    anchor: "philer-ai",
    title: "PHILER.AI",
    label: "REAL WORK",
    type: "Digital Marketing / Lead Generation",
    role: "MARKETING SPECIALIST INTERN",
    image: "/images/work-2.jpg",
    description: "An outreach and follow-up system for a real estate and mortgage audience, combining targeted communication with practical CRM discipline.",
    tags: ["Targeted Outreach", "Google Sheets CRM", "Campaign / Event Work"],
    story: [["THE CHALLENGE", "Reach a focused real estate and mortgage audience and create a reliable path from outreach to opportunity."], ["THE AUDIENCE", "People in the real estate and mortgage space who value a clear, useful connection."]],
  },
  {
    index: "03",
    anchor: "sheridan-lagershed",
    title: "SHERIDAN / LAGERSHED",
    label: "ACADEMIC PROJECT",
    type: "Advertising / Marketing Strategy",
    role: "ACADEMIC ADVERTISING & MARKETING PROJECT",
    image: "/images/work-3.jpg",
    description: "An academic advertising project developed through research, audience thinking, positioning, campaign strategy, and creative direction.",
    tags: ["Research", "Audience", "Positioning", "Creative Direction"],
    story: [["RESEARCH", "Investigate the category and the context around the opportunity."], ["AUDIENCE", "Define who the campaign needs to reach and what matters to them."], ["POSITIONING", "Find a clear and compelling place for the idea to live."]],
  },
] as const;

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
}

export const POSTS: readonly Post[] = [];

export interface FaqItem {
  question: string;
  answer: string;
}

// FAQ is retained as an empty legacy data set because the active page does not render the FAQ section.
export const FAQ: readonly FaqItem[] = [];
