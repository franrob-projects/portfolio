---
slug: polygon-zkevm-developers
title: "Polygon zkEVM: what developers need to know"
authors: [francis]
tags: [layer2, ethereum, tooling]
date: 2025-07-03
image: https://docs.polygon.technology/img/zkEVM/zkevm.svg
---

Polygon zkEVM has been in production on mainnet since March 2023. It's a ZK rollup that aims for full EVM equivalence, meaning existing Solidity contracts and Ethereum tooling should work without modification. Here's a practical assessment of where it stands and what you actually need to know before deploying.

<!-- truncate -->

[![Polygon zkEVM architecture diagram](https://docs.polygon.technology/img/zkEVM/zkevm.svg)](https://docs.polygon.technology/zkEVM/)

## What "EVM equivalence" means in practice

There are several degrees of EVM compatibility in the ZK rollup space:

- **EVM compatible**: supports Solidity but may have differences in opcodes or behavior
- **EVM equivalent**: matches Ethereum's EVM behavior as closely as possible
- **Type 2 zkEVM**: Vitalik's classification for rollups that match EVM behavior but may differ at the Ethereum node level

Polygon zkEVM targets Type 2 equivalence. In practice this means most contracts deploy without changes, but there are edge cases. The [Polygon zkEVM documentation](https://docs.polygon.technology/zkEVM/) maintains a compatibility reference.

Known differences: the SELFDESTRUCT opcode behaves differently (it doesn't actually delete the contract in the same way). Some precompile behaviors differ. For contracts that don't touch these edges, deployment is straightforward.

## Setting up your development environment

The network details for Polygon zkEVM mainnet:

- Chain ID: 1101
- RPC URL: `https://zkevm-rpc.com`
- Block explorer: [zkevm.polygonscan.com](https://zkevm.polygonscan.com/)

For testnet (Cardona):
- Chain ID: 2442
- RPC URL: `https://rpc.cardona.zkevm-rpc.com`

Add these to your Hardhat config:

```javascript
networks: {
  polygonZkEVM: {
    url: "https://zkevm-rpc.com",
    accounts: [process.env.PRIVATE_KEY],
    chainId: 1101,
  },
  polygonZkEVMTestnet: {
    url: "https://rpc.cardona.zkevm-rpc.com",
    accounts: [process.env.PRIVATE_KEY],
    chainId: 2442,
  },
}
```

## Bridging to Polygon zkEVM

Assets move between Ethereum mainnet and Polygon zkEVM via the official bridge. The [Polygon zkEVM bridge interface](https://bridge.zkevm-rpc.com/) handles the UI. Withdrawals are faster than optimistic rollups because ZK proofs don't require a challenge period. In practice, batch proof generation means withdrawals take a few hours, not 7 days.

The bridge contract is on mainnet at a verified address. Always use the official bridge rather than third-party bridges for significant amounts.

## Gas on Polygon zkEVM

Gas is priced in ETH (the same token as Ethereum mainnet). Fee levels are significantly lower than mainnet, though they vary based on L1 data publication costs. The [zkEVM gas station](https://gasstation.polygon.technology/zkevm) gives current fee estimates.

Polygon zkEVM batches many L2 transactions into a single L1 transaction. The L2 fee you pay partially reflects the amortized cost of that L1 batch. When L1 gas prices spike, L2 fees increase.

## Contract verification

Use the [Polygon zkEVM block explorer](https://zkevm.polygonscan.com/) for contract verification, or configure Hardhat's verify plugin:

```javascript
etherscan: {
  apiKey: {
    polygonZkEVM: process.env.POLYGONSCAN_API_KEY,
  },
  customChains: [
    {
      network: "polygonZkEVM",
      chainId: 1101,
      urls: {
        apiURL: "https://api-zkevm.polygonscan.com/api",
        browserURL: "https://zkevm.polygonscan.com",
      },
    },
  ],
}
```

## How proof generation works

Polygon zkEVM uses a prover to generate ZK validity proofs for transaction batches. The prover is computationally intensive and runs on Polygon's infrastructure (not decentralized yet). Proofs are submitted to an on-chain verifier contract on Ethereum mainnet.

The proving system is based on PLONK and the Hermez proving scheme. The [zkEVM technical specification](https://docs.polygon.technology/zkEVM/spec/zkasm/) goes deep on the internals if you need to understand how EVM opcodes map to ZK circuits.

## Comparing to Arbitrum and Optimism

For application developers, the main differences:

Polygon zkEVM: faster withdrawals, ZK-based security, newer ecosystem, smaller TVL
Arbitrum/Optimism: larger ecosystem, more liquidity, longer track record, 7-day optimistic withdrawal period

The choice usually comes down to which ecosystem your users are in. If you're starting fresh, both are reasonable choices. Running on multiple chains with a unified frontend is common.
