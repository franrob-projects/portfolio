import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import Contact from '../components/Contact';

const FACTS: [string, string][] = [
  ['Based in', 'Málaga, Spain (Europe/Madrid time)'],
  ['Replies', 'Within two working days'],
  ['Languages', 'English, and Spanish in progress'],
  ['GitHub', 'github.com/franrob-projects'],
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
