/**
 * GAURAV SINGH PORTFOLIO
 * SINGLE SOURCE OF TRUTH FOR PORTFOLIO CONTENT
 */

export const BRAND = {
  name: "GAURAV",
  wordmark: "GAURAV",
  headlineTop: "MARKETING",
  headlineBottom: "THAT MAKES PEOPLE LOOK TWICE",
  email: "choudharygaurav924@gmail.com",
  phone: "",
  location: "BASED — TORONTO / CANADA",
  timezone: "",
  availability: "Open to meaningful creative opportunities",
  footerNote:
    "Marketing, strategy and creative work built around the things that make people stop, look twice, and care.",
  year: 2026,
} as const;


/* =========================================================
   NAVIGATION
========================================================= */

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


/* =========================================================
   HERO
========================================================= */

export const HERO = {
  base: "/images/hero-base.webp",
  reveal: "/images/hero-reveal.webp",

  statementStrong:
    "I like figuring out what makes people stop, look twice, and care.",

  statementMuted:
    "Somewhere between strategy, creativity and culture is where I do my best work.",
} as const;


/* =========================================================
   ABOUT
========================================================= */

export const ABOUT = {
  label: "(ABOUT)",

  statementStrong:
    "I like figuring out what makes people stop, look twice, and care.",

  statementMuted:
    "Somewhere between strategy, creativity and culture is where I do my best work.",
} as const;


/* =========================================================
   PROJECTS
========================================================= */

export interface Project {
  index: string;
  title: string;
  blurb: string;
  image: string;
  href: string;
  year: string;
  tags: readonly string[];
  caseStudyId: string;
}

export const PROJECTS: readonly Project[] = [
  {
    index: "01",
    title: "SS Traders",
    blurb:
      "Marketing Specialist working on B2B marketing for a wholesale supplier of polycarbonate roofing sheets in Delhi NCR.",
    image: "/images/images.jpeg",
    href: "#work",
    year: "2026 — PRESENT",
    tags: [
      "B2B Marketing",
      "Digital Marketing",
      "Business Development",
    ],
    caseStudyId: "ss-traders",
  },

  {
    index: "02",
    title: "Philer.ai",
    blurb:
      "Marketing Specialist Intern supporting targeted digital outreach and lead-generation work for real estate and mortgage professionals across Ontario and Alberta.",
    image: "/images/philer-ai-cover.png",
    href: "#work",
    year: "2026",
    tags: [
      "Digital Marketing",
      "Outreach",
      "Lead Generation",
    ],
    caseStudyId: "philer-ai",
  },

  {
    index: "03",
    title: "Life Is A Special Event",
    blurb:
      "Marketing Team Leader — Co-op. Led a five-person marketing team across digital campaigns, social media, campaign planning and client-facing creative work.",
    image: "/images/life-special-event-ayurveda-campaign.png",
    href: "#work",
    year: "2025",
    tags: [
      "Marketing",
      "Campaign Strategy",
      "Team Leadership",
    ],
    caseStudyId: "life-is-a-special-event",
  },

  {
    index: "04",
    title: "LagerShed / Sheridan",
    blurb:
      "Academic advertising project built around research, audience understanding, positioning and campaign strategy.",
    image: "/images/sheridan-lagershed-photo.jpg",
    href: "#work",
    year: "2025",
    tags: [
      "Research",
      "Positioning",
      "Campaign Strategy",
    ],
    caseStudyId: "sheridan-lagershed",
  },
] as const;


/* =========================================================
   PROFESSIONAL CASE STUDIES
========================================================= */

