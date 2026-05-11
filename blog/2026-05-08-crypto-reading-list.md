---
slug: crypto-reading-list-2026
title: A short crypto reading list for people who actually want to build
authors: [francis]
tags: [ethereum, blockchain, defi, solidity, tooling]
date: 2026-05-08
---

Every couple of months someone messages me asking where to start with crypto. Not "should I buy some" — they mean "I want to build something on-chain, where do I read." The honest answer is that most "intro to crypto" content is bad: it is either price-chart bait or a 90-minute YouTube lecture that could have been a paragraph.

This post is the short list of links I actually send. Each one earned its spot by being something I have either learned from or sent to a working developer who came back less confused.

<!-- truncate -->

## Start with the primary sources

Read these before anything else. They are short, free, and they are what every secondary explainer is paraphrasing.

- [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) — Satoshi's original whitepaper. Nine pages. You will not understand every line on the first read and that is fine; the structure is what matters.
- [Ethereum Whitepaper](https://ethereum.org/en/whitepaper/) — Buterin's original 2014 paper. Read this once you understand Bitcoin, because half of it is "here is what Bitcoin can't do."
- [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf) — The formal spec. You don't need to read this cover to cover, but you should know it exists and skim the EVM section once.

## Protocol docs that are worth your time

- [ethereum.org developer docs](https://ethereum.org/en/developers/docs/) — The closest thing the ecosystem has to a canonical tutorial site. Start at the Foundational topics, not the Stack section.
- [Solidity docs](https://docs.soliditylang.org/) — The language reference for smart contracts. The "Solidity by Example" appendix is the fastest path to reading existing contracts.
- [EIPs (Ethereum Improvement Proposals)](https://eips.ethereum.org/) — Every standard you will ever interact with (ERC-20, ERC-721, ERC-4337) is here. Bookmark it.
- [Vyper docs](https://docs.vyperlang.org/) — Worth a skim even if you write Solidity, because seeing the same concepts in a different syntax sharpens your mental model.

## Tooling, in the order you will need it

- [Foundry book](https://book.getfoundry.sh/) — The current default toolchain for new Solidity projects. `forge`, `cast`, `anvil`. Learn this before Hardhat unless your team is already on Hardhat.
- [Hardhat docs](https://hardhat.org/docs) — Still widely used, especially in older codebases. Worth knowing if you are reading other people's repos.
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/) — Audited reference implementations of every common standard. Read the source. Do not roll your own ERC-20.
- [wagmi](https://wagmi.sh/) and [viem](https://viem.sh/) — The current recommended frontend stack for talking to chains from React. ethers.js is fine but the ecosystem has moved.

## Security, which you should read before you ship anything

- [Smart Contract Weakness Classification (SWC)](https://swcregistry.io/) — Catalog of known vulnerability classes. Do a pass through this before your first deploy.
- [Secureum's Solidity 201](https://github.com/x676f64/secureum-mind_map) — Mind map of audit-relevant concepts. Dense, link-heavy, and free.
- [Rekt News](https://rekt.news/) — Postmortems of real exploits. Read it the way pilots read NTSB reports — for the specific failure modes, not the drama.
- [Trail of Bits' Building Secure Contracts](https://github.com/crytic/building-secure-contracts) — A working engineer's guide. The "not-so-smart-contracts" examples in particular are worth a Saturday.

## DeFi, if that is the rabbit hole you are in

- [DeFiLlama](https://defillama.com/) — Aggregator of TVL across chains and protocols. Useful for sanity-checking which protocols are actually being used vs. which are just being talked about.
- [Uniswap v3 whitepaper](https://uniswap.org/whitepaper-v3.pdf) — Concentrated liquidity is the most interesting AMM design idea of the last few years and the paper is readable.
- [Paradigm research](https://www.paradigm.xyz/writing) — Posts from the Paradigm team. Heavy on cryptography and mechanism design, but they explain things properly.

## Newsletters and feeds that don't waste your time

- [Week in Ethereum News](https://weekinethereumnews.com/) — Boring on purpose. Just a list of what shipped, what was discussed, and what is coming.
- [Bankless](https://www.bankless.com/) — More opinionated, sometimes too far into hype, but their protocol deep-dives are good.
- [Vitalik's blog](https://vitalik.eth.limo/) — The signal-to-noise here is unreasonable. Read the posts on rollups, account abstraction, and quadratic funding first.

## A note on what I left out

I deliberately did not link any "learn Solidity in 30 days" courses, any token-price sites, or anything from a project that would benefit financially from you reading it. The list above is biased toward primary sources and toolchain docs because those are the things that age well. A YouTube tutorial from 2022 is mostly wrong now; the Solidity docs are not.

If a link here breaks or goes stale, that's a signal — let me know on [GitHub](https://github.com/franrob-projects) and I'll cut it. Reading lists rot fast in this space.
