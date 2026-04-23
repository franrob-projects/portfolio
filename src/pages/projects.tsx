import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

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
    title: 'SecureTrain Gamification',
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

function TagBadge({ tag }: { tag: Tag }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      borderRadius: '999px',
      fontSize: '0.75rem',
      fontWeight: 500,
      background: `${tag.colour}18`,
      color: tag.colour,
      border: `1px solid ${tag.colour}40`,
      marginRight: '6px',
      marginBottom: '6px',
    }}>
      {tag.label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.job} style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
        <span style={{ marginRight: '10px' }}>{project.icon}</span>
        {project.title}
      </h3>

      <div style={{ marginBottom: '12px' }}>
        {project.tags.map(tag => (
          <TagBadge key={tag.label} tag={tag} />
        ))}
      </div>

      <p style={{ marginBottom: '1rem', color: 'var(--ifm-color-content-secondary)', lineHeight: '1.65' }}>
        {project.description}
      </p>

      <ul style={{
        paddingLeft: '1.25rem',
        marginBottom: '1.25rem',
        color: 'var(--ifm-color-content-secondary)',
        fontSize: '0.9rem',
        lineHeight: '1.7',
      }}>
        {project.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        style={{ marginLeft: 0 }}
      >
        View on GitHub →
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          style={{ marginLeft: '10px' }}
        >
          Live site ↗
        </a>
      )}
    </div>
  );
}

const STATE_COLOURS: Record<Contribution['state'], string> = {
  open:   '#3FB950',
  merged: '#A371F7',
  closed: '#F85149',
};

function ContributionRow({ contribution }: { contribution: Contribution }) {
  const colour = STATE_COLOURS[contribution.state];
  return (
    <div className={styles.job} style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px', marginBottom: '6px' }}>
        <code style={{
          fontSize: '0.85rem',
          padding: '2px 8px',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '4px',
        }}>
          {contribution.repo}
        </code>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          padding: '2px 8px',
          borderRadius: '999px',
          background: `${colour}22`,
          color: colour,
          border: `1px solid ${colour}55`,
        }}>
          {contribution.state}
        </span>
        <span style={{ fontSize: '0.85rem', color: 'var(--ifm-color-content-secondary)' }}>
          #{contribution.number}
        </span>
      </div>

      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>
        {contribution.title}
      </h3>

      <p style={{
        marginBottom: '0.75rem',
        color: 'var(--ifm-color-content-secondary)',
        fontSize: '0.9rem',
        lineHeight: '1.65',
      }}>
        {contribution.blurb}
      </p>

      <a
        href={contribution.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        style={{ marginLeft: 0 }}
      >
        View PR →
      </a>
    </div>
  );
}

export default function Projects(): ReactNode {
  return (
    <Layout
      title="Projects | Francis Roberts"
      description="Side projects and open-source work by Francis Roberts"
    >
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 style={{ fontSize: '3rem' }}>Projects</h1>
          <p>
            Side projects I've built to explore tools outside of docs engineering, mostly
            things where the best way to understand something was to build it.
          </p>
        </section>

        <section className={styles.section}>
          <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>🎙️</span>
            Docs Engineering podcast series
          </h2>
          <div className={styles.job} style={{ marginBottom: '2rem' }}>
            <img
              src="/portfolio/img/podcast/docs-engineering-podcast.jpg"
              alt="Docs Engineering podcast episode"
              style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', display: 'block' }}
              loading="lazy"
            />
            <p style={{ marginBottom: '1rem', color: 'var(--ifm-color-content-secondary)', lineHeight: '1.65' }}>
              A conversation series on what "docs engineering" actually looks like day to day: migrating legacy platforms onto React and MDX, building the pipelines that test code samples, and the judgment calls behind what to document and what to cut. Recorded with fellow practitioners working on developer docs in the wild, including the team at <a href="https://koinju.io/" target="_blank" rel="noopener noreferrer">Koinju</a>, an institutional crypto data platform.
            </p>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7404514545265852416/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              style={{ marginLeft: 0 }}
            >
              Watch on LinkedIn ↗
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>🛠️</span>
            Open source
          </h2>
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>

        <section className={styles.section}>
          <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>🌱</span>
            Open-source contributions
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--ifm-color-content-secondary)', marginBottom: '2rem' }}>
            Docs PRs I've opened against products I use or want to make easier to use.
          </p>
          {CONTRIBUTIONS.map(c => (
            <ContributionRow key={c.url} contribution={c} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
