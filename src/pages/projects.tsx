import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import p from '../css/projects.module.css';

interface Tag {
  label: string;
  colour: string;
}

interface Project {
  title: string;
  description: string;
  details: string[];
  tags: Tag[];
  github: string;
  live?: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  imageHref?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Doc Link Monitor',
    icon: '🔗',
    description:
      'Documentation goes stale. External links break, pages move, APIs get deprecated. Doc Link Monitor is a fully serverless AWS application that checks every registered URL on an hourly schedule and fires an SNS alert the moment something breaks. Built with AWS CDK so the entire infrastructure deploys with a single command.',
    details: [
      'CDK stack defines Lambda, DynamoDB, API Gateway, EventBridge, and SNS as code',
      'Checker Lambda scans DynamoDB, fires HEAD requests concurrently, and writes results back',
      'GSI on DynamoDB enables instant broken-link queries without a full table scan',
      'REST API to register URLs, list status, and trigger on-demand checks',
      'Pay-per-use, runs for cents per month at documentation team scale',
    ],
    tags: [
      { label: 'AWS CDK',    colour: '#FF9900' },
      { label: 'Lambda',     colour: '#FF9900' },
      { label: 'DynamoDB',   colour: '#4053D6' },
      { label: 'EventBridge',colour: '#FF4F8B' },
      { label: 'TypeScript', colour: '#3178C6' },
    ],
    github: 'https://github.com/franrob-projects/doc-link-monitor',
  },
  {
    title: 'Crypto compliance',
    icon: '🛡️',
    description:
      'A gamification layer built on top of a Next.js security training platform aimed at crypto and iGaming companies operating under Gibraltar\'s DLT regulatory framework. The platform turns compliance training into something people actually want to do: tracking streaks, unlocking badges, and ranking teams on a live leaderboard.',
    details: [
      '13 badges across four tiers (Bronze → Platinum) with a data-driven badge engine',
      'Streak tracking with milestone markers at 3, 7, and 30 days',
      'Live team leaderboard with a composite risk score that decreases as training depth increases',
      'Supabase backend with RLS, a leaderboard view, and an auto-create user trigger',
      'Three new API routes and three React components, drop-in on an existing Next.js app',
    ],
    tags: [
      { label: 'Next.js',    colour: '#ffffff' },
      { label: 'TypeScript', colour: '#3178C6' },
      { label: 'Supabase',   colour: '#3ECF8E' },
      { label: 'Tailwind',   colour: '#38BDF8' },
    ],
    github: 'https://github.com/franrob-projects/securetrain-gamification',
    image: '/portfolio/img/projects/crypto-compliance.png',
    imageAlt: 'Crypto compliance training platform with gamified badges and leaderboard',
  },
  {
    title: 'BJJ Move Graph',
    icon: '🥋',
    description:
      'A Neo4j graph database mapping Brazilian Jiu-Jitsu techniques, positions, and the relationships between them. Built because BJJ is inherently a graph problem: positions connect to techniques, techniques chain into other techniques, and some counter others. A relational database flattens that. Neo4j keeps the natural shape.',
    details: [
      '13 positions and 43 techniques with real competition frequency data',
      'Weighted relationships: AVAILABLE_FROM, TRANSITIONS_TO, CHAINS_INTO, COUNTERS',
      'Shortest-path queries to find routes between positions',
      'Express REST API with endpoints for submission chains, hub moves, and danger analysis',
      'Interactive Vis.js graph, nodes sized by competition frequency, filterable by type',
    ],
    tags: [
      { label: 'Neo4j',      colour: '#008CC1' },
      { label: 'TypeScript', colour: '#3178C6' },
      { label: 'Express',    colour: '#40d77c' },
      { label: 'Vis.js',     colour: '#8b5cf6' },
      { label: 'Docker',     colour: '#2496ED' },
    ],
    github: 'https://github.com/franrob-projects/bjj-move-graph',
    image: '/portfolio/img/projects/bjj-move-graph.png',
    imageAlt: 'BJJ Move Graph showing closed guard position with weighted transitions to techniques like armbar, triangle choke, kimura, scissor sweep, and knee slice pass',
  },
  {
    title: 'GibTrain: Gibraltar Compliance',
    icon: '⚖️',
    description:
      'A marketing site for a Gibraltar-specific regulatory training platform covering DLT/crypto firms, online gaming operators, and financial services entities. Built to make the point that generic e-learning doesn\'t survive a GFSC inspection or Gambling Commissioner audit. Regulators test local statutory knowledge, so the training has to reference actual Gibraltar legislation.',
    details: [
      '8 core modules: AML, DLT regulatory principles, responsible gambling, KYC, POCA, market abuse, senior manager obligations, and GDPR',
      'Sector-specific content mapped to DLT firms, iGaming operators, and financial services entities',
      'Cross-references Gibraltar legislation directly rather than adapted international templates',
      'Messaging covers role-based assignment, automated progress tracking, and regulator-ready completion records',
      'Single-file static site deployed via GitHub Pages, zero build step',
    ],
    tags: [
      { label: 'HTML',         colour: '#E34F26' },
      { label: 'CSS',          colour: '#1572B6' },
      { label: 'GitHub Pages', colour: '#ffffff' },
    ],
    github: 'https://github.com/franrob-projects/gibraltar-compliance',
    live: 'https://franrob-projects.github.io/gibraltar-compliance/',
  },
  {
    title: 'TeachYAR: Uniformed Services Education',
    icon: '🎖️',
    description:
      'A Next.js landing page for a pre-service uniformed protective services education programme aimed at 16–19 year olds, the academic bridge between school and professional certification in law enforcement, fire, and adjacent careers. Built on the ShipFast starter and specialised for the uniformed services vertical.',
    details: [
      'Next.js App Router with a Suspense-wrapped header and modular section components',
      'Landing sections: hero, problem, features accordion, pricing, FAQ, and CTA',
      'Tailwind CSS with a marketing-first component library',
      'Supabase wired for auth and content, with blog posts served from the public directory',
      'Deployed on Vercel',
    ],
    tags: [
      { label: 'Next.js',    colour: '#ffffff' },
      { label: 'JavaScript', colour: '#F7DF1E' },
      { label: 'Tailwind',   colour: '#38BDF8' },
      { label: 'Supabase',   colour: '#3ECF8E' },
    ],
    github: 'https://github.com/franrob-projects/teachyar',
  },
]

