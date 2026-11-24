import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import { CASE_STUDIES, type CaseStudyData, openFor } from '../data/work';
import Frame from './Frame';
import ProjectCard, { ExternalIcon } from './ProjectCard';

export default function CaseStudy({ data }: { data: CaseStudyData }): ReactNode {
  const group = (c: CaseStudyData) => (c.kind === 'concept' ? 'concept' : c.disciplines.includes('CRM') ? 'crm' : 'study');
  const others = CASE_STUDIES.filter(c => c.slug !== data.slug);
  const related = [...others.filter(c => group(c) === group(data)), ...others.filter(c => group(c) !== group(data))].slice(0, 3);
  return (
    <Layout title={`${data.title}`} description={data.summary}>
      <main className={styles.wrap}>
        <article className={styles.article}>
          <Link to="/work" className={styles.back}>
            ← All work
          </Link>
          <header className={styles.hero} style={{ paddingBottom: '1rem' }}>
            <div className={styles.eyebrow}>{data.disciplines.join(' · ')} design</div>
            <h1 style={{ maxWidth: 'none' }}>{data.title}</h1>
            <p>
              {data.kicker}. {data.summary}
            </p>
            {openFor(data.slug) && (
              <div className={styles.heroActions}>
                <a className={`${styles.btn} ${styles.btnSolid}`} href={openFor(data.slug)!.href} target="_blank" rel="noopener noreferrer">
                  {openFor(data.slug)!.label} <ExternalIcon />
                </a>
                <Link className={styles.btn} to="/contact">Start a project</Link>
              </div>
            )}
          </header>

          <div style={{ marginBottom: '1.5rem' }}>
            <Frame src={data.image} alt={`${data.title} screenshot`} wire={data.wire ?? 'product'} />
          </div>

          <dl className={styles.facts}>
            <div>
              <dt>Role</dt>
              <dd>{data.role}</dd>
            </div>
            {data.period && (
              <div>
                <dt>Period</dt>
                <dd>{data.period}</dd>
              </div>
            )}
            <div>
              <dt>Tools</dt>
              <dd>{data.tags.join(', ')}</dd>
            </div>
          </dl>

          {data.sections.map(s => (
            <section key={s.heading} className={styles.block}>
              <h2>{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}

          {data.pipeline && (
            <section className={styles.block}>
              <h2>Pipeline</h2>
              <div className={styles.board} role="list">
                {data.pipeline.stages.map(st => (
                  <div key={st.name} className={styles.col} role="listitem">
                    <h3>{st.name}</h3>
                    {st.cards.map(c => (
                      <div key={c.title} className={styles.dealCard}>
                        <strong>{c.title}</strong>
                        <span>{c.meta}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '.85rem' }}>{data.pipeline.note}</p>
            </section>
          )}

          {data.templates && data.templates.length > 0 && (
            <section className={styles.block}>
              <h2>In this voice</h2>
              {data.templates.map(t => (
                <figure key={t.label} className={styles.quote}>
                  <figcaption>{t.label}</figcaption>
                  <blockquote>{t.text}</blockquote>
                </figure>
              ))}
            </section>
          )}

          {data.samples && data.samples.length > 0 && (
            <section className={styles.block}>
              <h2>Selected work</h2>
              <div className={styles.samples}>
                {data.samples.map(s => (
                  <figure key={s.title}>
                    {s.image && (
                      s.href ? (
                        <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.title}, opens in a new tab`}>
                          <img src={s.image} alt={`${s.title} page`} />
                        </a>
                      ) : (
                        <img src={s.image} alt={s.title} />
                      )
                    )}
                    <figcaption>
                      {s.href ? (
                        <a href={s.href} target="_blank" rel="noopener noreferrer">
                          {s.title}
                        </a>
                      ) : (
                        s.title
                      )}
                      : {s.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          <div className={styles.actions}>
            {data.links.map((l, i) => (
              <a
                key={l.href}
                className={`${styles.btn} ${i === 0 && data.kind === 'concept' ? styles.btnSolid : ''}`}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label} <ExternalIcon />
              </a>
            ))}
          </div>
        </article>

        <section aria-labelledby="more-work" style={{ marginTop: '4rem' }}>
          <div className={styles.sectionHead} style={{ marginTop: 0 }}>
            <h2 id="more-work">More work</h2>
            <Link to="/work" className={styles.textLink}>All work →</Link>
          </div>
          <div className={styles.grid3}>
            {related.map(c => (
              <ProjectCard key={c.slug} to={`/work/${c.slug}`} open={openFor(c.slug)} title={c.title} kicker={c.kicker} summary={c.summary} image={c.image} wire={c.wire} status={c.status} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
