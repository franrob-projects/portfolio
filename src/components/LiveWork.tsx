import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import {ABLY_LIVE_PAGES} from '../data/work';
import Frame from './Frame';
import Reveal from './Reveal';
import {ExternalIcon} from './ProjectCard';

export default function LiveWork(): ReactNode {
  return (
    <section aria-labelledby="live-work" className={styles.liveSection}>
      <div className={styles.sectionHead}>
        <div>
          <h2 id="live-work">Live at Ably</h2>
          <p className={styles.sectionLead}>Pages I redesigned and built, running in production on ably.com.</p>
        </div>
        <Link to="/work/ably" className={styles.textLink}>Read the case study →</Link>
      </div>
      <div className={styles.grid2}>
        {ABLY_LIVE_PAGES.map((p, i) => (
          <Reveal key={p.href} delay={i * 70}>
            <a className={styles.card} href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: ${p.what}. Opens ably.com in a new tab.`}>
              <Frame src={p.image} alt={`${p.name} page on ably.com`} wire={p.wire} />
              <div className={styles.cardBody}>
                <h3>{p.name}<ExternalIcon /></h3>
                <p>{p.what}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
