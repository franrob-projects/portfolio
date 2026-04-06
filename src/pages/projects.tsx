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
  icon: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Doc Link Monitor',
    icon: '🔗',
    description:
      'Documentation goes stale. External links break, pages move, APIs get deprecated. Doc Link Monitor is a fully serverless AWS application that checks every registered URL on an hourly schedule and fires an SNS alert the moment something breaks — built with AWS CDK so the entire infrastructure deploys with a single command.',
    details: [
      'CDK stack defines Lambda, DynamoDB, API Gateway, EventBridge, and SNS as code',
      'Checker Lambda scans DynamoDB, fires HEAD requests concurrently, and writes results back',
      'GSI on DynamoDB enables instant broken-link queries without a full table scan',
      'REST API to register URLs, list status, and trigger on-demand checks',
      'Pay-per-use — runs for cents per month at documentation team scale',
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
      'A gamification layer built on top of a Next.js security training platform aimed at crypto and iGaming companies operating under Gibraltar\'s DLT regulatory framework. The platform turns compliance training into something people actually want to do — tracking streaks, unlocking badges, and ranking teams on a live leaderboard.',
    details: [
      '13 badges across four tiers (Bronze → Platinum) with a data-driven badge engine',
      'Streak tracking with milestone markers at 3, 7, and 30 days',
      'Live team leaderboard with a composite risk score that decreases as training depth increases',
      'Supabase backend with RLS, a leaderboard view, and an auto-create user trigger',
      'Three new API routes and three React components — drop-in on an existing Next.js app',
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
      'A Neo4j graph database mapping Brazilian Jiu-Jitsu techniques, positions, and the relationships between them. Built because BJJ is inherently a graph problem — positions connect to techniques, techniques chain into other techniques, and some counter others. A relational database flattens that. Neo4j keeps the natural shape.',
    details: [
      '13 positions and 43 techniques with real competition frequency data',
      'Weighted relationships: AVAILABLE_FROM, TRANSITIONS_TO, CHAINS_INTO, COUNTERS',
      'Shortest-path queries to find routes between positions',
      'Express REST API with endpoints for submission chains, hub moves, and danger analysis',
      'Interactive Vis.js graph — nodes sized by competition frequency, filterable by type',
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
    </div>
  );
}

export default function Projects(): ReactNode {
  return (
    <Layout
      title="Projects — Francis Roberts"
      description="Side projects and open-source work by Francis Roberts"
    >
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 style={{ fontSize: '3rem' }}>Projects</h1>
          <p>
            Side projects I've built to explore tools outside of technical writing — mostly
            things where the best way to understand something was to build it.
          </p>
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
      </main>
    </Layout>
  );
}
