import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from '../css/work.module.css';
import Frame, {type WireKind} from './Frame';

interface Props {
  title: string;
  kicker: string;
  summary: string;
  image?: string;
  wire?: WireKind;
  to?: string;
  href?: string;
  tags?: string[];
  status?: string;
  open?: { label: string; href: string };
}

export function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={styles.ext}>
      <path d="M6 3H3v10h10v-3M9 2h5v5M14 2L7.5 8.5" />
    </svg>
  );
}

export default function ProjectCard({title, kicker, summary, image, wire = 'product', to, href, tags, status, open}: Props): ReactNode {
  const body = (
    <>
      <Frame src={image} alt={`${title} screenshot`} wire={wire} />
      <div className={styles.cardBody}>
        <h3>{title}{href && <ExternalIcon />}</h3>
        <div className={styles.meta}>{kicker}</div>
        <p>{summary}</p>
        <div className={styles.cardFoot}>
          {tags?.map(t => <span key={t} className={styles.chip}>{t}</span>)}
          {status && <span className={styles.status}>{status}</span>}
        </div>
      </div>
    </>
  );
  return to ? (
    <div className={styles.shell}>
      <Link to={to} className={styles.card}>{body}</Link>
      {open && (
        <a className={styles.openPill} href={open.href} target="_blank" rel="noopener noreferrer" aria-label={`${open.label}: ${title}, opens in a new tab`}>
          {open.label} <ExternalIcon />
        </a>
      )}
    </div>
  ) : (
    <a href={href} className={styles.card} aria-label={`${title}, ${kicker}`}>{body}</a>
  );
}
