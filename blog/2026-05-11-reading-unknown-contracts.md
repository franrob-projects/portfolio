---
slug: reading-unknown-smart-contracts
title: How to read a smart contract you didn't write
authors: [francis]
tags: [ethereum, solidity, security, tooling]
date: 2026-05-11
---

Most of the Solidity I read in a given week is code I did not write. Audit reports, protocol upgrades, an integration that someone's frontend is about to call — the work is reading, not writing. And reading Solidity is its own skill. The language is small, but the conventions around it are dense, and "what does this contract actually do" is almost never answerable from the file you opened first.

This is the routine I use. It is boring on purpose. The point of a routine is that you do not have to be clever on the day someone hands you a 2,000-line contract.

<!-- truncate -->

## Step 1: find out if it's even the code that's deployed

Before you read a single line, confirm that the file in the repo matches what is running on-chain. This sounds paranoid; it has saved me twice.

- Open the contract on [Etherscan](https://etherscan.io/) (or the relevant explorer) and check the "Contract" tab. Verified contracts show source.
- Compare the verified source against the repo at the tag or commit the team claims is deployed. A diff of zero is the only acceptable answer.
- If the contract is a proxy, find the implementation address from the proxy's storage slot and verify *that*. The [EIP-1967](https://eips.ethereum.org/EIPS/eip-1967) standard slots are what most upgradeable contracts use.

If the on-chain bytecode does not match the repo, stop reading the repo. The repo is fiction.

## Step 2: map the surface area before you read the logic

Open the contract and answer four questions before you read any function body:

1. What does it inherit from? OpenZeppelin's [ERC-20](https://docs.openzeppelin.com/contracts/erc20), [ERC-721](https://docs.openzeppelin.com/contracts/erc721), [AccessControl](https://docs.openzeppelin.com/contracts/access-control), and [Ownable](https://docs.openzeppelin.com/contracts/api/access#Ownable) are 80% of what you will see. If it inherits from these, you already know what most of the contract does.
2. What are the state variables? Read them top-to-bottom and write one sentence each. State is the contract; functions are just transitions.
3. What are the external and public functions? List them. This is your real API surface.
4. What are the events? Events tell you what the contract considers worth announcing, which is a useful signal about what it considers important.

Do not read function bodies yet. You are building the table of contents.

## Step 3: read the privileged functions first

In any non-trivial contract there will be a small number of functions that an admin, owner, or governance role can call. Read those first. These are the functions that can change the rules.

- `onlyOwner`, `onlyRole`, `onlyGovernor` — anything gated by a modifier.
- Upgrade functions on a proxy.
- Functions that change fees, mint tokens, pause the contract, or transfer admin.

If a contract has a `mint` function that the owner can call with no cap and no timelock, the rest of the contract does not really matter. The trust assumption is "the owner doesn't dump." Knowing this up front is more useful than reading the AMM math.

## Step 4: trace one user flow end-to-end

Pick the single most important thing a regular user does (deposit, swap, mint a token) and follow it through every contract it touches. Use [Tenderly](https://tenderly.co/) or [Foundry's `cast run`](https://book.getfoundry.sh/cast/reference/cast-run) on a real historical transaction to see the actual trace.

A traced transaction is worth ten read-throughs. You see the call graph, the storage writes, and the events in the order they actually happen.

## Step 5: look for the known shapes

A lot of vulnerability classes have a visual signature you can learn to spot. The [SWC registry](https://swcregistry.io/) is the catalog; the things to scan for on a first pass:

- External call followed by a state change → possible reentrancy. Check for a `nonReentrant` modifier or a checks-effects-interactions order.
- `tx.origin` anywhere → almost always a bug.
- Unchecked low-level `call` return values → silent failure.
- Integer math without overflow checks in pre-0.8 contracts, or `unchecked { }` blocks in 0.8+ → look at the operands.
- Price feeds that read a single DEX spot price → manipulable. Real protocols use a TWAP or [Chainlink](https://docs.chain.link/data-feeds).

You are not auditing. You are doing a first pass to know which parts deserve a second pass.

## Step 6: read the tests, then read the issues

The test suite tells you what the team thought was worth testing — which is also a map of what they thought was risky. Skim the test names; do not read the bodies yet.

Then check the project's GitHub issues, both open and closed, for words like "exploit," "vulnerability," "fix," "patch," or any CVE numbers. Past fixes tell you where the contract has been wrong before, and contracts tend to be wrong in the same places twice.

For audited protocols, the audit reports are public. [Code4rena](https://code4rena.com/reports), [Spearbit](https://spearbit.com/), [Trail of Bits](https://github.com/trailofbits/publications), and [OpenZeppelin](https://blog.openzeppelin.com/security-audits/) all publish theirs. Read the findings before you read the code.

## What this is not

This routine will not make you an auditor. Auditing is a deeper skill and the people who do it for a living have my respect. What this routine *will* do is let you answer "is this contract doing what it claims" well enough to decide whether to integrate with it, whether to deposit into it, or whether to escalate to someone who audits for a living.

That answer is most of what you need most of the time.
