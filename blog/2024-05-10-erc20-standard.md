---
slug: erc20-token-standard
title: How the ERC-20 standard changed token development
authors: [francis]
tags: [ethereum, blockchain]
date: 2024-05-10
image: https://openzeppelin-docs-v2.netlify.app/social.png
---

Before ERC-20, every token on Ethereum was its own island. Wallets had to write custom integration code for each one. Exchanges couldn't list a token without manual effort to support its specific interface. The ERC-20 proposal changed that, and it's worth understanding why it worked when so many standards don't.

<!-- truncate -->

[![OpenZeppelin Contracts documentation](https://openzeppelin-docs-v2.netlify.app/social.png)](https://docs.openzeppelin.com/contracts/5.x/erc20)

## What a standard actually does

ERC-20 is an interface specification. It doesn't say anything about how you implement your token internally. It says what functions a compliant token must expose and what those functions must do.

The required interface:

```solidity
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
```

That's it. Six functions, two events. Any contract that implements this can be treated as a token by any wallet, DEX, or other contract that knows about ERC-20.

## The allowance mechanism

The `approve`/`transferFrom` pattern is the part people find confusing at first. The use case it solves: you want a DEX contract to spend your tokens on your behalf.

1. You call `approve(dexAddress, amount)` on the token contract, granting the DEX permission to move up to `amount` of your tokens.
2. The DEX calls `transferFrom(yourAddress, recipient, amount)` when executing a trade.

Without this mechanism, a DEX would need you to send tokens to it first, which creates a bunch of custody problems.

The [OpenZeppelin ERC20 implementation](https://docs.openzeppelin.com/contracts/5.x/erc20) is the canonical reference for how to implement this correctly. Most teams don't write their own from scratch.

## Known issues with the standard

ERC-20 has some well-documented quirks:

**The `approve` race condition.** If you call `approve` to change an allowance from 100 to 50, a front-running miner can spend the 100 before your transaction lands, then spend the 50 after. The mitigation is to set the allowance to 0 first, then set the new value. OpenZeppelin's `increaseAllowance`/`decreaseAllowance` functions handle this pattern.

**No callback on transfer.** When a contract receives tokens via `transfer`, it has no way to know it happened. The contract can't react to an incoming transfer. ERC-777 tried to solve this with hooks but introduced its own issues. ERC-1363 (payable tokens) is a more recent attempt.

**The missing return value.** The standard requires `transfer` to return a bool, but early tokens (USDT, for example) didn't. This caused headaches for contracts that checked the return value. `SafeERC20` from OpenZeppelin wraps transfers to handle non-compliant tokens.

## Using the OpenZeppelin dashboard

If you're deploying through the [OpenZeppelin Defender dashboard](https://defender.openzeppelin.com/), you can monitor token transfers, set up alerts for large movements, and manage upgrades without touching the CLI. Worth setting up early even if you don't use all the features immediately.

## What came after

ERC-20 spawned a whole family of related standards. ERC-721 applied the same pattern to non-fungible tokens. ERC-1155 supports both fungible and non-fungible tokens in a single contract. ERC-4626 standardizes yield-bearing vaults.

The lesson from ERC-20 is that a minimal, well-specified interface beats a comprehensive one. The standard is simple enough that developers can implement it correctly, and simple enough that tooling can make strong assumptions about what a compliant token can do.
