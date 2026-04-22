---
slug: nft-contract-architecture
title: NFT contract architecture beyond ERC-721
authors: [francis]
tags: [nft, solidity, ethereum]
date: 2025-01-17
image: https://openzeppelin-docs-v2.netlify.app/social.png
---

ERC-721 gets most of the attention in NFT discussions because it's where the standard started. But the ecosystem has moved considerably since 2018. If you're building an NFT project now, you have better options depending on what you're actually trying to do.

[![OpenZeppelin ERC-721 documentation](https://openzeppelin-docs-v2.netlify.app/social.png)](https://docs.openzeppelin.com/contracts/5.x/erc721)

<!-- truncate -->

## ERC-721 basics

The standard defines ownership: a token ID maps to an address, and the contract tracks who owns what. The minimal interface includes `ownerOf`, `balanceOf`, `transferFrom`, `approve`, and `setApprovalForAll`.

The [ERC-721 specification](https://eips.ethereum.org/EIPS/eip-721) is short enough to read in full. Understanding it before importing an implementation is worth the ten minutes.

The main implementation people use is OpenZeppelin's. The [ERC-721 docs](https://docs.openzeppelin.com/contracts/5.x/erc721) cover the extensions: `ERC721URIStorage` for per-token metadata URIs, `ERC721Enumerable` for on-chain enumeration (expensive but sometimes necessary), and `ERC721Burnable`.

## The gas cost of minting at scale

The core ERC-721 standard stores ownership in a mapping from token ID to address. Minting a token requires a write to this mapping: one `SSTORE` per mint, which is 20,000 gas for a new slot.

For a 10,000-piece collection where everyone mints at once, this adds up. The community has developed a few solutions.

## ERC-721A

Developed by the Azuki team, [ERC-721A](https://www.azuki.com/erc721a) optimizes for batch minting. Instead of writing ownership data for every token in a batch, it uses a lazy initialization scheme where ownership is inferred from sequential batch records.

The tradeoff: individual transfers cost slightly more because the contract may need to resolve implicit ownership. For mint-heavy, low-transfer scenarios (typical NFT drops), ERC-721A is a significant improvement.

The [ERC-721A documentation](https://chiru-labs.github.io/ERC721A/) covers the implementation details and how to use the library.

## ERC-1155 for multi-token contracts

ERC-1155 lets a single contract manage both fungible and non-fungible tokens. Instead of one contract per token type, you have one contract with multiple token IDs.

```solidity
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract GameItems is ERC1155 {
    uint256 public constant GOLD = 0;     // fungible
    uint256 public constant SWORD = 1;    // semi-fungible
    uint256 public constant SHIELD = 2;
}
```

ERC-1155 also supports batch transfers, which reduces gas costs when moving multiple token types at once.

For gaming applications where you have many item types and don't need each to be individually unique, ERC-1155 is usually more appropriate than ERC-721.

## On-chain versus off-chain metadata

The `tokenURI` function returns a URL pointing to a JSON file with the token's metadata (name, description, image). Where that JSON lives matters.

**Centralized server**: easy to set up, easy to change, a single point of failure. If the server goes down, NFT marketplaces can't display the metadata.

**IPFS**: content-addressed storage. The URI encodes the content hash, so the metadata can't be changed and can be served by anyone with a copy. The [NFT Storage](https://nft.storage/) service provides free IPFS pinning for NFT metadata.

**Fully on-chain**: the metadata is stored in the contract itself, usually as base64-encoded SVG for the image. Expensive to deploy, impossible to change, completely decentralized. Projects like Nouns NFT use this approach.

## Royalties

ERC-2981 is the standard for on-chain royalty information. It adds a `royaltyInfo(tokenId, salePrice)` function that returns who should receive royalties and how much:

```solidity
import "@openzeppelin/contracts/token/common/ERC2981.sol";

contract MyNFT is ERC721, ERC2981 {
    constructor() ERC721("MyNFT", "MNFT") {
        _setDefaultRoyalty(msg.sender, 500); // 5% in basis points
    }
}
```

Marketplace support for ERC-2981 is inconsistent. OpenSea, Blur, and others handle royalties in different ways with different enforcement mechanisms.

## Testing and deployment

For NFT projects with presales, whitelists, and public mints, structure your tests around the different sale phases. Each phase has different access control requirements and different minting logic. Testing them in isolation and in sequence both matter.

The [Foundry book](https://book.getfoundry.sh/) has good examples of testing NFT contracts. Foundry's `vm.prank` for impersonating accounts and `vm.deal` for setting ETH balances are particularly useful for mint testing.
