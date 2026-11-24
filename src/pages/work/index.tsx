import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from '../../css/work.module.css';
import ContactCta from '../../components/ContactCta';
import ProjectCard from '../../components/ProjectCard';
import Reveal from '../../components/Reveal';
import {CASE_STUDIES, CRMS, openFor } from '../../data/work';

const FEATURED_SLUGS = ['ably', 'conply', 'parallel-parts'];
const FEATURED = FEATURED_SLUGS.map(slug => CASE_STUDIES.find(c => c.slug === slug)!);
const rest = (list: typeof CASE_STUDIES) => list.filter(c => !FEATURED_SLUGS.includes(c.slug));
const WEB = rest(CASE_STUDIES.filter(c => c.kind === 'concept'));
const PRODUCT = CASE_STUDIES.filter(c => c.kind === 'product');
const MORE = rest(CASE_STUDIES.filter(c => c.kind !== 'concept' && c.kind !== 'product'));

export default function Work(): ReactNode {
  return (
    <Layout title="Work" description="Web, CRM and content design work: Ably, Conply, VIKI and regulation-support sites for iGaming.">
      <main className={styles.wrap}>
        <header className={`${styles.hero} ${styles.workHero}`}>
          <div className={styles.eyebrow}>Selected work</div>
          <h1>Web, CRM and content, designed together.</h1>
          <p>Case studies and working sites.</p>
        </header>

        <nav className={styles.jump} aria-label="Jump to a section">
          <a href="#featured">Featured</a>
          <a href="#crm">CRM design</a>
          <a href="#web">Web projects</a>
          <a href="#product">Product</a>
          <a href="#more">More</a>
        </nav>

        <div className={`${styles.sectionHead} ${styles.firstHead}`} id="featured"><h2>Featured</h2></div>
        <div className={styles.grid3}>
          {FEATURED.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <ProjectCard to={`/work/${c.slug}`} open={openFor(c.slug)} title={c.title} kicker={c.kicker} summary={c.summary} image={c.image} wire={c.wire} tags={c.disciplines} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead} id="crm"><h2>CRM design</h2></div>
        <div className={styles.grid3}>
          {CRMS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <ProjectCard to={c.href.startsWith('/demos/') ? `/work/${c.slug}` : c.href} open={c.href.startsWith('/demos/') ? {label: 'Open CRM', href: c.href} : undefined} title={c.site} kicker={c.title} summary={c.summary} image={c.image} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead} id="web"><h2>Web projects</h2></div>
        <div className={styles.grid2}>
          {WEB.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 70}>
              <ProjectCard to={`/work/${s.slug}`} open={openFor(s.slug)} title={s.title} kicker={s.kicker} summary={s.summary} image={s.image} status={s.status} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead} id="product"><h2>Product design</h2></div>
        <div className={styles.grid3}>
          {PRODUCT.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <ProjectCard to={`/work/${c.slug}`} open={openFor(c.slug)} title={c.title} kicker={c.kicker} summary={c.summary} image={c.image} tags={c.disciplines} />
            </Reveal>
          ))}
        </div>

        <div className={styles.sectionHead} id="more"><h2>More</h2></div>
        <div className={styles.grid3}>
          {MORE.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 70}>
              <ProjectCard to={`/work/${c.slug}`} open={openFor(c.slug)} title={c.title} kicker={c.kicker} summary={c.summary} image={c.image} wire={c.wire} tags={c.disciplines} />
            </Reveal>
          ))}
        </div>

        <ContactCta />
      </main>
    </Layout>
  );
}
