import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import {ABLY_LIVE_PAGES} from '../data/work';
import Frame from './Frame';
import Reveal from './Reveal';

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
            <Link className={styles.card} to="/work/ably" aria-label={`${p.name}: ${p.what}. Read the Ably case study.`}>
              <Frame src={p.image} alt={`${p.name} page on ably.com`} wire={p.wire} />
              <div className={styles.cardBody}>
                <h3>{p.name}</h3>
                <p>{p.what}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
