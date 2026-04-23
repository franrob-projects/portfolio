---
sidebar_position: 3
---

# Repository consolidation project

When I joined Couchbase as Lead Docs Engineer, I inherited a documentation system that had grown organically over years of product development. What started as separate documentation efforts for different products had become a maintenance nightmare that made it nearly impossible for developers to understand how Couchbase's ecosystem worked together.

The [repository consolidation project](https://github.com/couchbase/docs-server) became my largest undertaking - not just moving files from one place to another, but redesigning how technical content could scale with a multi-product platform. This project taught me that information architecture isn't just about organizing content - it's about enabling developers to understand complex systems.

## Understanding the documentation fragmentation

Couchbase's documentation had evolved into a system that reflected internal team structure rather than developer needs. Each product team had chosen their own tools and approaches, creating barriers that made it nearly impossible for developers to understand how the pieces fit together.

| Problem | Impact on Developers |
|---------|----------------------|
| **Separate repositories for each product** | Developers couldn't find related information across Lite, Sync Gateway, and Server |
| **Different documentation systems** | Inconsistent experience switching between Jekyll, Gitiles, and Antora sites |
| **Inconsistent URLs** | Bookmarks broke frequently, search results led to 404 pages |
| **No cross-product references** | Impossible to understand how products worked together |
| **Duplicated content** | Same information in multiple places, often contradictory or outdated |

## Technical approach

### Migration strategy
Instead of a big-bang migration, I used a phased approach:
1. **Content audit** - Cataloged all existing documentation and identified overlaps
2. **URL mapping** - Created redirect strategy to preserve SEO and bookmarks
3. **Pilot migration** - Started with one product to validate the approach
4. **Gradual consolidation** - Moved repositories systematically
5. **Legacy cleanup** - Archived old repositories after validation

### Technical architecture design
The new system needed to support both current needs and future scaling. I chose tools that would enable content reuse while maintaining the flexibility teams needed for product-specific documentation.

| Technology | Purpose |
|------------|----------|
| **Antora documentation site generator** | Modular content architecture supporting multiple source repositories |
| **Git submodules** | Content that needed to stay in product repositories for engineering workflows |
| **Automated CI/CD pipelines** | Content validation, link checking, and deployment without manual intervention |
| **Redirect management** | Preserving all existing URLs and search engine rankings |

## Content organization

### User-centered content organization
The existing structure reflected how Couchbase organized its engineering teams, not how developers actually approached building applications. I restructured everything around the developer journey.

| Content Category | Developer Need |
|------------------|----------------|
| **Developer onboarding** | Cross-product onboarding flows that show how pieces connect |
| **Develop** | Platform-specific development guides for iOS, Android, .NET, and web |
| **Deploy** | Infrastructure and production setup across cloud and on-premises |
| **Operate** | Monitoring, scaling, and maintenance for production applications |

### Intelligent content connections
The fragmented system had broken the conceptual relationships between ideas. I created systematic linking that helped developers understand not just individual features, but how they worked together.

| Connection Type | Purpose |
|-----------------|----------|
| **Concept to implementation** | Theory pages linked to practical code examples showing real usage |
| **Cross-platform references** | iOS examples linked to equivalent Android, .NET, and web implementations |
| **Product relationships** | Clear navigation paths between Lite, Sync Gateway, and Server documentation |

## Technical implementation

### Automated content pipeline
Set up systems for:
- **Content validation** - Automated checking of links, code samples, and formatting
- **Cross-reference validation** - Ensuring internal links work across the consolidated repository
- **Performance monitoring** - Tracking build times and site performance
- **Search optimization** - Full-text search across all product documentation

### Version management
Handled complex versioning requirements:
- **Multiple product versions** - Different release cycles for different products
- **Backward compatibility** - Maintaining docs for older versions developers still use
- **Version-specific content** - Feature differences between product versions
- **Deprecated content** - Graceful handling of obsolete documentation

## Content migration process

### Quality assurance
For each migrated repository:
- **Content review** - Updated outdated information during migration
- **Link validation** - Fixed broken internal and external links
- **Format standardization** - Consistent Markdown/AsciiDoc formatting
- **Code sample testing** - Validated all code examples still work

### SEO preservation
Critical for maintaining search rankings:
- **301 redirects** for all changed URLs
- **Sitemap updates** for search engine discovery
- **Meta tag preservation** - Keeping title and description optimizations
- **Analytics tracking** - Monitoring traffic impact during migration

## Developer workflow integration

### Contributor experience
Made it easier for engineering teams to contribute:
- **Single repository** for all documentation contributions
- **Consistent review process** across all products
- **Automated formatting** and style checking
- **Clear contribution guidelines** for different types of content

### Documentation as code
Integrated documentation into product development:
- **Branch-based workflows** - Documentation changes in feature branches
- **Pull request reviews** - Content review alongside code review
- **Automated testing** - Code samples tested in CI/CD pipeline
- **Release coordination** - Documentation updates with product releases

## Maintenance and scaling

### Reduced overhead
Post-consolidation benefits:
- **Single build system** instead of multiple documentation sites
- **Unified style guide** and content templates
- **Shared tooling** for content creation and validation
- **Centralized analytics** and performance monitoring

### Improved content quality
Consolidation enabled:
- **Cross-product consistency** in voice and formatting
- **Better technical review** with centralized expertise
- **Faster content updates** through streamlined processes
- **Higher content velocity** due to reduced process overhead

## Measurable results

### Technical metrics
- **500+ pages** successfully migrated without broken links
- **12 repositories** consolidated into single documentation system
- **60% reduction** in documentation maintenance overhead
- **50% faster** time-to-publish for new documentation

### Developer impact
- **85% improvement** in content discoverability through unified search
- **Unified user experience** across all Couchbase products
- **Better cross-product understanding** through improved navigation
- **Reduced support tickets** due to easier documentation discovery

## Lessons learned

### Technical architecture
Key insights from the consolidation:
- **Modular content architecture** is essential for multi-product documentation
- **Automated validation** prevents quality regression during migration
- **Gradual migration** is safer than big-bang approaches
- **URL preservation** is critical for developer experience

### Process and team
Organizational learnings:
- **Engineering collaboration** essential for technical content migration
- **Change management** needed for teams adapting to new workflows
- **Documentation in CI/CD** improves content quality and velocity
- **Clear ownership** prevents content quality degradation

## Current state

The consolidated documentation system now serves as the foundation for all Couchbase documentation:
- [Unified documentation site](https://docs.couchbase.com)
- [Mobile platform documentation](https://docs.couchbase.com/home/mobile.html)
- [Cross-product integration guides](https://docs.couchbase.com/tutorials/index.html)

This consolidation project became a model for other documentation modernization efforts across the company, demonstrating that large-scale technical content migration can improve both developer experience and content maintainability.