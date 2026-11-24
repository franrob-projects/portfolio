import type {ReactNode} from 'react';
import styles from '../css/work.module.css';
import {WHATSAPP, WaIcon} from './Contact';
import Button from './Button';

export default function ContactCta(): ReactNode {
  return (
    <section className={`${styles.cta} fr-cta`} aria-labelledby="cta-h">
      <div>
        <h2 id="cta-h">Have a project in mind?</h2>
        <p>Tell me what you are trying to do. I reply within two working days.</p>
      </div>
      <div className={styles.actions} style={{marginTop: 0}}>
        <Button to="/contact" variant="primary">Start a project</Button>
        <Button href={WHATSAPP} variant="ghost" target="_blank" rel="noopener noreferrer" aria-label="Message me on WhatsApp, opens in a new tab"><WaIcon /> WhatsApp</Button>
      </div>
    </section>
  );
}
