export const BRAND = {
  name: "GAURAV SINGH",
  wordmark: "GAURAV",
  headlineTop: "MARKETING",
  headlineBottom: "CREATIVE / DIGITAL",
  email: "choudharygaurav924@gmail.com",
  phone: "",
  location: "BASED — TORONTO / CANADA",
  timezone: "",
  availability: "Open to meaningful creative opportunities",
  footerNote:
    "I understand marketing strategy, but I also know how to turn ideas into visual experiences.",
  year: 2026,
} as const;

export const HERO = {
  statementStrong:
    "I like figuring out what makes people stop, look twice, and care.",
  statementMuted:
    "Somewhere between strategy, creativity and culture is where I do my best work.",
} as const;

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
    ariaLabel: "Go to the about section",
  },
  {
    label: "Mindset",
    href: "#mindset",
    ariaLabel: "Read my marketing mindset",
  },
  {
    label: "Work",
    href: "#work",
    ariaLabel: "See selected work",
  },
  {
    label: "Lab",
    href: "#lab",
    ariaLabel: "See self-initiated campaigns",
  },
  {
    label: "Resume",
    href: "#resume",
    ariaLabel: "View experience and resume",
  },
  {
    label: "Contact",
    href: "#contact",
    ariaLabel: "Get in touch",
  },
] as const;

export const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
  },
] as const;

export const ABOUT = {
  label: "(ABOUT)",
  statementStrong:
    "Marketing strategy with a creative point of view.",
  statementMuted:
    "I turn audience insight into campaigns, content, and experiences people remember.",
} as const;

export const CREATIVE_LAB = [
  {
    title: "NOVA Coffee Co.",
    line: "SUMMER, SERVED COLD.",
    copy:
      "Meet your new summer obsession. NOVA COLD BREW — Smooth. Bold. Ice-cold. Made for slow afternoons, long drives & hot days.",
    image: "",
    accent: "nova",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },
  {
    title: "VANTA Athletics",
    line: "ENGINEERED TO MOVE.",
    copy:
      "MOVE YOUR WAY. BUILT FOR THE EVERYDAY ATHLETE.",
    image: "",
    accent: "vanta",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },
  {
    title: "AURA Audio",
    line: "ESCAPE THE NOISE.",
    copy:
      "FIND YOUR FREQUENCY. IMMERSIVE SOUND. ZERO DISTRACTIONS. YOUR WORLD. YOUR SOUND.",
    image: "",
    accent: "aura",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },
] as const;

export const CREATIVE_SYSTEM = [
  [
    "01",
    "INSIGHT",
    "Start with the audience, the tension, and the truth behind the brief.",
  ],
  [
    "02",
    "STRATEGY",
    "Find the sharpest direction and the reason for people to care.",
  ],
  [
    "03",
    "CONCEPT",
    "Turn the strategy into a big idea with a distinct point of view.",
  ],
  [
    "04",
    "EXECUTION",
    "Make the idea real across content, digital, social, and experience.",
  ],
  [
    "05",
    "IMPACT",
    "Measure what moved, learn what matters, and sharpen the next idea.",
  ],
] as const;

