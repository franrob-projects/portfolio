import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from '../../css/work.module.css';
import ContactCta from '../../components/ContactCta';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';
import {CASE_STUDIES, openFor } from '../../data/work';

const STUDIES = CASE_STUDIES.filter(c => !c.slug.startsWith('crm-') && c.kind !== 'concept' && c.kind !== 'product');
const PRODUCT = CASE_STUDIES.filter(c => c.kind === 'product');
const WEB = CASE_STUDIES.filter(c => c.kind === 'concept');
const CRM = CASE_STUDIES.filter(c => c.slug.startsWith('crm-'));

const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

export default function Work(): ReactNode {
  return (
    <Layout title="Work | FranRob Project" description="Web, CRM and content design work: Ably, Conply, VIKI and regulation-support sites for iGaming.">
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Selected work</div>
          <h1>Web, CRM and content, designed together.</h1>
          <p>Case studies and working sites.</p>
        </header>

        <div className={styles.grid3}>
          {STUDIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 70}>
              <ProjectCard to={`/work/${c.slug}`} open={openFor(c.slug)} title={c.title} kicker={c.kicker} summary={c.summary} image={c.image} wire={c.wire} tags={c.disciplines} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead}><h2>Product design</h2></div>
        <div className={styles.grid3}>
          {PRODUCT.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <ProjectCard to={`/work/${c.slug}`} open={openFor(c.slug)} title={c.title} kicker={c.kicker} summary={c.summary} image={c.image} tags={c.disciplines} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead}>
          <div>
            <h2>CRM design</h2>
          </div>
        </div>
        <div className={styles.grid3}>
          {CRM.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <ProjectCard to={`/work/${c.slug}`} open={openFor(c.slug)} title={cap(c.title.replace('CRM example: ', ''))} kicker={c.kicker} summary={c.summary} image={c.image} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead}><h2>Web projects</h2></div>
        <div className={styles.grid2}>
          {WEB.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 70}>
              <ProjectCard to={`/work/${s.slug}`} open={openFor(s.slug)} title={s.title} kicker={s.kicker} summary={s.summary} image={s.image} status={s.status} />
            </Reveal>
          ))}
        </div>

        <ContactCta />
      </main>
    </Layout>
  );
}
