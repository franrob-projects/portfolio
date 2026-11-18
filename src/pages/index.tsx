import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../css/work.module.css';
import {WHATSAPP, WaIcon} from '../components/Contact';
import ContactCta from '../components/ContactCta';
import {Fan, Belt, Trio} from '../components/Showcase';

const EXPLORE: [string, string, string][] = [
  ['/work', 'Work', 'Case studies, working sites, CRM and product design.'],
  ['/projects', 'Projects', 'Open-source builds, docs tooling and contributions.'],
  ['/podcast', 'Podcast', 'EAR: In Conversation and the Docs Engineering series.'],
];


export default function Home(): ReactNode {
  return (
    <Layout
      title="Fran Roberts | Web, CRM and content designer"
      description="Web, CRM and content designer. Work for Ably, Conply and VIKI, plus regulation-support sites for the iGaming sector.">
      <main className={styles.wrap}>
        <header className={styles.heroSplit}>
          <div>
            <div className={styles.eyebrow}>Web, CRM and content design · Málaga</div>
            <h1>I design the site: graphics, words and infrastructure.</h1>
            <p className="lead">
              Sites and landing pages, CRM pipelines, and the copy that goes in both. Built for
              technical and regulated products.
            </p>
            <div className={styles.actions}>
              <Link className={`${styles.btn} ${styles.btnSolid}`} to="/work">See the work</Link>
              <Link className={styles.btn} to="/contact">Start a project</Link>
              <a className={styles.btn} href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Message Fran on WhatsApp, opens in a new tab"><WaIcon /> WhatsApp</a>
            </div>
          </div>
          <Fan />
        </header>

        <Trio />

        <div className={styles.sectionHead}>
          <div>
            <h2>What I make</h2>
            <p className={styles.sectionLead}>Websites, CRM design, product design, packaging and content. Open any screen to read the case study.</p>
          </div>
          <Link to="/work" className={styles.textLink}>All work →</Link>
        </div>
        <Belt />

        <div className={styles.sectionHead}><h2>Explore</h2></div>
        <div className={styles.grid3}>
          {EXPLORE.map(([to, title, text]) => (
            <Link key={to} to={to} className={styles.card} style={{padding: '1.5rem', height: 'auto'}}>
              <h3 style={{margin: '0 0 .5rem'}}>{title} →</h3>
              <p style={{margin: 0}}>{text}</p>
            </Link>
          ))}
        </div>

        <ContactCta />
      </main>
    </Layout>
  );
}
