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
                <p>API Launch Event</p>
              </div>
            </div>
            <div className={styles.imageItem}>
              <div className={styles.placeholderImage}>
                <span>👥</span>
                <p>Dev Team Collaboration</p>
              </div>
            </div>
          </div>
          
          <p style={{marginTop: '20px', fontSize: '16px', color: 'var(--ifm-color-content)'}}>
            You can reach me on <a href="https://github.com/franrob-projects" target="_blank" rel="noopener noreferrer" style={{color: 'var(--ifm-color-primary)'}}>GitHub</a> and <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--ifm-color-primary)'}}>LinkedIn</a>, where I post frequently about technical writing and developer experience.
          </p>
        </div>
      </section>

      {/* What I Believe Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>What I believe in</h2>
        <div className={styles.sectionContent}>
          <p>Building documentation that developers actually use, one commit at a time.</p>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>GitHub stats</h2>
        <div className={styles.sectionContent}>
          <div className={styles.githubStats}>
            <div className={styles.githubPlaceholder}>
              <div className={styles.githubChart}>
                {/* Simulated GitHub contribution chart */}
                <div className={styles.chartGrid}>
                  {Array.from({length: 364}, (_, i) => (
                    <div 
                      key={i} 
                      className={styles.chartSquare} 
                      style={{
                        backgroundColor: `var(--ifm-color-primary-${['darkest', 'darker', 'dark', 'light'][Math.floor(Math.random() * 4)]})`
                      }}
                    />
                  ))}
                </div>
                <p className={styles.chartLabel}>Contributions in the last year</p>
              </div>
            </div>
            <p style={{marginTop: '20px'}}>
              Follow my progress on <a href="https://github.com/franrob-projects" target="_blank" rel="noopener noreferrer" style={{color: 'var(--ifm-color-primary)'}}>GitHub</a>.
            </p>
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

      {/* Latest Writing Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Latest posts.</h2>
        <div className={styles.sectionContent}>
          <p>I write so I can think and communicate better.</p>
          
          <div className={styles.writingChart}>
            <div className={styles.chartPlaceholder}>
              <span>📊</span>
              <p>Writing activity visualization coming soon</p>
            </div>
          </div>

          <div className={styles.latestPosts}>
            <div className={styles.postItem}>
              <h4>API Documentation Best Practices</h4>
              <p>A comprehensive guide to creating developer-friendly API documentation</p>
            </div>
            <div className={styles.postItem}>
              <h4>Implementing Docs-as-Code Workflows</h4>
              <p>How to build scalable documentation systems using modern development practices</p>
            </div>
            <div className={styles.postItem}>
              <h4>Measuring Documentation Success</h4>
              <p>Metrics and strategies for tracking the impact of your technical writing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outside Work Section */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>Outside work?</h2>
        <div className={styles.sectionContent}>
          <p>In my spare time I enjoy reading tech books, contributing to open source projects, attending developer meetups, and exploring new documentation tools.</p>
          <br/>
          <p>Nowadays I put work first. But I intend to speak at conferences in over 20 different countries and help improve developer experiences worldwide.</p>
        </div>
      </section>

      {/* My Journey - Comprehensive Timeline */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>My journey.</h2>
        <div className={styles.sectionContent}>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>🎯</span>
                <p>Launched independent technical writing consultancy, focusing on developer experience and API documentation.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2023</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>📚</span>
                <p>Led docs-as-code transformation at tech startup, reducing support tickets by 40% and improving developer onboarding.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2022</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>⚡</span>
                <p>Specialized in API documentation and developer onboarding experiences at fast-growing SaaS company.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2021</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>🌱</span>
                <p>Started career in technical writing and developer education, discovering passion for clear communication.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2020</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>💻</span>
                <p>Began contributing to open source documentation projects and writing technical tutorials.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}>2019</div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineEmoji}>🎓</span>
                <p>Completed degree and started exploring the intersection of technology and clear communication.</p>
              </div>
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

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Let's stay in touch.</h2>
        <div className={styles.contactLinks}>
          <a href="https://github.com/franrob-projects" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/docs/intro">Portfolio</a>
        </div>
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
