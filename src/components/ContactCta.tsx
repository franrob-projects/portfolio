import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import {WHATSAPP, WaIcon} from './Contact';

export default function ContactCta(): ReactNode {
  return (
    <section className={styles.cta} aria-labelledby="cta-h">
      <div>
        <h2 id="cta-h">Have a project in mind?</h2>
        <p>Tell us what you are trying to do. We reply within two working days.</p>
      </div>
      <div className={styles.actions} style={{marginTop: 0}}>
        <Link className={`${styles.btn} ${styles.btnSolid}`} to="/contact">Start a project</Link>
        <a className={styles.btn} href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp, opens in a new tab"><WaIcon /> WhatsApp</a>
      </div>
    </section>
  );
}
