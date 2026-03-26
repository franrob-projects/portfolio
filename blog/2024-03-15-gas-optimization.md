---
slug: gas-optimization-ethereum
title: Gas optimization in Ethereum smart contracts
authors: [francis]
tags: [ethereum, solidity, tooling]
date: 2024-03-15
image: https://ethereum.org/images/ef-logo.png
---

Gas fees have been a recurring headache for Ethereum developers since the network's early days. When you're shipping a production contract, every opcode matters. I've spent a fair bit of time profiling contracts and this post covers the patterns that actually move the needle.

<!-- truncate -->

[![evm.codes opcode reference](https://ethereum.org/images/ef-logo.png)](https://www.evm.codes/)

## Why gas optimization is worth your time

If your contract is called frequently or handles large datasets, small inefficiencies compound fast. A function that costs 50,000 gas instead of 30,000 gas doesn't sound dramatic until you multiply it by thousands of daily calls. For end users, that difference is real money.

The [Ethereum gas documentation](https://docs.alchemy.com/docs/how-to-estimate-gas) is a good baseline, but it won't tell you where your specific contract is bleeding gas. For that you need profiling.

## Storage is expensive, memory is not

The single biggest win in most contracts is reducing `SSTORE` operations. Writing to storage costs 20,000 gas for a new slot. Reading from cold storage (`SLOAD`) costs 2,100 gas since EIP-2929.

Pack related variables into the same storage slot where possible:

```solidity
// Wasteful: three separate 32-byte slots
uint256 public count;
address public owner;
bool public paused;

// Better: owner + paused fit in one slot
address public owner;   // 20 bytes
bool public paused;     // 1 byte
uint256 public count;   // 32 bytes (separate slot, can't help it)
```

The Solidity compiler doesn't reorder your variables for you. Order matters.

## Cache storage reads in memory

If you're reading the same storage variable more than once in a function, cache it:

```solidity
// Reads `balances[user]` from storage twice
function transfer(address to, uint256 amount) external {
    require(balances[msg.sender] >= amount, "insufficient");
    balances[msg.sender] -= amount;
    balances[to] += amount;
}

// Read once, subtract, write once
function transfer(address to, uint256 amount) external {
    uint256 senderBalance = balances[msg.sender]; // SLOAD once
    require(senderBalance >= amount, "insufficient");
    balances[msg.sender] = senderBalance - amount;
    balances[to] += amount;
}
```

This is a contrived example, but the principle scales. Loops that reference storage inside the loop body are common culprits.

## Use `calldata` instead of `memory` for function parameters

When a function parameter is read-only and comes from an external call, `calldata` is cheaper than `memory` because it avoids a copy:

```solidity
// More expensive
function processItems(uint256[] memory items) external { ... }

// Cheaper for external calls
function processItems(uint256[] calldata items) external { ... }
```

## Short-circuit your require statements

Put the cheapest condition first in compound `require` statements. If the first check fails, Solidity won't evaluate the rest.

## Profiling with Hardhat Gas Reporter

Install [hardhat-gas-reporter](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-gas-reporter) and run your test suite. You'll get a table showing average gas per function call. Use it as a baseline before and after changes rather than guessing.

```bash
REPORT_GAS=true npx hardhat test
```

The output isn't perfect for every use case, but it gives you somewhere to start.

## Where to look next

The [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf) has the full opcode cost table if you want to go deep. For a more accessible breakdown, the [evm.codes](https://www.evm.codes/) reference is excellent and searchable. If you're optimizing assembly-level, understanding exactly what each opcode costs is non-negotiable.

Gas optimization is one of those areas where there's always another 5% to find. Pick the high-impact patterns, measure before and after, and don't spend a week optimizing a function that's called twice a year.
