---
slug: ethereum-org-docs-wayfinding
title: Why I opened a wayfinding PR against ethereum.org
authors: [francis]
tags: [ethereum, docs, open-source]
date: 2026-04-22
image: https://ethereum.org/images/ef-logo.png
---

The developer docs on ethereum.org are thorough. If you sit down and read them like a textbook, they work. The problem is nobody reads docs like a textbook. People turn up with a goal (I want to deploy a contract, I want to run a node, I want to understand the EVM) and they want the fastest path to that goal.

[![Ethereum developer documentation](https://ethereum.org/images/ef-logo.png)](https://ethereum.org/en/developers/docs/)

<!-- truncate -->

I opened [PR #18016](https://github.com/ethereum/ethereum-org-website/pull/18016) today to add a small wayfinding section to two pages. This is the reasoning.

## What the hub page looked like

The developer docs hub (`/developers/docs/`) opens with two paragraphs of intro copy, then three section lists: Foundational topics, Ethereum stack, Advanced. Those three lists are long, and the ordering is pedagogical (things in the right conceptual sequence) rather than task-oriented (things in the order you need them to do X).

If I know I want to write a smart contract, I still have to scan three lists and guess which entry point will start me somewhere useful. The answer is somewhere in the middle of Foundational topics, but you'd never know that from the hub.

## The change

Two additive blocks, both structured the same way:

- **On the hub page**, a new "Pick a starting point" section above the module lists. Four goal-based entry points (dapp, smart contract, node or staking, read the protocol in order), each linking straight to the first page on the right path.
- **On the intro-to-ethereum page**, a mirrored "Where to go next" section at the end, so readers who finish the intro aren't dropped back onto the generic nav.

No existing pages were touched, no modules reordered, no new routes. The linked target pages all exist already.

## Why do this as an additive change rather than a rewrite

The docs site is community-maintained and translated into 25 languages. Every paragraph of lead copy is a translation unit that has to get re-translated when it changes. A wayfinding insert that lives above the existing content is cheap to land, cheap to translate, and cheap to revert if the reviewers disagree with the framing.

A rewrite of the intro copy would have been more satisfying, but it would also be ten times the argument to have. Start small. See if the pattern lands.

## Why this matters for the protocol, not just the docs

Ethereum has a developer acquisition problem that lives partly at the docs layer. Every minute a dapp developer spends scanning three lists to find "where does the thing I need start" is a minute they might spend pointing their cursor at Solana's docs instead. Wayfinding is not the glamorous part of the docs stack, but it is what pushes a reader from "I am looking" to "I am building".

Goal-based entry points are a pattern that Stripe, Vercel, and Supabase all use on their docs hubs for this reason. It is genuinely uncontroversial in the wider API-docs world. Putting the same pattern in place on ethereum.org is low-risk, and any pushback tells us useful things about how the maintainers see the target reader.

## What I'd do next if this lands

If PR #18016 merges, the same pattern is worth adding to a couple more hub-style pages:

- The root of `developers/tutorials/`, which currently has no goal-based filter at all.
- The smart-contracts landing page, where readers likely want to pick between "I'm shipping a token", "I'm building a protocol", and "I'm auditing someone else's contract" more than they want the full curriculum.

Both are larger changes. They need the first one to land first so there's a pattern to point at.

## How to pressure-test a docs PR

If you're thinking about contributing docs to a protocol repo, one thing that helps reviewers say yes faster: list the target pages in the PR body and confirm they exist. Half of drive-by docs PRs link to pages that were renamed two quarters ago. A maintainer who has to verify every link in a forty-line diff will bounce the PR out of habit.

The other thing that helps: scope tightly, name the convention you're adopting (in this case, the ethereum.org `{#kebab-id}` heading-ID rule), and mention what you didn't change so the reviewer knows where the blast radius stops.
