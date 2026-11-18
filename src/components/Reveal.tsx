import {useEffect, useRef, useState, type ReactNode} from 'react';
import styles from '../css/work.module.css';

/** Fades and lifts its children once as they scroll into view. Skipped for reduced motion. */
export default function Reveal({children, delay = 0}: {children: ReactNode; delay?: number}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, {threshold: 0.12});
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${styles.reveal} ${seen ? styles.revealIn : ''}`} style={{transitionDelay: `${delay}ms`}}>
      {children}
    </div>
  );
}
