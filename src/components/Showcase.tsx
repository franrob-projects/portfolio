import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {CASE_STUDIES} from '../data/work';
import styles from '../css/showcase.module.css';

const FAN = ['classic-triumph-malaga', 'earth-and-hound', 'ably', 'viki-dashboard', 'conply'];
const bySlug = (s: string) => CASE_STUDIES.find(c => c.slug === s)!;
const label = (d: string[]) => d.join(' · ');

export function Fan(): ReactNode {
  return (
    <div className={styles.fan}>
      {FAN.map((slug, n) => {
        const c = bySlug(slug);
        const i = n - 2;
        return (
          <Link key={slug} to={`/work/${slug}`} className={styles.fanCard} style={{['--i' as string]: i, ['--abs' as string]: Math.abs(i)}}>
            <span className={styles.fanBar}><i /><i /><i /></span>
            <img className={styles.fanImg} src={c.image} alt="" />
            <span className={styles.fanLabel}><b>{c.title}</b><span>{label(c.disciplines)}</span></span>
          </Link>
        );
      })}
    </div>
  );
}

const FILTERS = ['All', 'Web', 'CRM', 'Product', 'Packaging', 'Content'] as const;

export function Belt(): ReactNode {
  const [f, setF] = useState<(typeof FILTERS)[number]>('All');
  const all = CASE_STUDIES.filter(c => c.image && c.slug !== 'viki');
  const list = all.filter(c => f === 'All' || (c.disciplines as string[]).includes(f));
  return (
    <>
      <div className={styles.chips} role="group" aria-label="Filter work">
        {FILTERS.map(k => <button key={k} className={styles.chipBtn} aria-pressed={f === k} onClick={() => setF(k)}>{k}</button>)}
      </div>
      <div className={styles.screens}>
        {list.map((c, i) => (
          <Link key={f + c.slug} to={`/work/${c.slug}`} className={styles.screen} style={{animationDelay: `${i * 45}ms`}}>
            <span className={styles.screenBar}><i /><i /><i /><em>{c.title}</em></span>
            <span className={styles.view}><img src={c.image} alt="" loading="lazy" /></span>
            <span className={styles.screenInfo}><b>{c.title}</b><span>{c.kicker}</span></span>
          </Link>
        ))}
      </div>
    </>
  );
}

export function Trio(): ReactNode {
  return (
    <div className={styles.trio}>
      <div className={styles.tcard}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="Website layout wireframe">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="12" />
          <circle cx="22" cy="20" r="3.5" className={styles.acc} /><circle cx="34" cy="20" r="3.5" className={styles.ln} /><circle cx="46" cy="20" r="3.5" className={styles.ln} />
          <rect className={styles.ln} x="250" y="16" width="26" height="8" rx="4" /><rect className={styles.ln} x="282" y="16" width="26" height="8" rx="4" /><rect className={styles.acc} x="314" y="14" width="30" height="12" rx="6" />
          <rect className={styles.ln} x="24" y="48" width="170" height="14" rx="4" /><rect className={styles.ln} x="24" y="70" width="120" height="14" rx="4" />
          <rect className={styles.ln} x="24" y="96" width="150" height="7" rx="3" /><rect className={styles.ln} x="24" y="109" width="110" height="7" rx="3" />
          <rect className={`${styles.acc} ${styles.pulse}`} x="24" y="128" width="62" height="18" rx="9" /><rect className={styles.accS} x="94" y="128" width="62" height="18" rx="9" />
          <rect className={styles.ln} x="216" y="46" width="124" height="100" rx="10" /><path className={styles.accS} d="M228 128l22-26 18 14 24-34 32 46" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect className={styles.ln} x="24" y="160" width="96" height="24" rx="6" /><rect className={styles.ln} x="132" y="160" width="96" height="24" rx="6" /><rect className={styles.ln} x="240" y="160" width="100" height="24" rx="6" />
        </svg>
        <h3>The site</h3>
        <p>Pages built to be read quickly and to turn a visit into an enquiry.</p>
      </div>
      <div className={styles.tcard}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="CRM pipeline stages">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="12" />
          {[0, 1, 2, 3].map(c => (
            <g key={c}>
              <rect className={styles.ln} x={20 + c * 88} y="22" width="72" height="8" rx="4" />
              <rect className={styles.pan} x={20 + c * 88} y="40" width="72" height="146" rx="8" />
              {c !== 0 && <rect className={styles.ln} x={28 + c * 88} y="52" width="56" height="26" rx="5" />}
              {c % 2 === 0 && <rect className={styles.ln} x={28 + c * 88} y="136" width="56" height="26" rx="5" />}
            </g>
          ))}
          <g className={styles.hop}><rect className={styles.acc} x="28" y="86" width="56" height="30" rx="6" /><rect fill="#0b0d0c" opacity=".55" x="34" y="94" width="34" height="5" rx="2.5" /><rect fill="#0b0d0c" opacity=".35" x="34" y="104" width="22" height="5" rx="2.5" /></g>
        </svg>
        <h3>The pipeline</h3>
        <p>Leads, stages and follow-ups laid out so nothing sits unanswered.</p>
      </div>
      <div className={styles.tcard}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="Lines of copy being written">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="12" />
          <text x="24" y="62" fontSize="54" fontWeight="700" fill="#40d77c" opacity=".9">“</text>
          <rect className={`${styles.acc} ${styles.grow}`} x="62" y="44" width="250" height="12" rx="5" />
          <rect className={`${styles.ln} ${styles.grow} ${styles.g2}`} x="24" y="84" width="300" height="8" rx="4" />
          <rect className={`${styles.ln} ${styles.grow} ${styles.g3}`} x="24" y="104" width="260" height="8" rx="4" />
          <rect className={`${styles.ln} ${styles.grow} ${styles.g4}`} x="24" y="124" width="190" height="8" rx="4" />
          <rect className={styles.caret} x="222" y="120" width="3" height="16" fill="#40d77c" />
          <rect className={styles.acc} x="24" y="154" width="70" height="22" rx="11" /><rect className={styles.ln} x="102" y="154" width="54" height="22" rx="11" />
        </svg>
        <h3>The words</h3>
        <p>Copy that explains the product plainly, in English and Spanish.</p>
      </div>
    </div>
  );
}
