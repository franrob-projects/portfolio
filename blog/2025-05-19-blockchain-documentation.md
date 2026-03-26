---
slug: writing-blockchain-documentation
title: Writing good blockchain documentation
authors: [francis]
tags: [blockchain, tooling]
date: 2025-05-19
image: https://ethereum.org/images/ef-logo.png
---

Blockchain documentation is uniquely difficult to write well. The audience spans protocol researchers who think in cryptographic primitives and developers who just want to make a transaction. The technology changes faster than most documentation teams can keep up with. And incorrect documentation can have direct financial consequences in a way that most software docs don't. Here's what I've learned writing in this space.

<!-- truncate -->

[![Ethereum developer documentation](https://ethereum.org/images/ef-logo.png)](https://ethereum.org/en/developers/docs/)

## Know which layer you're documenting

Blockchain stack layers have distinct audiences and different documentation needs:

**Protocol layer**: consensus, peer-to-peer networking, cryptography. Audience is researchers and core developers. Precision matters more than accessibility. The [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf) is protocol-layer documentation at its most rigorous.

**Developer tooling**: smart contract development, deployment, testing. Audience is engineers building applications. Concrete examples and working code matter most. Hardhat and Foundry do this well.

**Application layer**: wallets, DeFi protocols, NFT platforms. Audience is end users who may have no technical background. Clarity and consequence-awareness matter. Most protocols underinvest here.

The mistake is writing for the wrong layer. Developer documentation written for a non-technical audience is condescending and useless. Application documentation written for developers leaves users confused about what they're actually clicking.

## Code samples are non-negotiable

In blockchain documentation, a code sample that doesn't work is worse than no code sample. It creates false confidence. Someone copies it, deploys it, and learns on mainnet that it's wrong.

Test every code sample. For Solidity, that means compiling it and ideally running it against a test. For JavaScript that interacts with contracts, test it against a local node.

Hardhat and Foundry both make this easier. The [Hardhat documentation repository](https://github.com/NomicFoundation/hardhat/tree/main/docs) shows how they keep their own docs tested. For SDK documentation, connecting examples to an automated test suite is the gold standard.

## Version everything

Solidity changes. Library interfaces change. Network upgrades change assumptions. Documentation that doesn't say which version it applies to is unreliable for anyone who reads it six months later.

Minimum: put a "last updated" date and a version on every significant page. Better: use versioned documentation that's tied to library releases. Docusaurus (which this site uses) supports versioned docs natively.

## Address the user dashboard early

For protocols with a user interface, documentation that only covers the API or SDK is missing most users. The people who interact with a DeFi protocol through its dashboard vastly outnumber developers integrating it. Write the dashboard documentation first, or at minimum, give it equal weight.

Good examples:
- [Uniswap interface documentation](https://support.uniswap.org/hc/en-us)
- [Aave user guides](https://docs.aave.com/faq/)
- [MetaMask user documentation](https://support.metamask.io/)

These are written for people who don't know what an ABI is. They explain the consequences of actions ("you will pay gas," "this transaction cannot be undone") not just the mechanics.

## Explain what can go wrong

Blockchain transactions are irreversible. Documentation that only explains the happy path is incomplete. For every significant action:

- What happens if the transaction fails? (funds returned? partial execution?)
- What are the gas cost estimates and what affects them?
- What are the time constraints?
- What are the security considerations?

The [Ethereum.org documentation](https://ethereum.org/en/developers/docs/) does this reasonably well for core concepts. For protocol-specific docs, it's rarer.

## Handling deprecations

Old blockchain documentation doesn't go away. It gets indexed, linked to, and found. If you deprecate a function or change a pattern, actively redirect. Don't just add a notice to the old page. Change the URL to redirect, update your changelog, and if the old pattern was dangerous, explain why.

## Write for skeptical readers

Blockchain documentation readers have often been burned before. They're reading carefully because they're about to do something with financial consequences. Write for that level of attention.

That means: say what something does exactly, not what it's "designed to do" or "intended to do." State limitations explicitly. If there's a known edge case, document it even if it's rare. Link to the relevant contract or code so readers can verify claims.

Trust is harder to build and easier to lose in this space than in typical software documentation.
