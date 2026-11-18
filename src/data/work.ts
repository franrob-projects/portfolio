export type Discipline = 'Web' | 'CRM' | 'Content';

export interface Sample {
  title: string;
  caption: string;
  image?: string;
  href?: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  disciplines: Discipline[];
  tags: string[];
  role: string;
  period?: string;
  links: { label: string; href: string }[];
  sections: { heading: string; body: string[] }[];
  /** Visual samples. The gallery only renders when this has entries. */
  samples?: Sample[];
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'ably',
    title: 'Ably',
    kicker: 'Docs, navigation and product marketing pages for a realtime platform',
    summary:
      "I redesigned and built Ably's documentation, including its navigation, and the product marketing pages for LiveSync and LiveObjects, plus the pricing page: one connected experience from first visit to production.",
    disciplines: ['Web', 'Content'],
    tags: [
      'Information architecture',
      'Navigation design',
      'Product marketing pages',
      'Pricing page',
      'Next.js / MDX',
    ],
    role: 'Developer Educator and Docs Engineer',
    period: 'Aug 2023 onwards',
    links: [
      { label: 'Docs', href: 'https://ably.com/docs' },
      { label: 'Pricing', href: 'https://ably.com/pricing' },
      { label: 'LiveSync', href: 'https://ably.com/livesync' },
      { label: 'LiveObjects', href: 'https://ably.com/liveobjects' },
    ],
    sections: [
      {
        heading: 'The brief',
        body: [
          'Realtime messaging is a considered purchase. Developers weigh building it themselves against buying it, so every page has to say what a product is, who it is for and what happens next, whether the reader arrives from a search, the docs or the pricing page.',
        ],
      },
      {
        heading: 'Docs and navigation',
        body: [
          'The docs home organises the platform around six products (Pub/Sub, Chat, AI Transport, Spaces, LiveObjects, LiveSync) with a one-line promise each, then routes people to tooling, examples and the changelog. Top-level tabs for Platform, Products and Examples replaced navigation that mirrored internal team boundaries.',
        ],
      },
      {
        heading: 'Product marketing pages',
        body: [
          'LiveSync and LiveObjects follow one page system: a plain-language headline, proof stats, three value pillars, a feature grid, customer quotes, cross-sell to the rest of the suite, a pricing teaser and a closing call to action. Each page keeps a primary and secondary action in every major section.',
        ],
      },
      {
        heading: 'Pricing',
        body: [
          'The pricing page leads with a monthly-active-user slider so each tier updates as the reader scales, then four plan cards, a full comparison table grouped by theme, and FAQs that answer the objections sales used to hear.',
        ],
      },
      {
        heading: 'How it shipped',
        body: [
          'The site moved from a Textile content system to Next.js, TypeScript and MDX. I worked in that stack directly, so copy, layout and components shipped together.',
        ],
      },
    ],
    samples: [
      {
        title: 'Docs home',
        caption: 'Six products, tooling, examples and changelog.',
        href: 'https://ably.com/docs',
      },
      {
        title: 'Pricing',
        caption: 'MAU slider, plan cards and comparison table.',
        href: 'https://ably.com/pricing',
      },
      {
        title: 'LiveSync',
        caption: 'Database-to-device product page.',
        href: 'https://ably.com/livesync',
      },
      {
        title: 'LiveObjects',
        caption: 'Shared application state product page.',
        href: 'https://ably.com/liveobjects',
      },
    ],
  },
  {
    slug: 'conply',
    title: 'Conply',
    kicker: 'Compliance training SaaS for regulated firms',
    summary:
      'A B2B platform that delivers compliance training to GFSC-regulated iGaming and DLT firms in Gibraltar and CSSF-regulated firms in Luxembourg. I designed the product site, the content system and the outreach pipeline.',
    disciplines: ['Web', 'CRM', 'Content'],
    tags: ['Next.js', 'Supabase', 'Prisma', 'Slack bot', 'MDX'],
    role: 'Founder, design and build',
    links: [
      { label: 'conply.org', href: 'https://conply.org' },
      {
        label: 'Gamification layer on GitHub',
        href: 'https://github.com/franrob-projects/securetrain-gamification',
      },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Generic e-learning does not survive an inspection. Regulators test local statutory knowledge, so the training has to reference the legislation that actually applies to the firm.',
        ],
      },
      {
        heading: 'Web',
        body: [
          'A marketing site and product app on Next.js, with an MDX blog for search-led content and a one-page summary for prospects who will not read a site.',
        ],
      },
      {
        heading: 'CRM and delivery',
        body: [
          'A prospect outreach pipeline for Gibraltar firms and a Slack bot that delivers training where staff already work. A gamification layer adds streaks, badges and a team leaderboard with a composite risk score.',
        ],
      },
      {
        heading: 'Content',
        body: [
          'Modules for AML, DLT regulatory principles, responsible gambling, KYC, POCA, market abuse, senior manager obligations and GDPR, each written against Gibraltar legislation rather than adapted international templates.',
        ],
      },
    ],
  },
  {
    slug: 'viki',
    title: 'VIKI',
    kicker: 'An AI-powered business operating system',
    summary:
      'A hub-and-spoke business OS that replaces a fragmented SaaS stack. Built with my collaborator Álvaro. I lead the dashboard design, the documentation site and the bilingual content.',
    disciplines: ['Web', 'CRM', 'Content'],
    tags: ['Product design', 'Dashboard UX', 'Docusaurus', 'Bilingual content'],
    role: 'Co-builder: design, docs and content',
    links: [{ label: 'okviki.com', href: 'https://okviki.com' }],
    sections: [
      {
        heading: 'The product',
        body: [
          'One hub with spokes for time tracking, reports, autopilot, activity, marketing and admin, with contextual alerts that surface what needs attention instead of making people go looking.',
        ],
      },
      {
        heading: 'Design',
        body: [
          'The dashboard redesign aims for minimal clutter, strong visual hierarchy and generous spacing, in the spirit of the best developer-tool dashboards. Each module follows one layout system so the hub feels like a single product.',
        ],
      },
      {
        heading: 'Content and docs',
        body: [
          'VIKI-Docs is a Docusaurus site on Vercel, planned to live at okviki.com/docs. I also produce the technical diagrams, the AI tagging system for content, and English and Spanish copy.',
        ],
      },
    ],
  },
  {
    slug: 'web-design',
    title: 'Web design',
    kicker: 'Marketing sites and landing pages',
    summary:
      'Sites built to make one point clearly and convert: a regulatory training site, a programme landing page, and a growing set of regulation-support sites for the iGaming sector.',
    disciplines: ['Web'],
    tags: ['React', 'Next.js', 'Tailwind', 'Vite', 'Accessibility'],
    role: 'Designer and developer',
    links: [
      { label: 'GibTrain', href: 'https://franrob-projects.github.io/gibraltar-compliance/' },
      { label: 'TeachYAR', href: 'https://github.com/franrob-projects/teachyar' },
    ],
    sections: [
      {
        heading: 'Approach',
        body: [
          'Each site starts with the single decision the visitor has to make, then removes everything that does not help them make it. Copy, layout and component design are done together so the page reads as one argument.',
        ],
      },
      {
        heading: 'Selected sites',
        body: [
          'GibTrain: a Gibraltar compliance training site that argues local statute matters. TeachYAR: a Next.js landing page for a pre-service education programme for 16 to 19 year olds. Plus the UKGC support sites on the Work page.',
        ],
      },
    ],
  },
];

