# Architecture Documentation

## Overview

This document outlines the architectural decisions and patterns used in the Personal Website 2025 project.

## Core Architecture Principles

1. **Performance First** - Every decision optimizes for Core Web Vitals
2. **Type Safety** - TypeScript strict mode throughout
3. **Component Driven** - Modular, reusable components
4. **Server-First** - Leverage React Server Components where possible
5. **Progressive Enhancement** - Works without JavaScript, enhanced with it

## Technical Architecture

### Frontend Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Next.js App Router                    │
├─────────────────────────────────────────────────────────────┤
│                     React Server Components                  │
├─────────────────────────────────────────────────────────────┤
│                         React 19 Client                      │
├─────────────────────────────────────────────────────────────┤
│                      Component Library                       │
│                    (shadcn/ui + custom)                     │
├─────────────────────────────────────────────────────────────┤
│                     Styling (Tailwind CSS)                   │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Request → Next.js Router → Server Component 
                                       ↓
                                  Data Fetching
                                       ↓
                                  HTML Response
                                       ↓
                                Client Hydration → Interactive UI
```

## Component Architecture

### Component Hierarchy

```
app/
├── layout.tsx (Root Layout)
│   ├── Navbar (Common)
│   ├── ThemeProvider (Feature)
│   └── Footer (Common)
└── page.tsx (Page Component)
    ├── HeroSection
    ├── ExperienceSection
    ├── ProjectsSection
    ├── SkillsSection
    └── ContactSection
```

### Component Categories

1. **UI Components** (`/components/ui/`)
   - Atomic, reusable components from shadcn/ui
   - Examples: Button, Card, Dialog, Input

2. **Section Components** (`/components/sections/`)
   - Page-specific sections
   - Compose UI components
   - Handle section-level state

3. **Feature Components** (`/components/features/`)
   - Complex, cross-cutting features
   - Examples: CommandPalette, GitHubActivity

4. **Common Components** (`/components/common/`)
   - Shared across pages
   - Examples: Navbar, Footer, SEO

## State Management

### State Hierarchy

1. **URL State** - Navigation, filters, search params
2. **Server State** - Data from APIs, cached appropriately
3. **UI State** - Theme, modals, temporary UI states
4. **Form State** - Managed by form libraries

### State Solutions

- **URL State**: Next.js router, searchParams
- **Server State**: React Server Components + fetch caching
- **UI State**: React Context (Theme), useState (local)
- **Form State**: React Hook Form (when needed)

## Performance Architecture

### Optimization Strategies

1. **Code Splitting**
   - Route-based splitting (automatic with App Router)
   - Component lazy loading for heavy features
   - Dynamic imports for optional functionality

2. **Asset Optimization**
   - Next/Image for automatic image optimization
   - Font subsetting and variable fonts
   - SVG optimization and sprites

3. **Caching Strategy**
   - Static generation for content pages
   - ISR for blog posts
   - Client-side caching for GitHub API

### Bundle Size Management

```typescript
// Example: Lazy load heavy components
const CommandPalette = dynamic(
  () => import('@/components/features/command-palette'),
  { ssr: false }
)
```

## Security Architecture

### Security Measures

1. **Content Security Policy** - Strict CSP headers
2. **Environment Variables** - Server-only secrets
3. **Input Validation** - Zod schemas for all inputs
4. **Rate Limiting** - API route protection
5. **CORS Configuration** - Restrictive CORS policies

### API Security

```typescript
// Example: API route with validation
export async function POST(request: Request) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')
  if (await isRateLimited(ip)) {
    return new Response('Too Many Requests', { status: 429 })
  }
  
  // Input validation
  const body = await request.json()
  const validated = contactSchema.parse(body)
  
  // Process request...
}
```

## Deployment Architecture

### Infrastructure

```
GitHub → Vercel → Edge Network → Users
  ↓
CI/CD Pipeline
  ↓
- Type checking
- Linting
- Build
- Deploy
```

### Environment Strategy

- **Development**: Local development with hot reload
- **Preview**: Branch deployments for testing
- **Production**: Optimized builds on main branch

## Monitoring & Analytics

### Monitoring Stack

1. **Vercel Analytics** - Web Vitals and performance
2. **Plausible** - Privacy-focused user analytics
3. **Sentry** - Error tracking and monitoring
4. **Custom Metrics** - Business-specific KPIs

### Performance Monitoring

```typescript
// Example: Custom performance tracking
export function trackMetric(metric: string, value: number) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Performance', {
      props: { metric, value }
    })
  }
}
```

## Future Architecture Considerations

1. **Internationalization** - Multi-language support structure
2. **A/B Testing** - Feature flag system
3. **Search** - Full-text search implementation
4. **CMS Integration** - Headless CMS for content

---

*This architecture is designed to scale with the project while maintaining performance and developer experience.*