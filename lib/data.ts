/**
 * GAURAV SINGH PORTFOLIO
 * SINGLE SOURCE OF TRUTH FOR PORTFOLIO CONTENT
 */

export const BRAND = {
  name: "GAURAV",
  wordmark: "GAURAV",
  headlineTop: "MARKETING",
  headlineBottom: "THAT MAKES PEOPLE LOOK TWICE",
  email: "hello@gauravsinghportfolio.com",
  phone: "",
  location: "Toronto, Canada",
  timezone: "EST",
  availability: "Open to marketing opportunities",
  footerNote:
    "Marketing, strategy and creative work built around the things that make people stop, look twice, and care.",
  year: 2026,
} as const;


/* NAVIGATION */

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
    ariaLabel: "Go to the about section",
  },
  {
    label: "Work",
    href: "#work",
    ariaLabel: "See selected work",
  },
  {
    label: "Experience",
    href: "#why-us",
    ariaLabel: "View marketing experience",
  },
  {
    label: "Creative Lab",
    href: "#creative-lab",
    ariaLabel: "View self initiated creative work",
  },
  {
    label: "Contact",
    href: "#cta",
    ariaLabel: "Get in touch",
  },
] as const;


export const FOOTER_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
] as const;


export const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
] as const;


/* HERO */

export const HERO = {
  base: "/images/hero-base.webp",
  reveal: "/images/hero-reveal.webp",

  statementStrong:
    "I like figuring out what makes people stop, look twice, and care.",

  statementMuted:
    "Somewhere between strategy, creativity and culture is where I do my best work.",
} as const;


/* ABOUT */

export const ABOUT = {
  label: "(ABOUT)",

  statementStrong:
    "I like figuring out what makes people stop, look twice, and care.",

  statementMuted:
    "Somewhere between strategy, creativity and culture is where I do my best work.",
} as const;


/* PROJECTS */

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

    title: "Life Is A Special Event",

    blurb:
      "Marketing Team Leader — Co-op. Led a five-person marketing team across digital campaigns, social media, campaign planning and client-facing creative work.",

    image: "/images/life-special-event-ayurveda-campaign.png",

    href: "#",

    year: "2025",

    tags: [
      "Marketing",
      "Campaign Strategy",
      "Social Media",
    ],
  },

  {
    index: "02",

    title: "LagerShed / Sheridan",

    blurb:
      "Academic advertising project built around research, audience understanding, positioning and campaign strategy.",

    image: "/images/sheridan-lagershed-photo.jpg",

    href: "#",

    year: "2025",

    tags: [
      "Research",
      "Positioning",
      "Campaign Strategy",
    ],
  },

  {
    index: "03",

    title: "SS Traders",

    blurb:
      "Marketing Specialist working on B2B marketing for a wholesale supplier of polycarbonate roofing sheets in Delhi NCR.",

    image: "/images/sheridan-lagershed-photo.jpg",

    href: "#",

    year: "2026",

    tags: [
      "B2B Marketing",
      "Digital Marketing",
      "Marketing",
    ],
  },

  {
    index: "04",

    title: "Philer.ai",

    blurb:
      "Marketing Specialist Intern supporting targeted digital outreach and lead-generation work for real estate and mortgage professionals across Ontario and Alberta.",

    image: "/images/philer-ai-cover.png",

    href: "#philer",

    year: "2026",

    tags: [
      "Digital Marketing",
      "Outreach",
      "Lead Generation",
    ],
  },
] as const;


/* EXPERIENCE */

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}


export const STATS: readonly Stat[] = [
  {
    value: 5000,
    suffix: "+",
    label: "Targeted outreach interactions",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Client opportunities generated",
  },
  {
    value: 5,
    suffix: "",
    label: "People led during marketing co-op",
  },
] as const;


export const WHY_US = {
  label: "(EXPERIENCE)",
  heading: "STRATEGY. CREATIVITY. CULTURE.",
  image: "/images/life-special-event-campaign-tracking.png",
} as const;


/* FEATURED PERSPECTIVE */

