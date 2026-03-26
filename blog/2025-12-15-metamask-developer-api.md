---
slug: metamask-developer-api
title: Wallet UX and the MetaMask developer API
authors: [francis]
tags: [ethereum, tooling]
date: 2025-12-15
image: https://docs.metamask.io/img/metamask-logo.svg
---

MetaMask has around 30 million monthly active users. For most Ethereum applications, it's the primary wallet. Understanding what the MetaMask API can actually do helps you build a better user experience, and knowing its limitations helps you avoid building around them.

<!-- truncate -->

[![MetaMask developer documentation](https://docs.metamask.io/img/metamask-logo.svg)](https://docs.metamask.io/wallet/)

## The provider object

MetaMask injects a provider object into the browser at `window.ethereum`. This is how your application communicates with the user's wallet. The basic pattern:

```javascript
if (typeof window.ethereum === "undefined") {
  // MetaMask not installed
  return;
}

// Request account access
const accounts = await window.ethereum.request({
  method: "eth_requestAccounts",
});

const address = accounts[0];
```

`eth_requestAccounts` prompts the user to connect. After connecting, you have the user's address but nothing else. You can't sign transactions or messages without explicit user approval for each action.

## Checking the network

Users aren't always on the network your application expects. Check and handle the mismatch:

```javascript
const chainId = await window.ethereum.request({ method: "eth_chainId" });

if (chainId !== "0x1") {
  // Not on Ethereum mainnet
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  } catch (error) {
    if (error.code === 4902) {
      // Chain not added to MetaMask
    }
  }
}
```

Listen for network changes too:

```javascript
window.ethereum.on("chainChanged", (chainId) => {
  window.location.reload(); // simplest approach
});
```

## Sending transactions

```javascript
const txHash = await window.ethereum.request({
  method: "eth_sendTransaction",
  params: [{
    from: address,
    to: contractAddress,
    data: encodedCalldata,
    value: "0x0",
  }],
});
```

MetaMask pops up a confirmation dialog showing the transaction details and estimated gas. The user approves or rejects. You get the transaction hash back (not a receipt; you still need to wait for the transaction to be mined).

## eth_signTypedData_v4

For signing structured data (EIP-712), use `eth_signTypedData_v4`. This produces a user-friendly signature prompt that shows the decoded data fields rather than a raw hex string.

```javascript
const signature = await window.ethereum.request({
  method: "eth_signTypedData_v4",
  params: [
    address,
    JSON.stringify({
      domain: { name: "MyApp", version: "1", chainId: 1, verifyingContract: "0x..." },
      types: {
        Order: [
          { name: "amount", type: "uint256" },
          { name: "token", type: "address" },
        ],
      },
      primaryType: "Order",
      message: { amount: "1000000", token: tokenAddress },
    }),
  ],
});
```

Permit signatures (EIP-2612) use this pattern to allow spending without a separate `approve` transaction.

## MetaMask Snaps

MetaMask Snaps allow third-party developers to extend MetaMask's functionality. A Snap is a sandboxed JavaScript program that runs inside MetaMask and can:

- Display custom UI in transaction confirmation dialogs
- Support non-EVM chains
- Add custom RPC methods
- Manage key derivation for other chains

The [MetaMask Snaps documentation](https://docs.metamask.io/snaps/) covers the full API. Snaps require user approval to install and run in a restricted environment.

## Common UX mistakes

**Don't assume the user is connected.** The connected state can change. Listen for `accountsChanged` events.

**Don't block the whole UI if MetaMask isn't installed.** Offer a link to install and allow users to browse without connecting.

**Minimize signature requests.** Every MetaMask popup is friction. Batch operations where you can. Use off-chain signatures (EIP-712) for actions that don't need immediate on-chain settlement.

**Show transaction status.** MetaMask's confirmation dialog disappears once the user approves. Your UI needs to show pending, confirmed, and failed states using the transaction hash.

## Using viem or ethers instead of raw window.ethereum

Working directly with `window.ethereum` is low-level. Libraries like viem and ethers.js wrap it with better types and abstractions:

```javascript
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
```

The [MetaMask developer documentation](https://docs.metamask.io/wallet/) is the authoritative reference for the full API including the Snaps API and the MetaMask institutional API for enterprise use.
