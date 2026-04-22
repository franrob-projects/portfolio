---
slug: hardhat-developer-guide
title: Getting started with Hardhat
authors: [francis]
tags: [ethereum, tooling]
date: 2024-04-22
image: https://v2.hardhat.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhardhat-logo.5c5f687b.svg&w=384&q=75
---

If you've tried to set up a Solidity development environment from scratch in the last few years, you've probably landed on either Hardhat or Foundry. I use both depending on the project, but Hardhat is where most teams start, and for good reason. This is a practical walkthrough of the pieces that matter.

[![Hardhat](https://v2.hardhat.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhardhat-logo.5c5f687b.svg&w=384&q=75)](https://hardhat.org)

<!-- truncate -->

## Project setup

Hardhat is a Node.js tool, so the setup is familiar if you've done any JavaScript development:

```bash
mkdir my-contract && cd my-contract
npm init -y
npm install --save-dev hardhat
npx hardhat init
```

Choose "Create a JavaScript project" or the TypeScript variant. The TypeScript setup is worth the minor extra effort if you're building anything more than a toy.

The [Hardhat getting started guide](https://hardhat.org/hardhat-runner/docs/getting-started) covers this in more detail, but the CLI prompts are self-explanatory.

## Project structure

After initialization you'll have:

```
contracts/    Solidity source files
scripts/      Deployment and interaction scripts
test/         Your test suite
hardhat.config.js (or .ts)
```

Keep it this way. Resist the urge to reorganize until you understand what the tooling expects.

## The config file

The `hardhat.config.js` is where most of the relevant decisions happen. At minimum, set your Solidity version and any network configurations:

```javascript
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

Never commit private keys. Use environment variables and a `.env` file excluded from version control.

## Writing and running tests

Hardhat uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) by default. The `ethers.js` library handles contract interaction in tests:

```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  it("Should assign the total supply to the deployer", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy();
    expect(await token.balanceOf(owner.address)).to.equal(
      await token.totalSupply()
    );
  });
});
```

Run with `npx hardhat test`. Hardhat spins up an in-memory Ethereum node, deploys the contract, and runs your assertions. Fast and self-contained.

## Hardhat console

One underused feature is the interactive console:

```bash
npx hardhat console --network localhost
```

You get a REPL with `ethers` and your compiled contracts available. Useful for poking at a deployed contract without writing a one-off script.

## Plugins worth installing early

- `@nomicfoundation/hardhat-verify` for contract verification on Etherscan
- `hardhat-gas-reporter` for gas profiling (set `REPORT_GAS=true`)
- `solidity-coverage` for coverage reports

The [Hardhat plugins page](https://hardhat.org/hardhat-runner/plugins) lists the maintained options. Stick to the `@nomicfoundation` namespace where possible.

## Deployment scripts

Scripts in the `scripts/` directory are run with `npx hardhat run scripts/deploy.js`. For anything beyond a single contract, structure your scripts so each one handles one deployment step. Easier to reason about and easier to re-run selectively if something goes wrong.

Hardhat's documentation is genuinely good. Once you've worked through the basics, the [advanced guides](https://hardhat.org/hardhat-runner/docs/advanced/hardhat-runtime-environment) on the runtime environment and writing plugins are worth reading even if you don't end up using them directly.
