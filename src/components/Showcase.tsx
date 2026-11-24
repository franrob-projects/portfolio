import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {CASE_STUDIES, CRMS} from '../data/work';
import styles from '../css/showcase.module.css';

// Later = on top. The three flagship pieces sit on top and in the middle.
const FAN = ['viki-dashboard', 'classic-triumph-malaga', 'conply', 'parallel-parts', 'ably'];
const bySlug = (s: string) => CASE_STUDIES.find(c => c.slug === s)!;
// Home-page wording: short names and captions, VIKI shown as one product
const SHORT: Record<string, {title?: string; kicker?: string}> = {
  'ably': {kicker: 'Docs and web · realtime platform'},
  'conply': {kicker: 'SaaS · compliance training'},
  'viki-dashboard': {title: 'VIKI', kicker: 'Product design · dashboard, auth and onboarding'},
};
const short = (c: {slug: string; title: string; kicker: string}) => ({title: SHORT[c.slug]?.title ?? c.title, kicker: SHORT[c.slug]?.kicker ?? c.kicker});

// x / y in rem (y negative = raised), r in degrees: a loose, hand-tossed scatter
const SCATTER = [
  {x: -10.5, y: -2.5, r: -12},
  {x: -5, y: -7.5, r: -5},
  {x: 0.5, y: -3.5, r: 3},
  {x: 5.5, y: -8.5, r: 8},
  {x: 10.5, y: -4, r: 14},
];
const COLORS = ['#40d77c', '#ffd24a', '#ff7a59', '#6cc7ff', '#c084fc', '#ff8ad8'];
const STARS = [
  {x: 6, y: 18, s: 1.3, d: 7, l: 0.3}, {x: 20, y: 52, s: 0.8, d: 6, l: 1.1}, {x: 33, y: 8, s: 1.1, d: 8, l: 0.7},
  {x: 47, y: 44, s: 1.6, d: 9, l: 0.2}, {x: 60, y: 14, s: 0.9, d: 6.5, l: 1.4}, {x: 72, y: 56, s: 1.2, d: 7.5, l: 0.9},
  {x: 84, y: 22, s: 1.5, d: 8.5, l: 0.5}, {x: 93, y: 60, s: 0.8, d: 6, l: 1.7},
];
const DOTS = [
  {x: 13, y: 34, s: 5, d: 5, l: 0.4}, {x: 27, y: 66, s: 4, d: 6, l: 1.2}, {x: 40, y: 28, s: 6, d: 5.5, l: 0.8},
  {x: 54, y: 70, s: 4, d: 6.5, l: 0.1}, {x: 66, y: 36, s: 5, d: 5, l: 1.5}, {x: 79, y: 8, s: 4, d: 6, l: 0.6}, {x: 90, y: 40, s: 6, d: 5.5, l: 1},
];

export function Fan(): ReactNode {
  return (
    <div className={styles.fan}>
      <div className={styles.stars} aria-hidden="true">
        {STARS.map((s, k) => (
          <span key={'s' + k} className={styles.star} style={{['--sx' as string]: s.x + '%', ['--sy' as string]: s.y + '%', ['--ss' as string]: s.s + 'rem', ['--sc' as string]: COLORS[k % COLORS.length], ['--sd' as string]: s.d + 's', ['--sl' as string]: s.l + 's'}}>
            <svg viewBox="0 0 24 24"><path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0z" /></svg>
          </span>
        ))}
        {DOTS.map((s, k) => (
          <span key={'d' + k} className={styles.dot} style={{['--sx' as string]: s.x + '%', ['--sy' as string]: s.y + '%', ['--ss' as string]: s.s + 'px', ['--sc' as string]: COLORS[(k + 2) % COLORS.length], ['--sd' as string]: s.d + 's', ['--sl' as string]: s.l + 's'}} />
        ))}
      </div>
      {FAN.map((slug, n) => {
        const c = bySlug(slug);
        return (
          <Link key={slug} to={`/work/${slug}`} className={styles.fanCard} style={{['--x' as string]: SCATTER[n].x, ['--y' as string]: SCATTER[n].y, ['--r' as string]: SCATTER[n].r + 'deg', ['--z' as string]: n + 1}}>
            <span className={styles.fanBar}><i /><i /><i /></span>
            <img className={styles.fanImg} src={c.image} alt="" />
            <span className={styles.fanLabel}><b>{short(c).title}</b></span>
          </Link>
        );
      })}
    </div>
  );
}

const FILTERS = ['All', 'Web', 'CRM', 'Product', 'Packaging', 'Content'] as const;

