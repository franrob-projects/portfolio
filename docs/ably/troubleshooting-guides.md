---
sidebar_position: 3
---

# Troubleshooting guides & developer support

Real-time messaging creates unique debugging challenges that traditional web development doesn't prepare developers for. When a WebSocket connection fails or messages don't arrive, the problem could be anywhere - network proxies, browser policies, authentication tokens, or subtle timing issues.

Creating effective [troubleshooting documentation](https://ably.com/docs/platform/errors) meant understanding how developers actually diagnose real-time problems, not just documenting what could theoretically go wrong. I focused on building systematic diagnostic tools that helped developers identify the root cause quickly.

## HAR file generation guide

I created a comprehensive guide for generating HAR (HTTP Archive) files to help developers troubleshoot connection issues. This was crucial because real-time connection problems are notoriously difficult to debug.

### Understanding connection failure patterns
Real-time connections fail differently than HTTP requests, often in ways that browser developer tools don't reveal clearly. I needed to give developers better visibility into what was actually happening.

| Problem Type | Why Standard Tools Miss It |
|--------------|-----------------------------|
| **Real-time connections** | Fail in ways that aren't obvious in browser dev tools |
| **WebSocket handshakes** | Can fail silently without clear error messages |
| **Authentication issues** | Hard to trace without detailed request and response logs |
| **Network proxy problems** | Only show up in detailed timing and header data |

### What I built
A step-by-step guide that walks developers through:
1. **Browser-specific instructions** for Chrome, Firefox, Safari
2. **What to look for** in HAR file data
3. **Common patterns** that indicate specific problems
4. **How to share HAR files** safely (removing sensitive data)

## Connection debugging workflows

### WebSocket connection debugging
WebSocket problems have specific patterns that developers can learn to recognize. I created troubleshooting workflows that helped developers identify which type of problem they were facing.

| Problem Pattern | Diagnostic Approach |
|-----------------|---------------------|
| **Connection timeouts** | Timing analysis and network path testing |
| **Authentication token expiration** | Token validation and renewal workflows |
| **Network proxy interference** | Proxy detection and configuration guidance |
| **Browser security policy conflicts** | CORS and content security policy debugging |

### Server-sent events troubleshooting
SSE debugging presents unique challenges because the protocol looks simple but has complex edge cases. I created specific guidance for the most common SSE problems.

| SSE Challenge | Solution Approach |
|---------------|-------------------|
| **Browser compatibility** | Detection methods and polyfill recommendations |
| **Connection persistence** | Reconnection strategies and state management |
| **Event parsing errors** | Data format validation and error handling |
| **CORS configuration** | Cross-origin setup and preflight debugging |

## Developer tools integration

### Browser DevTools guidance
Instead of assuming developers know how to use DevTools for real-time debugging:
- **Network tab** - What to look for in WebSocket frames
- **Console tab** - Interpreting Ably client library errors  
- **Application tab** - Checking connection state and tokens
- **Security tab** - Certificate and TLS issues

### Ably client library debugging
Practical guides for debugging with Ably's client libraries:
- **Logging configuration** - Getting detailed connection logs
- **Connection state monitoring** - Understanding connection lifecycle
- **Error handling patterns** - Proper retry logic implementation
- **Performance monitoring** - Identifying bottlenecks

## Real-world problem solving

### Common integration issues
Documentation for problems developers actually encounter:
- **API key vs JWT** - When to use which authentication method
- **Channel permissions** - Capability and permission errors
- **Message ordering** - Understanding delivery guarantees
- **Connection limits** - Handling concurrent connection limits

### Production environment issues
Specific guidance for production problems:
- **Load balancer configuration** - WebSocket sticky sessions
- **CDN compatibility** - Real-time connections through CDNs
- **Mobile network handling** - Connection stability on mobile
- **Scaling considerations** - Connection pooling and management

## Support team integration

Working closely with Ably's support team to:
- **Identify common issues** from support tickets
- **Create preventive documentation** for recurring problems
- **Build diagnostic tools** developers can use self-service
- **Improve error messages** in the client libraries

## Measurable impact

Since implementing these troubleshooting resources:
- **Reduced support ticket volume** for connection issues
- **Faster developer problem resolution** with self-service tools
- **Better developer experience** during integration
- **Improved community support** with shared debugging knowledge

## Live resources

Current troubleshooting documentation:
- [Connection troubleshooting](https://ably.com/docs/troubleshooting)
- [HAR file generation guide](https://ably.com/docs/platform/errors)
- [Error handling patterns](https://ably.com/docs/realtime/connection)

The key insight: developers don't need more theory about how things should work - they need practical tools for when things don't work.