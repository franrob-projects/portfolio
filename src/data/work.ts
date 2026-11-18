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
  image?: string;
  /** Sites with a built version get a project page with a link to the working site. */
  kind?: 'concept';
  status?: 'Live';
  wire?: 'docs' | 'pricing' | 'landing' | 'product';
  /** Optional CRM pipeline mock with fictional sample data. */
  pipeline?: { stages: { name: string; cards: { title: string; meta: string }[] }[]; note: string };
  /** Optional tone examples: message templates written in this case study's voice. */
  templates?: { label: string; text: string }[];
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'ably',
    image: '/portfolio/img/work/ably-docs.jpg',
    wire: 'docs',
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
        image: '/portfolio/img/work/ably-docs.jpg',
      },
      {
        title: 'Pricing',
        caption: 'MAU slider, plan cards and comparison table.',
        href: 'https://ably.com/pricing',
        image: '/portfolio/img/work/ably-pricing.jpg',
      },
      {
        title: 'LiveSync',
        caption: 'Database-to-device product page.',
        href: 'https://ably.com/livesync',
        image: '/portfolio/img/work/ably-livesync.jpg',
      },
      {
        title: 'LiveObjects',
        caption: 'Shared application state product page.',
        href: 'https://ably.com/liveobjects',
        image: '/portfolio/img/work/ably-liveobjects.jpg',
      },
    ],
  },
  {
    slug: 'crm-precision',
    image: '/portfolio/img/work/crm-precision.jpg',
    title: 'CRM example: precision CNC job shop',
    kicker: 'Open-source CRM (Twenty) · engineered, exact tone',
    summary:
      'A CRM design for a contract machining shop serving aerospace and medical customers: an RFQ-to-delivery pipeline, drawing-aware records and a voice that reads like a controlled document.',
    disciplines: ['CRM', 'Content'],
    tags: ['Twenty (open source)', 'RFQ pipeline', 'Custom objects', 'Quoting', 'Technical tone'],
    role: 'CRM and content designer',
    links: [{ label: 'Twenty on GitHub', href: 'https://github.com/twentyhq/twenty' }],
    sections: [
      {
        heading: 'The niche',
        body: [
          'Precision CNC job shops live and die on the request-for-quote. Customers send drawings, expect a fast and exact answer, and compare several shops at once. The CRM has to move a quote from drawing to purchase order without losing a revision.',
          'Built on the open-source Twenty CRM. The company and records shown are fictional.',
        ],
      },
      {
        heading: 'Data model',
        body: [
          'Companies and contacts, plus custom objects for RFQs and Parts. Each RFQ records drawing revision, material, quantity breaks, tolerance class, certification needs and the quote deadline. Parts link to the customer so repeat orders start from history instead of a blank form.',
        ],
      },
      {
        heading: 'Pipeline and automation',
        body: [
          'Seven stages from New RFQ to Delivered. Where the CRM supports automation, rules flag RFQs near their quote deadline and prompt a follow-up when a quote has gone quiet.',
        ],
      },
      {
        heading: 'Voice',
        body: [
          'Short, exact and specific. Every message states the part, the revision and the next action with a date. Nothing is promised that is not on the quote.',
        ],
      },
    ],
    pipeline: {
      note: 'Fictional sample data.',
      stages: [
        {
          name: 'New RFQ',
          cards: [{ title: 'Bracket, 7075-T6', meta: 'Rev C · qty 250 · due Fri' }],
        },
        {
          name: 'Drawing review',
          cards: [{ title: 'Manifold block', meta: 'Tolerance query open' }],
        },
        {
          name: 'Quoted',
          cards: [
            { title: 'Housing, Ti-6Al-4V', meta: 'Sent Tue · valid 30 days' },
            { title: 'Spindle sleeve', meta: 'Sent Mon' },
          ],
        },
        { name: 'First article', cards: [{ title: 'Valve body', meta: 'FAI report due' }] },
        { name: 'PO received', cards: [{ title: 'Flange set', meta: 'PO confirmed' }] },
        { name: 'In production', cards: [] },
        { name: 'Delivered', cards: [] },
      ],
    },
    templates: [
      {
        label: 'Quote follow-up',
        text: 'Re: RFQ for Bracket P/N 4471, Rev C, qty 250. Our quote was issued on Tuesday and is valid until 18 December. Please confirm whether the revision is current or send the updated drawing so we can hold the lead time of 15 working days.',
      },
    ],
  },
  {
    slug: 'crm-shopfloor',
    image: '/portfolio/img/work/crm-shopfloor.jpg',
    title: 'CRM example: family machine shop',
    kicker: 'Open-source CRM (EspoCRM) · warm, plain-spoken tone',
    summary:
      'The same niche, a different business: a family-run machine shop that wins on relationships. A simple pipeline, a repeat-customer view, and messages that sound like a person.',
    disciplines: ['CRM', 'Content'],
    tags: ['EspoCRM (open source)', 'Repeat customers', 'Simple pipeline', 'Friendly tone'],
    role: 'CRM and content designer',
    links: [{ label: 'EspoCRM on GitHub', href: 'https://github.com/espocrm/espocrm' }],
    sections: [
      {
        heading: 'The niche',
        body: [
          'Many job shops are small, local and loyal. Their best customers phone, drop in and send the same job every quarter. A heavy CRM would never be used, so this design keeps the system small enough to open every morning.',
          'Built on the open-source EspoCRM. The company and records shown are fictional.',
        ],
      },
      {
        heading: 'Data model',
        body: [
          'Accounts, contacts and a short opportunity record: what they need, when they need it and who spoke to them last. A repeat-customer list answers "who have we not heard from in three months?" in one view.',
        ],
      },
      {
        heading: 'Pipeline',
        body: [
          'Six stages that match how the shop talks: Enquiry, Quote sent, Chased, Won, On the shop floor, Invoiced.',
        ],
      },
      {
        heading: 'Voice',
        body: [
          'Friendly, direct and human. First names, plain words, one clear next step, and an honest date.',
        ],
      },
    ],
    pipeline: {
      note: 'Fictional sample data.',
      stages: [
        { name: 'Enquiry', cards: [{ title: 'Gate hinges, 40 off', meta: 'Phoned this morning' }] },
        { name: 'Quote sent', cards: [{ title: 'Tractor bushes', meta: 'Sent Monday' }] },
        { name: 'Chased', cards: [{ title: 'Press tool repair', meta: 'Called Thursday' }] },
        { name: 'Won', cards: [{ title: 'Pump shafts', meta: 'Start next week' }] },
        { name: 'On the shop floor', cards: [{ title: 'Brackets, batch 3', meta: 'Due Friday' }] },
        { name: 'Invoiced', cards: [] },
      ],
    },
    templates: [
      {
        label: 'Quote follow-up',
        text: 'Hi Sam, just checking you got the quote for the tractor bushes on Monday. No rush, but if you can let me know by Friday I can fit them in next week. Give me a ring if anything needs changing.',
      },
    ],
  },
  {
    slug: 'crm-ecommerce',
    image: '/portfolio/img/work/crm-ecommerce.jpg',
    title: 'CRM example: online parts store',
    kicker: 'Open-source CRM (Odoo Community) · e-commerce, clear and practical tone',
    summary:
      'A CRM for a small online shop selling motorcycle parts. It tracks fitment enquiries, abandoned baskets, shipments from the factory and repeat buyers by bike model.',
    disciplines: ['CRM', 'Content'],
    tags: ['Odoo Community (open source)', 'E-commerce', 'Fitment enquiries', 'Repeat buyers'],
    role: 'CRM and content designer',
    links: [{ label: 'Odoo on GitHub', href: 'https://github.com/odoo/odoo' }],
    sections: [
      {
        heading: 'The business',
        body: [
          'An online shop selling aftermarket parts for one motorcycle range, made to order and shipped from the factory. The questions that decide a sale are about fitment and delivery time, so the CRM is built around those, not around a generic sales funnel.',
          'Set up for the Parallel Parts store on the open-source Odoo Community CRM. The customers and records shown are fictional.',
        ],
      },
      {
        heading: 'Data model',
        body: [
          'A contact carries the bike they ride: model, year and any earlier parts bought. Each order links to its fitment check and its shipment, so anyone replying to a customer sees the whole history in one place.',
        ],
      },
      {
        heading: 'Pipeline',
        body: [
          'Seven stages from first question to repeat purchase: Fitment enquiry, Quoted, Paid, In production, Shipped, Delivered, Review requested.',
          'Two side lists sit next to the board: abandoned baskets older than a day, and buyers whose bike has a new part released since their last order.',
        ],
      },
      {
        heading: 'Voice',
        body: [
          'Clear, practical and honest about timing. Every message names the part, the bike it fits and the date to expect it, and says plainly when something is late.',
        ],
      },
    ],
    pipeline: {
      note: 'Fictional sample data.',
      stages: [
        { name: 'Fitment enquiry', cards: [{ title: 'Rear shocks, 2016 T120', meta: 'Asked this morning' }] },
        { name: 'Quoted', cards: [{ title: 'Bar-end mirrors', meta: 'Sent Tuesday' }] },
        { name: 'Paid', cards: [{ title: 'Pannier racks', meta: 'Ordered today' }] },
        { name: 'In production', cards: [{ title: 'Seat, tan leather', meta: 'Due in 3 weeks' }] },
        { name: 'Shipped', cards: [{ title: 'Exhaust, brushed steel', meta: 'Tracking sent' }] },
        { name: 'Delivered', cards: [] },
        { name: 'Review requested', cards: [] },
      ],
    },
    templates: [
      {
        label: 'Shipping update',
        text: 'Hi Marcus, your brushed steel exhaust for the 2018 Bonneville T100 left the factory today. Tracking is below. Expect it in Málaga by 24 November. If it is not with you by the 27th, reply to this email and I will chase it.',
      },
    ],
  },
  {
    slug: 'safeplay-desk',
    kind: 'concept',
    image: '/portfolio/img/work/safeplay-ui.jpg',
    title: 'SafePlay Desk',
    kicker: 'UKGC · safer gambling toolkit',
    summary:
      'A toolkit for customer-interaction teams: markers of harm, affordability triggers and intervention scripts mapped to the Licence Conditions and Codes of Practice.',
    disciplines: ['Web', 'Content'],
    tags: ['React', 'Vite', 'Tailwind', 'UKGC', 'Plain-language copy'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: '/portfolio/demos/safeplay-desk/' }],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Customer-interaction staff at UK operators have to spot harm and respond within a short conversation. The rules are long and the wording of a good intervention is hard to remember under pressure.',
        ],
      },
      {
        heading: 'What the site does',
        body: [
          'It lists markers of harm and affordability triggers, and gives suggested wording for each interaction, mapped back to the relevant licence condition. Staff find the situation, read the wording and see why it applies.',
        ],
      },
      {
        heading: 'Scope',
        body: [
          'Practical guidance for customer-interaction teams. It is not legal advice, and operators should calibrate it to their own risk assessment.',
        ],
      },
    ],
  },
  {
    slug: 'licence-ready',
    kind: 'concept',
    image: '/portfolio/img/work/licence-ready-ui.jpg',
    title: 'LicenceReady',
    kicker: 'UKGC · licence-readiness workspace',
    summary:
      'A gap checklist, evidence tracker and audit pack for operators preparing for or maintaining a UK licence.',
    disciplines: ['Web', 'Content'],
    tags: ['React', 'Vite', 'Tailwind', 'UKGC', 'Evidence tracking'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: '/portfolio/demos/licence-ready/' }],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Applying for or keeping an LCCP licence means showing evidence against many requirements. Teams usually track that in spreadsheets and email, and lose track of what is missing.',
        ],
      },
      {
        heading: 'What the site does',
        body: [
          'A checklist shows the gaps, an evidence tracker links documents to each requirement, and an audit pack collects what a reviewer will ask for.',
        ],
      },
      {
        heading: 'Scope',
        body: ['A working tool for readiness planning. It is not legal advice.'],
      },
    ],
  },
  {
    slug: 'classic-triumph-malaga',
    kind: 'concept',
    image: '/portfolio/img/work/classic-triumph.jpg',
    title: 'Classic Triumph Malaga',
    kicker: 'Tourism · English and Spanish',
    summary:
      'Guided classic motorcycle tours on the Costa del Sol: a tour picker, the fleet, how it works and an enquiry form.',
    disciplines: ['Web', 'Content'],
    tags: ['React', 'Vite', 'Tailwind', 'Bilingual', 'Illustration'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: '/portfolio/demos/classic-triumph-malaga/' }],
    sections: [
      {
        heading: 'The brief',
        body: [
          'Small-group tours on classic Triumph motorcycles along the coast and into the hills behind Málaga. The site has to sell a feeling first and answer the practical questions second: who it is for, what is included and how to book.',
        ],
      },
      {
        heading: 'What the site does',
        body: [
          'A tour picker, a fleet section, a step-by-step of how a day works, and an enquiry form. Everything is available in English and Spanish.',
        ],
      },
      {
        heading: 'Notes',
        body: [
          'The site is bilingual throughout and is not affiliated with Triumph Motorcycles.',
        ],
      },
    ],
  },
  {
    slug: 'parallel-parts',
    kind: 'concept',
    image: '/portfolio/img/work/parallel-parts.jpg',
    title: 'Parallel Parts',
    kicker: 'E-commerce · aftermarket parts',
    summary:
      'Aftermarket parts for the Triumph Bonneville: a fitment filter by generation and an enquiry list instead of a checkout.',
    disciplines: ['Web', 'Content'],
    tags: ['React', 'Vite', 'Tailwind', 'Fitment filter', 'Technical drawings'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: '/portfolio/demos/parallel-parts/' }],
    sections: [
      {
        heading: 'The brief',
        body: [
          'Parts designed in-house and made in China, sold to Bonneville owners at a fair price. Fitment is the main worry for a buyer, so the site filters by generation and type before anything else.',
        ],
      },
      {
        heading: 'What the site does',
        body: [
          'Visitors pick their bike, filter the catalogue and build an enquiry list with a finish for each part. They copy the list into an email, and the shop replies with a price and a delivery time.',
        ],
      },
      {
        heading: 'Notes',
        body: [
          'Technical drawings are public domain. Parallel Parts is an independent brand and is not affiliated with Triumph Motorcycles.',
        ],
      },
    ],
  },
  {
    slug: 'conply',
    image: '/portfolio/img/work/conply.jpg',
    wire: 'product',
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
    image: '/portfolio/img/work/viki.jpg',
    wire: 'product',
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
    image: '/portfolio/img/work/parallel-parts.jpg',
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
  status?: 'Live';
  href: string;
  image?: string;
}

