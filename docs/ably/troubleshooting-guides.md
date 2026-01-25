---
sidebar_position: 3
---

# Troubleshooting guides & developer support

One of the most impactful things I've done at Ably is create practical troubleshooting resources. These aren't generic "check your network connection" guides - they're specific tools that help developers debug real-time messaging issues.

## HAR file generation guide

I created a comprehensive guide for generating HAR (HTTP Archive) files to help developers troubleshoot connection issues. This was crucial because real-time connection problems are notoriously difficult to debug.

### Why HAR files matter
- **Real-time connections** fail in ways that aren't obvious in browser dev tools
- **WebSocket handshakes** can fail silently
- **Authentication issues** are hard to trace without detailed request logs
- **Network proxy problems** only show up in detailed timing data

### What I built
A step-by-step guide that walks developers through:
1. **Browser-specific instructions** for Chrome, Firefox, Safari
2. **What to look for** in HAR file data
3. **Common patterns** that indicate specific problems
4. **How to share HAR files** safely (removing sensitive data)

## Connection debugging workflows

### WebSocket connection issues
Created specific troubleshooting flows for:
- Connection timeouts and why they happen
- Authentication token expiration handling
- Network proxy interference
- Browser security policy conflicts

### Server-sent events debugging
Since SSE debugging is particularly tricky:
- **Browser compatibility** issues and workarounds
- **Connection persistence** problems
- **Event parsing** errors and malformed data
- **CORS configuration** for cross-origin requests

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