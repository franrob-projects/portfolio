import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';

export default function ContactCta(): ReactNode {
  return (
    <section className={styles.cta} aria-labelledby="cta-h">
      <div>
        <h2 id="cta-h">Have a project in mind?</h2>
        <p>Tell me what you are trying to do. I reply within two working days.</p>
      </div>
      <Link className={`${styles.btn} ${styles.btnSolid}`} to="/contact">Start a project</Link>
    </section>
  );
}