export interface CaseStudy {
  id: string;
  year: string;
  title: string;
  label: string;
  type: string;
  role: string;
  image: string;
  images: readonly string[];
  description: string;
  tags: readonly string[];
  story: readonly [string, string][];
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: "ss-traders",
    year: "2026 — PRESENT",
    title: "SS TRADERS",
    label: "PROFESSIONAL WORK",
    type: "B2B Marketing",
    role: "MARKETING SPECIALIST",
    image: "/images/images.jpeg",
    images: [],
    description:
      "B2B marketing work for a wholesale supplier of polycarbonate roofing sheets in Delhi NCR, supporting brand communication, digital marketing and business development.",
    tags: [
      "B2B Marketing",
      "Digital Marketing",
      "Business Development",
    ],
    story: [
      [
        "THE ROLE",
        "Marketing Specialist working across B2B marketing activities for a wholesale supplier of polycarbonate roofing sheets.",
      ],
      [
        "THE BUSINESS",
        "SS Traders operates in the wholesale roofing-materials space, with marketing focused on communicating the business and supporting commercial opportunities.",
      ],
      [
        "THE APPROACH",
        "The work focuses on clear business communication, digital marketing and creating a stronger connection between the product offering and potential business customers.",
      ],
      [
        "THE FOCUS",
        "B2B marketing, digital communication, business development and building a more consistent marketing presence.",
      ],
    ],
  },

  {
    id: "philer-ai",
    year: "2026",
    title: "PHILER.AI",
    label: "PROFESSIONAL WORK",
    type: "Digital Outreach / Lead Generation",
    role: "MARKETING SPECIALIST INTERN",
    image: "/images/philer-ai-cover.png",
    images: [],
    description:
      "A targeted digital outreach and lead-generation workflow built around prospect research, contact organization, engagement tracking, follow-ups, contact validation and CRM-style pipeline management.",
    tags: [
      "5,000+ Outreach",
      "~1,000 Opportunities",
      "CRM",
      "Lead Generation",
      "Follow-up",
    ],
    story: [
      [
        "THE ROLE",
        "Marketing Specialist Intern focused on prospect research, targeted digital outreach, contact organization, engagement tracking, follow-ups and lead-generation support.",
      ],
      [
        "THE AUDIENCE",
        "Real estate agents and mortgage professionals across Ontario and Alberta.",
      ],
      [
        "THE PROCESS",
        "Research relevant prospects, organize contact information, conduct targeted outreach, track engagement, identify follow-up opportunities and maintain structured records throughout the process.",
      ],
      [
        "CRM & TRACKING",
        "Used a structured spreadsheet-based CRM workflow to organize prospects, track outreach status, monitor engagement, validate contact information and manage follow-up activity.",
      ],
      [
        "OUTREACH",
        "Worked across direct digital outreach channels to introduce the company, communicate its value proposition and move relevant prospects toward the next stage of the conversation.",
      ],
      [
        "FOLLOW-UP",
        "Maintained follow-up activity based on engagement and response status rather than treating every prospect as the same.",
      ],
      [
        "RESULT",
        "The workflow supported more than 5,000 targeted outreach interactions and approximately 1,000 client opportunities.",
      ],
    ],
  },

  {
    id: "life-is-a-special-event",
    year: "2025",
    title: "LIFE IS A SPECIAL EVENT",
    label: "PROFESSIONAL WORK",
    type: "Marketing / Campaign Development",
    role: "MARKETING TEAM LEADER — CO-OP",
    image: "/images/life-special-event-ayurveda-campaign.png",
    images: [
      "/images/life-special-event-ayurveda-campaign.png",
      "/images/life-special-event-campaign-tracking.png",
      "/images/life-special-event-melissa-article.png",
    ],
    description:
      "A marketing co-op experience focused on campaign coordination, digital and social activity, client work, event promotion, content support and campaign tracking across multiple initiatives.",
    tags: [
      "Digital / Social",
      "Campaign Coordination",
      "Campaign Tracking",
      "Team Leadership",
    ],
    story: [
      [
        "THE ROLE",
        "Marketing Team Leader during my college co-op, working across campaign coordination, digital activity, client work, event promotion, content support and campaign tracking.",
      ],
      [
        "THE TEAM",
        "Led and coordinated a five-person marketing team while keeping campaign tasks, deliverables and timelines organized.",
      ],
      [
        "THE APPROACH",
        "Connected campaign planning, social activity, client work, event promotion and performance tracking into an organized workflow.",
      ],
      [
        "THE WORK",
        "Supported multiple marketing initiatives, including client-facing content, social activity, event promotion and campaign tracking.",
      ],
      [
        "CAMPAIGN OUTCOME",
        "The Ayurveda event campaign sold out.",
      ],
    ],
  },

  {
    id: "sheridan-lagershed",
    year: "2025",
    title: "SHERIDAN / LAGERSHED",
    label: "ACADEMIC PROJECT",
    type: "Advertising / Marketing Strategy",
    role: "ADVERTISING & DIGITAL MARKETING PROJECT",
    image: "/images/sheridan-lagershed-photo.jpg",
    images: [
      "/images/lagershed-campaign-strategy.png",
      "/images/lagershed-campaign-visuals.png",
    ],
    description:
      "An academic advertising project developed through research, audience analysis, competitive thinking, positioning, campaign strategy and creative direction.",
    tags: [
      "Research",
      "Audience",
      "Positioning",
      "Campaign Strategy",
      "Creative Direction",
    ],
    story: [
      [
        "THE PROJECT",
        "A Sheridan College advertising and digital marketing project developed around LagerShed.",
      ],
      [
        "RESEARCH",
        "Investigated the category, audience, competitive environment and context surrounding the brand opportunity.",
      ],
      [
        "AUDIENCE",
        "Focused on Millennial and Gen Z drinkers, urban audiences, casual workers and craft beer lovers.",
      ],
      [
        "POSITIONING",
        "Developed a direction connecting the brand, audience, local authenticity, product quality and the overall brand story.",
      ],
      [
        "COMPETITION",
        "Considered the competitive environment and identified relevant Ontario premium-lager competitors.",
      ],
      [
        "CREATIVE DIRECTION",
        "Translated the strategy into campaign visuals and advertising concepts designed around the audience and positioning.",
      ],
    ],
  },
] as const;


