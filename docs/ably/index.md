---
sidebar_position: 2
---

# My work at Ably

I joined Ably in August 2023 as a Developer Educator, working on their realtime messaging platform. My focus is making complex WebSocket and database sync concepts accessible to developers.

## What I do at Ably

Most of my work centers around [Ably's realtime platform](https://ably.com/docs) - helping developers understand how to build apps with WebSockets, Server-Sent Events, and their newer database sync features.

## Key areas of contribution

### Re-engineering the docs site: Textile → Next.js + TypeScript + React

Ably's docs site was migrated off a legacy Textile-based content system onto a modern Next.js application (TypeScript + React, with MDX for content). I contributed directly to that migration by converting high-traffic reference pages from Textile into MDX and wiring them into the new page-based routing.

<img src="/portfolio/img/ably/ably-architecture/arch-a.png" alt="Ably docs architecture" style={{borderRadius: '8px', marginTop: '1rem'}} />

<img src="/portfolio/img/ably/ably-architecture/arch-b.png" alt="Ably docs component structure" style={{borderRadius: '8px', marginTop: '1rem'}} />

Two of the larger conversions are merged upstream:

- [**ably/docs#2911**](https://github.com/ably/docs/pull/2911) — Converts the REST API reference page to MDX. 2,027 lines added, 1,512 deleted (the old `content/api/rest-api.textile` removed, the new `src/pages/docs/api/rest-api.mdx` added).
- [**ably/docs#2913**](https://github.com/ably/docs/pull/2913) — Converts the SSE reference page to MDX. Moved `content/api/sse.textile` into `src/pages/docs/api/sse.mdx` so the page lives alongside the rest of the React app.

The conversions aren't just copy-paste. Textile callouts, inline language tabs, and variable interpolations had to be rewritten as MDX components so the rendered output stayed consistent with the new design system. After conversion the pages can import React components directly, which is how the interactive code samples and language switchers now work.

### Server-sent events documentation
I completely rewrote Ably's [SSE documentation](https://ably.com/docs/protocols/sse), converting it from basic markdown to an interactive guide with working examples and troubleshooting steps. The MDX conversion ([#2913](https://github.com/ably/docs/pull/2913)) landed as part of this work.

<img src="/portfolio/img/ably/ably-sse/sse-a.png" alt="Ably SSE documentation" style={{borderRadius: '8px', marginTop: '1rem'}} />

<img src="/portfolio/img/ably/ably-sse/sse-b.png" alt="Ably SSE documentation - troubleshooting" style={{borderRadius: '8px', marginTop: '1rem'}} />

### Webhooks and security
Rewrote the [webhook security documentation](https://ably.com/docs/general/webhooks) to be more practical, with step-by-step validation examples and common security mistakes.

<img src="/portfolio/img/ably/ably-webhook/webhook-a.png" alt="Ably webhook security documentation" style={{borderRadius: '8px', marginTop: '1rem'}} />

### Pub/Sub and Developer onboarding
Rebuilt the developer onboarding documentation to be more accessible while maintaining technical depth. Recent work includes intro copy and USP sections across Pub/Sub, Spaces, Chat, LiveSync, and LiveObjects docs.

<img src="/portfolio/img/ably/ably-pub-sub/pub-sub-a.png" alt="Ably Pub/Sub documentation" style={{borderRadius: '8px', marginTop: '1rem'}} />

### Troubleshooting and support content
Produced troubleshooting guides and diagnostic content covering common developer issues, including generating HAR files ([#2984](https://github.com/ably/docs/pull/2984)) and documenting service disruption behaviour ([#2818](https://github.com/ably/docs/pull/2818)).

<img src="/portfolio/img/ably/ably-troubleshooting/trouble-a.png" alt="Ably troubleshooting documentation" style={{borderRadius: '8px', marginTop: '1rem'}} />

## Merged pull requests

Selected PRs that landed in `ably/docs`:

| PR | Summary | Merged |
|---|---|---|
| [#2911](https://github.com/ably/docs/pull/2911) | Converts REST API reference to MDX (part of the Textile → Next.js/TypeScript/React migration) | 2025-11-07 |
| [#2913](https://github.com/ably/docs/pull/2913) | Converts SSE reference to MDX | 2025-11-07 |
| [#2984](https://github.com/ably/docs/pull/2984) | Self-service HAR file guide for connection troubleshooting | 2025-12-01 |
| [#2818](https://github.com/ably/docs/pull/2818) | Service disruptions documentation and developer guarantees | 2025-09-18 |

Full history: [all merged PRs by me on ably/docs](https://github.com/ably/docs/pulls?q=is%3Apr+author%3Afranrob-projects+is%3Amerged).

## Tools and approach

| Tool | Purpose |
|------|---------|
| **MDX + Docusaurus** | For interactive documentation |
| **GitHub Actions** | For automated testing of code samples |
| **Linear** | For project tracking with the engineering team |
| **Notion** | For content planning and strategy docs |

The goal is always the same: can a developer copy the code, run it, and have it work? If not, the documentation isn't done.