export const SUPPORT_SITES: SupportSite[] = [
  {
    name: 'SafePlay Desk',
    market: 'UKGC',
    pitch:
      'Safer gambling and customer interaction toolkit: markers of harm, affordability triggers and intervention scripts mapped to the Licence Conditions and Codes of Practice.',
    href: '/portfolio/demos/safeplay-desk/',
    image: '/portfolio/img/work/safeplay-ui.jpg',
  },
  {
    name: 'LicenceReady',
    market: 'UKGC',
    pitch:
      'LCCP licence-readiness workspace: a gap checklist, evidence tracker and audit pack for operators preparing for or maintaining a UK licence.',
    href: '/portfolio/demos/licence-ready/',
    image: '/portfolio/img/work/licence-ready-ui.jpg',
  },
];

/** Web projects for other niches. */
export const CONCEPT_SITES: SupportSite[] = [
  {
    name: 'Classic Triumph Malaga',
    market: 'Tourism · English and Spanish',
    pitch:
      'Guided classic motorcycle tours on the Costa del Sol: tour picker, fleet, how it works and an enquiry form.',
    href: '/portfolio/demos/classic-triumph-malaga/',
    image: '/portfolio/img/work/classic-triumph.jpg',
  },
  {
    name: 'Parallel Parts',
    market: 'E-commerce',
    pitch:
      'Aftermarket parts for the Triumph Bonneville: fitment filter by generation and an enquiry list instead of a checkout.',
    href: '/portfolio/demos/parallel-parts/',
    image: '/portfolio/img/work/parallel-parts.jpg',
  },
];

