import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Franrob Design',
  tagline: 'Web, CRM and content design',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://franrob.design',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'franrob-projects', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-card-2026.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Franrob Design',
      logo: {alt: 'Franrob Design logo', src: 'img/monogram.svg'},
      items: [
        {to: '/work', label: 'Work', position: 'left'},
        {to: '/#services', label: 'Services', position: 'left', activeBaseRegex: '^$'},
        {to: '/#about', label: 'About', position: 'left', activeBaseRegex: '^$'},
        {to: '/contact', label: 'Contact', position: 'left'},
        {type: 'html', position: 'right', value: '<span class="nav-lang" title="I work in English and Spanish">EN / ES</span>'},
        {to: '/contact', label: 'Start a project', position: 'right', className: 'navbar-cta'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Work', items: [{label: 'Selected work', to: '/work'}, {label: 'Projects', to: '/projects'}, {label: 'Podcast', to: '/podcast'}, {label: 'Docs & writing', to: '/docs/intro'}]},
        {title: 'Contact', items: [{label: 'Contact page', to: '/contact'}, {label: 'fran@franrob.design', href: 'mailto:fran@franrob.design'}, {label: 'WhatsApp', href: 'https://wa.me/34678348065'}]},
        {title: 'More', items: [{label: 'Privacy', to: '/privacy'}, {label: 'GitHub', href: 'https://github.com/franrob-projects'}]},
      ],
      copyright: `© ${new Date().getFullYear()} Franrob Design · Fran Roberts, Málaga, Spain.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
