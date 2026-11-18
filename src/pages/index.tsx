import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../css/work.module.css';
import Contact from '../components/Contact';
import Frame from '../components/Frame';
import LiveWork from '../components/LiveWork';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import {CASE_STUDIES, CONCEPT_SITES, SUPPORT_SITES} from '../data/work';

const PRODUCTS = CASE_STUDIES.filter(c => c.slug === 'conply' || c.slug === 'viki');
const CRM = CASE_STUDIES.filter(c => c.slug.startsWith('crm-'));
const WEB = [...SUPPORT_SITES, ...CONCEPT_SITES];

const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

export default function Home(): ReactNode {
  return (
    <Layout
      title="FranRob Project | Web, CRM and content designer"
      description="Web, CRM and content designer. Work for Ably, Conply and VIKI, plus regulation-support sites for the iGaming sector.">
      <main className={styles.wrap}>
        <header className={styles.heroSplit}>
          <div>
            <div className={styles.eyebrow}>Web, CRM and content design · Málaga</div>
            <h1>I design the site, the pipeline and the words.</h1>
            <p className="lead">
              Sites and landing pages, CRM pipelines, and the copy that goes in both. Built for
              technical and regulated products.
            </p>
            <div className={styles.actions}>
              <Link className={`${styles.btn} ${styles.btnSolid}`} to="/work">See the work</Link>
              <a className={styles.btn} href="#contact">Start a project</a>
            </div>
          </div>
          <div className={styles.stack} aria-hidden>
            <Frame src="/portfolio/img/work/ably-livesync.jpg" alt="" wire="landing" />
            <Frame src="/portfolio/img/work/viki.jpg" alt="" wire="landing" />
            <Frame src="/portfolio/img/work/conply.jpg" alt="" wire="product" />
          </div>
        </header>

        <LiveWork />

        <div className={styles.sectionHead}>
          <div>
            <h2>Products</h2>
            <p className={styles.sectionLead}>Product sites and content systems I run or build with others.</p>
          </div>
        </div>
        <div className={styles.grid2}>
          {PRODUCTS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <ProjectCard to={`/work/${c.slug}`} title={c.title} kicker={c.kicker} summary={c.summary} image={c.image} wire={c.wire} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <div>
            <h2>CRM design</h2>
            <p className={styles.sectionLead}>One niche, precision CNC job shops, designed twice on open-source CRMs.</p>
          </div>
        </div>
        <div className={styles.grid2}>
          {CRM.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <ProjectCard to={`/work/${c.slug}`} title={cap(c.title.replace('CRM example: ', ''))} kicker={c.kicker} summary={c.summary} image={c.image} wire={c.wire} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <div>
            <h2>Web design concepts</h2>
            <p className={styles.sectionLead}>Working sites you can click through. Content is draft.</p>
          </div>
          <Link to="/work" className={styles.textLink}>All work →</Link>
        </div>
        <div className={styles.grid2}>
          {WEB.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 70}>
              <ProjectCard href={s.href} title={s.name} kicker={s.market} summary={s.pitch} image={s.image} status={s.status} />
            </Reveal>
          ))}
        </div>

        <p style={{marginTop: '3rem', color: 'var(--meta)'}}>
          Also: <Link to="/docs/intro" className={styles.textLink}>docs engineering work</Link> and the{' '}
          <Link to="/blog" className={styles.textLink}>crypto blog</Link>.
        </p>

        <Contact />
      </main>
    </Layout>
  );
}
