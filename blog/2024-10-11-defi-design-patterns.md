---
slug: defi-design-patterns
title: DeFi protocol design patterns
authors: [francis]
tags: [defi, solidity, security]
date: 2024-10-11
image: https://docs.chain.link/images/logo.png
---

DeFi protocols deal with a specific combination of constraints that you don't encounter in most software: code that's public and immutable, assets that move automatically based on logic, and adversaries who will find and exploit any mistake. Patterns that work well in these conditions have emerged from a few years of production experience and some expensive failures.

<!-- truncate -->

[![Chainlink Data Feeds](https://docs.chain.link/images/logo.png)](https://docs.chain.link/data-feeds)

## Checks-effects-interactions

This is the most fundamental pattern and the one most often violated by people new to Solidity.

The rule: in any function that modifies state and interacts with external contracts, do things in this order:

1. **Checks** - validate inputs and preconditions (`require` statements)
2. **Effects** - update your contract's state
3. **Interactions** - call external contracts

Violating this opens reentrancy vulnerabilities. If you call an external contract before updating state, that external contract can call back into your function and see the old (unchanged) state.

```solidity
// Vulnerable
function withdraw(uint256 amount) external {
    require(balances[msg.sender] >= amount);
    (bool success,) = msg.sender.call{value: amount}(""); // External call first
    require(success);
    balances[msg.sender] -= amount; // State update after
}

// Fixed
function withdraw(uint256 amount) external {
    require(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount; // State update first
    (bool success,) = msg.sender.call{value: amount}("");
    require(success);
}
```

## Pull over push payments

When your contract needs to distribute funds to multiple recipients, don't iterate and push. Let recipients pull their own funds.

Push: iterate over recipients and send. If one send fails (malicious contract, out of gas), the entire distribution fails.

Pull: record what each address is owed. Each recipient calls a `claim()` function to withdraw their own funds.

```solidity
mapping(address => uint256) public pendingWithdrawals;

function distribute(address[] calldata recipients, uint256[] calldata amounts) external onlyOwner {
    for (uint256 i = 0; i < recipients.length; i++) {
        pendingWithdrawals[recipients[i]] += amounts[i];
    }
}

function withdraw() external {
    uint256 amount = pendingWithdrawals[msg.sender];
    pendingWithdrawals[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}
```

## Emergency stops

For contracts that handle significant TVL, a pause mechanism is valuable. Uniswap V3 doesn't have one (by design, to be trustless), but many protocols do.

The tradeoff: a pause gives you a circuit breaker if something goes wrong, but it also means the team can freeze user funds. How that risk is managed matters.

Best practice: make pause/unpause governed by a multisig or time-locked governance contract, not a single EOA. The [Safe (formerly Gnosis Safe) dashboard](https://app.safe.global/) is the standard for multisig governance in DeFi.

## Immutable versus upgradeable

Most DeFi protocols choose between two extremes:

**Immutable contracts** (Uniswap, Compound's early versions) can never be changed. Users can verify exactly what code will run forever. The downside: bugs can't be patched.

**Upgradeable contracts** (via transparent or UUPS proxy patterns) allow the team to patch bugs and add features. The downside: the upgrade admin can change behavior arbitrarily, which is a trust assumption users have to accept.

Some protocols use a hybrid: immutable core contracts with upgradeable periphery.

## Oracle security

DeFi protocols that need price data use oracles. On-chain prices from DEX spot prices are manipulable in a single transaction (flash loans). Chainlink provides decentralized off-chain price feeds that are much harder to manipulate.

If your protocol uses spot prices from a DEX as an oracle, you are one large flash loan away from an exploit. The [Chainlink Data Feeds documentation](https://docs.chain.link/data-feeds) covers how to integrate their feeds correctly, including how to check that a feed is fresh before using it.

## Testing against mainnet state

For protocols that interact with existing DeFi infrastructure (Uniswap, Aave, Curve), testing against a mainnet fork is important. Hardhat and Foundry both support forking mainnet state, which lets you test realistic scenarios with real liquidity and real token balances.

```javascript
// hardhat.config.js
networks: {
  hardhat: {
    forking: {
      url: process.env.MAINNET_RPC_URL,
      blockNumber: 20000000, // Pin to a specific block for reproducibility
    }
  }
}
```

The patterns here aren't exotic. Most DeFi exploits come from violating basic principles rather than novel attack vectors. Get the fundamentals right and review them with that in mind before shipping.