export interface SupportSite {
  name: string;
  market: string;
  pitch: string;
  status: 'In build' | 'Live';
  href?: string;
}

export const SUPPORT_SITES: SupportSite[] = [
  {
    name: 'SafePlay Desk',
    market: 'UKGC',
    pitch:
      'Safer gambling and customer interaction toolkit: markers of harm, affordability triggers and intervention scripts mapped to the Licence Conditions and Codes of Practice.',
    status: 'In build',
  },
  {
    name: 'LicenceReady',
    market: 'UKGC',
    pitch:
      'LCCP licence-readiness workspace: a gap checklist, evidence tracker and audit pack for operators preparing for or maintaining a UK licence.',
    status: 'In build',
  },
];

export interface LivePage {
  name: string;
  what: string;
  href: string;
}

/** Pages I redesigned and built at Ably, live on ably.com. */
export const ABLY_LIVE_PAGES: LivePage[] = [
  { name: 'Docs', what: 'Redesigned docs home and navigation', href: 'https://ably.com/docs' },
  {
    name: 'Pricing',
    what: 'MAU slider, plan cards, comparison table',
    href: 'https://ably.com/pricing',
  },
  { name: 'LiveSync', what: 'Product marketing page', href: 'https://ably.com/livesync' },
  { name: 'LiveObjects', what: 'Product marketing page', href: 'https://ably.com/liveobjects' },
];
