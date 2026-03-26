---
slug: testing-defi-foundry
title: Testing DeFi protocols with Foundry
authors: [francis]
tags: [defi, tooling, solidity]
date: 2025-08-22
image: https://ethereum.org/images/ef-logo.png
---

Foundry has become a serious alternative to Hardhat for smart contract development, and for testing DeFi protocols specifically, it has some compelling advantages. Tests are written in Solidity, the fork feature is fast, and fuzzing is built in without additional setup. Here's a practical overview of how to use it effectively.

<!-- truncate -->

[![Foundry — fast Ethereum development toolkit](https://ethereum.org/images/ef-logo.png)](https://getfoundry.sh/)

## Why Foundry for DeFi testing

The main appeal is writing tests in Solidity rather than JavaScript. For testing complex DeFi interactions, you don't have to bridge the mental model between the contract code and the test code. You use the same types, the same patterns.

The other big advantage is speed. Foundry's test runner (Forge) is significantly faster than Hardhat for large test suites. When you're running hundreds of tests with mainnet forks, this matters.

The [Foundry book](https://book.getfoundry.sh/) is the primary documentation and is genuinely comprehensive.

## Project setup

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
forge init my-project
```

Project structure:

```
src/          Contract source files
test/         Test files (*.t.sol convention)
script/       Deployment and interaction scripts
lib/          Dependencies installed via forge install
```

## Basic test structure

```solidity
// test/MyProtocol.t.sol
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {MyProtocol} from "../src/MyProtocol.sol";

contract MyProtocolTest is Test {
    MyProtocol protocol;
    address user = makeAddr("user");

    function setUp() public {
        protocol = new MyProtocol();
        vm.deal(user, 10 ether); // give the test user some ETH
    }

    function test_depositAndWithdraw() public {
        vm.prank(user);
        protocol.deposit{value: 1 ether}();
        assertEq(protocol.balanceOf(user), 1 ether);

        vm.prank(user);
        protocol.withdraw(1 ether);
        assertEq(protocol.balanceOf(user), 0);
    }
}
```

`vm.prank` makes the next call come from a specified address. `vm.deal` sets an address's ETH balance. `makeAddr` creates a deterministic test address from a label.

## Forking mainnet

Foundry's fork support lets you test against real mainnet state:

```bash
forge test --fork-url $MAINNET_RPC_URL
```

Or pin to a specific block for reproducibility:

```bash
forge test --fork-url $MAINNET_RPC_URL --fork-block-number 20000000
```

In your test, you can also fork at a specific point and then manipulate state:

```solidity
function test_liquidation() public {
    address borrower = 0xabc...; // a real mainnet address
    vm.deal(borrower, 0);        // drain ETH to force undercollateralization

    // Check the liquidation works
    protocol.liquidate(borrower);
}
```

## Fuzzing

Foundry runs property-based fuzzing automatically on functions prefixed with `testFuzz_`:

```solidity
function testFuzz_depositAmount(uint256 amount) public {
    vm.assume(amount > 0 && amount <= 100 ether);
    vm.deal(user, amount);

    vm.prank(user);
    protocol.deposit{value: amount}();

    assertEq(protocol.balanceOf(user), amount);
}
```

Foundry generates random inputs and tries to find a failing case. The default run count is 256; increase it with `--fuzz-runs` for more thorough testing.

## Invariant testing

Invariant tests define properties that must hold true across any sequence of function calls. More powerful than fuzzing individual functions:

```solidity
contract ProtocolInvariantTest is Test {
    MyProtocol protocol;

    function setUp() public {
        protocol = new MyProtocol();
        targetContract(address(protocol));
    }

    // This function is called after every random sequence of transactions
    function invariant_solvency() public view {
        // Total deposits must always be >= total withdrawals
        assertGe(address(protocol).balance, protocol.totalDeposits());
    }
}
```

Foundry randomly calls functions on the target contracts and checks the invariant after each sequence. This catches bugs that unit tests miss.

## Useful cheatcodes for DeFi

Beyond `vm.prank` and `vm.deal`:

- `vm.warp(timestamp)`: set `block.timestamp`
- `vm.roll(blockNumber)`: set `block.number`
- `vm.expectRevert()`: assert the next call reverts
- `vm.expectEmit()`: assert a specific event is emitted
- `deal(token, address, amount)`: set an ERC-20 token balance for an address

The full cheatcode reference is in the [Forge standard library docs](https://book.getfoundry.sh/cheatcodes/).

## Gas snapshots

Foundry tracks gas usage and can fail tests if gas increases unexpectedly:

```bash
forge snapshot           # Creates .gas-snapshot
forge snapshot --check   # Fails if gas increased vs snapshot
```

Useful for catching accidental regressions in gas efficiency.

Foundry and Hardhat aren't mutually exclusive. Many teams use Foundry for Solidity tests and Hardhat for deployment scripts and JavaScript integrations. The tools compose reasonably well.
