import {useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode} from 'react';

/** Segmented control with a sliding indicator. Tablist semantics with arrow-key navigation. */
export default function FilterBar<T extends string>({options, value, onChange, label, format = (o: T) => o, controls}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
  label: string;
  format?: (o: T) => string;
  controls?: string;
}): ReactNode {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const [ind, setInd] = useState({x: 0, w: 0});
  const idx = options.indexOf(value);
  useLayoutEffect(() => {
    const b = refs.current[idx];
    if (b) setInd({x: b.offsetLeft, w: b.offsetWidth});
  }, [idx, options]);
  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    let n = d ? (idx + d + options.length) % options.length : e.key === 'Home' ? 0 : e.key === 'End' ? options.length - 1 : -1;
    if (n < 0) return;
    e.preventDefault();
    onChange(options[n]);
    refs.current[n]?.focus();
  };
  return (
    <div className="fr-filter" role="tablist" aria-label={label} onKeyDown={onKey}>
      <span className="fr-filter__ind" aria-hidden="true" style={{transform: `translateX(${ind.x}px)`, width: ind.w}} />
      {options.map((o, i) => (
        <button key={o} ref={el => { refs.current[i] = el; }} type="button" role="tab" aria-selected={o === value} aria-controls={controls}
          tabIndex={o === value ? 0 : -1} className="fr-filter__tab" onClick={() => onChange(o)}>{format(o)}</button>
      ))}
    </div>
  );
}
