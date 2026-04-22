---
slug: running-ethereum-node
title: Running a local Ethereum node
authors: [francis]
tags: [ethereum, tooling, blockchain]
date: 2025-02-28
image: https://ethereum.org/content/developers/docs/nodes-and-clients/eth1eth2client.png
---

Running your own Ethereum node is worth doing at least once even if you end up using a hosted RPC service in production. The visibility you get into how the network actually works is useful, and in some contexts having your own node is important for reliability or privacy.

[![Ethereum execution and consensus client architecture](https://ethereum.org/content/developers/docs/nodes-and-clients/eth1eth2client.png)](https://ethereum.org/en/developers/docs/nodes-and-clients/)

<!-- truncate -->

## What kind of node?

There are a few distinct roles:

**Full node**: stores the entire blockchain state and validates all transactions and blocks. Can serve RPC requests. Does not participate in consensus. This is what you want for development and general use.

**Archive node**: stores all historical states (not just current state). Required for queries like "what was the balance of address X at block 15,000,000." Much larger storage requirement (several TB for Ethereum mainnet).

**Validator node**: participates in proof-of-stake consensus by proposing and attesting to blocks. Requires 32 ETH staked. Different operational concerns than a full node.

For development work, you usually want a local development node (Hardhat or Anvil) rather than a mainnet node. For querying mainnet state, a hosted RPC or your own synced node.

## Client diversity

Post-merge, an Ethereum node is actually two clients: an execution client and a consensus client.

**Execution clients** handle EVM execution, the transaction pool, and the JSON-RPC interface:
- Geth (Go Ethereum): most widely used
- Nethermind (C#)
- Besu (Java)
- Reth (Rust): newer, growing in adoption

**Consensus clients** handle proof-of-stake consensus, block proposals, and attestations:
- Lighthouse (Rust)
- Prysm (Go)
- Teku (Java)
- Lodestar (TypeScript)

The Ethereum Foundation tracks client diversity at [clientdiversity.org](https://clientdiversity.org/). Geth dominates the execution layer, which is a genuine risk to the network. If you're running a node, using an alternative execution client contributes to resilience.

## Running Geth locally

Install Geth from [geth.ethereum.org](https://geth.ethereum.org/downloads):

```bash
# Sync mainnet (takes days)
geth --syncmode snap

# Or sync a testnet (much faster)
geth --sepolia --syncmode snap
```

Snap sync downloads recent state without replaying all historical blocks. It's the default and fastest way to get a synced node.

Geth exposes a JSON-RPC interface by default:

```bash
geth --http --http.api eth,net,web3
```

You can then point your local tools at `http://localhost:8545`.

## The Geth dashboard

Geth includes a monitoring dashboard accessible via `geth attach`:

```bash
geth attach http://localhost:8545
```

This opens a JavaScript console where you can query the node directly:

```javascript
eth.blockNumber
eth.getBalance("0x...")
eth.syncing
```

For a web dashboard, [Ethstats](https://ethstats.net/) tracks nodes that have opted in. The [Grafana dashboards maintained by Ethereum Foundation](https://github.com/fjl/geth-metrics) work with Geth's Prometheus metrics for more detailed monitoring.

## Anvil for local development

For development, Anvil (part of Foundry) is faster and more convenient than running Geth:

```bash
anvil
```

Anvil starts a local chain with 10 pre-funded accounts. You can configure block time, chain ID, and fork from mainnet state. For forking:

```bash
anvil --fork-url https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
```

This gives you a local chain that starts from mainnet's current state. Transactions are instant and you can manipulate any account's balance or nonce.

## When to use a hosted RPC

For production applications, most teams use hosted RPC providers: Alchemy, Infura, QuickNode, or similar. The tradeoffs compared to a self-hosted node:

- No hardware requirements or maintenance
- SLAs and support
- Additional APIs (NFT APIs, trace APIs, webhooks)
- Privacy: the provider sees all your queries
- Cost: free tiers are generous but scale-dependent

The [Ethereum node documentation](https://ethereum.org/en/developers/docs/nodes-and-clients/) covers the full picture. Running a node is more accessible than it was a few years ago. A modern consumer machine with a 2TB SSD can sync and run mainnet comfortably.
