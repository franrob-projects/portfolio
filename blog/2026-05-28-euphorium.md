---
slug: euphorium
title: "Euphorium: reading the top of the cycle on-chain"
authors: [francis]
tags: [blockchain, defi]
date: 2026-05-28
---

There is a phase in every crypto cycle that I have started calling *euphorium* — the stretch near the top where the mood stops being optimism and becomes a kind of substance. People are not bullish; they are high. The tell is that disagreement disappears. Everyone you talk to is up, everyone has a thesis, and the theses are getting worse while the confidence is getting louder.

I am a technical writer, not a trader, so I do not have a position to defend here. What I do have is a habit of reading on-chain data the same way I read an unfamiliar contract: slowly, looking for the shapes that show up every time. Euphorium has a signature. This is what it looks like in the data, and why I think the data is more honest than the timeline.

<!-- truncate -->

## The emotional cycle is real, but it's a lagging indicator

You have seen the Wall Street Cheat Sheet of market emotions — optimism, belief, thrill, euphoria, then complacency and denial on the way down. It is a good cartoon. The problem with it is that by the time you can *feel* euphoria, you are reading your own dopamine, which is the single least reliable instrument in the room.

The point of going on-chain is to find the same emotions expressed in transactions, where they are timestamped and can't be retconned. Greed leaves fingerprints.

## Signal 1: old coins start moving

The clearest sign of a top forming is that coins which have not moved in years suddenly do. Long-term holders — the people who sat through the last drawdown — begin distributing into strength. They are selling to the new money.

Glassnode publishes this directly as [HODL Waves](https://studio.glassnode.com/charts/supply.HodlWaves) and **Coin Days Destroyed**. When the bands of old coins shrink and the young-coin bands swell, supply is rotating from people who have seen a cycle to people who have not. That rotation is what a top *is*, mechanically. The price is just the receipt.

## Signal 2: realized profit goes vertical

[SOPR](https://www.glassnode.com/metrics) (Spent Output Profit Ratio) tells you whether the coins moving on a given day are being spent at a profit or a loss. In euphorium, SOPR doesn't just stay above 1 — it spikes, because almost every coin that moves is in profit and holders are realizing it.

The related one is **MVRV** (market value to realized value), which compares price to the aggregate cost basis of the network. Historically, when MVRV stretches into its upper extremes, the network as a whole is sitting on enormous unrealized profit. Unrealized profit is potential energy. Euphorium is the phase where it starts converting to kinetic.

## Signal 3: the leverage tell

Spot buying near a top is one thing; leveraged buying is the accelerant. Two free dashboards are enough to watch it:

- **Funding rates** ([Coinglass](https://www.coinglass.com/FundingRate)). Perpetual futures use funding to tether their price to spot. Persistently high positive funding means longs are paying shorts just to keep their positions open — the crowd is so one-sided it is willing to bleed for the trade. That is a euphorium reading.
- **Open interest**. When open interest climbs faster than price, the move is being built on borrowed conviction. Those positions are fuel for a liquidation cascade, which is why tops so often end not with a whimper but with a wick.

When funding is hot *and* open interest is at highs *and* old coins are distributing, you do not need a feeling. The three agree.

## Signal 4: the quality of new things collapses

This one is qualitative but it shows up on-chain too. Late in euphorium, the *median quality of what gets funded* falls off a cliff. Memecoins with no pretense of utility out-raise infrastructure. The number of new tokens deployed per day spikes. Gas fees stay elevated because blockspace is being consumed by speculation, not use.

You can watch token deployment counts on most block explorers, and you can feel it socially: the ratio of "I'm building X" to "I'm up on Y" inverts. When the smartest people you follow stop shipping and start posting screenshots, the clock is late.

## How I actually use this

I want to be careful here, because this is the part where blog posts turn into bad financial advice. I am not telling you to sell, and on-chain metrics are descriptive, not predictive — markets have stayed irrational far longer than any single indicator stayed scary. Tops are a process, not a day, and plenty of these signals flash early and then flash again six weeks higher.

What the data is good for is *inoculation against your own mood*. The job is not to call the top. The job is to notice, in writing, before the dopamine arrives, what conditions would make you skeptical — and then to actually look at the dashboards instead of the timeline when those conditions show up. Old coins moving, SOPR spiking, funding hot, garbage getting funded: when I see three of the four, I write down what I'm seeing and I get conservative about believing my own story.

Euphorium feels like clarity. That is the trap. The on-chain data is the thing that doesn't get high with you — which is exactly why it's worth reading when you can't trust the room, or yourself.
