---
slug: layer2-scaling-solutions
title: "Layer 2 scaling: rollups, plasma, and what actually shipped"
authors: [francis]
tags: [ethereum, layer2, blockchain]
date: 2024-06-18
image: https://l2beat.com/meta-images/publications/interoperability-page.png
---

The scaling debate in Ethereum has been going on for years. In 2024 the picture is clearer than it was in 2021 because we can look at what's actually running in production. This is a breakdown of the main approaches and where they stand.

[![L2Beat: Layer 2 scaling tracker](https://l2beat.com/meta-images/publications/interoperability-page.png)](https://l2beat.com/scaling/summary)

<!-- truncate -->

## The core problem

Ethereum's base layer processes roughly 15-30 transactions per second. At peak demand, this creates a fee auction where users bid gas to get their transactions included. For most applications, paying $5-50 in fees for a simple action is a non-starter.

Layer 2 solutions move computation off the main chain while using it for settlement and security. The tradeoff is complexity.

## Optimistic rollups

Optimistic rollups batch transactions off-chain and post compressed transaction data to Ethereum. The "optimistic" part: they assume all transactions are valid by default and rely on fraud proofs to catch invalid state transitions.

If someone tries to commit a fraudulent state, a challenger submits a fraud proof on-chain and the invalid state gets rolled back. The challenge period (typically 7 days) is what makes optimistic rollups slower for withdrawals back to L1.

Arbitrum and Optimism are the main production systems. Both have their own dashboards where you can inspect transactions and bridge activity:
- [Arbitrum dashboard](https://arbiscan.io/)
- [Optimism dashboard](https://optimistic.etherscan.io/)

Both run the EVM, which means most Ethereum contracts deploy to them without modification.

## ZK rollups

ZK rollups batch transactions and generate a cryptographic proof (a validity proof) that the batch is correct. The proof is posted to Ethereum and verified on-chain. No challenge period, because there's no assumption of correctness.

The tradeoff has historically been EVM compatibility. Generating ZK proofs for arbitrary EVM execution is computationally intensive and technically difficult. This is what "zkEVM" efforts like Polygon zkEVM, zkSync Era, and Scroll are trying to solve.

zkSync has a public explorer at [explorer.zksync.io](https://explorer.zksync.io/) where you can watch L2 blocks and proof submissions to L1 in real time.

## State channels

State channels are the oldest layer 2 concept. Two parties lock funds in an on-chain contract and then exchange signed messages off-chain. They only go on-chain to open or close the channel, or to resolve a dispute.

The Lightning Network on Bitcoin is the most successful state channel implementation. On Ethereum, state channels never got much traction for general use because they only work well for repeated interactions between the same parties. For anything with many participants or infrequent transactions, rollups are more practical.

## Plasma

Plasma was a big topic around 2018-2019. The idea is to create child chains that periodically commit to Ethereum. Users can exit back to L1 by submitting a proof.

In practice, Plasma has significant usability problems. The exit mechanism is complicated, data availability is hard to guarantee, and the UX for users is bad. Most teams that were building Plasma systems pivoted to rollups. Polygon PoS is sometimes described as a Plasma variant, though the comparison is rough.

## Choosing a layer 2

For most application developers, the decision comes down to:

1. Do you need full EVM compatibility? Optimistic rollups have a longer track record here.
2. How important are fast withdrawals to L1? ZK rollups win on this.
3. What's the user ecosystem like? Arbitrum and Optimism have the most existing users and liquidity.

The [L2Beat dashboard](https://l2beat.com/) tracks all the major Layer 2 systems, their TVL, security models, and upgrade risk. It's the best single resource for comparing options.

## Data availability

One thing the rollup debates often skip: where does the transaction data live? Rollups post data to Ethereum calldata, which is expensive. EIP-4844 (blob transactions) reduced this cost significantly. Some systems use external data availability layers (Celestia, EigenDA) to reduce costs further, which introduces additional trust assumptions.

This is an active area of development and the tradeoffs are still shaking out.
