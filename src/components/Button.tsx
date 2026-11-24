import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';

type Variant = 'primary' | 'secondary' | 'ghost';

/** One button for the whole site: same height, radius and type; three variants. */
export default function Button({to, href, variant = 'secondary', children, className = '', ...rest}: {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  [k: string]: unknown;
}): ReactNode {
  const cls = `fr-btn fr-btn--${variant} ${className}`.trim();
  if (to) return <Link className={cls} to={to} {...rest}>{children}</Link>;
  return <a className={cls} href={href} {...rest}>{children}</a>;
}
