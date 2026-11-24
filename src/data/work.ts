export type Discipline = 'Web' | 'CRM' | 'Content' | 'Product' | 'Packaging';

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
  kind?: 'concept' | 'product';
  status?: 'Live';
  wire?: 'docs' | 'pricing' | 'landing' | 'product';
  /** Optional CRM pipeline mock with fictional sample data. */
  pipeline?: { stages: { name: string; cards: { title: string; meta: string }[] }[]; note: string };
  /** Optional tone examples: message templates written in this case study's voice. */
  templates?: { label: string; text: string }[];
  /** Spec table shown on hover/focus in the home grid. Missing fields show TODO. */
  specs?: Partial<Record<'sector' | 'deliverables' | 'stack' | 'languages' | 'outcome', string>>;
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'solaz',
    specs: { sector: 'Renewable heating', deliverables: 'Brand, site, print, packaging', stack: 'Next.js, static', languages: 'EN / ES' },
    kind: 'concept',
    status: 'Live',
    image: '/img/work/solaz.jpg',
    title: 'Solaz',
    kicker: 'Solar heat and heat pumps · Málaga',
    summary:
      'Brand, website and a full print and packaging set for a Málaga maker of solar collectors, heat pumps and hot water tanks.',
    disciplines: ['Web', 'Packaging', 'Content'],
    tags: ['Brand identity', 'Next.js', 'Responsive design', 'Brochure', 'Business cards', 'Posters', 'Packaging dieline', 'Trade stand'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: 'https://franrob-projects.github.io/solaz/' }],
    sections: [
      {
        heading: 'The brief',
        body: [
          'A manufacturer of solar thermal collectors, air-to-water heat pumps and storage tanks, selling to homes, hotels and farms across Andalucía. The brand had to feel local and sunny, but still read as an engineering company that makes its own equipment.',
        ],
      },
      {
        heading: 'Brand',
        body: [
          'A green Solaz block with a yellow sun, deep pine for type and panels, and warm sand paper with olive-leaf shadows. Archivo ExtraBold in uppercase for headings keeps the industrial tone.',
        ],
      },
      {
        heading: 'Website',
        body: [
          'Twelve pages designed in Figma at desktop and mobile sizes, then built as a fast static site: products with technical callouts, spares, servicing, manufacturing, company and a quote form. Product renders sit on the brand paper so the range reads as one family.',
        ],
      },
      {
        heading: 'Print and packaging',
        body: [
          'A tri-fold A4 brochure, business cards, A2 and 50 × 70 posters, a reverse-tuck-end box with its dieline for the hydraulic kit, and a 3 × 3 pop-up trade stand with roll-ups and a counter. Every piece is set up with bleed, safe areas and a CutContour layer for the printer.',
        ],
      },
      {
        heading: 'Notes',
        body: ['Solaz is a concept brand created by Franrob Design. The company details are fictional.'],
      },
    ],
    samples: [
      { title: 'Home page', caption: 'Desktop, 1440 px.', image: '/img/work/solaz.jpg' },
      { title: 'Products', caption: 'Product range with technical callouts.', image: '/img/work/solaz-products.jpg' },
      { title: 'Mobile', caption: 'Home page at 390 px.', image: '/img/work/solaz-mobile.jpg' },
      { title: 'Tri-fold brochure', caption: 'A4 landscape, outside and inside.', image: '/img/work/solaz-brochure.jpg' },
      { title: 'Business cards', caption: '85 × 55 mm, front and back.', image: '/img/work/solaz-cards.jpg' },
      { title: 'Posters', caption: 'A2 and 50 × 70 cm.', image: '/img/work/solaz-posters.jpg' },
      { title: 'Product box', caption: 'Reverse tuck end with dieline.', image: '/img/work/solaz-box.jpg' },
      { title: 'Trade stand', caption: 'Pop-up wall, roll-ups and counter.', image: '/img/work/solaz-stand.jpg' },
    ],
  },
  {
    slug: 'ably',
    specs: { sector: 'Realtime infrastructure', deliverables: 'Docs, nav, product pages', stack: 'Gatsby, MDX', languages: 'EN' },
    image: '/img/work/ably-docs.jpg',
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
        image: '/img/work/ably-docs.jpg',
      },
      {
        title: 'Pricing',
        caption: 'MAU slider, plan cards and comparison table.',
        href: 'https://ably.com/pricing',
        image: '/img/work/ably-pricing.jpg',
      },
      {
        title: 'LiveSync',
        caption: 'Database-to-device product page.',
        href: 'https://ably.com/livesync',
        image: '/img/work/ably-livesync.jpg',
      },
      {
        title: 'LiveObjects',
        caption: 'Shared application state product page.',
        href: 'https://ably.com/liveobjects',
        image: '/img/work/ably-liveobjects.jpg',
      },
    ],
  },
  {
    slug: 'safeplay-desk',
    specs: { sector: 'Regulated gambling', deliverables: 'Site, CRM', stack: 'React, TypeScript', languages: 'EN' },
    kind: 'concept',
    image: '/img/work/safeplay-ui.jpg',
    title: 'SafePlay Desk',
    kicker: 'UKGC · safer gambling toolkit',
    summary:
      'A toolkit for customer-interaction teams: markers of harm, affordability triggers and intervention scripts mapped to the Licence Conditions and Codes of Practice.',
    disciplines: ['Web', 'CRM', 'Content'],
    tags: ['React', 'TypeScript', 'Rules table', 'Case queue', 'UKGC'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: 'https://safeplaydesk.online/' }, { label: 'Open the case desk', href: '/demos/safeplay-desk/#/crm' }],
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
      {
        heading: 'How the checker decides',
        body: [
          'Markers are typed data, grouped under spend, time, behaviour and contact. One pure function turns the ticked markers into a tier, so the same inputs always give the same answer and the rule can be read in one place and tested.',
        ],
      },
      {
        heading: 'The case desk',
        body: [
          'A second screen turns the tiers into a working queue: every flagged customer ranked by tier, with owner, next step and review date. Selecting a row shows the deposit trend for eight weeks, the markers observed and the interaction history.',
          'Two rules are built in. A customer saying they feel out of control, or that they are in financial difficulty, is Tier 3 whatever the score. A weekly deposit total that has more than doubled is drawn in the warning colour.',
          'It runs on sample data in the same bundle as the site, behind a hash route, so there is no server to host.',
        ],
      },
    ],
  },
  {
    slug: 'licence-ready',
    specs: { sector: 'Regulated gambling', deliverables: 'Site, workspace', stack: 'React, TypeScript', languages: 'EN' },
    kind: 'concept',
    image: '/img/work/licence-ready-ui.jpg',
    title: 'LicenceReady',
    kicker: 'UKGC · licence-readiness workspace',
    summary:
      'A gap checklist, evidence tracker and audit pack for operators preparing for or maintaining a UK licence.',
    disciplines: ['Web', 'Content'],
    tags: ['React', 'TypeScript', 'CSS effects', 'Evidence tracking', 'UKGC'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: 'https://licenseready.space/' }],
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
      {
        heading: 'Checklist state and the audit pack',
        body: [
          'The workspace keeps one record per control: status, the evidence attached and a date. The audit pack is generated from those records, so the summary can only say what the tracker says.',
        ],
      },
      {
        heading: 'A restyle without a rewrite',
        body: [
          'The visual refresh, with a nebula backdrop, starfield, orbiting hero and glowing cards, is a few CSS classes and one hero component. It respects reduced-motion settings, and the functionality and copy are untouched.',
        ],
      },
    ],
  },
  {
    slug: 'classic-triumph-malaga',
    specs: { sector: 'Tourism', deliverables: 'Site, CRM', stack: 'React, TypeScript', languages: 'EN / ES' },
    kind: 'concept',
    image: '/img/work/classic-triumph-figma.jpg',
    title: 'Classic Triumph Malaga',
    kicker: 'Tourism · English and Spanish',
    summary:
      'Guided classic motorcycle tours on the Costa del Sol: a tour picker, the fleet, how it works and an enquiry form.',
    disciplines: ['Web', 'CRM', 'Content'],
    tags: ['React', 'TypeScript', 'Bilingual content table', 'Photo credits', 'Fleet scheduling'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: 'https://classictriumphmalaga.site/' }, { label: 'Open the ops console', href: '/demos/classic-triumph-malaga/#/crm' }],
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
      {
        heading: 'One content table, two languages',
        body: [
          'All copy lives in a single table keyed by language, and every Wikimedia photo carries its credit in a second table, so the language switch and the attributions cannot drift from the page.',
        ],
      },
      {
        heading: 'The ops console',
        body: [
          'A booking pipeline for a business with four bikes. Enquiries move from new to quoted, deposit paid and confirmed, today\'s rides show briefing times, and the fleet panel tracks each Bonneville\'s distance to its next service.',
          'The point of putting bikes in the CRM is that a ride is never promised on a machine that is due in the workshop.',
        ],
      },
    ],
  },
  {
    slug: 'parallel-parts',
    specs: { sector: 'E-commerce', deliverables: 'Store, CRM', stack: 'React, TypeScript', languages: 'EN' },
    kind: 'concept',
    image: '/img/work/parallel-parts.jpg',
    title: 'Parallel Parts',
    kicker: 'E-commerce · aftermarket parts',
    summary:
      'Aftermarket parts for the Triumph Bonneville: a fitment filter by generation and an enquiry list instead of a checkout.',
    disciplines: ['Web', 'CRM', 'Content'],
    tags: ['React', 'TypeScript', 'Fitment data model', 'SVG drawings', 'Order and QC tracking'],
    role: 'Designer, developer and writer',
    links: [{ label: 'Open the working site', href: 'https://parallelparts.space/' }, { label: 'Open the CRM', href: '/demos/parallel-parts/#/crm' }],
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
      {
        heading: 'Fitment as data',
        body: [
          'Every part carries the years and generations it fits. The filter is a plain query over that table, so adding a part means adding one record, and a wrong fit is a data fix rather than a layout change.',
        ],
      },
      {
        heading: 'Orders, requests and batches',
        body: [
          'The CRM follows a part from the enquiry to the factory. Orders open in a slide-in panel, customers show their activity and messages, part requests move across a board, and batches track each production run through quality control.',
          'Because parts are made to order in China, the batch view is the one that matters: it ties customer orders to a production run, so a delay in one batch is visible against every order waiting on it.',
          'The drawings in the order lists are the same SVG components the catalogue uses, not screenshots.',
        ],
      },
    ],
  },
  {
    slug: 'conply',
    specs: { sector: 'Compliance training', deliverables: 'Product site, content', stack: 'React', languages: 'EN' },
    image: '/img/work/conply.jpg',
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
    slug: 'earth-and-hound',
    specs: { sector: 'Consumer goods', deliverables: 'Packaging, brand', stack: 'Figma', languages: 'EN' },
    kind: 'product',
    image: '/img/work/earth-hound-print.jpg',
    title: 'Earth & Hound',
    kicker: 'Packaging design · brand',
    summary:
      'Brand, logo and retail box for dog waste bags made from recycled plastic, with print-ready artwork and dielines for two box sizes.',
    disciplines: ['Packaging', 'Content'],
    tags: ['Figma', 'Packaging', 'Dielines', 'Branding', 'Copywriting'],
    role: 'Packaging and brand designer, and copywriter',
    period: '2026',
    links: [],
    sections: [
      {
        heading: 'The brief',
        body: [
          'A product nobody wants to talk about, made from recycled plastic and sold in a box. The packaging had to look like a brand worth picking up, say what is inside in a second, and explain how to dispose of it.',
        ],
      },
      {
        heading: 'The brand',
        body: [
          'A hound in profile with a leaf for an ear, in a double ring. Deep green, cream, gold and a band of lavender for the scent. A spaced serif wordmark with the ampersand set in gold, and a line that does the talking: the bit of the walk nobody talks about.',
        ],
      },
      {
        heading: 'The box',
        body: [
          'The front carries the name, the claim and two badges: tie handles and 80% post-consumer recycled. The sides repeat the mark and the count. The back tells the story, lists six product facts as icons and gives disposal instructions, material codes and a lot number space. A repeat pattern of the logo covers the lid and base.',
        ],
      },
      {
        heading: 'Print files',
        body: [
          'Artwork sits on its own layer, separate from cut, crease, glue, perforation and seal lines, with centre lines and a 10 mm keep-clear zone around the handle cut-out. The same artwork is set up for a 600-bag, 40-roll box and a 300-bag, 20-roll box on the supplier’s template. The logo also has a one-colour master for single-colour print.',
        ],
      },
    ],
    samples: [
      { title: 'Flat artwork', caption: '600 bags, 40 rolls.', image: '/img/work/earth-hound-print.jpg' },
      { title: 'Box with dielines', caption: '300 bags, 20 rolls, on the supplier template.', image: '/img/work/earth-hound-box.jpg' },
      { title: 'The mark', caption: 'Hound and leaf.', image: '/img/work/earth-hound-logo.jpg' },
    ],
  },
  {
    slug: 'viki-dashboard',
    specs: { sector: 'SaaS', deliverables: 'Dashboard, onboarding', stack: 'Figma, React', languages: 'EN / ES' },
    kind: 'product',
    image: '/img/work/viki-dash.jpg',
    title: 'VIKI Dashboard',
    kicker: 'Product design · web app',
    summary:
      'The working dashboard for VIKI, an AI business operating system: a daily Command Center, a CRM pipeline and finance, designed in Figma and built as a working app.',
    disciplines: ['Product', 'Web'],
    tags: ['Figma', 'React', 'TypeScript', 'Vite', 'Manrope'],
    role: 'Product designer and front-end developer',
    period: '2026',
    links: [{ label: 'Open the app', href: '/demos/viki-dashboard/' }],
    sections: [
      {
        heading: 'The brief',
        body: [
          'A small business runs on a handful of separate tools: email, WhatsApp, a calendar, a bank, a spreadsheet. VIKI pulls them into one place. The dashboard has to answer one question quickly: what needs my attention today.',
        ],
      },
      {
        heading: 'Command Center',
        body: [
          'The overview opens with what VIKI recommends, such as an overdue invoice or unassigned tasks, then the month’s numbers, a quick-capture box for tasks and notes, an AI day plan with time slots, and a chat with the assistant. Each recommendation links to the screen where it is fixed.',
        ],
      },
      {
        heading: 'CRM and finances',
        body: [
          'The CRM screen is a sales pipeline from new lead to negotiation. Cards drag between stages, with follow-ups and lead sources beside it. The finance screen shows invoiced, collected, expenses and margin, with a recent invoices table that filters by status.',
        ],
      },
      {
        heading: 'Design system',
        body: [
          'One orange accent on a quiet light interface, Manrope throughout, monospaced labels for section names, and a two-level navigation: platform modules on the left and the pages inside each module beside them.',
        ],
      },
      {
        heading: 'Scope',
        body: [
          'The overview, CRM and finance screens are built and interactive. The data is sample data. The other modules are not in this build.',
        ],
      },
    ],
    samples: [
      { title: 'Overview in Figma', caption: 'Command Center design.', image: '/img/work/dash-figma-overview.jpg' },
      { title: 'CRM in Figma', caption: 'Pipeline and follow-ups.', image: '/img/work/dash-figma-crm.jpg' },
      { title: 'Finances in Figma', caption: 'Dashboard and invoices.', image: '/img/work/dash-figma-finance.jpg' },
      { title: 'CRM, built', caption: 'The same screen as a working app.', image: '/img/work/viki-crm.jpg' },
    ],
  },
  {
    slug: 'viki-auth',
    kind: 'product',
    image: '/img/work/viki-auth.jpg',
    title: 'VIKI Auth & Onboarding',
    kicker: 'Product design · web app',
    summary:
      'Log in, sign up, email verification and a six-step onboarding that sets up a VIKI workspace, designed in Figma and built as a working app.',
    disciplines: ['Product', 'Web'],
    tags: ['Figma', 'React', 'TypeScript', 'Vite', 'Manrope'],
    role: 'Product designer and front-end developer',
    period: '2026',
    links: [{ label: 'Open the app', href: '/demos/viki-auth/' }],
    sections: [
      {
        heading: 'The brief',
        body: [
          'Getting into a new product should take minutes. The first screens have to build trust, ask only for what is needed, and leave the person with a workspace that already reflects their business.',
        ],
      },
      {
        heading: 'Authentication',
        body: [
          'Log in, create an account, enter a six-digit code sent by email, and reset a password. Fields validate as you go, passwords can be shown or hidden, a pasted code fills all six boxes, and the resend timer counts down.',
        ],
      },
      {
        heading: 'Onboarding',
        body: [
          'Six short steps: business details, industry, team size and structure, tools to connect, first goals and team invites. Choices are tiles and chips rather than long forms, and the progress bar shows where you are. Skipping optional steps is always possible.',
        ],
      },
      {
        heading: 'Workspace ready',
        body: [
          'The last screen lists what has been set up from the answers: CRM pipeline, connected tools, invites and the AI day plan. One button opens the dashboard.',
        ],
      },
      {
        heading: 'Scope',
        body: [
          'The flow is front-end only. No accounts or emails are created, and any six digits are accepted for the code.',
        ],
      },
    ],
    samples: [
      { title: 'Choose an industry', caption: 'Step 2 of 6.', image: '/img/work/viki-auth-onboarding.jpg' },
      { title: 'Workspace ready', caption: 'What was set up from your answers.', image: '/img/work/viki-auth-ready.jpg' },
    ],
  },
  {
    slug: 'viki',
    kind: 'product',
    image: '/img/work/viki.jpg',
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
    href: 'https://safeplaydesk.online/',
    image: '/img/work/safeplay-ui.jpg',
  },
  {
    name: 'LicenceReady',
    market: 'UKGC',
    pitch:
      'LCCP licence-readiness workspace: a gap checklist, evidence tracker and audit pack for operators preparing for or maintaining a UK licence.',
    href: 'https://licenseready.space/',
    image: '/img/work/licence-ready-ui.jpg',
  },
];

