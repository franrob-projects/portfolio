import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {CASE_STUDIES} from '../data/work';
import styles from '../css/showcase.module.css';

const FAN = ['classic-triumph-malaga', 'parallel-parts', 'licence-ready', 'conply', 'viki-dashboard'];
const bySlug = (s: string) => CASE_STUDIES.find(c => c.slug === s)!;
const label = (d: string[]) => d.join(' · ');

export function Fan(): ReactNode {
  return (
    <div className={styles.fan}>
      {FAN.map((slug, n) => {
        const c = bySlug(slug);
        const i = n - 2;
        return (
          <Link key={slug} to={`/work/${slug}`} className={styles.fanCard} style={{['--i' as string]: i, ['--z' as string]: n + 1}}>
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
          <circle cx="22" cy="20" r="3.5" className={styles.c1} /><circle cx="34" cy="20" r="3.5" className={styles.c2} /><circle cx="46" cy="20" r="3.5" className={styles.ln} />
          <rect className={styles.ln} x="250" y="16" width="26" height="8" rx="4" /><rect className={styles.ln} x="282" y="16" width="26" height="8" rx="4" /><rect className={styles.c1} x="314" y="14" width="30" height="12" rx="6" />
          <rect className={styles.c1} x="24" y="48" width="170" height="14" rx="4" /><rect className={styles.ln} x="24" y="70" width="120" height="14" rx="4" />
          <rect className={styles.ln} x="24" y="96" width="150" height="7" rx="3" /><rect className={styles.ln} x="24" y="109" width="110" height="7" rx="3" />
          <rect className={`${styles.c1} ${styles.pulse}`} x="24" y="128" width="62" height="18" rx="9" /><rect className={styles.c2s} x="94" y="128" width="62" height="18" rx="9" strokeWidth="2" />
          <rect className={`${styles.pan} ${styles.floaty}`} x="216" y="46" width="124" height="100" rx="10" />
          <path className={`${styles.c1s} ${styles.draw}`} d="M228 128l22-26 18 14 24-34 32 46" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle className={`${styles.c2} ${styles.pulse}`} cx="292" cy="94" r="5" />
          <rect className={`${styles.c2} ${styles.floaty}`} x="24" y="160" width="96" height="24" rx="6" opacity=".85" /><rect className={`${styles.c1} ${styles.floaty} ${styles.f2}`} x="132" y="160" width="96" height="24" rx="6" opacity=".85" /><rect className={`${styles.ln} ${styles.floaty} ${styles.f3}`} x="240" y="160" width="100" height="24" rx="6" />
          <path className={styles.cursor} d="M300 170l0 20 5-5 4 9 4-2-4-9 7 0z" fill="#fff" />
        </svg>
        <h3>The site: <em>graphics, words and infrastructure</em></h3>
        <p>Pages built to be read quickly, with the design, the copy and the build behind them.</p>
      </div>
      <div className={`${styles.tcard} ${styles.t2}`}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="CRM pipeline stages">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="12" />
          {[0, 1, 2, 3].map(c => (
            <g key={c}>
              <rect className={c % 2 ? styles.c2 : styles.c1} x={20 + c * 88} y="22" width="72" height="8" rx="4" />
              <rect className={styles.pan} x={20 + c * 88} y="40" width="72" height="146" rx="8" />
              {c !== 0 && <rect className={styles.ln} x={28 + c * 88} y="52" width="56" height="26" rx="5" />}
              {c % 2 === 0 && <rect className={styles.ln} x={28 + c * 88} y="136" width="56" height="26" rx="5" />}
            </g>
          ))}
          <g className={styles.hop}><rect className={styles.c1} x="28" y="86" width="56" height="30" rx="6" /><rect fill="#0b0d0c" opacity=".55" x="34" y="94" width="34" height="5" rx="2.5" /><rect fill="#0b0d0c" opacity=".35" x="34" y="104" width="22" height="5" rx="2.5" /></g>
          <circle className={`${styles.c2} ${styles.pulse}`} cx="338" cy="30" r="6" />
        </svg>
        <h3>The pipeline: <em>leads to customers</em></h3>
        <p>CRM stages, follow-ups and reporting laid out so nothing sits unanswered.</p>
      </div>
      <div className={`${styles.tcard} ${styles.t3}`}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="Lines of copy being written">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="12" />
          <text x="22" y="64" fontSize="56" fontWeight="700" className={styles.c2} opacity=".95">“</text>
          <rect className={`${styles.c1} ${styles.grow}`} x="62" y="44" width="250" height="12" rx="5" />
          <rect className={`${styles.c2} ${styles.grow} ${styles.g2}`} x="24" y="84" width="300" height="8" rx="4" opacity=".7" />
          <rect className={`${styles.ln} ${styles.grow} ${styles.g3}`} x="24" y="104" width="260" height="8" rx="4" />
          <rect className={`${styles.ln} ${styles.grow} ${styles.g4}`} x="24" y="124" width="190" height="8" rx="4" />
          <rect className={styles.caret} x="222" y="120" width="3" height="16" fill="#fff" />
          <rect className={`${styles.c1} ${styles.floaty}`} x="24" y="154" width="70" height="22" rx="11" /><rect className={`${styles.c2} ${styles.floaty} ${styles.f2}`} x="102" y="154" width="54" height="22" rx="11" /><rect className={`${styles.ln} ${styles.floaty} ${styles.f3}`} x="164" y="154" width="40" height="22" rx="11" />
        </svg>
        <h3>The words: <em>copy and content</em></h3>
        <p>Product copy, docs and case studies that explain things plainly, in English and Spanish.</p>
      </div>
    </div>
  );
}
