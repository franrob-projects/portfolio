import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {TITLE_BLOCK} from '../config/site';

/** Engineering-drawing title block for the footer. */
export default function TitleBlock(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const rev = String(siteConfig.customFields?.buildRev ?? '');
  return (
    <dl className="fr-titleblock">
      <div><dt>Drawn</dt><dd>{TITLE_BLOCK.drawn}</dd></div>
      <div><dt>Rev</dt><dd>{rev}</dd></div>
      <div><dt>Scale</dt><dd>{TITLE_BLOCK.scale}</dd></div>
      <div><dt>Location</dt><dd>{TITLE_BLOCK.place}</dd></div>
    </dl>
  );
}
