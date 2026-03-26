---
slug: chainlink-oracles
title: How Chainlink oracles work
authors: [francis]
tags: [defi, blockchain, ethereum]
date: 2024-12-08
image: https://docs.chain.link/images/logo.png
---

Oracles are one of the more misunderstood pieces of blockchain infrastructure. The blockchain itself has no access to off-chain data. It can't fetch an API, check a stock price, or know what the weather is. Oracles bridge that gap. Chainlink is the dominant oracle network, and understanding how it works matters if you're building anything that relies on external data.

<!-- truncate -->

[![Chainlink decentralized oracle network](https://docs.chain.link/images/logo.png)](https://docs.chain.link/data-feeds/price-feeds/addresses)

## The oracle problem

A blockchain's strength is that every node independently verifies every computation. If a contract's logic depends on off-chain data (an asset price, for example), that data has to come from somewhere. Whoever provides the data can manipulate the outcome.

A centralized oracle just moves the trust problem. If one entity provides the price feed, they can lie. The solution is decentralization: aggregate data from multiple independent sources and use a consensus mechanism to produce a reliable value.

## How Chainlink works

Chainlink runs a decentralized network of oracle nodes. For a price feed:

1. Multiple independent node operators fetch data from several premium data providers
2. Nodes submit responses on-chain
3. A deviation threshold or heartbeat triggers an aggregation update
4. The on-chain aggregator contract computes a median value and makes it available

The decentralization is meaningful. Corrupting a Chainlink feed would require compromising many independent node operators simultaneously. Not impossible, but expensive.

Node operators are required to hold LINK tokens as a stake. Bad behavior results in lost stake.

## Reading a price feed

The API is simple:

```solidity
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumer {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        // ETH/USD feed on mainnet
        priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
    }

    function getLatestPrice() public view returns (int) {
        (
            uint80 roundId,
            int answer,
            uint startedAt,
            uint updatedAt,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();

        require(updatedAt > 0, "Round not complete");
        require(block.timestamp - updatedAt < 1 hours, "Stale price");

        return answer;
    }
}
```

Two things worth noting: always check that `updatedAt` is recent (stale price check), and check that `answeredInRound >= roundId` to catch edge cases where a round didn't complete properly.

## Decimals

Chainlink feeds use different decimal places depending on the feed. Most price feeds use 8 decimals. Check the `decimals()` function on the aggregator, or look up the feed on the [Chainlink data feeds documentation](https://docs.chain.link/data-feeds/price-feeds/addresses).

## The Chainlink feed registry

For contracts that work with multiple assets, the [Feed Registry](https://docs.chain.link/data-feeds/feed-registry) lets you query any feed by base and quote currency rather than hardcoding individual feed addresses:

```solidity
import "@chainlink/contracts/src/v0.8/interfaces/FeedRegistryInterface.sol";
import "@chainlink/contracts/src/v0.8/Denominations.sol";

int256 price = registry.getPrice(Denominations.BTC, Denominations.USD);
```

Available on Ethereum mainnet but not on all testnets.

## Automation (formerly Keepers)

Chainlink also runs an automation network for triggering contract functions on a schedule or based on conditions. Instead of a centralized server calling your contract, Chainlink's network of nodes monitors your contract and calls it when conditions are met.

The [Chainlink Automation dashboard](https://automation.chain.link/) is where you register upkeeps and monitor their execution. Useful for things like liquidation bots, token rebasing, or any function that needs to run reliably without a centralized trigger.

## VRF

[![Chainlink VRF](https://docs.chain.link/_astro/vrf-logo.DiFmClfi.svg)](https://docs.chain.link/vrf)

For verifiable randomness, Chainlink VRF provides random values that are cryptographically provable on-chain. The contract can verify that the random value wasn't manipulated by the oracle. The [VRF documentation](https://docs.chain.link/vrf) covers the integration, which is slightly more involved than price feeds because it uses a request-response pattern.

Most DeFi exploits that involved oracle manipulation used on-chain price manipulation (DEX spot prices) rather than compromised Chainlink feeds. That's not a coincidence.
