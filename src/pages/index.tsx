import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../css/work.module.css';
import legacy from './index.module.css';
import LiveWork from '../components/LiveWork';
import TechCarousel from '../components/TechCarousel';
import { CASE_STUDIES, SUPPORT_SITES } from '../data/work';

const DISCIPLINES = [
  {
    n: '01',
    t: 'Web design',
    d: 'Marketing sites, landing pages and product UI in React and Next.js. Fast, accessible, and built to make one point clearly.',
  },
  {
    n: '02',
    t: 'CRM design',
    d: 'Pipelines, lifecycle messaging and outreach systems that turn a visitor into a conversation and a conversation into a customer.',
  },
  {
    n: '03',
    t: 'Content design',
    d: 'Positioning, product copy and information architecture, so the words and the layout argue the same case.',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Francis Roberts | Web, CRM and content designer"
      description="Web, CRM and content designer. Work for Ably, Conply and VIKI, plus regulation-support sites for the iGaming sector."
    >
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Francis Roberts · Málaga, Spain</div>
          <h1>Web, CRM and content designer.</h1>
          <p>
            I design the site, the pipeline behind it and the words on it, as one system. Eight
            years of writing for developer-facing companies, now applied to products and marketing
            for regulated and technical audiences.
          </p>
          <div className={styles.actions}>
            <Link className={`${styles.btn} ${styles.btnSolid}`} to="/work">
              See the work
            </Link>
            <a className={styles.btn} href="mailto:francis@fantasyfruitsatlife.com">
              Get in touch
            </a>
          </div>
        </header>

        <div className={styles.grid3}>
          {DISCIPLINES.map(d => (
            <div key={d.n} className={`${styles.card} ${styles.disc}`}>
              <div className={styles.discNum}>{d.n}</div>
              <h3>{d.t}</h3>
              <p>{d.d}</p>
            </div>
          ))}
        </div>

        <LiveWork />

        <div className={styles.sectionHead}>
          <h2>Featured work</h2>
          <Link to="/work">All work →</Link>
        </div>
        <div className={styles.grid2}>
          {CASE_STUDIES.filter(c => !c.slug.startsWith('crm-')).map(c => (
            <Link key={c.slug} to={`/work/${c.slug}`} className={styles.card}>
              <h3>{c.title}</h3>
              <div className={styles.kicker}>{c.kicker}</div>
              <p>{c.summary}</p>
              <div className={styles.cardFoot}>
                {c.disciplines.map(d => (
                  <span key={d} className={`${styles.chip} ${styles.chipAccent}`}>
                    {d}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <h2>CRM design examples</h2>
          <Link to="/work">See both →</Link>
        </div>
        <div className={styles.grid2}>
          {CASE_STUDIES.filter(c => c.slug.startsWith('crm-')).map(c => (
            <Link key={c.slug} to={`/work/${c.slug}`} className={styles.card}>
              <h3>{c.title}</h3>
              <div className={styles.kicker}>{c.kicker}</div>
              <p>{c.summary}</p>
            </Link>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <h2>iGaming regulation support</h2>
        </div>
        <div className={styles.grid2}>
          {SUPPORT_SITES.map(s => (
            <div key={s.name} className={styles.card}>
              <h3>{s.name}</h3>
              <div className={styles.kicker}>{s.market} · React</div>
              <p>{s.pitch}</p>
              <div className={styles.cardFoot}>
                <span className={styles.status}>{s.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <h2>Tools</h2>
        </div>
        <TechCarousel />

        <div className={styles.sectionHead}>
          <h2>Writing and docs</h2>
        </div>
        <div className={styles.grid2}>
          <Link to="/docs/intro" className={styles.card}>
            <h3>Docs engineering</h3>
            <p>Where the content work started: Ably, Couchbase, CDW and Atlas Copco.</p>
          </Link>
          <Link to="/blog" className={styles.card}>
            <h3>Crypto blog</h3>
            <p>Writing on smart contracts, Ethereum and developer tooling.</p>
          </Link>
        </div>

        <section className={legacy.section} style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Let's work together</h2>
          <p>Have a site, a pipeline or a product story that needs designing? Send me a line.</p>
          <div className={legacy.links}>
            <a className={legacy.button} href="mailto:francis@fantasyfruitsatlife.com">
              Email
            </a>
            <a
              className={legacy.button}
              href="https://linkedin.com/in/francis-roberts-5850b396"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={legacy.button}
              href="https://github.com/franrob-projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
