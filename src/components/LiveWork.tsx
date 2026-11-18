import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import { ABLY_LIVE_PAGES } from '../data/work';

export default function LiveWork(): ReactNode {
  return (
    <section aria-labelledby="live-work">
      <div className={styles.sectionHead}>
        <h2 id="live-work">Live at Ably</h2>
        <Link to="/work/ably">Read the case study →</Link>
      </div>
      <p
        style={{
          color: 'var(--ifm-color-content-secondary)',
          marginTop: '-.5rem',
          marginBottom: '1.25rem',
        }}
      >
        Pages I redesigned and built, running in production on ably.com.
      </p>
      <div className={styles.grid4}>
        {ABLY_LIVE_PAGES.map(p => (
          <a
            key={p.href}
            className={styles.card}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              {p.name} <span aria-hidden>↗</span>
            </h3>
            <p style={{ marginBottom: 0 }}>{p.what}</p>
            <span className="visually-hidden"> (opens ably.com)</span>
          </a>
        ))}
      </div>
    </section>
  );
}
