import type {ReactNode} from 'react';

/** Mono section label placed on the grid, e.g. "01 / SERVICES". */
export default function SectionLabel({n, children}: {n: string; children: ReactNode}): ReactNode {
  return <p className="fr-label"><span>{n}</span> / {children}</p>;
}
