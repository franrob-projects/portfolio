import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../css/work.module.css';
import type { CaseStudyData } from '../data/work';

export default function CaseStudy({ data }: { data: CaseStudyData }): ReactNode {
  const imgBase = useBaseUrl('/');
  return (
    <Layout title={`${data.title} | Francis Roberts`} description={data.summary}>
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
          </header>

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
                      <img
                        src={`${imgBase}${s.image.replace(/^\//, '')}`}
                        alt={s.title}
                        loading="lazy"
                      />
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
            {data.links.map(l => (
              <a
                key={l.href}
                className={styles.btn}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </article>
      </main>
    </Layout>
  );
}
