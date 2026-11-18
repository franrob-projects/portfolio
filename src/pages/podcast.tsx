import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import YouTube from '../components/YouTube';
import {ExternalIcon} from '../components/ProjectCard';
import {EPISODES, SERIES, watchUrl} from '../data/podcast';

const fmt = (d: string) => new Date(d).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});

export default function Podcast(): ReactNode {
  const [latest, ...rest] = EPISODES;
  return (
    <Layout title="Podcast | FranRob Project" description={`${SERIES.title}: ${SERIES.tagline} Hosted and produced by Francis Roberts.`}>
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Podcast</div>
          <h1>{SERIES.title}</h1>
          <p className="lead">{SERIES.tagline}</p>
        </header>

        <div style={{maxWidth: 720}}>
          <p>{SERIES.about}</p>
        </div>

        <div className={styles.sectionHead}><h2>Latest episode</h2></div>
        <div className={styles.epGrid}>
          <YouTube id={latest.videoId} title={`${SERIES.title} Ep. ${latest.number}: ${latest.title}`} />
          <div>
            <div className={styles.epHead}><span>Episode {latest.number}</span><span>·</span><span>{fmt(latest.published)}</span></div>
            <h2 style={{margin: '0 0 .5rem'}}>{latest.title}</h2>
            <p style={{margin: '0 0 .5rem'}}><strong>{latest.guest}</strong>, {latest.role}</p>
            <p>{latest.summary}</p>
            <ul className={styles.topics}>{latest.topics.map(t => <li key={t}>{t}</li>)}</ul>
            <p style={{marginTop: '1.25rem'}}>
              <a className={`${styles.btn} ${styles.btnSolid}`} href={watchUrl(latest.videoId)} target="_blank" rel="noopener noreferrer">Watch on YouTube <ExternalIcon /></a>
            </p>
          </div>
        </div>

        {rest.length > 0 && (
          <>
            <div className={styles.sectionHead}><h2>All episodes</h2></div>
            <div className={styles.grid2}>
              {rest.map(e => (
                <div key={e.number}>
                  <YouTube id={e.videoId} title={`${SERIES.title} Ep. ${e.number}: ${e.title}`} />
                  <h3 style={{margin: '1rem 0 .25rem'}}>Ep. {e.number}: {e.title}</h3>
                  <p style={{margin: 0}}>{e.guest}, {e.role}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className={styles.sectionHead}><h2>Docs Engineering series</h2></div>
        <div className={styles.epGrid}>
          <img src="/portfolio/img/podcast/docs-engineering-podcast.jpg" alt="Docs Engineering podcast episode" style={{width: '100%', borderRadius: 16, border: '1px solid var(--line)', display: 'block'}} />
          <div>
            <p style={{marginTop: 0}}>A conversation series on what docs engineering looks like day to day: migrating legacy platforms onto React and MDX, building the pipelines that test code samples, and the judgment calls behind what to document and what to cut. Recorded with practitioners working on developer docs, including the team at <a href="https://koinju.io/" target="_blank" rel="noopener noreferrer">Koinju</a>, an institutional crypto data platform.</p>
            <p><a className={styles.btn} href="https://www.linkedin.com/feed/update/urn:li:activity:7404514545265852416/" target="_blank" rel="noopener noreferrer">Watch on LinkedIn <ExternalIcon /></a></p>
          </div>
        </div>

        <div className={styles.sectionHead}><h2>About EAR: In Conversation</h2></div>
        <p style={{maxWidth: 720}}>The series is made for <a href={SERIES.site} target="_blank" rel="noopener noreferrer">Energy Aware Runtime</a>. I handle the research, the script and the interview, and work with the EAR team on what goes out. If you need a video interview series for your own company, <Link to="/contact">get in touch</Link>.</p>
      </main>
    </Layout>
  );
}
