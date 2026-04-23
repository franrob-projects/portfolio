import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import TechCarousel from '../components/TechCarousel';

function PersonalSite() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Francis Roberts</h1>
        <p className={styles.subtitle}>All things docs</p>
        <p style={{ marginBottom: '24px' }}>I build documentation sites and write the content that lives on them. That means engineering the underlying infrastructure (migrating legacy platforms like Textile onto modern React, TypeScript, and MDX stacks) alongside authoring the API references, guides, and troubleshooting content developers actually use.</p>
        <Link className={styles.button} to="/docs/intro">
          See my work
        </Link>
      </section>

      <TechCarousel />

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
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Motorbikes in the morning, docs engineering in the day, and Brazilian Jiu-Jitsu at night.</p>
      </section>

      <section className={styles.section}>
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>💼</span>
          My docs journey
        </h2>
        
        <div className={styles.job}>
          <h3>Developer Educator and Docs Engineer at Ably (2023)</h3>
          <p>Co-developing technical docs for the LiveSync database sync product, and contributing to the re-engineering of the ably.com/docs codebase by migrating pages from the legacy Textile content system onto the new Next.js + TypeScript + React stack. Building scalable content strategies for developer adoption.</p>
        </div>
        
        <div className={styles.job}>
          <h3>Lead Docs Engineer at Couchbase (2022)</h3>
          <p>Built scalable documentation framework, authored API docs for Cloud/Mobile/Edge platforms, consolidated fragmented repos into unified GitHub monorepo.</p>
        </div>
        
        <div className={styles.job}>
          <h3>Docs Engineer at CDW UK (2021)</h3>
          <p>Authored developer-centric API docs for cloud platforms, maintained AWS/Azure documentation, created multi-language SDK documentation.</p>
        </div>
        
        <div className={styles.job}>
          <h3>Docs Engineer at Atlas Copco (2018)</h3>
          <p>Authored software/hardware manuals and API documentation, developed browser-based documentation portals.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(64, 215, 124, 0.3))' }}>📝</span>
        Docs tips
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', textAlign: 'center' }}>
          I share the docs tips and tricks I pick up on LinkedIn. I'm also a <Link to="/blog">crypto</Link> geek writing about blockchain, smart contracts, and developer tooling over on the blog.
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
          <a className={styles.button} href="https://github.com/franrob-projects" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" style={{ padding: '0.6rem 0.8rem' }}>
            <img src="/portfolio/img/icons/github.svg" alt="" style={{ width: '22px', height: '22px', display: 'block', filter: 'brightness(0) invert(1)' }} />
          </a>
          <a className={styles.button} href="https://linkedin.com/in/francis-roberts-5850b396" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={{ padding: '0.6rem 0.8rem' }}>
            <img src="/portfolio/img/icons/linkedin.svg" alt="" style={{ width: '22px', height: '22px', display: 'block' }} />
          </a>
          <a className={styles.button} href="mailto:francis@fantasyfruitsatlife.com" aria-label="Email" title="Email" style={{ padding: '0.6rem 0.8rem', color: 'var(--ifm-color-primary)' }}>
            <img src="/portfolio/img/icons/email.svg" alt="" style={{ width: '22px', height: '22px', display: 'block', filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Francis Roberts - Technical Writing Portfolio"
      description="Documentation engineer and docs engineer building and authoring developer docs: doc-site infrastructure, API references, and migrations from legacy platforms to modern React/MDX stacks.">
      <PersonalSite />
    </Layout>
  );
}