const DOCS_ENGINEERING_PROJECTS: Project[] = [
  {
    title: 'Portfolio Analytics with Mixpanel',
    icon: '📊',
    description:
      'Wired Mixpanel into this Docusaurus portfolio so I can see which projects people actually read, which outbound links (GitHub, LinkedIn, live demos) get clicked, and where visitors drop off. The point was less "do analytics" and more "design a small, answer-oriented tracking plan": pick the questions first, then pick the smallest event schema that answers them.',
    details: [
      'Injected via Docusaurus headTags, gated on NODE_ENV==="production" so dev traffic does not pollute the project',
      'Autocapture + session replay handle pageviews and generic clicks; the tracking plan adds named events for project_card_click, contribution_click, and nav_outbound',
      'Routed to the EU Mixpanel cluster (api-eu.mixpanel.com) to keep traffic in-region',
      'Site map documented per page: entry points, CTAs, and the three flows worth measuring (home → project → GitHub, About → Projects, blog retention)',
      'One-hunk change to docusaurus.config.ts so it is trivial to revert or swap for another analytics provider',
    ],
    tags: [
      { label: 'Mixpanel',    colour: '#7856FF' },
      { label: 'Docusaurus',  colour: '#3ECC5F' },
      { label: 'TypeScript',  colour: '#3178C6' },
      { label: 'GitHub Pages', colour: '#ffffff' },
    ],
    github: 'https://github.com/franrob-projects/portfolio',
    live: 'https://franrob-projects.github.io/portfolio/',
  },
  {
    title: 'CI/CD Pipelines for TypeScript, React, Docusaurus, static generators',
    icon: '🚦',
    description:
      'A GitHub Actions pipeline that runs on every push and pull request before anything reaches main. The build job is the single source of truth for "does this site still compile", and four smaller jobs enforce the boring-but-important stuff: typos, broken outbound links, style drift, and type safety. The deploy workflow stays untouched and only fires once main is green.',
    details: [
      'Typecheck job runs tsc against the Docusaurus config and React pages',
      'Build job runs the full Docusaurus build, which throws on any internal broken link (onBrokenLinks: throw)',
      'Spellcheck via cspell over every .md, .mdx, .ts, .tsx file, with a project dictionary for names and jargon',
      'External link check via lychee against the built HTML plus all markdown, tuned to skip hosts that block headless checkers (LinkedIn, X)',
      'Prettier --check over src, docs, and blog so style drift shows up in CI instead of review',
      'Concurrency group cancels superseded runs on the same branch so only the latest commit is checked',
    ],
    tags: [
      { label: 'GitHub Actions', colour: '#2088FF' },
      { label: 'TypeScript', colour: '#3178C6' },
      { label: 'Docusaurus', colour: '#3ECC5F' },
      { label: 'cspell', colour: '#4B32C3' },
      { label: 'lychee', colour: '#E0A000' },
      { label: 'Prettier', colour: '#F7B93E' },
    ],
    github: 'https://github.com/franrob-projects/portfolio/tree/main/.github/workflows',
  },
]