/** Each filter leads with the work that best shows that discipline, then the rest in default order. */
const LEAD: Record<string, string[]> = {
  All: ['ably', 'conply', 'parallel-parts', 'classic-triumph-malaga', 'viki-dashboard'],
  Web: ['parallel-parts', 'ably', 'classic-triumph-malaga', 'licence-ready', 'safeplay-desk', 'conply'],
  Content: ['ably', 'conply', 'earth-and-hound', 'licence-ready', 'safeplay-desk'],
  Product: ['viki-dashboard', 'viki-auth'],
  Packaging: ['earth-and-hound'],
};
const CRM_LEAD = ['safeplay-desk', 'parallel-parts', 'classic-triumph-malaga', 'viki-dashboard'];
const rank = (order: string[], slug: string) => { const i = order.indexOf(slug); return i === -1 ? order.length : i; };

export function Belt(): ReactNode {
  const [f, setF] = useState<(typeof FILTERS)[number]>('All');
  const all = CASE_STUDIES.filter(c => c.image && c.slug !== 'viki' && c.slug !== 'viki-auth');
  const lead = LEAD[f] ?? [];
  const list = all.filter(c => f === 'All' || (c.disciplines as string[]).includes(f)).sort((a, b) => rank(lead, a.slug) - rank(lead, b.slug));
  const crms = [...CRMS].sort((a, b) => rank(CRM_LEAD, a.slug) - rank(CRM_LEAD, b.slug));
  return (
    <>
      <div className={styles.chips} role="group" aria-label="Filter work">
        {FILTERS.map(k => <button key={k} className={styles.chipBtn} aria-pressed={f === k} onClick={() => setF(k)}>{k === 'Packaging' ? 'Print & packaging' : k}</button>)}
      </div>
      {f === 'CRM' ? (
        <>
          <p className={styles.sectionLead} style={{margin: '0 0 1rem'}}>Working CRMs built for the demo sites. Each opens a clickable screen with sample data.</p>
          <div className={styles.screens}>
            {crms.map((c, i) => (
              <a key={c.slug} href={c.href} target={c.href.includes('/demos/') ? '_blank' : undefined} rel="noopener noreferrer" className={styles.screen} style={{animationDelay: `${i * 45}ms`}}>
                <span className={styles.screenBar}><i /><i /><i /><em>{c.site} · {c.title}</em></span>
                <span className={styles.view}><img src={c.image} alt={`${c.site} CRM: ${c.title}`} loading="lazy" /></span>
                <span className={styles.screenInfo}><b>{c.site}: {c.title}</b><span>{c.summary}</span><span>{c.stack.join(' · ')}</span></span>
              </a>
            ))}
          </div>
        </>
      ) : (
      <div className={styles.screens}>
        {list.map((c, i) => (
          <Link key={f + c.slug} to={`/work/${c.slug}`} className={styles.screen} style={{animationDelay: `${i * 45}ms`}}>
            <span className={styles.screenBar}><i /><i /><i /><em /></span>
            <span className={styles.view}><img src={c.image} alt="" loading="lazy" /></span>
            <span className={styles.screenInfo}><b>{short(c).title}</b><span>{short(c).kicker}</span></span>
          </Link>
        ))}
      </div>
      )}
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
        </svg>
        <h3>Websites <em>front to back</em></h3>
        <p>Fast sites with the backend done properly: hosting, databases, CMS, payments and integrations, in English and Spanish.</p>
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
        <h3>CRMs <em>with logic</em></h3>
        <p>Pipelines, queues and order tracking built around how your business actually runs.</p>
      </div>
      <div className={`${styles.tcard} ${styles.t3}`}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="Brand and copy being laid out">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="12" />
          <text x="22" y="64" fontSize="56" fontWeight="700" className={styles.c2} opacity=".95">“</text>
          <rect className={`${styles.c1} ${styles.grow}`} x="62" y="44" width="250" height="12" rx="5" />
          <rect className={`${styles.c2} ${styles.grow} ${styles.g2}`} x="24" y="84" width="300" height="8" rx="4" opacity=".7" />
          <rect className={`${styles.ln} ${styles.grow} ${styles.g3}`} x="24" y="104" width="260" height="8" rx="4" />
          <rect className={`${styles.ln} ${styles.grow} ${styles.g4}`} x="24" y="124" width="190" height="8" rx="4" />
          <rect className={styles.caret} x="222" y="120" width="3" height="16" fill="#fff" />
          <rect className={`${styles.c1} ${styles.floaty}`} x="24" y="154" width="70" height="22" rx="11" /><rect className={`${styles.c2} ${styles.floaty} ${styles.f2}`} x="102" y="154" width="54" height="22" rx="11" /><rect className={`${styles.ln} ${styles.floaty} ${styles.f3}`} x="164" y="154" width="40" height="22" rx="11" />
        </svg>
        <h3>Brand, print <em>&amp; wording</em></h3>
        <p>Rebrands, graphic design, print and display boards, with copy that is clear, technical and accurate.</p>
      </div>
    </div>
  );
}
