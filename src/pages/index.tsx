import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import home from '../css/home.module.css';
import ContactCta from '../components/ContactCta';
import {WHATSAPP, WaIcon} from '../components/Contact';
import {Belt, Trio} from '../components/Showcase';
import Button from '../components/Button';
import SectionLabel from '../components/SectionLabel';
import StatusStrip from '../components/StatusStrip';
import HeroExplode from '../components/HeroExplode';
import ProofStrip from '../components/ProofStrip';
import Reveal from '../components/Reveal';

const SECTORS = ['Manufacturers', 'Engineering firms', 'Industrial suppliers', 'E-commerce', 'Regulated sectors'];
// Registration marks at grid intersections (column, row in 64px cells from the hero's top-left)
const MARKS = [[10, 1], [14, 4], [17, 2], [12, 6]];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Web, brand and print, built to spec"
      description="Franrob Design: websites built front to back, rebrands, graphic design and print for engineering, industrial and regulated businesses. By Fran Roberts in Málaga.">
      <main className={`${styles.wrap} ${home.ind}`}>
        <header className={`${styles.heroSplit} ${home.hero}`}>
          <div className={home.marks} aria-hidden="true">
            {MARKS.map(([c, r]) => <i key={`${c}-${r}`} style={{left: c * 64, top: r * 64}} />)}
          </div>
          <div>
            <div className={styles.eyebrow}>Web · Infrastructure · Brand · Print · Málaga</div>
            <h1 className="fr-typeon">Web, brand and print. Built to spec.</h1>
            <p className="lead">
              I build websites front to back: hosting, databases, CMS and integrations. Plus rebrands,
              graphic design, print and display boards, and the wording that ties it all together, for
              engineering, industrial and regulated businesses.
            </p>
            <div className={styles.actions}>
              <Button to="/work" variant="primary">See the work</Button>
              <Button to="/contact" variant="secondary">Start a project</Button>
              <Button href={WHATSAPP} variant="ghost" target="_blank" rel="noopener noreferrer" aria-label="Message me on WhatsApp, opens in a new tab"><WaIcon /> WhatsApp</Button>
            </div>
          </div>
          <HeroExplode />
        </header>

        <StatusStrip />

        <div className={home.strip}>
          <span>Built for</span>
          <ul>
            {SECTORS.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <Reveal>
          <SectionLabel n="01">Services</SectionLabel>
          <h2 className={home.h2}>What I do</h2>
        </Reveal>
        <Trio />

        <Reveal>
          <SectionLabel n="02">Work</SectionLabel>
          <div className={styles.sectionHead} style={{marginTop: 0}}>
            <div>
              <h2>What I make</h2>
              <p className={styles.sectionLead}>Open any screen to read the case study.</p>
            </div>
            <Link to="/work" className={styles.textLink}>All work →</Link>
          </div>
        </Reveal>
        <Belt />

        <ProofStrip />

        <SectionLabel n="03">Contact</SectionLabel>
        <ContactCta />
      </main>
    </Layout>
  );
}
