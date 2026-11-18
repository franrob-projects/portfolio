import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import Contact, {WHATSAPP, WaIcon} from '../components/Contact';

const FACTS: [string, string][] = [
  ['Based in', 'Málaga, Spain (Europe/Madrid time)'],
  ['Replies', 'Within two working days'],
  ['Languages', 'English, and Spanish in progress'],
  ['Works on', 'Websites, CRM set-up and redesign, product and marketing copy'],
];

export default function ContactPage(): ReactNode {
  return (
    <Layout title="Contact | FranRob Project" description="Contact Francis Roberts for web design, CRM and content work. Email, WhatsApp or a short project brief.">
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Contact</div>
          <h1>Let’s talk about your project.</h1>
          <p className="lead">Send a short brief, or message me directly. I’ll tell you what I’d do, how long it takes and roughly what it costs.</p>
        </header>

        <div className={styles.grid3} style={{marginBottom: '1rem'}}>
          <a className={styles.card} style={{padding: '1.5rem'}} href="mailto:francisroberts@live.com">
            <div className={styles.eyebrow}>Email</div>
            <h3 style={{margin: '0 0 .4rem'}}>francisroberts@live.com</h3>
            <p style={{margin: 0}}>Best for briefs and attachments.</p>
          </a>
          <a className={styles.card} style={{padding: '1.5rem'}} href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp, opens in a new tab">
            <div className={styles.eyebrow}>WhatsApp</div>
            <h3 style={{margin: '0 0 .4rem', display: 'flex', gap: '.5rem', alignItems: 'center'}}><WaIcon /> +34 678 34 80 65</h3>
            <p style={{margin: 0}}>Best for a quick question.</p>
          </a>
          <a className={styles.card} style={{padding: '1.5rem'}} href="https://github.com/franrob-projects" target="_blank" rel="noopener noreferrer" aria-label="GitHub, opens in a new tab">
            <div className={styles.eyebrow}>GitHub</div>
            <h3 style={{margin: '0 0 .4rem'}}>franrob-projects</h3>
            <p style={{margin: 0}}>Code behind the concept sites.</p>
          </a>
        </div>

        <Contact />

        <div className={styles.sectionHead}><h2>Good to know</h2></div>
        <dl style={{display: 'grid', gridTemplateColumns: 'minmax(120px,200px) 1fr', gap: '.75rem 1.5rem', maxWidth: 760, margin: 0}}>
          {FACTS.map(([k, v]) => (<><dt key={k} style={{color: 'var(--meta)'}}>{k}</dt><dd key={k + v} style={{margin: 0}}>{v}</dd></>))}
        </dl>
        <p style={{marginTop: '2rem'}}>See <Link to="/work">the work</Link>, read <Link to="/about">about me</Link>, or check the <Link to="/privacy">privacy note</Link>.</p>
      </main>
    </Layout>
  );
}
