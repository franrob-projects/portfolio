import type {ReactNode} from 'react';
import styles from './TechCarousel.module.css';

interface Tech {
  name: string;
  slug: string;
}

const TECHS: Tech[] = [
  { name: 'TypeScript',     slug: 'typescript' },
  { name: 'Python',         slug: 'python' },
  { name: 'React',          slug: 'react' },
  { name: 'JavaScript',     slug: 'javascript' },
  { name: 'Next.js',        slug: 'nextdotjs' },
  { name: 'Tailwind CSS',   slug: 'tailwindcss' },
  { name: 'HTML5',          slug: 'html5' },
  { name: 'MDX',            slug: 'mdx' },
  { name: 'Node.js',        slug: 'nodedotjs' },
  { name: 'CSS',            slug: 'css' },
  { name: 'Docusaurus',     slug: 'docusaurus' },
  { name: 'Vercel',         slug: 'vercel' },
  { name: 'PostgreSQL',     slug: 'postgresql' },
  { name: 'Supabase',       slug: 'supabase' },
  { name: 'Neo4j',          slug: 'neo4j' },
  { name: 'Docker',         slug: 'docker' },
  { name: 'GitHub Actions', slug: 'githubactions' },
];

export default function TechCarousel(): ReactNode {
  const loop = [...TECHS, ...TECHS];

  return (
    <div className={styles.wrapper} aria-label="Tools and technologies I work with">
      <div className={styles.track}>
        {loop.map((tech, i) => (
          <div key={i} className={styles.item} title={tech.name}>
            <img
              src={`/portfolio/img/icons/${tech.slug}.svg`}
              alt={tech.name}
              className={styles.icon}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
