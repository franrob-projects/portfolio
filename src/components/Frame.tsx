import {useEffect, useRef, useState, type ReactNode} from 'react';
import styles from '../css/work.module.css';

export type WireKind = 'docs' | 'pricing' | 'landing' | 'product';

function Wire({kind}: {kind: WireKind}) {
  const block = (x: number, y: number, w: number, h: number, o = 0.1, r = 4) => (
    <rect key={`${x}-${y}-${w}`} x={x} y={y} width={w} height={h} rx={r} fill="#fff" opacity={o} />
  );
  const accent = (x: number, y: number, w: number, h: number) => <rect x={x} y={y} width={w} height={h} rx={5} fill="#40d77c" opacity={0.85} />;
  return (
    <svg viewBox="0 0 320 200" className={styles.wire} aria-hidden>
      {block(0, 0, 320, 18, 0.06, 0)}
      {block(10, 6, 28, 6, 0.3)}
      {[70, 100, 130, 160].map(x => block(x, 7, 20, 4, 0.18))}
      {accent(270, 4, 40, 10)}
      {kind === 'docs' && (
        <>
          {block(24, 36, 150, 12, 0.35)}
          {block(24, 56, 110, 6, 0.15)}
          {[0, 1, 2].flatMap(r => [0, 1, 2].map(c => block(24 + c * 90, 84 + r * 36, 82, 30, 0.09, 6)))}
        </>
      )}
      {kind === 'pricing' && (
        <>
          {block(70, 34, 180, 12, 0.35)}
          {block(60, 60, 200, 6, 0.2, 3)}
          {accent(60, 60, 90, 6)}
          {[0, 1, 2, 3].map(c => block(14 + c * 76, 84, 70, 100, c === 1 ? 0.16 : 0.09, 6))}
        </>
      )}
      {kind === 'landing' && (
        <>
          {block(24, 38, 150, 14, 0.4)}
          {block(24, 58, 120, 14, 0.4)}
          {block(24, 80, 100, 5, 0.15)}
          {accent(24, 96, 52, 14)}
          {block(190, 38, 110, 80, 0.1, 8)}
          {[0, 1, 2].map(c => block(24 + c * 96, 136, 88, 14, 0.2))}
          {[0, 1, 2].map(c => block(24 + c * 96, 156, 88, 26, 0.07, 6))}
        </>
      )}
      {kind === 'product' && (
        <>
          {block(0, 18, 56, 182, 0.06, 0)}
          {[0, 1, 2, 3, 4].map(r => block(10, 32 + r * 18, 36, 6, r === 0 ? 0.4 : 0.15))}
          {block(70, 32, 120, 12, 0.35)}
          {[0, 1, 2].map(c => block(70 + c * 82, 58, 74, 40, 0.1, 6))}
          {block(70, 110, 240, 78, 0.07, 6)}
          {accent(80, 160, 60, 20)}
          {block(150, 140, 50, 40, 0.14, 3)}
          {block(210, 124, 50, 56, 0.14, 3)}
        </>
      )}
    </svg>
  );
}

/** A browser-style frame. Shows the image when it loads, a wireframe when it does not. */
export default function Frame({src, alt, wire, children}: {src?: string; alt: string; wire: WireKind; children?: ReactNode}) {
  const [failed, setFailed] = useState(!src);
  const img = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (img.current && img.current.complete && img.current.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <div className={styles.frame}>
      <div className={styles.frameBar} aria-hidden>
        <i /><i /><i />
      </div>
      <div className={styles.frameBody}>
        {!failed && src ? <img ref={img} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} /> : <Wire kind={wire} />}
        {children}
      </div>
    </div>
  );
}
