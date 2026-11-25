import {useRef, type PointerEvent, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {CASE_STUDIES} from '../data/work';
import s from '../css/landing.module.css';

const bySlug = (slug: string) => CASE_STUDIES.find(c => c.slug === slug)!;

/** Hero: three project screens stacked. They follow the pointer slightly and fan out on hover. */
const STACK = [
  {slug: 'ably', label: 'Ably', cls: 'back'},
  {slug: 'parallel-parts', label: 'Parallel Parts', cls: 'mid'},
  {slug: 'solaz', label: 'Solaz', cls: 'front'},
] as const;

export function HeroStack(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const leave = () => { ref.current?.style.setProperty('--mx', '0'); ref.current?.style.setProperty('--my', '0'); };
  return (
    <div ref={ref} className={s.stack} onPointerMove={move} onPointerLeave={leave}>
      {STACK.map(({slug, label, cls}) => {
        const c = bySlug(slug);
        return (
          <Link key={slug} to={`/work/${slug}`} className={`${s.shot} ${s[cls]}`}>
            <span className={s.bar}><i /><i /><i /></span>
            <img src={c.image} alt={`${label}: ${c.kicker}`} width={1440} height={900} />
            <span className={s.shotLabel}>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export const TICKS = ['Fixed-price quotes', 'Reply in 2 working days', 'English & Spanish'];

const STATS = [
  ['10+ years', 'Building developer & docs sites'],
  ['9 projects', 'Web, CRM, brand & print'],
  ['2 days', 'Reply time, every time'],
  ['EN / ES', 'Bilingual by default'],
];
const PROOF = [
  {to: '/work/ably', h: 'Docs platform for a realtime API', p: 'Built and maintained documentation and developer pages as Ably’s in-house documentation engineer.', m: 'Ably · in-house role'},
  {to: '/work/conply', h: 'Compliance training SaaS, end to end', p: 'Brand, product site and the platform itself, for regulated businesses.', m: 'Conply · own product'},
  {to: '/work/solaz', h: 'One identity across web, print & packaging', p: 'A full concept brand for a Málaga solar-heat maker: website, brochures and product boxes.', m: 'Solaz · concept brand'},
];

export function TrackRecord(): ReactNode {
  return (
    <section className={s.section} aria-labelledby="track-h">
      <h2 id="track-h">Track record</h2>
      <p className={s.lead}>What I’ve shipped, in plain facts.</p>
      <div className={s.stats}>
        {STATS.map(([n, l]) => <div key={n} className={s.panel}><b>{n}</b><span>{l}</span></div>)}
      </div>
      <div className={s.proof}>
        {PROOF.map(x => (
          <Link key={x.to} to={x.to} className={`${s.panel} ${s.proofCard}`}>
            <h3>{x.h}</h3><p>{x.p}</p><span>{x.m}</span>
          </Link>
        ))}
      </div>
      <Link className={`${s.btn} ${s.solid}`} to="/contact">Start a project</Link>
    </section>
  );
}

export function About(): ReactNode {
  return (
    <section id="about" className={`${s.panel} ${s.about}`} aria-labelledby="about-h">
      <img src="/img/fran-roberts.jpg" alt="Fran Roberts" width={180} height={180} loading="lazy" />
      <div>
        <h2 id="about-h">Who you’ll work with</h2>
        <p>I’m Fran Roberts. I spent eight years building documentation and developer sites at Ably and Couchbase, and I’ve produced mechanical engineering drawings and websites for Atlas Copco. Now I build websites, CRMs and print for industrial and regulated firms from Málaga. You deal with me from the first call to launch. No account managers, no handoffs.</p>
        <span className={s.tags}>Ex-Ably · Ex-Couchbase · Atlas Copco · Málaga, Spain · English &amp; Spanish</span>
      </div>
    </section>
  );
}

const STEPS = [
  ['Brief', 'A 30-minute call. You explain the goal; I come back with scope, price and timeline in writing.'],
  ['Design', 'Wireframes, then full designs in Figma. Two rounds of changes are included.'],
  ['Build', 'Front end, backend, CMS and integrations, built and tested on a staging site you can click through.'],
  ['Launch & support', 'Hosting, monitoring and updates, plus a contact who answers the phone, in English or Spanish.'],
];

export function Process(): ReactNode {
  return (
    <section className={s.section} aria-labelledby="how-h">
      <h2 id="how-h">How a project runs</h2>
      {/* TODO: replace [€X] / [€Y] with real starting prices */}
      <p className={s.lead}>Fixed scope, fixed price, one person from first call to launch. Websites from [€X], CRMs from [€Y].</p>
      <ol className={s.steps}>
        {STEPS.map(([h, p], i) => <li key={h} className={s.panel}><span>{String(i + 1).padStart(2, '0')}</span><h3>{h}</h3><p>{p}</p></li>)}
      </ol>
    </section>
  );
}

// TODO: replace the bracketed placeholders with real figures
const FAQ = [
  ['How much does a website cost?', 'Most industrial sites cost between [€X] and [€Y]. You get a fixed written quote after the first call, so the price doesn’t move.'],
  ['How long does it take?', 'Usually [6–10] weeks from brief to launch, depending on content and integrations.'],
  ['Do I own the site?', 'Yes. The code, domain and hosting accounts are in your company’s name from day one.'],
  ['Do you work with UK and Spanish companies?', 'Yes. I work in English and Spanish, with clients in the UK, Spain and Gibraltar.'],
  ['What happens after launch?', 'Choose a monthly plan for hosting, monitoring and updates, or I hand everything over to your team.'],
];

export function Faq(): ReactNode {
  return (
    <section className={s.section} aria-labelledby="faq-h">
      <h2 id="faq-h">Common questions</h2>
      <p className={s.lead}>Straight answers before you get in touch.</p>
      <div className={s.faq}>
        {FAQ.map(([q, a]) => <details key={q} open><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>
  );
}
