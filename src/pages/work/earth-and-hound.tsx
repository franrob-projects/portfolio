import CaseStudy from '../../components/CaseStudy';
import {CASE_STUDIES} from '../../data/work';

export default function Page() {
  return <CaseStudy data={CASE_STUDIES.find(c => c.slug === 'earth-and-hound')!} />;
}