/** Web projects for other niches. */
export const CONCEPT_SITES: SupportSite[] = [
  {
    name: 'Classic Triumph Malaga',
    market: 'Tourism · English and Spanish',
    pitch:
      'Guided classic motorcycle tours on the Costa del Sol: tour picker, fleet, how it works and an enquiry form.',
    href: 'https://classictriumphmalaga.site/',
    image: '/img/work/classic-triumph-figma.jpg',
  },
  {
    name: 'Parallel Parts',
    market: 'E-commerce',
    pitch:
      'Aftermarket parts for the Triumph Bonneville: fitment filter by generation and an enquiry list instead of a checkout.',
    href: 'https://parallelparts.space/',
    image: '/img/work/parallel-parts.jpg',
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
    image: '/img/work/ably-docs.jpg',
    wire: 'docs',
  },
  {
    name: 'Pricing',
    what: 'MAU slider, plan cards, comparison table',
    href: 'https://ably.com/pricing',
    image: '/img/work/ably-pricing.jpg',
    wire: 'pricing',
  },
  {
    name: 'LiveSync',
    what: 'Product marketing page',
    href: 'https://ably.com/livesync',
    image: '/img/work/ably-livesync.jpg',
    wire: 'landing',
  },
  {
    name: 'LiveObjects',
    what: 'Product marketing page',
    href: 'https://ably.com/liveobjects',
    image: '/img/work/ably-liveobjects.jpg',
    wire: 'landing',
  },
];


