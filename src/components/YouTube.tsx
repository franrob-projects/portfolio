import {useEffect, useRef, useState, type ReactNode} from 'react';
import styles from '../css/work.module.css';
import {thumb} from '../data/podcast';

// Click to load: no YouTube player or cookies until the visitor presses play.
export default function YouTube({id, title}: {id: string; title: string}): ReactNode {
  const [on, setOn] = useState(false);
  const [broken, setBroken] = useState(false);
  const img = useRef<HTMLImageElement>(null);
  useEffect(() => { const i = img.current; if (i && i.complete && i.naturalWidth === 0) setBroken(true); }, [on]);
  if (on) {
    return (
      <div className={styles.video}>
        <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
      </div>
    );
  }
  return (
    <button type="button" className={`${styles.video} ${styles.videoFacade}`} onClick={() => setOn(true)} aria-label={`Play video: ${title}`}>
      {!broken && <img ref={img} src={thumb(id)} alt="" onError={() => setBroken(true)} />}
      <span className={styles.play} aria-hidden><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
    </button>
  );
}