interface Contribution {
  repo: string;
  number: number;
  title: string;
  url: string;
  state: 'open' | 'merged' | 'closed';
  blurb: string;
}

const CONTRIBUTIONS: Contribution[] = [
  {
    repo: 'ethereum/ethereum-org-website',
    number: 18016,
    title: 'Developer docs: add goal-based wayfinding on the hub and intro pages',
    url: 'https://github.com/ethereum/ethereum-org-website/pull/18016',
    state: 'open',
    blurb:
      'Adds a "Pick a starting point" block above the developer docs hub and a mirrored "Where to go next" block at the end of the technical intro, so readers self-route by goal (dapp, smart contract, node/staking) instead of reading the modules top-to-bottom.',
  },
  {
    repo: 'graphprotocol/docs',
    number: 1096,
    title: 'Quick Start: add Start Block guidance and Troubleshooting section',
    url: 'https://github.com/graphprotocol/docs/pull/1096',
    state: 'open',
    blurb:
      'Tightens the Start Block bullet on the Subgraph Quick Start, adds a callout on how to find the contract creation block, and appends a Troubleshooting section covering the five failure modes first-time subgraph developers hit most often.',
  },
  {
    repo: 'open-telemetry/opentelemetry.io',
    number: 9711,
    title: 'Clarify status levels and semconv stability on Languages page',
    url: 'https://github.com/open-telemetry/opentelemetry.io/pull/9711',
    state: 'open',
    blurb:
      'Links the "status" column on the Languages page to the Specification Status and Component Lifecycle definitions so readers know what Experimental, Stable, and Deprecated mean. Expands the semconv warning to point out that each convention page shows its own status.',
  },
  {
    repo: 'redpanda-data/docs',
    number: 1656,
    title: 'Improve discoverability of partition_autobalancing_mode and redpanda_memory_allocated_memory',
    url: 'https://github.com/redpanda-data/docs/pull/1656',
    state: 'open',
    blurb:
      'Surfaces two config properties that were hard to find from the task a reader was actually trying to do (rebalancing partitions, and sizing memory) by cross-linking them into the relevant how-to pages.',
  },
  {
    repo: 'OWASP/CheatSheetSeries',
    number: 2101,
    title: 'Authentication Cheat Sheet: Common JWT Implementation Mistakes',
    url: 'https://github.com/OWASP/CheatSheetSeries/pull/2101',
    state: 'open',
    blurb:
      'Adds a new section covering the JWT pitfalls that show up repeatedly in real audits: alg:none, weak HMAC secrets, missing aud/iss validation, and storage choices that defeat the token\'s purpose.',
  },
  {
    repo: 'OWASP/CheatSheetSeries',
    number: 2100,
    title: 'REST Assessment Cheat Sheet: OpenAPI, JWT/OAuth2, BOLA, Mass Assignment, Rate Limiting',
    url: 'https://github.com/OWASP/CheatSheetSeries/pull/2100',
    state: 'open',
    blurb:
      'Expands the REST assessment guidance to cover modern API attack surface: OpenAPI-driven testing, OAuth2/JWT flows, BOLA, mass assignment, and rate-limit evasion.',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={p.card}>
      {project.image && <img className={p.shot} src={project.image} alt={project.imageAlt ?? project.title} loading="lazy" />}
      <div className={p.body}>
        <h3 className={p.title}><span className={p.icon} aria-hidden="true">{project.icon}</span>{project.title}</h3>
        <div className={p.tags}>
          {project.tags.map(t => (
            <span key={t.label} className={p.tag} style={{ ['--c' as string]: t.colour }}>{t.label}</span>
          ))}
        </div>
        <p className={p.desc}>{project.description}</p>
        <details className={p.more}>
          <summary>What it does</summary>
          <ul>{project.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
        </details>
        <div className={p.links}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${p.sm}`}>GitHub →</a>
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSolid} ${p.sm}`}>Live site ↗</a>}
        </div>
      </div>
    </article>
  );
}