export interface LivePage {
  name: string;
  what: string;
  href: string;
  /** Drop a screenshot at this path and it replaces the wireframe automatically. */
  image?: string;
  wire: 'docs' | 'pricing' | 'landing' | 'product';
}

/** Pages I redesigned and built at Ably, live on ably.com. */
export const ABLY_LIVE_PAGES: LivePage[] = [
  {
    name: 'Docs',
    what: 'Redesigned docs home and navigation',
    href: 'https://ably.com/docs',
    image: '/portfolio/img/work/ably-docs.jpg',
    wire: 'docs',
  },
  {
    name: 'Pricing',
    what: 'MAU slider, plan cards, comparison table',
    href: 'https://ably.com/pricing',
    image: '/portfolio/img/work/ably-pricing.jpg',
    wire: 'pricing',
  },
  {
    name: 'LiveSync',
    what: 'Product marketing page',
    href: 'https://ably.com/livesync',
    image: '/portfolio/img/work/ably-livesync.jpg',
    wire: 'landing',
  },
  {
    name: 'LiveObjects',
    what: 'Product marketing page',
    href: 'https://ably.com/liveobjects',
    image: '/portfolio/img/work/ably-liveobjects.jpg',
    wire: 'landing',
  },
];


// The built or live site behind a case study, if there is one. CRM examples have none.
const LIVE = ['ably', 'conply', 'viki', 'safeplay-desk', 'licence-ready', 'classic-triumph-malaga', 'parallel-parts'];
export function openFor(slug: string): { label: string; href: string } | undefined {
  if (!LIVE.includes(slug)) return undefined;
  const c = CASE_STUDIES.find(x => x.slug === slug);
  const l = c?.links[0];
  if (!l) return undefined;
  const internal = l.href.startsWith('/portfolio/demos/');
  return { label: internal ? 'Open site' : `Visit ${l.label}`.replace('Visit Docs', 'Visit Ably docs'), href: l.href };
}
