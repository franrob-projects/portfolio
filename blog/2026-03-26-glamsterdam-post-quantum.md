---
slug: ethereum-glamsterdam-post-quantum-2026
title: "Ethereum in March 2026: Glamsterdam, post-quantum, and what developers need to watch"
authors: [francis]
tags: [ethereum, blockchain, security, layer2]
date: 2026-03-26
image: https://ethereum.org/images/ef-logo.png
---

Two things are dominating Ethereum developer conversations right now. The Glamsterdam upgrade is taking shape as the most significant protocol change since the Merge, and the Ethereum Foundation just launched a dedicated post-quantum security hub with more than ten client teams already running interoperability devnets. Neither is finished, but both are far enough along that developers should be paying attention.

<!-- truncate -->

[![Ethereum developer roadmap](https://ethereum.org/images/ef-logo.png)](https://ethereum.org/en/roadmap/)

## Glamsterdam: what's actually in it

Glamsterdam is slated for H1 2026, with a community-referenced target of June. Developers are careful to call that aspirational, but the EIP lineup is more settled than at the equivalent stage of previous upgrades.

Two EIPs are confirmed as headliners.

**EIP-7732: Enshrined Proposer-Builder Separation (ePBS)**

MEV-Boost is currently off-protocol middleware. Validators run it voluntarily, and the separation between block proposers and block builders exists by convention rather than by protocol rule. EIP-7732 moves PBS into the consensus layer itself.

The practical difference: today's relay-dependent system has multiple points where a relay operator can censor transactions or extract additional value. With ePBS enshrined, the separation becomes a protocol guarantee rather than a market convention. For developers building DeFi protocols or anything where transaction ordering matters, this is meaningful. The playing field for MEV becomes more predictable.

The [Ethereum Glamsterdam upgrade documentation](https://blog.quicknode.com/ethereum-glamsterdam-upgrade-whats-coming-in-h1-2026/) has a solid breakdown of the mechanics.

**EIP-7928: Block-Level Access Lists (BALs)**

This one is less visible to application developers but arguably more impactful for throughput. BALs require that a block pre-declares which accounts and contracts it will touch before execution begins. Nodes can use this information to parallelize transaction validation rather than running everything sequentially.

The gas limit is increasing from 60 million to 200 million per block. Without BALs, a higher gas limit would make block validation slower and push nodes toward higher hardware requirements. BALs are what make that increase practical, by enabling nodes to distribute execution work.

The projected outcome is roughly 10,000 TPS on L1, up from the current effective rate around 1,000 TPS. That is not a typo. If it ships as described, it fundamentally changes the economics of building on L1 versus L2.

**EIP-7904: Gas repricing**

Gas costs are being realigned to better reflect actual computational resources. The headline number is a 78% reduction for both simple ETH transfers and complex smart contract interactions. This is partly possible because the gas limit increase changes the unit economics, and partly because some operations have been mispriced relative to their actual node cost for years.

For developers, the main implication is that your existing gas estimates will be wrong after this ships. Plan to re-profile contracts against a post-7904 testnet before assuming your optimization work carries over.

Over 25 additional EIPs are under consideration. The [Glamsterdam EIP tracker](https://www.datawallet.com/crypto/ethereum-glamsterdam-upgrade-explained) is worth bookmarking if you want to follow the deliberations.

## The post-quantum initiative

Separately from Glamsterdam, the Ethereum Foundation launched [pq.ethereum.org](https://ethereum.org) this week as a central hub for its post-quantum cryptography roadmap. The site consolidates specs, EIPs, research papers, open-source repositories, and a detailed FAQ.

More than ten client teams are running weekly post-quantum interoperability devnets. This is coordinated, not experimental.

The context: current estimates for a cryptographically relevant quantum computer cluster around 2032. Ethereum's post-quantum components are targeted for the "L" or "M" fork, currently projected around 2029. That's a tight window for a decentralized protocol where coordination takes years.

The specific threats are well-understood. Ethereum's current cryptography relies on ECDSA for signatures and BLS12-381 for consensus. Both are vulnerable to Shor's algorithm on a sufficiently powerful quantum computer. An attacker with quantum capability could derive private keys from public keys, which would break account security at the protocol level.

The migration approach has two main components:

- **Hash-based signatures** for accounts. The EF is funding work on the [Poseidon hash function](https://ethereum.org/en/roadmap/) with a $1 million prize aimed at strengthening it against both classical and quantum attacks. Poseidon is faster than SHA-256 in ZK proof contexts, which matters for the overall roadmap.
- **Native account abstraction** as the migration path. EIP-7702 (which allows EOAs to temporarily behave like smart wallets) and the ERC-4337 ecosystem provide the infrastructure for wallets to switch signature schemes without requiring users to move funds to new addresses.

The multi-year timeline means this is not something application developers need to act on immediately. But if you are building wallet infrastructure or anything that makes assumptions about the signature scheme of an account, the direction of travel is clear: ECDSA is eventually going away.

## Developer activity overall

One piece of broader context worth knowing: developer activity across the ecosystem has contracted. Weekly active developers on Ethereum are down roughly 34% over three months, with Solana and Base showing larger drops. The [MEXC developer activity report for March 2026](https://www.mexc.com/news/879536) tracks this. The prevailing explanation is that AI repositories are absorbing engineering capacity that previously went to blockchain projects.

This has a practical consequence for open-source projects: maintainer bandwidth is thinner than it was in 2024. If you depend on a library that has slowed down, it might be worth checking when it last merged a PR.

## What to do now

For most application developers, Glamsterdam's immediate priority is the testnet phase. When EIP-7904 gas repricing lands on Sepolia, run your contracts against it and update your gas estimates. The 78% reduction is significant enough that hardcoded gas limits in client code will break.

For teams building wallets or key management infrastructure, the post-quantum roadmap is worth reading end-to-end. The 2029 target for protocol-level changes is closer than it sounds given the implementation and migration lead time involved.

The [Ethereum roadmap page](https://ethereum.org/en/roadmap/) is kept reasonably current. For client-level updates, the [AllCoreDevs call notes](https://github.com/ethereum/pm) are published after each meeting and are the most reliable source for what's actually being decided.

---

Sources:
- [Ethereum Foundation launches post-quantum security hub](https://www.coindesk.com/tech/2026/03/25/ethereum-foundation-prepares-for-quantum-threat-with-new-cryptography-roadmap)
- [The Protocol: Ethereum roadmap updates so far in 2026](https://www.coindesk.com/tech/2026/03/25/the-protocol-ethereum-faces-make-or-break-moment-as-scaling-quantum-and-ai-pressures-mount)
- [Ethereum Glamsterdam upgrade explained](https://blog.quicknode.com/ethereum-glamsterdam-upgrade-whats-coming-in-h1-2026/)
- [Glamsterdam EIPs breakdown](https://www.datawallet.com/crypto/ethereum-glamsterdam-upgrade-explained)
- [Top actively developed crypto projects, March 2026](https://www.mexc.com/news/879536)
- [Ethereum post-quantum cryptography roadmap](https://www.analyticsinsight.net/ethereum/ethereums-2026-roadmap-scaling-security-and-quantum-readiness-explained)
