---
slug: cross-chain-bridge-security
title: Cross-chain bridge security
authors: [francis]
tags: [blockchain, security, layer2]
date: 2025-03-14
image: https://l2beat.com/meta-images/publications/interoperability-page.png
---

Cross-chain bridges have been the single biggest source of losses in DeFi. The Ronin bridge lost $625 million. Wormhole lost $320 million. Nomad lost $190 million. These aren't edge cases. Bridges are genuinely hard to secure, and understanding why is useful if you're building anything that crosses chains.

<!-- truncate -->

[![L2Beat bridge risk assessment](https://l2beat.com/meta-images/publications/interoperability-page.png)](https://l2beat.com/bridges/summary)

## Why bridges exist

Blockchains don't natively communicate with each other. Bitcoin doesn't know about Ethereum's state. Arbitrum's state is separate from mainnet's even though it settles there. Bridges allow assets to move between chains by representing assets from one chain on another.

The basic pattern: lock assets on the source chain, mint a representative token on the destination chain. To go back, burn the representative token and unlock the original.

The security question: who decides that the lock happened and the mint is authorized?

## The trust spectrum

Bridges sit on a spectrum from trust-minimized to highly trusted:

**Native bridges** (like Optimism's official bridge) use the rollup's own security mechanism. To withdraw from Optimism to mainnet, you submit a proof verified by the Ethereum settlement contract. There's a 7-day challenge period for optimistic proofs. Trust assumption: the rollup protocol itself. The [Optimism bridge documentation](https://docs.optimism.io/builders/app-developers/bridging/standard-bridge) describes how this works.

**Light client bridges** verify block headers of the source chain on the destination chain. Expensive but closer to trustless. Near Rainbow Bridge works this way.

**Multisig bridges** use a set of validators who must reach consensus before minting on the destination chain. Ronin used a multisig with 9 validators, 5 of which were Axie Infinity team members. An attacker compromised 5 keys. This is the common failure mode.

**Oracle/relayer bridges** trust a set of relayers to pass messages between chains. Nomad had a bug in its merkle root verification that allowed any message to be forged. Once discovered, anyone could copy the exploit transaction and drain the bridge.

## Common vulnerability patterns

**Private key compromise**: validators' private keys are stolen or leaked. Best mitigation: hardware security modules (HSMs), geographic and organizational distribution of key holders, and minimizing how many entities need to hold keys.

**Smart contract bugs**: logic errors in the bridge contract itself. Wormhole's exploit was a signature verification bypass. Thorough auditing and formal verification reduce this risk but can't eliminate it.

**Governance attacks**: if the bridge is upgradeable and upgrade control is held by a small group, an attacker who gains control of that group can upgrade the contract to steal funds.

**Replay attacks**: a message signed for one chain can be replayed on another if chain IDs aren't correctly included in signatures.

## What better looks like

The safest bridges for large value transfer are currently the native rollup bridges, which inherit Ethereum's security. They're slower for withdrawals but the trust assumptions are the same as Ethereum itself.

For speed with reasonable security, ZK bridges are improving. A ZK validity proof can verify that events happened on the source chain without a challenge period. zkBridge research from Berkeley and commercial implementations from projects like Succinct Labs are pushing this forward.

The [L2Beat bridge risk assessment](https://l2beat.com/bridges/summary) scores bridges on their security model. It's a useful reference before routing large amounts through an unfamiliar bridge.

## For developers building on top of bridges

If your protocol assumes bridged assets will always be 1:1 with their source chain counterparts, a bridge exploit can leave you holding depegged tokens. Think through what happens if a bridge you rely on is compromised:

- Does your contract accept any ERC-20 claiming to be wETH?
- Do you have any assumptions about token supply being bounded?
- What happens if liquidity disappears from a pool you depend on?

These aren't hypotheticals. They've happened to protocols that didn't think through bridge failure modes.
