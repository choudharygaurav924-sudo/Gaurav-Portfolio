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
    "I turn audience insight into campaigns, outreach systems, content, and experiences people remember.",
} as const;

/* =========================================================
   CREATIVE LAB
   SELF-INITIATED / FICTIONAL WORK
========================================================= */

export const CREATIVE_LAB = [
  {
    title: "NOVA Coffee Co.",
    line: "SUMMER, SERVED COLD.",
    copy:
      "A self-initiated coffee concept exploring brand positioning, product storytelling, visual direction, and AI-assisted creative production.",
    image: "",
    accent: "nova",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },
  {
    title: "VANTA Athletics",
    line: "ENGINEERED TO MOVE.",
    copy:
      "A self-initiated athletic brand concept focused on visual identity, product positioning, campaign language, and movement-driven creative direction.",
    image: "",
    accent: "vanta",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },
  {
    title: "AURA Audio",
    line: "ESCAPE THE NOISE.",
    copy:
      "A self-initiated audio brand concept exploring product storytelling, emotional positioning, campaign language, and visual identity.",
    image: "",
    accent: "aura",
    label: "SELF-INITIATED / AI-ASSISTED CREATIVE PRODUCTION",
  },
] as const;

/* =========================================================
   CREATIVE SYSTEM
========================================================= */

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
    "Make the idea real across digital, social, outreach, content, and experience.",
  ],
  [
    "05",
    "IMPACT",
    "Measure what moved, learn what matters, and sharpen the next idea.",
  ],
] as const;

/* =========================================================
   CASE STUDIES
========================================================= */

export const CASE_STUDIES = [
  {
    index: "01",
    anchor: "life-is-a-special-event",

    title: "LIFE IS A SPECIAL EVENT",
    label: "REAL WORK",
    type: "Marketing / Campaign Development",
    role: "MARKETING TEAM LEADER — CO-OP",

    /* MAIN WORK PAGE IMAGE */
    image: "/images/life-is-a-special-event-cover.png",

    /* INSIDE CASE STUDY */
    images: [
      "/images/life-special-event-portfolio-collage.png",
      "/images/life-special-event-melissa-article.png",
      "/images/life-special-event-ayurveda-campaign.png",
      "/images/life-special-event-campaign-tracking.png",
    ],

    description:
      "A marketing co-op experience focused on campaign coordination, digital and social activity, client work, event promotion, content support, and campaign tracking across multiple initiatives.",

    tags: [
      "Digital / Social",
      "Campaign Coordination",
      "Campaign Tracking",
      "Team Leadership",
    ],

    story: [
      [
        "THE ROLE",
        "Marketing Team Leader during my college co-op, working across campaign coordination, digital activity, client work, event promotion, content support, and campaign tracking.",
      ],
      [
        "THE TEAM",
        "Led and coordinated a five-person marketing team while keeping campaign tasks, deliverables, and timelines organized.",
      ],
      [
        "THE APPROACH",
        "Connected campaign planning, social activity, client work, event promotion, and performance tracking into an organized workflow.",
      ],
      [
        "THE WORK",
        "Supported multiple marketing initiatives, including client-facing content, social activity, event promotion, and campaign tracking.",
      ],
    ],
  },

  /* =====================================================
     PHILER.AI
     ===================================================== */

  {
    index: "02",
    anchor: "philer-ai",

    title: "PHILER.AI",
    label: "REAL WORK",
    type: "Digital Outreach / Lead Generation",
    role: "MARKETING SPECIALIST INTERN",

    /* MAIN WORK PAGE IMAGE */
    image: "/images/philer-ai-cover.png",

    /* INSIDE CASE STUDY VISUALS */
    images: [
      "/images/philer-outreach.png",
      "/images/philer-crm.png",
      "/images/philer-follow-up.png",
      "/images/philer-strategy.png",
    ],

    description:
      "A targeted digital outreach and lead-generation workflow built around prospect research, contact organization, engagement tracking, follow-ups, and CRM-style pipeline management.",

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
        "Marketing Specialist Intern focused on prospect research, targeted digital outreach, contact organization, engagement tracking, follow-ups, and lead-generation support.",
      ],
      [
        "THE AUDIENCE",
        "Real estate agents and mortgage professionals across Ontario and Alberta.",
      ],
      [
        "THE PROCESS",
        "Research relevant prospects, organize contact information, conduct targeted outreach, track engagement, identify follow-up opportunities, and maintain structured records throughout the process.",
      ],
      [
        "CRM & TRACKING",
        "Used structured spreadsheet-based CRM workflows to organize prospects, track outreach status, monitor engagement, validate contact information, and manage follow-up activity.",
      ],
      [
        "OUTREACH",
        "Worked across direct digital outreach channels to introduce the company, communicate the value proposition, and move relevant prospects toward the next stage of the conversation.",
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

  /* =====================================================
     SHERIDAN / LAGERSHED
     ===================================================== */

  {
    index: "03",
    anchor: "sheridan-lagershed",

    title: "SHERIDAN / LAGERSHED",
    label: "ACADEMIC PROJECT",
    type: "Advertising / Marketing Strategy",
    role: "ACADEMIC ADVERTISING & MARKETING PROJECT",

    /* MAIN WORK PAGE IMAGE */
    image: "/images/sheridan-lagershed-photo.jpg",

    /* INSIDE CASE STUDY */
    images: [
      "/images/lagershed-campaign-strategy.png",
      "/images/lagershed-campaign-visuals.png",
    ],

    description:
      "An academic advertising project developed through research, audience analysis, competitive thinking, positioning, campaign strategy, and creative direction.",

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
        "Investigated the category, audience, competitive environment, and context surrounding the brand opportunity.",
      ],
      [
        "AUDIENCE",
        "Focused on Millennial and Gen Z drinkers, urban audiences, casual workers, and craft beer lovers.",
      ],
      [
        "POSITIONING",
        "Developed a direction connecting the brand, audience, local authenticity, product quality, and the overall brand story.",
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
   EXPERIENCE
========================================================= */

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
      "Worked on targeted prospect research, digital outreach, CRM organization, engagement tracking, contact validation, follow-ups, and lead-generation support for real estate and mortgage professionals.",

    tags: [
      "Prospect Research",
      "5,000+ Outreach",
      "CRM",
      "Lead Generation",
      "Follow-up",
    ],
  },

  {
    period: "JAN 2025 — APR 2025",
    company: "LIFE IS A SPECIAL EVENT",
    role: "MARKETING TEAM LEADER — CO-OP",
    location: "ONTARIO, CANADA",

    description:
      "Led a five-person marketing team across campaign coordination, digital and social activity, client work, event promotion, and campaign tracking.",

    tags: [
      "Team Leadership",
      "Campaigns",
      "Social Media",
      "Campaign Tracking",
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

export const POSTS: readonly Post[] = [];

/* =========================================================
   FAQ
========================================================= */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: readonly FaqItem[] = [];