function ContributionRow({ c }: { c: Contribution }) {
  return (
    <a className={p.pr} href={c.url} target="_blank" rel="noopener noreferrer">
      <span className={p.prTop}>
        <code>{c.repo}</code>
        <span className={p.state} data-state={c.state}>{c.state}</span>
        <span className={p.num}>#{c.number}</span>
      </span>
      <span className={p.prTitle}>{c.title}</span>
      <span className={p.prBlurb}>{c.blurb}</span>
      <span className={p.prGo}>View PR →</span>
    </a>
  );
}

export default function Projects(): ReactNode {
  return (
    <Layout
      title="Projects | Fran Roberts"
      description="Open-source builds, docs tooling and documentation contributions by Fran Roberts"
    >
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Projects</div>
          <h1>Things I build in the open.</h1>
          <p>Open-source builds, docs tooling and contributions. Client and product work is on the <Link to="/work/">Work</Link> page.</p>
          <nav className={p.jump} aria-label="On this page">
            <a href="#built">Open-source builds <b>{PROJECTS.length}</b></a>
            <a href="#tooling">Docs tooling <b>{DOCS_ENGINEERING_PROJECTS.length}</b></a>
            <a href="#prs">Contributions <b>{CONTRIBUTIONS.length}</b></a>
          </nav>
        </header>

        <div className={styles.sectionHead} id="built"><h2>Open-source builds</h2></div>
        <div className={p.grid}>
          {PROJECTS.map(x => <ProjectCard key={x.title} project={x} />)}
        </div>

        <div className={styles.sectionHead} id="tooling"><h2>Docs engineering and tooling</h2></div>
        <div className={p.grid}>
          {DOCS_ENGINEERING_PROJECTS.map(x => <ProjectCard key={x.title} project={x} />)}
        </div>

        <div className={styles.sectionHead} id="prs">
          <h2>Open-source contributions</h2>
          <span className={p.sub}>Docs PRs against products I use or want to make easier to use.</span>
        </div>
        <div className={p.prs}>
          {CONTRIBUTIONS.map(c => <ContributionRow key={c.url} c={c} />)}
        </div>
      </main>
    </Layout>
  );
}
