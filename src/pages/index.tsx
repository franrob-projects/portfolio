import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function PersonalSite() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Francis Roberts</h1>
        <p className={styles.subtitle}>All things docs</p>
        <p style={{ marginBottom: '24px' }}>I create clear, practical documentation for developer products. My focus is making complex technical concepts accessible through well-structured guides and API docs.</p>
        <Link className={styles.button} to="/docs/intro">
          See my work
        </Link>
      </section>

      <section className={styles.section}>
        <h2 style={{ marginBottom: '3rem', fontSize: '2.25rem', fontWeight: '500', textAlign: 'center', letterSpacing: '-0.02em', background: 'linear-gradient(135deg, var(--ifm-color-content) 0%, var(--ifm-color-content-secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>🏍️</span>
          When offline
        </h2>
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
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>💼</span>
          My journey
        </h2>
        
        <div className={styles.job}>
          <h3>Developer Educator at Ably (2023)</h3>
          <p>Co-developing technical docs for the LiveSync database sync product, and contributing to the re-engineering of the <a href="https://ably.com/docs" target="_blank" rel="noopener noreferrer">ably.com/docs</a> codebase — migrating pages from the legacy Textile content system onto the new Next.js + TypeScript + React stack. Building scalable content strategies for developer adoption.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--ifm-color-content-secondary)' }}>
            Merged conversion PRs:{' '}
            <a href="https://github.com/ably/docs/pull/2911" target="_blank" rel="noopener noreferrer">REST API → MDX (#2911)</a>
            {' · '}
            <a href="https://github.com/ably/docs/pull/2913" target="_blank" rel="noopener noreferrer">SSE → MDX (#2913)</a>
          </p>
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
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>📝</span>
        Blog posts
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', textAlign: 'center' }}>
          I like to use LinkedIn as a blog for sharing tips and tricks I learned. Generally, the way I think tactical writing should be moving forward is on what I think is good and bad.
        </p>
        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--ifm-color-primary)', textAlign: 'center' }}>
          Click or scroll the widget below to read posts.
        </p>
        <div style={{ 
          height: '600px', 
          overflow: 'hidden', 
          borderRadius: '24px',
          position: 'relative',
          boxShadow: '0 4px 8px rgba(64, 215, 124, 0.1), inset 0 0 16px rgba(64, 215, 124, 0.25)',
          background: 'white',
          border: '2px solid var(--ifm-color-primary)'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
            zIndex: 2,
            borderRadius: '24px 24px 0 0',
            pointerEvents: 'none'
          }} />
          <style dangerouslySetInnerHTML={{
            __html: `
              .linkedin-widget-container {
                border-radius: 24px !important;
                overflow: auto !important;
              }
              .linkedin-widget-container::-webkit-scrollbar {
                width: 14px !important;
                background: rgba(64, 215, 124, 0.1) !important;
              }
              .linkedin-widget-container::-webkit-scrollbar-track {
                background: rgba(64, 215, 124, 0.1) !important;
                border-radius: 7px !important;
                margin: 2px !important;
              }
              .linkedin-widget-container::-webkit-scrollbar-thumb {
                background: linear-gradient(180deg, #3ecf8e, #2dd77c) !important;
                border-radius: 10px !important;
                border: 2px solid rgba(255,255,255,0.2) !important;
                min-height: 30px !important;
              }
              .linkedin-widget-container::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(180deg, #2dd77c, #27d074) !important;
                box-shadow: 0 0 8px rgba(64, 215, 124, 0.5) !important;
              }
              .linkedin-widget-container::-webkit-scrollbar-thumb:active {
                background: linear-gradient(180deg, #27d074, #1fb866) !important;
              }
            `
          }} />
          <div 
            className="linkedin-widget-container"
            style={{ 
              height: '100%',
              borderRadius: '24px',
              scrollbarWidth: 'auto',
              scrollbarColor: '#40d77c rgba(64, 215, 124, 0.1)'
            }}
          >
            <iframe 
              src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25647394" 
              width="100%" 
              height="600"
              style={{ 
                border: 'none', 
                position: 'relative',
                borderRadius: '24px'
              }}
              title="LinkedIn Posts"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>🤝</span>
          Let's work together
        </h2>
        <p style={{ textAlign: 'center' }}>Ready to improve your documentation? Let's discuss how I can help your team create docs that developers actually want to use.</p>
        
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
      description="Developer Educator and Technical Writer specializing in API documentation, docs-as-code, and developer experience">
      <PersonalSite />
    </Layout>
  );
}