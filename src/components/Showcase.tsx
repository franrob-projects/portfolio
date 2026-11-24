import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {CASE_STUDIES, CRMS} from '../data/work';
import styles from '../css/showcase.module.css';
import FilterBar from './FilterBar';

// Later = on top. The three flagship pieces sit on top and in the middle.
const FAN = ['viki-dashboard', 'classic-triumph-malaga', 'conply', 'parallel-parts', 'ably', 'solaz'];
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
  {x: 0, y: 1.5, r: -2},
];
// Welding sparks: angle (deg), length (px), duration and delay (s)
const SPARKS = Array.from({length: 22}, (_, n) => ({a: -150 + ((n * 47) % 120), l: 26 + ((n * 37) % 54), d: 0.9 + ((n * 13) % 9) / 10, w: ((n * 29) % 17) / 10}));
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
      <div className="fr-crosshairs" aria-hidden="true"><i style={{left: "18%", top: "12%"}} /><i style={{left: "82%", top: "20%"}} /><i style={{left: "60%", top: "88%"}} /></div>
      {FAN.map((slug, n) => {
        const c = bySlug(slug);
        return (
          <Link key={slug} to={`/work/${slug}`} className={styles.fanCard} style={{['--x' as string]: SCATTER[n].x, ['--y' as string]: SCATTER[n].y, ['--r' as string]: SCATTER[n].r + 'deg', ['--z' as string]: n + 1}}>
            <span className={styles.fanBar}><i /><i /><i /></span>
            <img className={styles.fanImg} src={c.image} alt={`${short(c).title} — ${short(c).kicker}`} width={1440} height={900} />
            <span className={styles.fanLabel}><b>{short(c).title}</b></span>
          </Link>
        );
      })}
    </div>
  );
}

const SPEC_ROWS = [['sector', 'Sector'], ['deliverables', 'Deliverables'], ['stack', 'Stack'], ['languages', 'Languages'], ['outcome', 'Outcome']] as const;
const FILTERS = ['All', 'Web', 'CRM', 'Product', 'Packaging', 'Content'] as const;

