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
    image: "/images/service-1.jpg",
    accent: "nova",
  },
  {
    title: "VANTA Athletics",
    line: "ENGINEERED TO MOVE.",
    copy:
      "MOVE YOUR WAY. BUILT FOR THE EVERYDAY ATHLETE.",
    image: "/images/service-2.jpg",
    accent: "vanta",
  },
  {
    title: "AURA Audio",
    line: "ESCAPE THE NOISE.",
    copy:
      "FIND YOUR FREQUENCY. IMMERSIVE SOUND. ZERO DISTRACTIONS. YOUR WORLD. YOUR SOUND.",
    image: "/images/service-3.jpg",
    accent: "aura",
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

/*
|--------------------------------------------------------------------------
| SELECTED WORK
|--------------------------------------------------------------------------
|
| These three projects are the primary case studies.
|
| 01 — Professional co-op work
| 02 — Professional internship work
| 03 — Academic project
|
| The current image paths are temporary placeholders from the existing
| portfolio structure. We will replace them with the polished portfolio
| visuals once those assets are prepared.
|
*/

export const CASE_STUDIES = [
  {
    index: "01",
    anchor: "life-is-a-special-event",
    title: "LIFE IS A SPECIAL EVENT",
    label: "REAL WORK",
    type: "Marketing / Campaign Development",
    role: "MARKETING TEAM LEADER — CO-OP",
    image: "/images/work-1.jpg",

    description:
      "A campaign-led marketing role built around coordination, content, client work, event promotion, and campaign tracking across multiple digital and social initiatives.",

    tags: [
      "Digital / Social",
      "Campaign Tracking",
      "Content / Client Work",
      "Team Leadership",
    ],

    story: [
      [
        "THE ROLE",
        "Marketing Team Leader during my college co-op, working across campaign development, content, digital activity, client work, event promotion, and coordination.",
      ],
      [
        "THE CHALLENGE",
        "Coordinate multiple campaigns and keep the work moving across a five-person marketing team.",
      ],
      [
        "THE APPROACH",
        "Connect campaign planning, content development, social activity, event promotion, and campaign tracking into an organized marketing workflow.",
      ],
    ],
  },

  {
    index: "02",
    anchor: "philer-ai",
    title: "PHILER.AI",
    label: "REAL WORK",
    type: "Digital Marketing / Lead Generation",
    role: "MARKETING SPECIALIST INTERN",
    image: "/images/work-2.jpg",

    description:
      "An outreach and follow-up system for a real estate and mortgage audience, combining targeted communication, lead generation, CRM tracking, campaign support, and event promotion.",

    tags: [
      "5,000+ Outreach",
      "~1,000 Opportunities",
      "Google Sheets CRM",
      "Lead Generation",
    ],

    story: [
      [
        "THE ROLE",
        "Marketing Specialist Intern focused on digital outreach, lead generation, follow-up, CRM organization, campaign support, and event promotion.",
      ],
      [
        "THE AUDIENCE",
        "Real estate and mortgage professionals across Ontario and Alberta.",
      ],
      [
        "THE APPROACH",
        "Build a repeatable outreach and follow-up system using targeted communication, Google Sheets CRM tracking, campaign support, and event promotion.",
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
    image: "/images/work-3.jpg",

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
      "Built targeted outreach and follow-up systems for real estate and mortgage professionals, using direct outreach, CRM tracking, campaign support, and event promotion.",
    tags: [
      "5,000+ Outreach",
      "~1,000 Opportunities",
      "CRM",
      "Lead Generation",
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
