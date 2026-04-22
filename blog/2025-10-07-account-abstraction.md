---
slug: account-abstraction-eip4337
title: Understanding account abstraction (EIP-4337)
authors: [francis]
tags: [ethereum, blockchain]
date: 2025-10-07
image: https://docs.erc4337.io/assets/images/ERC-4337-team-logo-white.png
---

Account abstraction has been discussed in Ethereum for years. EIP-4337 implemented it without requiring a protocol change, which is why it shipped when others didn't. If you're building wallet infrastructure or any user-facing application that involves transactions, understanding AA is becoming essential.

[![ERC-4337 account abstraction standard](https://docs.erc4337.io/assets/images/ERC-4337-team-logo-white.png)](https://docs.erc4337.io/)

<!-- truncate -->

## The problem with EOAs

Ethereum has two account types: externally owned accounts (EOAs) and contract accounts. EOAs are controlled by a private key. Contract accounts run code.

The limitations of EOAs have frustrated users and developers:

- One key controls everything. Lose the key, lose the account.
- Transactions must be signed by the private key. No multi-sig natively.
- Gas must be paid in ETH. Users holding only ERC-20 tokens can't transact.
- No batching. Multiple operations require multiple transactions.
- No automation. Scheduled or conditional transactions aren't possible.

## EIP-4337's approach

Rather than modifying the Ethereum protocol, EIP-4337 introduces a new transaction type called a `UserOperation`. Users submit UserOperations to a mempool of bundlers. Bundlers aggregate them into a regular transaction that calls an EntryPoint contract.

The EntryPoint contract:
1. Validates each UserOperation against its wallet contract
2. Calls the wallet contract to execute the operation
3. Handles gas payment, possibly from a Paymaster

The key insight: validation and execution are delegated to a smart contract wallet. That contract defines its own rules for what a valid operation looks like. This enables custom signature schemes, multi-sig, session keys, and more.

## Key components

**Smart contract wallet**: your account is a contract. It can have any validation logic. Common examples: Safe (Gnosis Safe), Biconomy smart wallets, ZeroDev kernel wallets.

**Bundler**: aggregates UserOperations and submits them to the EntryPoint. Acts like a miner/validator for the AA mempool. Must be MEV-aware. [Stackup](https://www.stackup.sh/) and [Pimlico](https://www.pimlico.io/dashboard) provide bundler infrastructure.

**Paymaster**: a contract that sponsors gas for users. Enables gasless transactions (the dapp pays) or payment in ERC-20 tokens. The Paymaster deposits ETH into the EntryPoint to cover gas costs. The [Pimlico dashboard](https://dashboard.pimlico.io/) lets you manage Paymaster balances and see sponsored transaction activity.

**EntryPoint**: the singleton contract that all AA transactions go through. Audited by OpenZeppelin and others. Currently at version 0.7. The [EntryPoint contract source](https://github.com/eth-infinitism/account-abstraction) is the reference implementation.

## Building with EIP-4337

To create a smart wallet and send UserOperations, most teams use an SDK rather than implementing the low-level protocol directly.

Using the Biconomy SDK:

```typescript
import { createSmartAccountClient } from "@biconomy/account";
import { createWalletClient, http } from "viem";

const smartAccount = await createSmartAccountClient({
  signer: walletClient,
  bundlerUrl: "https://bundler.biconomy.io/api/v2/1/YOUR_KEY",
  paymasterUrl: "https://paymaster.biconomy.io/api/v1/1/YOUR_KEY",
});

// Send a transaction (gas paid by paymaster)
const tx = await smartAccount.sendTransaction({
  to: recipientAddress,
  value: parseEther("0.1"),
});
```

The [Biconomy documentation](https://docs.biconomy.io/) covers the full integration, including session keys (delegated signing permissions) and batched transactions.

## Session keys

One of the most useful AA primitives for gaming and DeFi. Instead of signing every transaction with your main key, you delegate limited permissions to a "session key" for a period of time.

For example: allow this session key to call `approve` on this specific token contract, up to 100 USDC, for the next 24 hours. The session key can sign transactions within those permissions without bothering the user. The main key can revoke the session key at any time.

This is how most web3 games avoid the "approve every action" UX problem.

## Where AA stands now

EIP-4337 is live on mainnet and all major L2s. The infrastructure is maturing. Bundler availability and Paymaster services are increasingly reliable. The main limitation is that AA wallets are newer and have smaller recovery ecosystems than traditional hardware wallets.

Native account abstraction (where the protocol itself natively supports smart wallets without the workaround) is planned for future Ethereum upgrades, including EIP-7702 which allows EOAs to temporarily behave like smart wallets.

The [ERC-4337 resources page](https://www.erc4337.io/) maintains a list of compatible wallets, bundlers, and paymasters.
