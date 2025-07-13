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
App Layout (Theme Provider)
│
├── Navigation
│   ├── Desktop Nav
│   └── Mobile Menu
│
├── Page Sections
│   ├── Hero (Client - GitHub API)
│   ├── About (Server)
│   ├── Experience (Server)
│   ├── Projects (Server) 
│   ├── Skills (Server)
│   └── Contact (Client - Form)
│
└── Footer
```

### Component Categories

1. **UI Components** (`/components/ui/`)
   - Pure presentation components from shadcn/ui
   - Highly reusable, no business logic
   - Examples: Button, Badge, Input, Tabs

2. **Section Components** (`/components/sections/`)
   - Page-specific sections
   - Contain business logic and data
   - Examples: HeroSection, ExperienceSection

3. **Common Components** (`/components/common/`)
   - Shared across pages
   - Examples: Navbar, Footer, SkipLinks

4. **Feature Components** (`/components/features/`)
   - Complex interactive features
   - Examples: ThemeToggle, CommandPalette (planned)

5. **Provider Components** (`/components/providers/`)
   - React Context providers
   - Examples: ThemeProvider

## State Management

### Current Implementation

1. **Theme State**: next-themes with localStorage persistence
2. **Navigation State**: React useState for mobile menu
3. **Form State**: Controlled components with React state
4. **Data Fetching**: 
   - Static data imported from `/data` files
   - Dynamic GitHub stats via API route

### Future Considerations

- Consider Zustand for complex client state
- React Query for API data caching
- Form library (React Hook Form) for complex forms

## API Architecture

### Current API Routes

```
/api/github/stats
├── Purpose: Fetch GitHub statistics
├── Method: GET
├── Caching: 1 hour
└── Response: { totalCommits, totalRepos, followers, following }
```

### API Design Principles

1. **RESTful conventions**
2. **Proper error handling with fallbacks**
3. **Response caching for performance**
4. **Optional authentication support**
5. **TypeScript interfaces for all responses**

## Performance Architecture

### Optimization Strategies

1. **Code Splitting**
   - Automatic with Next.js App Router
   - Dynamic imports for heavy components

2. **Image Optimization**
   - Use next/image (TODO)
   - WebP format with fallbacks
   - Responsive image sizes

3. **Font Optimization**
   - Geist font with Next.js font optimization
   - Preload critical fonts
   - Font-display: swap

4. **Caching Strategy**
   - Static pages cached at edge
   - API responses cached for 1 hour
   - Static assets with long cache headers

### Bundle Size Management

Current: ~200KB initial JS
Target: <100KB initial JS

Strategies:
- Tree shaking with ES modules
- Dynamic imports for below-fold content
- Minimize third-party dependencies
- Regular bundle analysis

## Security Architecture

### Current Measures

1. **Content Security Policy** (TODO)
2. **Environment Variables** for secrets
3. **Input Validation** on forms
4. **XSS Prevention** via React
5. **HTTPS Only** via Vercel

### Planned Enhancements

1. Rate limiting on API routes
2. CORS configuration
3. Security headers via next.config.ts
4. Form spam protection (honeypot/captcha)

## Deployment Architecture

```
GitHub Repository
      ↓
Vercel Platform
      ↓
├── Production (main branch)
├── Preview (PR branches)
└── Development (local)
```

### CI/CD Pipeline (Planned)

```
1. Pre-commit hooks (Husky)
   - Linting
   - Type checking
   - Formatting

2. GitHub Actions
   - Build verification
   - Test execution
   - Lighthouse CI

3. Vercel Deployment
   - Automatic on push
   - Preview on PR
```

## Technology Decisions

### Why Next.js 15?
- App Router for better performance
- React Server Components support
- Built-in optimizations
- Excellent DX with hot reload
- Vercel integration

### Why TypeScript?
- Type safety prevents bugs
- Better IDE support
- Self-documenting code
- Refactoring confidence

### Why Tailwind CSS?
- Utility-first is performant
- Consistent design system
- Excellent responsive utilities
- Dark mode support
- Small production bundle

### Why shadcn/ui?
- Accessible by default
- Customizable components
- Copy/paste ownership
- TypeScript support
- Radix UI primitives

## File Structure Conventions

### Naming
- Components: PascalCase (HeroSection.tsx)
- Utilities: camelCase (formatDate.ts)
- Types: PascalCase with "Type" suffix
- Constants: SCREAMING_SNAKE_CASE

### Organization
```
component-name/
├── index.tsx        # Main component
├── types.ts         # TypeScript types
├── utils.ts         # Helper functions
└── styles.module.css # Styles (if needed)
```

### Import Order
1. React/Next imports
2. Third-party libraries
3. Internal components
4. Internal utilities
5. Types
6. Styles

## Testing Architecture (Planned)

### Unit Testing
- Vitest for component testing
- React Testing Library for DOM
- Mock Service Worker for API

### E2E Testing
- Playwright for browser automation
- Test critical user paths
- Visual regression testing

### Testing Principles
1. Test behavior, not implementation
2. Focus on user interactions
3. Mock external dependencies
4. Maintain test coverage >80%

## Monitoring Architecture (Planned)

### Performance Monitoring
- Vercel Analytics for Web Vitals
- Custom performance marks
- Real User Monitoring (RUM)

### Error Tracking
- Sentry for error reporting
- Custom error boundaries
- Structured logging

### Analytics
- Plausible for privacy-focused analytics
- Custom event tracking
- Conversion tracking

## Future Architecture Considerations

### Potential Enhancements
1. **Micro-frontends** for blog system
2. **Edge Functions** for personalization
3. **Service Worker** for offline support
4. **WebAssembly** for heavy computations
5. **Streaming SSR** for faster TTFB

### Scalability Plan
1. CDN for global distribution
2. Database for dynamic content
3. Redis for session/cache
4. Queue system for emails
5. Microservices for complex features

---

*Last updated: 2025-07-12*