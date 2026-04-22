---
slug: solidity-tips
title: Solidity tips I wish I knew earlier
authors: [francis]
tags: [solidity, ethereum, tooling]
date: 2024-11-20
image: https://ethereum.org/images/ef-logo.png
---

Some things in Solidity are counterintuitive, and you tend to learn them the hard way. This is a collection of things that would have saved me time earlier. Not foundational concepts, just practical gotchas and shortcuts.

[![Solidity language documentation](https://ethereum.org/images/ef-logo.png)](https://docs.soliditylang.org/en/latest/)

<!-- truncate -->

## Division truncates, always

Solidity has no floating point. Division always truncates toward zero. This is obvious once you know it, but it causes subtle bugs when you're not thinking about it.

```solidity
// If a = 10, b = 3:
uint256 result = a / b; // result = 3, not 3.33...
```

For calculations where precision matters, scale up before dividing. If you're computing a percentage, work in basis points (1 bps = 0.01%):

```solidity
// 50% of amount using basis points
uint256 fee = (amount * 5000) / 10000;
```

Divide last whenever possible.

## `uint` is `uint256`

`uint` and `uint256` are the same type. Same for `int` and `int256`. I still write `uint256` explicitly for clarity, but you'll see both in the wild.

## Custom errors are cheaper than string reverts

Before Solidity 0.8.4, you could only revert with a string:

```solidity
require(amount > 0, "Amount must be positive");
```

Strings are expensive in calldata. Custom errors cost much less:

```solidity
error AmountMustBePositive();

function deposit(uint256 amount) external {
    if (amount == 0) revert AmountMustBePositive();
}
```

Custom errors also support parameters, which makes them more informative than strings for debugging:

```solidity
error InsufficientBalance(address user, uint256 available, uint256 requested);
```

The [Solidity docs on custom errors](https://docs.soliditylang.org/en/latest/contracts.html#errors-and-the-revert-statement) have the full spec.

## Function visibility defaults

If you don't specify visibility on a function, Solidity will refuse to compile in recent versions. But understanding the difference matters:

- `external`: can only be called from outside the contract (or via `this.functionName()` internally, which is awkward). More efficient than `public` because it can read calldata directly.
- `public`: can be called externally and internally. Creates a getter automatically for state variables.
- `internal`: like `protected` in other languages. Callable from the contract and derived contracts.
- `private`: only from the contract itself.

For functions that should be part of the public interface, use `external` by default and only upgrade to `public` if you need internal calls.

## `immutable` versus `constant`

`constant` is for values known at compile time. `immutable` is for values set once in the constructor and never changed:

```solidity
uint256 public constant MAX_SUPPLY = 1_000_000e18;  // compile-time
address public immutable owner;                       // set in constructor

constructor() {
    owner = msg.sender;
}
```

Both avoid SLOAD costs (they're inlined). Use `constant` where you can, `immutable` where the value depends on deployment parameters.

## Number literals with underscores

Solidity allows underscores in number literals as visual separators:

```solidity
uint256 public constant MAX = 1_000_000;
uint256 public constant RATE = 1_500_000_000; // Easier to read than 1500000000
```

No effect on the value, just readability.

## `abi.encode` versus `abi.encodePacked`

`abi.encode` pads values to 32 bytes. `abi.encodePacked` concatenates without padding.

`abi.encodePacked` is smaller but has a hash collision risk when used with dynamic types. For example, `encodePacked(["a", "bc"])` and `encodePacked(["ab", "c"])` produce the same output. Don't use `abi.encodePacked` with multiple dynamic values that users control.

For Merkle leaf hashing, double-hash the value to prevent second preimage attacks:

```solidity
bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(addr))));
```

OpenZeppelin's `@openzeppelin/merkle-tree` library does this automatically.

## The Solidity docs are actually good

I put off reading the [Solidity language reference](https://docs.soliditylang.org/en/latest/) for too long. It's well-written and covers things you won't find in tutorials. Worth reading end-to-end at least once.
