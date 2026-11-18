import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';

const DO: [string, string][] = [
  ['Web design', 'Clear, fast sites that explain what you sell. Built, not just mocked up.'],
  ['CRM design', 'Pipelines, fields and views set up around how your team really sells.'],
  ['Content', 'Product copy, docs and help content written in plain language.'],
];

export default function About(): ReactNode {
  return (
    <Layout title="About | FranRob Project" description="Francis Roberts: web, CRM and content designer in Málaga, with a background in developer documentation.">
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>About</div>
          <h1>Hi, I’m Francis.</h1>
          <p className="lead">I design websites, CRM set-ups and the words that go in them. I work from Málaga, Spain.</p>
        </header>

        <div style={{maxWidth: 720}}>
          <p>I spent more than eight years as a technical writer and documentation engineer at developer-facing companies, including Ably and Couchbase. That taught me to make complicated things easy to follow, and to check that they actually work.</p>
          <p>Now I use that on the whole product surface: the site people land on, the CRM behind it, and the content that ties them together. I also run Conply, a compliance training product, and I build and publish my own sites, including regulation support for iGaming, tourism and parts retail.</p>
        </div>

        <div className={styles.sectionHead}><h2>What I do</h2></div>
        <div className={styles.grid3}>
          {DO.map(([t, d]) => (
            <div key={t} className={styles.card} style={{padding: '1.5rem'}}><h3 style={{margin: '0 0 .5rem'}}>{t}</h3><p style={{margin: 0}}>{d}</p></div>
          ))}
        </div>

        <p style={{marginTop: '2.5rem'}}><Link className={`${styles.btn} ${styles.btnSolid}`} to="/contact">Start a project</Link> <Link className={styles.btn} to="/work">See the work</Link></p>
      </main>
    </Layout>
  );
}
