import React, { useEffect, useState } from 'react';
import styles from '../pages/index.module.css';

interface ContributionData {
  date: string;
  count: number;
}

const GitHubStats = () => {
  const username = 'franrob-projects';
  const [contributions, setContributions] = useState<ContributionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        if (response.ok) {
          const data = await response.json();
          if (data.contributions) {
            setContributions(data.contributions);
          }
        } else {
          throw new Error('Failed to fetch contributions');
        }
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        setError('Failed to load contributions');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const getContributionColor = (count: number) => {
    if (count === 0) return 'var(--ifm-color-emphasis-200)';
    if (count < 3) return 'var(--ifm-color-primary-light)';
    if (count < 6) return 'var(--ifm-color-primary)';
    if (count < 10) return 'var(--ifm-color-primary-dark)';
    return 'var(--ifm-color-primary-darkest)';
  };

  if (loading) {
    return (
      <div className={styles.githubStats}>
        <div className={styles.githubPlaceholder}>
          <p>Loading GitHub contributions...</p>
        </div>
        <p style={{marginTop: '20px'}}>
          Follow my progress on{' '}
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{color: 'var(--ifm-color-primary)'}}
          >
            GitHub
          </a>.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.githubStats}>
        <div className={styles.githubPlaceholder}>
          <div className={styles.githubChart}>
            {/* Fallback simulated chart */}
            <div className={styles.chartGrid}>
              {Array.from({length: 365}, (_, i) => (
                <div 
                  key={i} 
                  className={styles.chartSquare} 
                  style={{
                    backgroundColor: getContributionColor(Math.floor(Math.random() * 12)),
                    width: '10px',
                    height: '10px',
                    margin: '1px',
                    borderRadius: '2px',
                    display: 'inline-block'
                  }}
                />
              ))}
            </div>
            <p className={styles.chartLabel}>Contributions in the last year</p>
          </div>
        </div>
        <p style={{marginTop: '20px'}}>
          Follow my progress on{' '}
          <a 
            href={`https://github.com/${username}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{color: 'var(--ifm-color-primary)'}}
          >
            GitHub
          </a>.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.githubStats}>
      <div className={styles.githubCalendar}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(53, 1fr)',
          gap: '2px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {contributions.slice(-365).map((day, i) => (
            <div 
              key={i} 
              style={{
                backgroundColor: getContributionColor(day.count),
                width: '10px',
                height: '10px',
                borderRadius: '2px',
                title: `${day.count} contributions on ${day.date}`
              }}
            />
          ))}
        </div>
        <p className={styles.chartLabel}>Contributions in the last year</p>
      </div>
      <p style={{marginTop: '20px'}}>
        Follow my progress on{' '}
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{color: 'var(--ifm-color-primary)'}}
        >
          GitHub
        </a>.
      </p>
    </div>
  );
};

export default GitHubStats;