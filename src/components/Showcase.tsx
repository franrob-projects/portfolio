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