export const FEATURED_TESTIMONIAL = {
  quote:
    "Somewhere between strategy, creativity and culture is where I do my best work.",

  author: "Gaurav Singh",

  role: "Marketing Specialist",

  avatar: "/images/life_is_a_special_event_logo.jpeg",

  image: "/images/life-special-event-ayurveda-campaign.png",
} as const;


/* CAPABILITIES */

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

    title: "Marketing Strategy",

    blurb:
      "Turning audience understanding and research into clear marketing direction.",

    items: [
      "Audience Research",
      "Positioning",
      "Campaign Strategy",
      "Marketing Planning",
    ],

    image: "/images/sheridan-lagershed-photo.jpg",
  },

  {
    index: "02",

    title: "Digital Marketing",

    blurb:
      "Building digital campaigns and outreach systems designed to create meaningful engagement.",

    items: [
      "Digital Campaigns",
      "Social Media",
      "Lead Generation",
      "Outreach",
    ],

    image: "/images/life-special-event-campaign-tracking.png",
  },

  {
    index: "03",

    title: "Creative Direction",

    blurb:
      "Developing visual ideas and campaign systems that give marketing a distinct point of view.",

    items: [
      "Campaign Concepts",
      "Visual Direction",
      "Creative Development",
      "AI-Assisted Production",
    ],

    image: "/images/01_NOVA_OOH_Billboard_01.png",
  },

  {
    index: "04",

    title: "Campaign Execution",

    blurb:
      "Connecting strategy and creative execution across digital, social, print and out-of-home formats.",

    items: [
      "Social Assets",
      "OOH",
      "Print",
      "Campaign Rollouts",
    ],

    image: "/images/VANTA_01_Billboard_OOH.png",
  },
] as const;


/* PROCESS */

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

    title: "Understand",

    subtitle: "Research & Audience",

    body:
      "Start with the audience, the context and the problem before jumping into creative.",

    subsections: [
      "Audience Research",
      "Market Context",
      "Problem Definition",
    ],

    deliverables: [
      "Research Direction",
      "Audience Understanding",
    ],

    image: "/images/sheridan-lagershed-photo.jpg",
  },

  {
    id: "step-2",

    step: "STEP 02",

    title: "Position",

    subtitle: "Strategy & Direction",

    body:
      "Find the positioning, message and strategic idea that gives the campaign something worth saying.",

    subsections: [
      "Positioning",
      "Messaging",
      "Campaign Direction",
    ],

    deliverables: [
      "Strategic Direction",
      "Campaign Concept",
    ],

    image: "/images/lagershed-campaign-strategy.png",
  },

  {
    id: "step-3",

    step: "STEP 03",

    title: "Create",

    subtitle: "Creative Development",

    body:
      "Translate the strategy into visual concepts, campaign assets and digital experiences.",

    subsections: [
      "Creative Concepts",
      "Visual Systems",
      "Campaign Assets",
    ],

    deliverables: [
      "Creative System",
      "Campaign Assets",
    ],

    image: "/images/02_NOVA_Lifestyle_Ad.png",
  },

  {
    id: "step-4",

    step: "STEP 04",

    title: "Launch",

    subtitle: "Execution & Learning",

    body:
      "Bring the campaign into market, track the response and use what happens next to improve the work.",

    subsections: [
      "Campaign Rollout",
      "Performance Tracking",
      "Optimization",
    ],

    deliverables: [
      "Campaign Launch",
      "Performance Insights",
    ],

    image: "/images/VANTA_06_Street_OOH.png",
  },
] as const;


/* SELECTED EXPERIENCE */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}


export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "Led a five-person marketing team across multiple campaign initiatives during my marketing co-op.",

    author: "Life Is A Special Event",

    role: "Marketing Team Leader — Co-op",

    avatar: "/images/life_is_a_special_event_logo.jpeg",
  },

  {
    quote:
      "Built marketing campaigns around research, audience understanding and strategic positioning.",

    author: "Sheridan College",

    role: "Advertising & Digital Marketing",

    avatar: "/images/sheridan-lagershed-photo.jpg",
  },

  {
    quote:
      "Working across B2B marketing and digital outreach in a wholesale business environment.",

    author: "SS Traders",

    role: "Marketing Specialist",

    avatar: "/images/sheridan-lagershed-photo.jpg",
  },

  {
    quote:
      "Self-initiated campaigns exploring brand systems, campaign concepts and AI-assisted creative production.",

    author: "Creative Lab",

    role: "Self-Initiated Work",

    avatar: "/images/AURA_01_Billboard_OOH.png",
  },
] as const;


