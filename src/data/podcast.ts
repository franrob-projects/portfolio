export interface Episode {
  number: number;
  title: string;
  guest: string;
  role: string;
  published: string; // ISO date
  videoId: string;
  summary: string;
  topics: string[];
}

export const SERIES = {
  title: 'EAR: In Conversation',
  tagline: 'Interviews with the people building energy-aware computing.',
  about:
    'A video interview series for Energy Aware Runtime (EAR), software that manages power and energy in HPC and AI data centres. I host and produce it: I research each guest, write the questions and run the recording.',
  site: 'https://www.ear.energy',
};

// Add new episodes to the top of this list. Only the video ID is needed to embed one.
export const EPISODES: Episode[] = [
  {
    number: 7,
    title: 'Taking EAR to Market',
    guest: 'Raphaël Brochard',
    role: 'CEO, EAR',
    published: '2026-11-12',
    videoId: 'WvCQRa-pMgw',
    summary:
      'Raphaël Brochard talks about EAR’s move from an HPC research spin-off to a commercial product for AI data centres, what he is focused on as CEO, and how the company sells through hardware partners.',
    topics: [
      'Stepping up to CEO and the first commercial priorities',
      'Power and grid bottlenecks in AI data centres',
      'Selling with OEM partners: Lenovo, HPE and Eviden',
      'Opening the seed round',
    ],
  },
];

export const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
