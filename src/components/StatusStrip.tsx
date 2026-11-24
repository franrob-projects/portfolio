import type {ReactNode} from 'react';
import {STATUS} from '../config/site';

export default function StatusStrip(): ReactNode {
  return (
    <p className="fr-status" role="status">
      <i className="fr-status__dot" aria-hidden="true" />
      {STATUS.available} <span aria-hidden="true">·</span> {STATUS.reply} <span aria-hidden="true">·</span> {STATUS.languages}
    </p>
  );
}