/* =========================================================
   EXPERIENCE / STATS
========================================================= */

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


/* =========================================================
   FEATURED PERSPECTIVE
========================================================= */

export const FEATURED_TESTIMONIAL = {
  quote:
    "Somewhere between strategy, creativity and culture is where I do my best work.",
  author: "Gaurav Singh",
  role: "Marketing Specialist",
  avatar: "/images/life_is_a_special_event_logo.jpeg",
  image: "/images/life-special-event-ayurveda-campaign.png",
} as const;


/* =========================================================
   SERVICES
========================================================= */

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


/* =========================================================
   PROCESS
========================================================= */

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


/* =========================================================
   TESTIMONIALS / SELECTED EXPERIENCE
========================================================= */

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
    avatar: "/images/images.jpeg",
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


/* =========================================================
   PRICING
========================================================= */

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


/* =========================================================
   FAQ
========================================================= */

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


/* =========================================================
   PERSONAL / CREATIVE LAB
   SELF-INITIATED / FICTIONAL
========================================================= */

export interface CreativeCaseStudy {
  id: string;
  title: string;
  tagline: string;
  label: string;
  approach: string;
  description: string;
  images: readonly string[];
  tags: readonly string[];
  story: readonly [string, string][];
}

export const CREATIVE_CASE_STUDIES: readonly CreativeCaseStudy[] = [
  {
    id: "aura",
    title: "AURA Audio",
    tagline: "ESCAPE THE NOISE.",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
    approach:
      "Atmosphere, emotional positioning and visual storytelling.",
    description:
      "A self-initiated audio brand concept exploring product storytelling, emotional positioning, campaign language and visual identity.",
    images: [
      "/images/AURA_01_Billboard_OOH.png",
      "/images/AURA_02_Instagram_Post.png",
      "/images/AURA_03_Instagram_Story.png",
      "/images/AURA_04_In_Store_Display.png",
      "/images/AURA_05_Street_OOH.png",
      "/images/AURA_06_Poster_Print.png",
    ],
    tags: [
      "Brand Concept",
      "Campaign Direction",
      "OOH",
      "Social",
      "AI-Assisted",
    ],
    story: [
      [
        "THE IDEA",
        "Build an audio brand around the emotional need to disconnect from noise and create a sense of personal escape.",
      ],
      [
        "THE DIRECTION",
        "Use a restrained, atmospheric visual language with strong typography and campaign-led product storytelling.",
      ],
      [
        "THE SYSTEM",
        "Extend one central campaign idea across outdoor, social, in-store and print formats.",
      ],
      [
        "THE PRODUCTION",
        "AI-assisted creative production was used to develop and visualize the campaign executions.",
      ],
    ],
  },

  {
    id: "vanta",
    title: "VANTA Athletics",
    tagline: "ENGINEERED TO MOVE.",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
    approach:
      "Performance positioning, movement and campaign-driven art direction.",
    description:
      "A self-initiated athletic brand concept focused on visual identity, product positioning, campaign language and movement-driven creative direction.",
    images: [
      "/images/VANTA_01_Billboard_OOH.png",
      "/images/VANTA_02_Instagram_Post.png",
      "/images/VANTA_03_Instagram_Story.png",
      "/images/VANTA_04_In_Store_Display.png",
      "/images/VANTA_05_Poster_Print.png",
      "/images/VANTA_06_Street_OOH.png",
    ],
    tags: [
      "Brand Concept",
      "Campaign Direction",
      "Performance",
      "OOH",
      "Social",
    ],
    story: [
      [
        "THE IDEA",
        "Create an athletic brand world built around movement, performance and a strong contemporary visual identity.",
      ],
      [
        "THE POSITIONING",
        "Position the brand around the idea of engineered movement and performance without overcomplicating the message.",
      ],
      [
        "THE DIRECTION",
        "Use bold typography, product-focused visuals and movement-led compositions to create a consistent campaign language.",
      ],
      [
        "THE SYSTEM",
        "Develop the concept across billboard, social, retail, poster and street formats.",
      ],
    ],
  },

  {
    id: "nova",
    title: "NOVA Coffee Co.",
    tagline: "SUMMER, SERVED COLD.",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
    approach:
      "Seasonal positioning, lifestyle storytelling and a blue summer visual language.",
    description:
      "A self-initiated coffee concept exploring brand positioning, product storytelling, visual direction and AI-assisted creative production.",
    images: [
      "/images/01_NOVA_OOH_Billboard_01.png",
      "/images/02_NOVA_Lifestyle_Ad.png",
      "/images/03_NOVA_OOH_Billboard_02.png",
      "/images/04_NOVA_Transit_OOH.png",
      "/images/05_NOVA_OOH_Billboard_03.png",
      "/images/06_NOVA_OOH_Billboard_04.png",
    ],
    tags: [
      "Brand Concept",
      "Seasonal Campaign",
      "Lifestyle",
      "OOH",
      "AI-Assisted",
    ],
    story: [
      [
        "THE IDEA",
        "Create a summer coffee campaign built around refreshment, lifestyle and the feeling of serving summer cold.",
      ],
      [
        "THE VISUAL LANGUAGE",
        "A blue summer visual direction gives the campaign a recognizable seasonal identity across every execution.",
      ],
      [
        "THE CAMPAIGN",
        "The central idea was translated into billboard, lifestyle and transit executions.",
      ],
      [
        "THE PRODUCTION",
        "AI-assisted creative production was used to explore and visualize the campaign executions.",
      ],
    ],
  },
] as const;


