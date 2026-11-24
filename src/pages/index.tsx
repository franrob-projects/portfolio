import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../css/work.module.css';
import home from '../css/home.module.css';
import {WHATSAPP, WaIcon} from '../components/Contact';
import ContactCta from '../components/ContactCta';
import {Fan, Belt, Trio} from '../components/Showcase';

const SECTORS = ['Manufacturers', 'Engineering firms', 'Industrial suppliers', 'Regulated products'];

const EXPLORE: [string, string, string][] = [
  ['/work', 'Work', 'Case studies, working sites, CRM and product design.'],
  ['/projects', 'Projects', 'Open-source builds, docs tooling and contributions.'],
  ['/podcast', 'Podcast', 'EAR: In Conversation and the Docs Engineering series.'],
];


export default function Home(): ReactNode {
  return (
    <Layout
      title="Web, CRM and content design"
      description="Franrob Design: web, CRM and content design by Fran Roberts in Málaga. Work for Ably, Conply and VIKI, plus regulation-support sites for the iGaming sector.">
      <main className={`${styles.wrap} ${home.ind}`}>
        <header className={`${styles.heroSplit} ${home.hero}`}>
          <div>
            <div className={styles.eyebrow}><span className={home.tag}>Franrob Design</span>Web, CRM and content design · Málaga</div>
            <h1>I design the site: graphics, words and infrastructure.</h1>
            <p className="lead">
              Franrob Design is the web, CRM and content design studio of Fran Roberts. Sites and
              landing pages, CRM pipelines, and the copy that goes in both, built for technical and
              regulated products.
            </p>
            <div className={styles.actions}>
              <Link className={`${styles.btn} ${styles.btnSolid}`} to="/work">See the work</Link>
              <Link className={styles.btn} to="/contact">Start a project</Link>
              <a className={styles.btn} href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Message Fran on WhatsApp, opens in a new tab"><WaIcon /> WhatsApp</a>
            </div>
          </div>
          <Fan />
        </header>

        <div className={home.strip}>
          <span>Built for</span>
          <ul>
            {SECTORS.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

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
