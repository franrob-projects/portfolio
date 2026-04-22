---
slug: secure-contracts-openzeppelin
title: Writing secure smart contracts with OpenZeppelin
authors: [francis]
tags: [solidity, security, ethereum]
date: 2024-07-05
image: https://openzeppelin-docs-v2.netlify.app/social.png
---

Smart contract security is one of those topics that's easy to read about and surprisingly hard to internalize until something breaks. OpenZeppelin's contracts library is widely used precisely because it encodes a lot of hard-won security lessons. Here's what you should actually understand about it rather than just copy-pasting imports.

[![OpenZeppelin Contracts](https://openzeppelin-docs-v2.netlify.app/social.png)](https://docs.openzeppelin.com/contracts/5.x/)

<!-- truncate -->

## What OpenZeppelin is and isn't

OpenZeppelin Contracts is an audited, community-maintained library of Solidity implementations. Using it reduces your attack surface because the base implementations have been reviewed far more thoroughly than most team-written code.

What it isn't: a guarantee that your contract is secure. You can import OpenZeppelin's ERC-20 and still write vulnerable code in your application logic. The library covers the building blocks, not the business logic.

The full documentation and source code is at [docs.openzeppelin.com](https://docs.openzeppelin.com/contracts/5.x/).

## Ownable and access control

The simplest access pattern is `Ownable`, which designates a single address as the contract owner:

```solidity
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyProtocol is Ownable {
    constructor() Ownable(msg.sender) {}

    function adminFunction() external onlyOwner {
        // Only the owner can call this
    }
}
```

For more complex systems, `AccessControl` is more appropriate. It lets you define multiple roles with different permissions:

```solidity
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyProtocol is AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
}
```

[![OpenZeppelin AccessControl role diagram](https://docs.openzeppelin.com/contracts/5.x/access-control-multiple.svg)](https://docs.openzeppelin.com/contracts/5.x/access-control)

The [AccessControl docs](https://docs.openzeppelin.com/contracts/5.x/access-control) cover the full API. One thing to understand: `DEFAULT_ADMIN_ROLE` is the admin for all roles by default, and whoever holds it can grant any role. Plan your role hierarchy carefully.

## ReentrancyGuard

Reentrancy is one of the most notorious Ethereum vulnerabilities. The DAO hack in 2016 was a reentrancy attack. The pattern: a contract calls an external contract, which calls back into the original contract before the first call finishes.

```solidity
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Vault is ReentrancyGuard {
    function withdraw(uint256 amount) external nonReentrant {
        // Safe to interact with external contracts here
    }
}
```

The `nonReentrant` modifier sets a flag at the start and clears it at the end. Any reentrant call will revert because the flag is still set. Simple and effective.

The alternative is to follow the checks-effects-interactions pattern: do all your state updates before making any external calls. Both approaches are valid. I prefer using `nonReentrant` on withdrawal functions as defense in depth even when the logic appears safe.

## Pausable

For contracts that handle significant value, the ability to pause is a useful emergency mechanism:

```solidity
import "@openzeppelin/contracts/utils/Pausable.sol";

contract MyProtocol is Pausable, Ownable {
    constructor() Ownable(msg.sender) {}

    function pause() external onlyOwner { _pause(); }
    function unpause() external onlyOwner { _unpause(); }

    function deposit(uint256 amount) external whenNotPaused {
        // Can't be called while paused
    }
}
```

Pausable functionality should be governed carefully in production. An owner who can pause is a centralization risk. Many protocols use a multisig or timelocked governance for pause control.

## SafeERC20

As mentioned in my ERC-20 post, some tokens don't return a bool from `transfer`. `SafeERC20` handles the wrapping:

```solidity
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract MyContract {
    using SafeERC20 for IERC20;

    function moveTokens(IERC20 token, address to, uint256 amount) internal {
        token.safeTransfer(to, amount); // Won't silently fail
    }
}
```

If you're interacting with arbitrary ERC-20 tokens, always use `SafeERC20`.

## Upgradeable contracts

OpenZeppelin also maintains an upgradeable contracts variant where state is stored in a proxy and logic can be swapped. The [Upgrades plugins](https://docs.openzeppelin.com/upgrades-plugins/1.x/) for Hardhat and Foundry automate the safety checks.

Upgradeable contracts come with their own set of pitfalls around storage layout and initialization. Read the [upgrade safety docs](https://docs.openzeppelin.com/upgrades-plugins/1.x/faq) before using them in production. The short version: never use constructor logic, always use initializers, and be very careful about adding storage variables in upgrades.

## Defender for monitoring

If you're using OpenZeppelin Defender, the [Defender monitor dashboard](https://defender.openzeppelin.com/#/sentinel) lets you set up alerts for specific contract events. Useful for catching unusual patterns before they become incidents.

The security properties of a contract matter just as much as its functionality. Reading through the OpenZeppelin source code is a worthwhile exercise even when you're not directly using a particular contract. The patterns it encodes are worth understanding.