/** Each filter leads with the work that best shows that discipline, then the rest in default order. */
const LEAD: Record<string, string[]> = {
  All: ['solaz', 'ably', 'conply', 'parallel-parts', 'classic-triumph-malaga', 'viki-dashboard'],
  Web: ['solaz', 'parallel-parts', 'ably', 'classic-triumph-malaga', 'licence-ready', 'safeplay-desk', 'conply'],
  Content: ['ably', 'conply', 'earth-and-hound', 'licence-ready', 'safeplay-desk'],
  Product: ['viki-dashboard', 'viki-auth'],
  Packaging: ['solaz', 'earth-and-hound'],
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
      <FilterBar options={FILTERS} value={f} onChange={setF} label="Filter work" controls="work-grid" format={k => k === 'Packaging' ? 'Print & packaging' : k} />
      {f === 'CRM' ? (
        <>
          <p className={styles.sectionLead} style={{margin: '0 0 1rem'}}>Working CRMs built for the demo sites. Each opens a clickable screen with sample data.</p>
          <div className={styles.screens} id="work-grid" role="tabpanel">
            {crms.map((c, i) => (
              <a key={c.slug} href={c.href} target={c.href.includes('/demos/') ? '_blank' : undefined} rel="noopener noreferrer" className={styles.screen} style={{animationDelay: `${i * 45}ms`}}>
                <span className={styles.screenBar}><i /><i /><i /><em>{c.site} · {c.title}</em></span>
                <span className={styles.view}><img src={c.image} alt={`${c.site} — CRM: ${c.title}`} loading="lazy" width={1440} height={900} /></span>
                <span className={styles.screenInfo}><b>{c.site}: {c.title}</b><span>{c.summary}</span><span>{c.stack.join(' · ')}</span></span>
              </a>
            ))}
          </div>
        </>
      ) : (
      <div className={styles.screens}>
        {list.map((c, i) => (
          <Link key={f + c.slug} to={`/work/${c.slug}`} className={`${styles.screen} fr-spec`} style={{animationDelay: `${i * 45}ms`}}>
            <span className={styles.screenBar}><i /><i /><i /><em /></span>
            <span className={styles.view}><img src={c.image} alt={`${short(c).title} — ${c.kicker}`} loading="lazy" width={1440} height={900} /></span>
            <span className={`${styles.screenInfo} fr-spec__caption`}><b>{short(c).title}</b><span>{short(c).kicker}</span></span>
            <dl className="fr-spec__table">
              {SPEC_ROWS.map(([k, label]) => <div key={k}><dt>{label}</dt><dd>{c.specs?.[k] ?? 'TODO'}</dd></div>)}
            </dl>
            <span className="fr-spec__dims" aria-hidden="true"><i data-l="W" /><i data-l="H" /></span>
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
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="Website connected to hosting, database and deploy">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="4" />
          <rect className={styles.pan} x="18" y="18" width="176" height="164" rx="6" />
          <circle cx="30" cy="30" r="3" className={styles.c1} /><circle cx="40" cy="30" r="3" className={styles.ln} /><circle cx="50" cy="30" r="3" className={styles.ln} />
          <rect className={styles.ln} x="62" y="26" width="80" height="8" rx="4" /><rect className={styles.c1s} x="150" y="25" width="34" height="10" rx="5" strokeWidth="1.2" />
          <rect fill="#eef2ef" x="30" y="52" width="104" height="8" rx="2" /><rect fill="#eef2ef" x="30" y="66" width="74" height="8" rx="2" />
          <rect className={styles.ln} x="30" y="84" width="120" height="4" rx="2" /><rect className={styles.ln} x="30" y="93" width="90" height="4" rx="2" />
          <rect className={`${styles.c1} ${styles.pulse}`} x="30" y="108" width="40" height="12" rx="2" /><rect className={styles.c2s} x="76" y="108" width="40" height="12" rx="2" strokeWidth="1.2" />
          <rect className={styles.pan} x="30" y="132" width="40" height="38" rx="3" /><rect className={styles.pan} x="78" y="132" width="40" height="38" rx="3" /><rect className={styles.pan} x="126" y="132" width="40" height="38" rx="3" />
          <g className={styles.c1s} strokeWidth="1.2" fill="none"><path d="M194 70h20M194 110h20M194 150h20" /></g>
          <circle className={styles.c1} cx="214" cy="70" r="3" /><circle className={styles.c1} cx="214" cy="110" r="3" /><circle className={styles.c1} cx="214" cy="150" r="3" />
          <text x="222" y="32" className={styles.mono}>HOSTING</text>
          {[38, 50, 62].map((y, n) => <g key={y}><rect className={styles.pan} x="222" y={y} width="122" height="9" rx="2" /><circle className={`${styles.c1} ${styles.pulse}`} cx="229" cy={y + 4.5} r="2" style={{animationDelay: n * 0.3 + 's'}} /><rect className={styles.ln} x="236" y={y + 3.5} width="50" height="2" /></g>)}
          <text x="222" y="86" className={styles.mono}>DATABASE</text>
          <ellipse className={styles.pan} cx="244" cy="96" rx="20" ry="5" /><path className={styles.pan} d="M224 96v26a20 5 0 0 0 40 0V96" /><path d="M224 104a20 5 0 0 0 40 0M224 112a20 5 0 0 0 40 0" stroke="rgba(255,255,255,.2)" fill="none" />
          {[['CMS', 272, 92], ['API', 306, 92], ['PAY', 272, 110], ['i18n', 306, 110]].map(([t, x, y]) => <g key={t as string}><rect className={styles.c1s} x={x as number} y={y as number} width="30" height="12" rx="2" strokeWidth="1" /><text x={(x as number) + 15} y={(y as number) + 8.5} textAnchor="middle" className={styles.monoC}>{t}</text></g>)}
          <rect className={styles.pan} x="222" y="136" width="122" height="40" rx="3" /><text x="230" y="148" className={styles.mono}>DEPLOY</text><circle className={`${styles.c1} ${styles.pulse}`} cx="336" cy="145" r="3" />
          <rect className={styles.ln} x="230" y="155" width="104" height="5" rx="2.5" /><rect className={`${styles.c1} ${styles.grow}`} x="230" y="155" width="86" height="5" rx="2.5" />
          <text x="230" y="171" className={styles.monoC}>200 OK · 0.4s</text>
        </svg>
        <h3>Websites <em>front to back</em></h3>
        <p>Fast sites with the backend done properly: hosting, databases, CMS, payments and integrations, in English and Spanish.</p>
      </div>
      <div className={`${styles.tcard} ${styles.t2}`}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="CRM pipeline and order tracking">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="4" />
          {['LEAD', 'QUOTE', 'BUILD', 'SHIP'].map((t, c) => (
            <g key={t}>
              <text x={20 + c * 82} y="24" className={c === 1 ? styles.monoC : styles.mono}>{t}</text><text x={84 + c * 82} y="24" textAnchor="end" className={styles.mono}>{[4, 3, 3, 5][c]}</text>
              {c === 1 && <rect className={styles.c1} x="20" y="27" width="0" height="0" />}
              {[0, 1, 2].filter(r => !(c === 1 && r === 2)).map(r => (
                <g key={r}><rect className={styles.pan} x={20 + c * 82} y={34 + r * 22} width="72" height="17" rx="2" /><rect className={styles.ln} x={26 + c * 82} y={40 + r * 22} width="34" height="2" /><rect className={styles.ln} x={26 + c * 82} y={45 + r * 22} width="22" height="2" /><circle cx={84 + c * 82} cy={42.5 + r * 22} r="2.5" className={c === 3 ? styles.c1g : styles.ln} /></g>
              ))}
            </g>
          ))}
          <g className={styles.hopQ}><rect className={styles.c1s} x="102" y="80" width="72" height="17" rx="2" strokeWidth="1.4" fill="rgba(255,180,84,.08)" /><rect className={styles.c1} x="108" y="86" width="34" height="2" /><rect className={styles.c1} x="108" y="91" width="22" height="2" /></g>
          <path d="M184 76l6 6-6 6-6-6z" className={`${styles.c1} ${styles.pulse}`} /><text x="196" y="74" className={styles.monoC}>IF PAID</text><text x="196" y="96" className={styles.mono}>ELSE</text>
          <rect className={styles.pan} x="20" y="116" width="318" height="64" rx="3" />
          <text x="30" y="132" className={styles.mono}>ORDER #2848</text><text x="328" y="132" textAnchor="end" className={styles.monoC}>IN QUEUE · 3</text>
          <rect className={styles.ln} x="40" y="152" width="280" height="2" /><rect className={`${styles.c1} ${styles.grow}`} x="40" y="152" width="164" height="2" />
          {[['RECEIVED', 40], ['PICKED', 130], ['PACKED', 224], ['SHIPPED', 318]].map(([t, x], n) => <g key={t as string}><circle cx={x as number} cy="153" r="5" className={n < 2 ? styles.c1 : n === 2 ? styles.c1s : styles.ln} strokeWidth="1.5" /><text x={x as number} y="172" textAnchor="middle" className={n < 2 ? styles.monoC : styles.mono}>{t}</text></g>)}
        </svg>
        <h3>CRMs <em>with logic</em></h3>
        <p>Pipelines, queues and order tracking built around how your business actually runs.</p>
      </div>
      <div className={`${styles.tcard} ${styles.t3}`}>
        <svg className={styles.tart} viewBox="0 0 360 200" role="img" aria-label="Brand mark, palette, print sheet and business card">
          <rect className={styles.pan} x="6" y="6" width="348" height="188" rx="4" />
          <rect className={styles.c1} x="22" y="22" width="40" height="40" rx="8" /><path d="M48 32v22M36 43a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" stroke="#0e1310" strokeWidth="4" fill="none" />
          <text x="72" y="54" fontSize="26" fontWeight="800" fill="#eef2ef">Aa</text>
          {['#b794ff', '#ff7ac6', '#40d77c', '#d8dcd9'].map((c, n) => <circle key={c} cx={28 + n * 15} cy="80" r="5" fill={c} />)}
          <text x="22" y="104" className={styles.mono}>CLEAR · TECHNICAL</text>
          <rect fill="#eef2ef" className={styles.grow} x="22" y="112" width="120" height="4" rx="2" /><rect className={`${styles.ln} ${styles.grow} ${styles.g2}`} x="22" y="122" width="92" height="4" rx="2" /><rect className={`${styles.ln} ${styles.grow} ${styles.g3}`} x="22" y="132" width="64" height="4" rx="2" /><rect className={`${styles.c2} ${styles.caret}`} x="90" y="129" width="2" height="9" />
          <path d="M192 24v4M188 28h4M300 24v4M300 28h4M192 140v-4M188 136h4" stroke="rgba(255,255,255,.35)" fill="none" />
          <g className={styles.floaty}><rect fill="#f2efe8" x="196" y="30" width="100" height="104" rx="2" /><rect className={styles.c1} x="206" y="40" width="80" height="28" rx="1" /><rect fill="#9aa39d" x="206" y="76" width="66" height="4" /><rect fill="#c8ccc9" x="206" y="84" width="54" height="3" /><rect fill="#c8ccc9" x="206" y="90" width="60" height="3" /></g>
          <g className={`${styles.floaty} ${styles.f2}`}><rect className={styles.pan} x="306" y="28" width="36" height="110" rx="2" /><rect className={styles.c2} x="311" y="34" width="26" height="22" rx="1" /><rect fill="#eef2ef" x="311" y="62" width="20" height="3" /><rect className={styles.ln} x="311" y="68" width="16" height="2" /><rect fill="#40d77c" x="311" y="118" width="20" height="8" rx="1" /></g>
          <g className={`${styles.floaty} ${styles.f3}`} transform="rotate(-8 270 130)"><rect fill="#1d1f2b" stroke="#ff7ac6" strokeWidth="1.4" x="232" y="108" width="92" height="52" rx="5" /><rect className={styles.c1} x="242" y="118" width="12" height="12" rx="2" /><rect fill="#eef2ef" x="242" y="138" width="40" height="3" /><rect className={styles.ln} x="242" y="145" width="28" height="2" /></g>
          <path d="M236 172h80M300 168v8" stroke="rgba(255,255,255,.3)" />
        </svg>
        <h3>Brand, print <em>&amp; wording</em></h3>
        <p>Rebrands, graphic design, print and display boards, with copy that is clear, technical and accurate.</p>
      </div>
    </div>
  );
}
