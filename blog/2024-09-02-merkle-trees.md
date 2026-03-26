---
slug: merkle-trees-blockchain
title: "Merkle trees in blockchain: more than just verification"
authors: [francis]
tags: [blockchain, ethereum]
date: 2024-09-02
image: https://ethereum.org/content/roadmap/verkle-trees/verkle.png
---

Merkle trees come up constantly in blockchain contexts. They're the reason you can verify a transaction was included in a block without downloading the entire chain, and they show up in smart contracts more often than people expect. Here's a practical look at how they work and where you'll actually encounter them.

<!-- truncate -->

[![Ethereum verkle tree diagram](https://ethereum.org/content/roadmap/verkle-trees/verkle.png)](https://ethereum.org/en/roadmap/verkle-trees/)

## The structure

A Merkle tree is a binary tree where every leaf node is a hash of some data, and every non-leaf node is a hash of its two children. The root (Merkle root) is a single hash that commits to all the data in the leaves.

```
         Root
        /    \
      H12    H34
      / \    / \
    H1  H2 H3  H4
    |   |  |   |
   d1  d2 d3  d4
```

If any piece of data changes, every hash above it in the tree changes, and the root changes. The root is a fingerprint for the entire dataset.

## Why they're useful

The key property: you can prove that a specific piece of data is in the set by providing a "proof" that's logarithmic in size relative to the total dataset.

To prove d3 is in the tree, you provide [H4, H12]. The verifier can compute:
1. H34 = hash(H3, H4) where H3 = hash(d3)
2. Root = hash(H12, H34)

If the computed root matches the known root, d3 is in the tree. You've proven inclusion with only two hashes instead of all four data items.

## Ethereum's use of Merkle trees

Ethereum uses a modified structure called a Merkle Patricia Trie for state, transactions, and receipts. Each block header contains three roots:

- `stateRoot`: the root of the entire account state
- `transactionsRoot`: the root of all transactions in the block
- `receiptsRoot`: the root of all transaction receipts

Light clients can verify transaction inclusion by requesting a Merkle proof from a full node without storing the entire state. This is what makes it practical to run Ethereum on resource-constrained devices.

## Smart contract allowlists

The most common application of Merkle trees in contract development is allowlists. Instead of storing thousands of addresses in a mapping (expensive), you store only the Merkle root:

```solidity
bytes32 public merkleRoot;

function claim(bytes32[] calldata proof) external {
    bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
    require(MerkleProof.verify(proof, merkleRoot, leaf), "Invalid proof");
    // proceed with claim
}
```

OpenZeppelin's `MerkleProof` library handles the verification. The full documentation is at [docs.openzeppelin.com/contracts/5.x/api/utils#MerkleProof](https://docs.openzeppelin.com/contracts/5.x/api/utils#MerkleProof).

The offchain part is generating proofs for users. The `@openzeppelin/merkle-tree` JavaScript library handles this:

```javascript
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";

const tree = StandardMerkleTree.of(addresses.map(a => [a]), ["address"]);
const root = tree.root;

// For a specific address:
for (const [i, v] of tree.entries()) {
  if (v[0] === userAddress) {
    const proof = tree.getProof(i);
  }
}
```

Store the root on-chain and distribute proofs to users off-chain (IPFS, an API, or just a JSON file).

## Verkle trees

Ethereum's roadmap includes migrating from Merkle Patricia Tries to Verkle trees for state storage. Verkle trees produce much smaller proofs, which is important for stateless clients. The cryptography is more complex (it uses polynomial commitments rather than hash functions), but the interface for developers is similar. The [Ethereum roadmap page](https://ethereum.org/en/roadmap/verkle-trees/) has a high-level explanation.

Merkle trees are one of those foundational concepts that keep reappearing in different forms. Understanding them makes a lot of other blockchain primitives easier to reason about.
