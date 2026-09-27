export const BRAND = {
  name: "GAURAV SINGH",
  wordmark: "GAURAV",
  headlineTop: "MARKETING",
  headlineBottom: "CREATIVE / DIGITAL",
  email: "choudharygaurav924@gmail.com",
  location: "BASED — TORONTO / CANADA",
  availability: "OPEN TO MEANINGFUL CREATIVE OPPORTUNITIES",
  footerNote:
    "I understand marketing strategy, but I also know how to turn ideas into visual experiences.",
  year: 2026,
} as const;

export const HERO = {
  statementStrong:
    "I like figuring out what makes people stop, look twice, and care. Somewhere between strategy, creativity and culture is where I do my best work.",
  statementMuted: "",
} as const;

export const ABOUT = {
  label: "(ABOUT)",
  statementStrong:
    "Marketing strategy with a creative point of view.",
  statementMuted:
    "I turn audience insight into campaigns, outreach systems, content, and experiences people remember.",
} as const;

export const NAV_LINKS = [
  {
    label: "ABOUT",
    ariaLabel: "About Gaurav",
    href: "#about",
  },
  {
    label: "MINDSET",
    ariaLabel: "Marketing mindset",
    href: "#mindset",
  },
  {
    label: "WORK",
    ariaLabel: "Selected work",
    href: "#work",
  },
  {
    label: "LAB",
    ariaLabel: "Creative lab",
    href: "#lab",
  },
  {
    label: "EXPERIENCE",
    ariaLabel: "Experience",
    href: "#experience",
  },
  {
    label: "CONTACT",
    ariaLabel: "Contact Gaurav",
    href: "#contact",
  },
] as const;

export const SOCIALS = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/gauravsingh-c",
  },
  {
    label: "EMAIL",
    href: "mailto:choudharygaurav924@gmail.com",
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
    "Make the idea real across digital, social, outreach, content, and experience.",
  ],
  [
    "05",
    "IMPACT",
    "Measure what moved, learn what matters, and sharpen the next idea.",
  ],
] as const;

export const CREATIVE_LAB = [
  {
    title: "NOVA Coffee Co.",
    line: "SUMMER, SERVED COLD.",
    copy:
      "A self-initiated coffee concept exploring brand positioning, product storytelling, visual direction, and AI-assisted creative production.",
    image: "",
    accent: "nova",
    label: "SELF-INITIATED / FICTIONAL CAMPAIGN",
  },
  {
    title: "VANTA Athletics",
    line: "ENGINEERED TO MOVE.",
    copy:
      "A self-initiated athletic brand concept focused on visual identity, product positioning, campaign language, and movement-driven creative direction.",
    image: "",
    accent: "vanta",
    label: "SELF-INITIATED / FICTIONAL CAMPAIGN",
  },
  {
    title: "AURA Audio",
    line: "ESCAPE THE NOISE.",
    copy:
      "A self-initiated audio brand concept exploring product storytelling, emotional positioning, campaign language, and visual identity.",
    image: "",
    accent: "aura",
    label: "SELF-INITIATED / FICTIONAL CAMPAIGN",
  },
] as const;

/* =========================================================
   SELECTED WORK
   ========================================================= */

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
      "Marketing Team Leader during my college co-op, working across campaign coordination, digital activity, client work, event promotion, content support, and campaign tracking.",
    image: "/images/life-is-a-special-event-cover.png",
    href: "#work",
    year: "REAL WORK",
    tags: [
      "Marketing",
      "Campaigns",
      "Digital / Social",
      "Team Leadership",
    ],
    status: "real",
  },

  {
    index: "02",
    title: "Sheridan / LagerShed",
    blurb:
      "Academic advertising and marketing project shaped through research, audience definition, positioning, campaign strategy, and creative direction.",
    image: "/images/sheridan-lagershed-photo.jpg",
    href: "#work",
    year: "ACADEMIC PROJECT",
    tags: [
      "Research",
      "Audience",
      "Positioning",
      "Campaign Strategy",
      "Creative Direction",
    ],
    status: "academic",
  },
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

    image: "/images/life-is-a-special-event-cover.png",

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

  {
    index: "02",
    anchor: "sheridan-lagershed",
    title: "SHERIDAN / LAGERSHED",
    label: "ACADEMIC PROJECT",
    type: "Advertising / Marketing Strategy",
    role: "ACADEMIC ADVERTISING & MARKETING PROJECT",

    image: "/images/sheridan-lagershed-photo.jpg",

    images: [
      "/images/lagershed-campaign-strategy.png",
      "/images/lagershed-campaign-visuals.png",
    ],

    description:
      "An academic advertising project developed through research, audience analysis, positioning, campaign strategy, and creative direction.",

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
        "An advertising and digital marketing project completed through Sheridan College.",
      ],
      [
        "THE RESEARCH",
        "Used research and audience thinking to understand the market, audience, and communication opportunity.",
      ],
      [
        "THE POSITIONING",
        "Translated the research into a clear audience direction and positioning strategy.",
      ],
      [
        "THE CAMPAIGN",
        "Developed campaign strategy and creative direction from the underlying audience insight.",
      ],
      [
        "THE OUTCOME",
        "A project demonstrating the connection between research, marketing strategy, advertising thinking, and creative execution.",
      ],
    ],
  },
] as const;
