import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import styles from '../css/work.module.css';
import home from '../css/home.module.css';
import land from '../css/landing.module.css';
import ContactCta from '../components/ContactCta';
import Reveal from '../components/Reveal';
import {WHATSAPP, WaIcon} from '../components/Contact';
import {Belt, Trio} from '../components/Showcase';
import {HeroStack, TICKS, TrackRecord, About, Process, Faq} from '../components/Landing';

const SECTORS = ['Manufacturers', 'Engineering firms', 'Industrial suppliers', 'E-commerce', 'Regulated (UKGC)'];

export default function Home(): ReactNode {
  const links = useBrokenLinks();
  links.collectAnchor('services');
  links.collectAnchor('about');
  return (
    <Layout
      title="Websites and CRMs for industry, built to spec"
      description="Franrob Design: websites, CRMs and print for industrial and regulated businesses. One person handles the build, the hosting and the wording, in English and Spanish. Fran Roberts, Málaga.">
      <main className={`${styles.wrap} ${home.ind}`}>
        <header className={`${styles.heroSplit} ${home.hero}`}>
          <div>
            <div className={styles.eyebrow}>Web · Infrastructure · Brand · Print · Málaga</div>
            <h1>Websites and CRMs <br />for industry. <br />Built to spec.</h1>
            <p className="lead">
              Websites, CRMs and print for industrial and regulated businesses. One person handles the
              build, the hosting and the wording, in English and Spanish.
            </p>
            <div className={styles.actions}>
              <Link className={`${land.btn} ${land.solid}`} to="/contact">Start a project</Link>
              <Link className={land.btn} to="/work">See the work</Link>
              <a className={land.btn} href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Message me on WhatsApp, opens in a new tab"><WaIcon /> WhatsApp</a>
            </div>
            <ul className={land.ticks}>{TICKS.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
          <HeroStack />
        </header>

        <div className={home.strip}>
          <span>Built for</span>
          <ul>{SECTORS.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>

        <div id="services"><Trio /></div>

        <Reveal>
          <div className={styles.sectionHead}>
            <div>
              <h2>Selected work</h2>
              <p className={styles.sectionLead}>Open any screen to read the case study.</p>
            </div>
            <Link to="/work" className={styles.textLink}>All work →</Link>
          </div>
        </Reveal>
        <Belt />

        <Reveal><TrackRecord /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Faq /></Reveal>

        <ContactCta />
      </main>
    </Layout>
  );
}
