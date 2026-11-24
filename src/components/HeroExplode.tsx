import {useEffect, useRef, type ReactNode} from 'react';
import Link from '@docusaurus/Link';

const LAYERS = [
  {key: 'brand', label: 'Brand', src: '/img/work/solaz-cards.jpg', alt: 'Solaz — business cards and brand mark'},
  {key: 'print', label: 'Print', src: '/img/work/solaz-brochure.jpg', alt: 'Solaz — tri-fold brochure, outside and inside'},
  {key: 'web', label: 'Web', src: '/img/work/solaz.jpg', alt: 'Solaz — finished website home page'},
];

/**
 * Brand, print and web as three layers in an isometric exploded view.
 * Scrolling through the hero compresses them into the finished website.
 * Reduced motion and small screens get the static stack.
 */
export default function HeroExplode(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768;
    if (still) { el.style.setProperty('--p', '0'); return; }
    let raf = 0;
    let visible = false;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the stack sits in its start position, 1 once its top reaches 15% of the viewport
      const p = Math.min(1, Math.max(0, (vh * 0.55 - r.top) / (vh * 0.45)));
      el.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => { if (visible && !raf) raf = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) update(); });
    io.observe(el);
    window.addEventListener('scroll', onScroll, {passive: true});
    update();
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <Link to="/work/solaz" className="fr-explode" ref={ref as never} aria-label="Solaz case study: brand, print and web">
      <div className="fr-explode__stage">
        {LAYERS.map((l, i) => (
          <figure key={l.key} className={`fr-explode__layer fr-explode__layer--${l.key}`} style={{['--i' as string]: i}}>
            <img src={l.src} alt={l.alt} width={1440} height={900} loading="eager" decoding="async" />
            <figcaption><span>{String(i + 1).padStart(2, '0')}</span> {l.label}</figcaption>
          </figure>
        ))}
      </div>
      <span className="fr-explode__caption">Solaz · brand → print → web</span>
    </Link>
  );
}
