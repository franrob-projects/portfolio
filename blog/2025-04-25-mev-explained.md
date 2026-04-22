---
slug: mev-transaction-ordering
title: MEV and transaction ordering
authors: [francis]
tags: [ethereum, blockchain]
date: 2025-04-25
image: https://www.flashbots.net/badge.svg
---

MEV (maximal extractable value, formerly "miner extractable value") is one of those topics that seems like an obscure research area until you realize it affects almost every transaction on Ethereum. If you're building DeFi protocols or have wondered why your transactions sometimes get sandwiched, this is worth understanding.

[![Flashbots MEV transparency dashboard](https://www.flashbots.net/badge.svg)](https://transparency.flashbots.net)

<!-- truncate -->

## What MEV is

Ethereum validators (and previously miners) choose which transactions to include in a block and in what order. MEV is the additional revenue that can be extracted by manipulating this ordering.

The simple version: if your transaction will move a price, a searcher can insert their own transactions before and after yours to profit from the movement at your expense.

## The sandwich attack

The most visible form of MEV for regular users. You submit a transaction to swap token A for token B on a DEX. A searcher (bot) sees your pending transaction in the mempool and:

1. Buys token B before your transaction executes (front-runs, moving the price against you)
2. Your transaction executes at the worse price
3. The searcher sells token B after your transaction (back-runs, at the new higher price)

The searcher profits. You got a worse price than expected. Your DEX's slippage tolerance determines how much you can lose.

Setting a low slippage tolerance helps, but if the tolerance is too tight, legitimate transactions fail during volatile periods.

## Arbitrage MEV

Not all MEV is harmful to users. Arbitrage between DEXes is MEV that improves market efficiency. If ETH is cheaper on Uniswap than on Curve, a searcher's arbitrage transaction corrects the discrepancy. This is MEV but it benefits the market.

## Liquidation MEV

In lending protocols (Aave, Compound), undercollateralized positions can be liquidated by anyone who calls the liquidation function first. Searchers monitor positions and compete to be first when a position becomes liquidatable. The competition is good for the protocol (positions get liquidated promptly) but searchers extract the liquidation bonus.

## The MEV supply chain

Pre-merge, miners received MEV extraction tools directly. Post-merge, the structure is more complex:

- **Searchers**: bots that identify MEV opportunities and craft transactions
- **Builders**: aggregate transactions from searchers and the public mempool into blocks, optimizing for revenue
- **Validators**: choose which built block to propose, typically accepting the highest payment

MEV-Boost, developed by Flashbots, is the dominant system. Validators run MEV-Boost as middleware and accept blocks from external builders. Around 90% of Ethereum blocks are built with MEV-Boost.

The [Flashbots dashboard](https://transparency.flashbots.net/) tracks MEV-Boost adoption, block builder market share, and MEV activity in real time.

## Flashbots and private mempools

Flashbots created a private mempool (mev-share) where searchers submit transaction bundles directly to block builders. This keeps transactions out of the public mempool where they'd be visible to competing searchers. For users, [Flashbots Protect](https://protect.flashbots.net/) routes transactions through this private channel to reduce sandwich attack exposure.

Most major wallets and DEX aggregators have built in some form of MEV protection by default.

## For DeFi developers

If you're building a DEX or protocol that involves large price moves, think about MEV at the design level:

- Commit-reveal schemes prevent front-running for certain actions
- Batch auctions (like CoW Protocol uses) prevent sandwich attacks by settling all trades in a batch at a uniform clearing price
- TWAP oracles spread price updates over time, reducing the value of single-block manipulation

The [EigenPhi MEV dashboard](https://eigenphi.io/) is useful for analyzing MEV activity on specific protocols. Before launch, simulate what a searcher would do with your protocol's functions.

MEV isn't going away. The question for protocol designers is whether the MEV your protocol creates benefits users, harms them, or can be redirected back to the protocol itself.
