import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import LiveWork from '../../components/LiveWork';
import styles from '../../css/work.module.css';
import { CASE_STUDIES, CONCEPT_SITES, SUPPORT_SITES } from '../../data/work';

export default function Work(): ReactNode {
  return (
    <Layout
      title="Work | Francis Roberts"
      description="Web, CRM and content design work: Ably, Conply, VIKI and regulation-support sites for iGaming."
    >
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Selected work</div>
          <h1>Web, CRM and content, designed as one system.</h1>
          <p>Four case studies, and two regulation-support sites for the UK gambling sector.</p>
        </header>

        <LiveWork />

        <div className={styles.sectionHead}>
          <h2>Case studies</h2>
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
        </div>
        <p style={{color: 'var(--ifm-color-content-secondary)', marginTop: '-.5rem', marginBottom: '1.25rem'}}>
          One niche, precision CNC job shops, designed twice on open-source CRMs in two different tones.
        </p>
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
            <a key={s.name} href={s.href} className={styles.card}>
              <h3>{s.name}</h3>
              <div className={styles.kicker}>{s.market} · React</div>
              <p>{s.pitch}</p>
              <div className={styles.cardFoot}>
                <span className={styles.status}>{s.status} ↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <h2>More web design concepts</h2>
        </div>
        <div className={styles.grid2}>
          {CONCEPT_SITES.map(s => (
            <a key={s.name} href={s.href} className={styles.card}>
              <h3>{s.name}</h3>
              <div className={styles.kicker}>{s.market}</div>
              <p>{s.pitch}</p>
              <div className={styles.cardFoot}>
                <span className={styles.status}>{s.status} ↗</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </Layout>
  );
}
