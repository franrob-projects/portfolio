import type {ReactNode} from 'react';
import {PROOF_METRICS} from '../config/site';

const ICONS: [string, ReactNode][] = [
  ['Manufacturing', <g key="g"><circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /><circle cx="12" cy="12" r="6.5" /></g>],
  ['Engineering', <g key="f"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><circle cx="12" cy="5.8" r=".9" /><circle cx="12" cy="18.2" r=".9" /><circle cx="5.8" cy="12" r=".9" /><circle cx="18.2" cy="12" r=".9" /></g>],
  ['Infrastructure', <g key="c"><rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5M10 10h4v4h-4z" /></g>],
  ['Regulated sectors', <g key="s"><path d="M12 2.8l7.5 3v5.6c0 4.6-3.2 8.2-7.5 9.8-4.3-1.6-7.5-5.2-7.5-9.8V5.8z" /><path d="M8.5 12l2.4 2.4 4.6-4.8" /></g>],
  ['E-commerce', <g key="k"><path d="M3 4h2.5l2.3 10.5h10l1.9-7.5H6.4" /><circle cx="9" cy="18.5" r="1.4" /><circle cx="16.5" cy="18.5" r="1.4" /></g>],
];

export default function ProofStrip(): ReactNode {
  const row = ICONS.map(([label, path]) => (
    <li key={label}><svg viewBox="0 0 24 24" aria-hidden="true">{path}</svg>{label}</li>
  ));
  return (
    <section className="fr-proof" aria-label="Sectors and experience">
      <div className="fr-proof__ticker">
        <ul>{row}</ul>
        <ul aria-hidden="true">{row}</ul>
      </div>
      <p className="fr-proof__metrics">{PROOF_METRICS.join(' · ')}</p>
    </section>
  );
}