export const CASE_STUDIES = [
  {
    index: "01",
    anchor: "life-is-a-special-event",
    title: "LIFE IS A SPECIAL EVENT",
    label: "REAL WORK",
    type: "Marketing / Campaign Development",
    role: "MARKETING TEAM LEADER — CO-OP",

    image: "/images/life-special-event-portfolio-collage.png",

    images: [
      "/images/life-special-event-portfolio-collage.png",
      "/images/life-special-event-melissa-article.png",
      "/images/life-special-event-ayurveda-campaign.png",
      "/images/life-special-event-campaign-tracking.png",
    ],

    description:
      "A campaign-led marketing role built around coordination, digital and social activity, client work, event promotion, and campaign tracking across multiple initiatives.",

    tags: [
      "Digital / Social",
      "Campaign Tracking",
      "Client Work",
      "Team Leadership",
    ],

    story: [
      [
        "THE ROLE",
        "Marketing Team Leader during my college co-op, working across campaign development, digital activity, client work, event promotion, and coordination.",
      ],
      [
        "THE CHALLENGE",
        "Coordinate multiple campaigns and keep the work moving across a five-person marketing team.",
      ],
      [
        "THE APPROACH",
        "Connect campaign planning, digital activity, event promotion, content, and campaign tracking into an organized marketing workflow.",
      ],
    ],
  },

  {
    index: "02",
    anchor: "philer-ai",
    title: "PHILER.AI",
    label: "REAL WORK",
    type: "Digital Outreach / Lead Generation",
    role: "MARKETING SPECIALIST INTERN",

    image: "/images/philer-outreach.png",

    images: [
      "/images/philer-outreach.png",
      "/images/philer-crm.png",
      "/images/philer-follow-up.png",
      "/images/philer-strategy.png",
    ],

    description:
      "A hands-on digital outreach and lead-generation role focused on prospect research, targeted communication, CRM organization, follow-up systems, contact validation, and business-development support.",

    tags: [
      "5,000+ Outreach",
      "~1,000 Opportunities",
      "CRM Management",
      "Lead Generation",
      "Prospect Research",
      "Follow-Up Systems",
    ],

    story: [
      [
        "THE ROLE",
        "Marketing Specialist Intern focused on digital outreach, prospect research, lead generation, CRM organization, follow-up, and business-development support.",
      ],
      [
        "THE AUDIENCE",
        "Real estate agents and mortgage professionals across Ontario and Alberta.",
      ],
      [
        "THE WORKFLOW",
        "Research prospects, organize contact information, conduct targeted outreach, track engagement, manage follow-ups, validate contact data, and move qualified prospects toward the next step.",
      ],
      [
        "THE SYSTEM",
        "Used spreadsheets and CRM-style tracking to organize prospects, outreach status, engagement, contact validation, and follow-up activity.",
      ],
    ],
  },

  {
    index: "03",
    anchor: "sheridan-lagershed",
    title: "SHERIDAN / LAGERSHED",
    label: "ACADEMIC PROJECT",
    type: "Advertising / Marketing Strategy",
    role: "ACADEMIC ADVERTISING & MARKETING PROJECT",

    image: "/images/lagershed-campaign-strategy.png",

    images: [
      "/images/lagershed-campaign-strategy.png",
      "/images/lagershed-campaign-visuals.png",
    ],

    description:
      "An academic advertising project developed through research, audience thinking, positioning, campaign strategy, and creative direction.",

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
        "Investigate the category, audience, competitive environment, and context around the opportunity.",
      ],
      [
        "AUDIENCE",
        "Define who the campaign needs to reach and what matters to them.",
      ],
      [
        "POSITIONING",
        "Develop a clear direction that connects the brand, audience, and campaign idea.",
      ],
      [
        "CREATIVE DIRECTION",
        "Translate the strategy into campaign visuals and advertising concepts.",
      ],
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    period: "AUG 2026 — PRESENT",
    company: "SS TRADERS",
    role: "MARKETING SPECIALIST",
    location: "DELHI, INDIA — REMOTE",
    description:
      "B2B marketing for a wholesale supplier of polycarbonate roofing sheets, supporting brand communication, digital marketing, and business development.",
    tags: [
      "B2B Marketing",
      "Digital Marketing",
      "Business Development",
    ],
  },

  {
    period: "JAN 2026 — APR 2026",
    company: "PHILER.AI",
    role: "MARKETING SPECIALIST INTERN",
    location: "ONTARIO, CANADA",
    description:
      "Built targeted outreach and follow-up systems for real estate and mortgage professionals, using direct outreach, CRM tracking, prospect research, contact validation, and lead-generation workflows.",
    tags: [
      "5,000+ Outreach",
      "~1,000 Opportunities",
      "CRM",
      "Lead Generation",
      "Prospect Research",
    ],
  },

  {
    period: "JAN 2025 — APR 2025",
    company: "LIFE IS A SPECIAL EVENT",
    role: "MARKETING TEAM LEADER — CO-OP",
    location: "ONTARIO, CANADA",
    description:
      "Led a five-person marketing team across digital campaigns, content, client work, campaign tracking, and event promotion.",
    tags: [
      "Team Leadership",
      "Campaigns",
      "Social Media",
      "Content",
    ],
  },

  {
    period: "2022 — 2025",
    company: "SHERIDAN COLLEGE",
    role: "ADVERTISING & DIGITAL MARKETING",
    location: "ONTARIO, CANADA",
    description:
      "Advanced Diploma focused on advertising, digital marketing, strategic media planning, campaign strategy, creative direction, and marketing analytics.",
    tags: [
      "Advertising",
      "Digital Marketing",
      "Strategy",
      "Analytics",
    ],
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

export const FAQ: readonly FaqItem[] = [];
