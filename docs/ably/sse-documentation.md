---
sidebar_position: 1
---

# Server-sent events documentation

When I started working on the [Server-Sent Events documentation](https://ably.com/docs/protocols/sse) at Ably, I quickly realized this wasn't going to be a typical documentation project. Real-time streaming technology is inherently difficult to explain in static text, and developers needed to understand both the technical implementation and the practical troubleshooting aspects.

## Understanding the documentation challenge

Server-Sent Events sit in a complicated space between WebSockets and simple HTTP requests. Developers often chose SSE because they thought it would be simpler than WebSockets, but then struggled with browser compatibility issues, connection management, and error handling that wasn't obvious from basic tutorials.

I spent time reviewing support tickets and talking to developer advocates to understand where developers were getting stuck. The pattern was clear - people could get basic SSE working quickly, but struggled with production reliability and debugging when things went wrong.

## Writing process and approach

The biggest challenge was making real-time concepts accessible in documentation format. Unlike the repository consolidation project I later worked on at Couchbase, this required showing dynamic behavior and helping developers understand what they should expect to see.

I developed a layered approach starting with simple concepts and building to production-ready implementations. Each section included working code examples, but more importantly, explanations of what developers should expect to see and how to recognize when something wasn't working correctly.

The troubleshooting sections became some of the most valuable content. Drawing from the systematic diagnostic approach I had developed at Atlas Copco, I created decision trees that helped developers identify whether issues were client-side, network-related, or server configuration problems.

## Connecting to developer workflows

This project reinforced lessons I had learned in my earlier work on channels and pub/sub documentation. Developers don't just want to know how SSE works technically - they need to understand when to choose SSE over WebSockets or long polling, and how SSE fits into their broader application architecture.

I made sure to connect the SSE documentation to related Ably features and provided clear migration paths for developers who needed to switch protocols. This systems thinking approach, similar to what I applied to joining technologies at Atlas Copco, helped developers understand how their technical choices connected to broader implementation decisions.

## Code examples and practical implementation

Every code example in the SSE documentation was designed to be copy-pasteable and immediately functional. But unlike simple tutorial code, I included error handling, reconnection logic, and monitoring approaches that developers would need in production.

The interactive elements allowed developers to test concepts immediately, similar to how I later structured the developer onboarding experience. The goal was reducing the gap between reading about SSE and actually implementing it successfully.

## Integration with broader real-time messaging strategy

The SSE documentation didn't exist in isolation - it was part of Ably's broader real-time messaging portfolio. I made sure developers understood when SSE was the right choice and provided clear guidance for situations where they might need to switch to WebSockets or other protocols.

This connected directly to the developer journey mapping work I was doing simultaneously. Different developers had different entry points into real-time messaging, and the documentation needed to serve both developers who were new to real-time concepts and those who were comparing specific technical implementations.

## Results and developer impact

The revised SSE documentation became one of the most-referenced pages in Ably's developer resources. More importantly, it reduced support ticket volume for SSE-related issues and improved successful implementation rates for developers choosing this protocol.

The systematic approach to troubleshooting and the focus on production-ready code examples influenced how I approached other protocol documentation at Ably. The principles I developed here - layered complexity, practical examples, and systematic troubleshooting - became central to all my subsequent docs engineering projects.