// The built or live site behind a case study, if there is one.
const LIVE = ['solaz', 'ably', 'conply', 'viki', 'viki-dashboard', 'viki-auth', 'safeplay-desk', 'licence-ready', 'classic-triumph-malaga', 'parallel-parts'];
export function openFor(slug: string): { label: string; href: string } | undefined {
  if (!LIVE.includes(slug)) return undefined;
  const c = CASE_STUDIES.find(x => x.slug === slug);
  const l = c?.links[0];
  if (!l) return undefined;
  const internal = l.href.startsWith('/demos/') || /^https:\/\/(parallelparts|classictriumphmalaga|safeplaydesk|licenseready|franrob-projects)\./.test(l.href);
  return { label: internal ? 'Open site' : `Visit ${l.label}`.replace('Visit Docs', 'Visit Ably docs'), href: l.href };
}


export interface CrmDemo {
  slug: string;
  title: string;
  site: string;
  image: string;
  href: string;
  summary: string;
  stack: string[];
}

/** Working CRM screens built for the demo sites. Each opens in the demo's own hash route. */
export const CRMS: CrmDemo[] = [
  {
    slug: 'parallel-parts',
    title: 'Orders, requests and batches',
    site: 'Parallel Parts',
    image: '/img/work/crm-parallel-parts.png',
    href: '/demos/parallel-parts/#/crm',
    summary: 'Five linked screens that follow a part from enquiry to factory batch and quality control, with a slide-in order panel and a part-request board.',
    stack: ['React', 'TypeScript', 'SVG charts', 'Batch tracking'],
  },
  {
    slug: 'classic-triumph-malaga',
    title: 'Ops console',
    site: 'Classic Triumph Malaga',
    image: '/img/work/crm-classic-triumph.png',
    href: '/demos/classic-triumph-malaga/#/crm',
    summary: 'Enquiry pipeline from first message to confirmed ride, today\'s rides with tasks, and a fleet panel that tracks distance to the next service.',
    stack: ['React', 'TypeScript', 'Pipeline board', 'Fleet scheduling'],
  },
  {
    slug: 'safeplay-desk',
    title: 'Case queue',
    site: 'SafePlay Desk',
    image: '/img/work/crm-safeplay.png',
    href: '/demos/safeplay-desk/#/crm',
    summary: 'A tiered queue for safer-gambling teams: markers, an eight-week deposit trend, interaction history and escalation actions, with a Tier 3 override rule.',
    stack: ['React', 'TypeScript', 'Rules table', 'Audit trail'],
  },
  {
    slug: 'viki-dashboard',
    title: 'Sales pipeline',
    site: 'VIKI Dashboard',
    image: '/img/work/viki-crm.jpg',
    href: '/work/viki-dashboard/',
    summary: 'A drag-between-stages pipeline with follow-ups and lead sources, designed in Figma and built as a working app.',
    stack: ['Figma', 'React', 'Drag and drop'],
  },
];
