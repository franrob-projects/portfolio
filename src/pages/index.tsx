import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function AboutMeVideo() {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className={styles.videoContainer}>
              <h2 className={styles.videoTitle}>
                About My Work
              </h2>
              
              <div className={styles.videoWrapper}>
                {/* Placeholder for when video is ready */}
                <div className={styles.videoPlaceholder}>
                  <div className={styles.placeholderContent}>
                    <p className={styles.placeholderText}>
                      I'll be adding a personal video here discussing my approach to technical writing, 
                      career achievements, and how I help businesses improve their documentation.
                    </p>
                  </div>
                </div>
                
                {/* Uncomment and replace with your video URL when ready:
                <div className={styles.videoEmbed}>
                  <iframe 
                    width="100%" 
                    height="400" 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="About Francis Roberts - Technical Writing"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                */}
                
                {/* Alternative for self-hosted video:
                <video 
                  className={styles.selfHostedVideo}
                  controls 
                  preload="metadata"
                  poster="/img/video-thumbnail.jpg"
                >
                  <source src="/videos/about-me.mp4" type="video/mp4" />
                  <source src="/videos/about-me.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            View Writing Samples
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Francis Roberts - Technical Writing Portfolio"
      description="Developer Educator and Technical Writer specializing in API documentation, docs-as-code, and developer experience">
      <HomepageHeader />
      <main>
        <AboutMeVideo />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