/* =========================================================
   LEGACY CREATIVE LAB EXPORT
   Kept so existing components continue to compile.
========================================================= */

export const CREATIVE_LAB = [
  {
    title: "NOVA Coffee Co.",
    line: "SUMMER, SERVED COLD.",
    copy:
      "A self-initiated coffee concept exploring brand positioning, product storytelling, visual direction and AI-assisted creative production.",
    image: "/images/01_NOVA_OOH_Billboard_01.png",
    accent: "nova",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },

  {
    title: "VANTA Athletics",
    line: "ENGINEERED TO MOVE.",
    copy:
      "A self-initiated athletic brand concept focused on visual identity, product positioning, campaign language and movement-driven creative direction.",
    image: "/images/VANTA_01_Billboard_OOH.png",
    accent: "vanta",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },

  {
    title: "AURA Audio",
    line: "ESCAPE THE NOISE.",
    copy:
      "A self-initiated audio brand concept exploring product storytelling, emotional positioning, campaign language and visual identity.",
    image: "/images/AURA_01_Billboard_OOH.png",
    accent: "aura",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },
] as const;


/* =========================================================
   POSTS
========================================================= */

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


/* =========================================================
   CTA
========================================================= */

export const CTA = {
  headingLine1: "LET'S MAKE",
  headingLine2: "PEOPLE LOOK TWICE",
  blurb:
    "Have a project, opportunity or idea worth talking about? Let's connect.",
  buttonLabel: "GET IN TOUCH",
  buttonHref: "mailto:hello@gauravsinghportfolio.com",
  image: "/images/cta-bg.jpg",
} as const;
