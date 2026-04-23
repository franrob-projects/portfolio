import React from 'react';
import Link from '@docusaurus/Link';

const styles = {
  highlightContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  highlightItem: {
    textAlign: 'center' as const,
    padding: '10px',
    backgroundColor: 'var(--ifm-color-emphasis-100)',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
  }
};

export default function AuthorProfile() {
  return (
    <div className="card shadow--md">
      <div className="card__header">
        <div className="avatar">
          <img
            className="avatar__photo"
            src="https://github.com/franrob-projects.png" 
            alt="Francis Roberts Profile" 
          />
          <div className="avatar__intro">
            <div className="avatar__name">Francis Roberts</div>
            <small className="avatar__subtitle">Docs Engineer & Developer Educator</small>
          </div>
        </div>
      </div>
      
      <div className="card__body">
        <p>
          I specialize in <strong>API documentation</strong>, <strong>docs-as-code workflows</strong>, and <strong>developer experience</strong>. 
          My approach combines technical expertise with user-centered design to create documentation that reduces support load and accelerates product adoption.
        </p>
        
        <div style={styles.highlightContainer}>
          <div style={styles.highlightItem}>
            <div style={{fontSize: '1.5rem'}}>📝</div>
            Documentation Workshop
          </div>
          <div style={styles.highlightItem}>
            <div style={{fontSize: '1.5rem'}}>🚀</div>
            API Launch Event
          </div>
          <div style={styles.highlightItem}>
            <div style={{fontSize: '1.5rem'}}>👥</div>
            Dev Team Collaboration
          </div>
        </div>
      </div>
      
      <div className="card__footer">
        <div className="button-group button-group--block">
          <Link 
            className="button button--secondary" 
            to="https://github.com/franrob-projects">
            GitHub
          </Link>
          <Link 
            className="button button--primary" 
            to="https://linkedin.com/in/francis-roberts-5850b396">
            LinkedIn
          </Link>
        </div>
        <div style={{textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', opacity: 0.8}}>
          Posting frequently about docs engineering and developer experience
        </div>
      </div>
    </div>
  );
}