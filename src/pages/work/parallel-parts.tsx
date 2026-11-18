import type { ReactNode } from 'react';
import CaseStudy from '../../components/CaseStudy';
import { CASE_STUDIES } from '../../data/work';

export default function Page(): ReactNode {
  return <CaseStudy data={CASE_STUDIES.find(c => c.slug === 'parallel-parts')!} />;
}