export const TESTIMONIALS_INTRO = {
  label: "(APPROACH)",

  heading:
    "Good marketing starts with understanding what makes people care.",

  rating: "TORONTO",

  ratingNote: "CANADA",
} as const;


/* WHAT I BRING */

export interface PricingTier {
  name: string;
  blurb: string;
  monthly: number | null;
  annual: number | null;
  features: readonly string[];
  featured: boolean;
  cta: string;
}


export const ANNUAL_DISCOUNT = 0;


export const PRICING: readonly PricingTier[] = [
  {
    name: "STRATEGY",

    blurb:
      "Audience, positioning and campaign thinking.",

    monthly: null,
    annual: null,

    features: [
      "Audience research",
      "Positioning",
      "Campaign strategy",
      "Marketing planning",
    ],

    featured: false,

    cta: "LET'S TALK",
  },

  {
    name: "CREATIVE",

    blurb:
      "Campaign concepts and visual direction.",

    monthly: null,
    annual: null,

    features: [
      "Campaign concepts",
      "Visual direction",
      "Social creative",
      "AI-assisted production",
    ],

    featured: true,

    cta: "VIEW WORK",
  },

  {
    name: "CAMPAIGN",

    blurb:
      "End-to-end campaign thinking and execution.",

    monthly: null,
    annual: null,

    features: [
      "Strategy",
      "Creative",
      "Digital execution",
      "Campaign rollout",
    ],

    featured: false,

    cta: "GET IN TOUCH",
  },
] as const;


/* FAQ */

export interface FaqItem {
  question: string;
  answer: string;
}


export const FAQ: readonly FaqItem[] = [
  {
    question: "What kind of marketing work do I do?",

    answer:
      "My work sits across marketing strategy, digital marketing, campaign development, creative direction and audience-focused communication.",
  },

  {
    question: "What is the Creative Lab?",

    answer:
      "The Creative Lab is a collection of self-initiated and AI-assisted campaign concepts created to explore different visual and strategic directions.",
  },

  {
    question: "Are the Creative Lab campaigns client projects?",

    answer:
      "No. Projects in the Creative Lab are clearly identified as self-initiated or fictional campaigns.",
  },

  {
    question: "Where am I based?",

    answer:
      "Toronto, Canada.",
  },

  {
    question: "Are you open to opportunities?",

    answer:
      "Yes. I am open to marketing opportunities where strategy, creativity and culture come together.",
  },
] as const;


/* CREATIVE LAB */

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
    title: "NOVA",

    excerpt:
      "SELF-INITIATED / FICTIONAL CAMPAIGN — A summer coffee concept built around refreshment, lifestyle and a cold visual language.",

    date: "2026",

    category: "Creative Lab",

    image: "/images/01_NOVA_OOH_Billboard_01.png",

    href: "#",
  },

  {
    title: "VANTA",

    excerpt:
      "SELF-INITIATED / FICTIONAL CAMPAIGN — An athletic campaign exploring movement, performance and urban energy.",

    date: "2026",

    category: "Creative Lab",

    image: "/images/VANTA_01_Billboard_OOH.png",

    href: "#",
  },

  {
    title: "AURA",

    excerpt:
      "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION — An audio campaign exploring atmosphere, focus and everyday escape.",

    date: "2026",

    category: "Creative Lab",

    image: "/images/AURA_01_Billboard_OOH.png",

    href: "#",
  },
] as const;


/* CTA */

export const CTA = {
  headingLine1: "LET'S MAKE",

  headingLine2: "PEOPLE LOOK TWICE",

  blurb:
    "Have a project, opportunity or idea worth talking about? Let's connect.",

  buttonLabel: "GET IN TOUCH",

  buttonHref: "mailto:hello@gauravsinghportfolio.com",

  image: "/images/cta-bg.jpg",
} as const;
