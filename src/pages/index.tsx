import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function PersonalSite() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Francis Roberts</h1>
        <p className={styles.subtitle}>Documentation engineer</p>
        <p style={{ marginBottom: '24px', maxWidth: '560px', margin: '0 auto 24px', color: 'var(--ifm-color-content-secondary)' }}>
          I build docs sites and write the content on them: infrastructure, API references, and migrations from legacy CMSes onto React and MDX.
        </p>
        <Link className={styles.button} to="/docs/intro">
          See my work
        </Link>
      </section>

      <section className={styles.section}>
        <h2>When offline</h2>
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            width: '280px',
            height: '350px',
            boxShadow: '0 4px 12px rgba(64, 215, 124, 0.2)'
          }}>
            <img 
              src="/portfolio/img/Ver fotos recientes.jpeg"
              alt="Francis Roberts"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 35%'
              }}
            />
          </div>
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            width: '280px',
            height: '350px',
            boxShadow: '0 4px 12px rgba(64, 215, 124, 0.2)'
          }}>
            <img 
              src="/portfolio/img/bjj.jpg"
              alt="Francis Roberts"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Motorbikes in the morning, technical writing in the day, and Brazilian Jiu-Jitsu at night.</p>
      </section>

      <section className={styles.section}>
        <h2>My journey</h2>
        
        <div className={styles.job}>
          <h3>Developer Educator at Ably (2023)</h3>
          <p>Co-developing technical docs for the LiveSync database sync product, and contributing to the re-engineering of the ably.com/docs codebase by migrating pages from the legacy Textile content system onto the new Next.js + TypeScript + React stack. Building scalable content strategies for developer adoption.</p>
        </div>
        
        <div className={styles.job}>
          <h3>Lead Technical Writer at Couchbase (2022)</h3>
          <p>Built scalable documentation framework, authored API docs for Cloud/Mobile/Edge platforms, consolidated fragmented repos into unified GitHub monorepo.</p>
        </div>
        
        <div className={styles.job}>
          <h3>Technical Writer at CDW UK (2021)</h3>
          <p>Authored developer-centric API docs for cloud platforms, maintained AWS/Azure documentation, created multi-language SDK documentation.</p>
        </div>
        
        <div className={styles.job}>
          <h3>Technical Writer at Atlas Copco (2018)</h3>
          <p>Authored software/hardware manuals and API documentation, developed browser-based documentation portals.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Writing</h2>
        <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: '1.25rem' }}>
          I post tips, patterns, and opinions from the craft of technical writing on LinkedIn.
        </p>
        <a className={styles.button} href="https://linkedin.com/in/francis-roberts-5850b396" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 0 }}>
          Read on LinkedIn
        </a>
      </section>

      <section className={styles.section}>
        <h2>Let's work together</h2>
        <p style={{ color: 'var(--ifm-color-content-secondary)', marginBottom: '1.25rem' }}>
          Ready to improve your documentation? Let's talk about what your team needs.
        </p>
        
        <div className={styles.links}>
          <Link className={styles.button} to="/docs/intro">See my work</Link>
          <a className={styles.button} href="https://github.com/franrob-projects" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className={styles.button} href="https://linkedin.com/in/francis-roberts-5850b396" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Francis Roberts - Technical Writing Portfolio"
      description="Documentation engineer and technical writer building and authoring developer docs: doc-site infrastructure, API references, and migrations from legacy platforms to modern React/MDX stacks.">
      <PersonalSite />
    </Layout>
  );
}