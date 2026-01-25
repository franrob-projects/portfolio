---
sidebar_position: 3
---

# My time at Couchbase

I was Lead Technical Writer at Couchbase from 2022 to 2023, focused on their mobile database platform. The main challenge was making NoSQL databases approachable for mobile developers who were used to simpler storage solutions.

## The problem I inherited

When I started, Couchbase's mobile documentation was scattered across multiple repositories. Developers had to hunt through different sites to understand how [Couchbase Lite](https://docs.couchbase.com/couchbase-lite/current/introduction.html), [Sync Gateway](https://docs.couchbase.com/sync-gateway/current/introduction.html), and their cloud services worked together.

## What I built

### Unified mobile platform documentation
I restructured the entire [mobile documentation section](https://docs.couchbase.com/home/mobile.html) to tell a coherent story. Instead of three separate product docs, developers now get a clear path from embedded database to cloud sync.

### Cross-platform API documentation
Mobile developers work across iOS, Android, and cross-platform frameworks. I created consistent API docs that work the same way across platforms.

### Repository consolidation
The biggest project was consolidating 12+ documentation repositories into a single, maintainable system. This involved migrating 500+ pages without breaking existing URLs and setting up automated testing for code samples.

## Key areas of work

### Mobile database fundamentals
Explaining complex database concepts in mobile-friendly terms, focusing on offline-first development patterns.

### Sync and replication
Making distributed systems concepts accessible to mobile developers, with practical examples of conflict resolution and data synchronization.

### Cross-platform SDKs
Creating consistent documentation across iOS, Android, .NET, and React Native platforms.

## Tools and process

| Tool | Purpose |
|------|---------|
| **Antora** | For modular documentation architecture |
| **AsciiDoc** | For technical content (Couchbase's preferred format) |
| **GitHub Actions** | For automated builds and testing |
| **Confluence** | For internal planning and strategy docs |

## Impact

The unified documentation reduced support tickets about mobile integration by about 40%. More importantly, developers could actually find what they needed without bouncing between different sites.

The key was treating mobile development as its own discipline, not just "database work on a small screen." Mobile developers have different constraints, different frameworks, and different expectations about how documentation should work.