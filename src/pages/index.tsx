import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function PersonalSite() {
  return (
    <div className={styles.siteContainer}>
      {/* Header/Intro Section */}
      <section className={styles.headerSection}>
        <h1 className={styles.mainTitle}>Francis Roberts</h1>
        <p className={styles.subtitle}>
          Technical Writer & Developer Educator helping businesses create documentation 
          that developers actually want to use.
        </p>
      </section>

      {/* Who I Am Section with Images */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Who I am</h2>
        <div className={styles.sectionContent}>
          <p>
            I specialize in API documentation, docs-as-code workflows, and developer experience. 
            My approach combines technical expertise with user-centered design to create 
            documentation that reduces support load and accelerates product adoption.
          </p>
          
          {/* Image Gallery - Personal/Professional */}
          <div className={styles.imageGallery}>
            <div className={styles.imageItem}>
              <div className={styles.placeholderImage}>
                <span>📝</span>
                <p>Documentation Workshop</p>
              </div>
            </div>
            <div className={styles.imageItem}>
              <div className={styles.placeholderImage}>
                <span>🚀</span>
                <p>API Launch</p>
              </div>
            </div>
            <div className={styles.imageItem}>
              <div className={styles.placeholderImage}>
                <span>👥</span>
                <p>Team Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Professional Journey</h2>
        <div className={styles.sectionContent}>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>🎯</span>
                <p>Launched independent technical writing consultancy, focusing on developer experience</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2023</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>📚</span>
                <p>Led docs-as-code transformation at tech startup, reducing support tickets by 40%</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2022</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>⚡</span>
                <p>Specialized in API documentation and developer onboarding experiences</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2021</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>🌱</span>
                <p>Started career in technical writing and developer education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About My Work Video Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>About My Work</h2>
        <div className={styles.sectionContent}>
          <div className={styles.videoWrapper}>
            {/* Placeholder for when video is ready */}
            <div className={styles.videoPlaceholder}>
              <p className={styles.placeholderText}>
                I'll be adding a personal video here discussing my approach to technical writing, 
                career achievements, and how I help businesses improve their documentation.
              </p>
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
          </div>
        </div>
      </section>

      {/* Beliefs & Philosophy */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>My Philosophy</h2>
        <div className={styles.sectionContent}>
          <div className={styles.beliefsGrid}>
            <div className={styles.beliefItem}>
              <span className={styles.beliefEmoji}>🔍</span>
              <p><strong>User-First Research</strong><br/>Understanding developer workflows before writing a single word</p>
            </div>
            <div className={styles.beliefItem}>
              <span className={styles.beliefEmoji}>⚡</span>
              <p><strong>Test Everything</strong><br/>Every code sample runs, every integration works, every link is valid</p>
            </div>
            <div className={styles.beliefItem}>
              <span className={styles.beliefEmoji}>📚</span>
              <p><strong>Docs-as-Code</strong><br/>Version-controlled, automated, and developer-friendly workflows</p>
            </div>
            <div className={styles.beliefItem}>
              <span className={styles.beliefEmoji}>📊</span>
              <p><strong>Measure Impact</strong><br/>Success through reduced support load and faster onboarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <Link className={styles.primaryButton} to="/docs/intro">
          View Writing Samples
        </Link>
      </section>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Francis Roberts - Technical Writing Portfolio"
      description="Developer Educator and Technical Writer specializing in API documentation, docs-as-code, and developer experience">
      <PersonalSite />
      <HomepageFeatures />
    </Layout>
  );
}
