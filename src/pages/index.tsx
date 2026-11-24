import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../css/work.module.css';
import home from '../css/home.module.css';
import ContactCta from '../components/ContactCta';
import {Fan, Belt, Trio} from '../components/Showcase';

const SECTORS = ['Manufacturers', 'Engineering firms', 'Industrial suppliers', 'E-commerce', 'IT regs'];



export default function Home(): ReactNode {
  return (
    <Layout
      title="Brand, print and web, built to spec"
      description="Franrob Design: rebrands, graphic design, print, websites and CRM for engineering, industrial and regulated businesses. By Fran Roberts in Málaga. Work for Ably, Conply and VIKI, plus regulation-support sites for the iGaming sector.">
      <main className={`${styles.wrap} ${home.ind}`}>
        <header className={`${styles.heroSplit} ${home.hero}`}>
          <div>
            <div className={styles.eyebrow}>Brand · Print · Web · Infrastructure · Málaga</div>
            <h1>Brand, print and web. Built to spec.</h1>
            <p className="lead">
              Rebrands, graphic design, print and display boards. Websites built front to back:
              hosting, databases, CMS and integrations. And the wording that ties it all together, for
              engineering, industrial and regulated businesses.
            </p>
            <div className={styles.actions}>
              <Link className={`${styles.btn} ${styles.btnSolid}`} to="/work">See the work</Link>
              <Link className={styles.btn} to="/contact">Start a project</Link>
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
            <h2>What we make</h2>
            <p className={styles.sectionLead}>Open any screen to read the case study.</p>
          </div>
          <Link to="/work" className={styles.textLink}>All work →</Link>
        </div>
        <Belt />

        <ContactCta />
      </main>
    </Layout>
  );
}
