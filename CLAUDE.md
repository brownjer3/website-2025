# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jerry Safter Brown's personal portfolio website - A modern, high-performance showcase for a **Technical Product Engineer** with 10+ years in tech. Built with Next.js 15, emphasizing production-scale impact and business value creation through elegant code.

## Quick Start

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build & start
npm run build && npm start
```

## Development Commands

```bash
# Core Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production server

# Code Quality
npm run lint         # ESLint checking
npm run type-check   # TypeScript type validation
npm run format       # Auto-format with Prettier
npm run format:check # Check formatting only

# Testing (TODO)
npm test             # Run unit tests (Vitest - not yet configured)
npm run test:e2e     # E2E tests (Playwright - not yet configured)
```

## Architecture & Design Philosophy

### Core Positioning Strategy
- **Identity**: Technical Product Engineer (NOT "PM who learned to code")
- **Differentiator**: 10+ years product thinking applied to engineering
- **Evidence**: 30K+ DAU production experience, measurable business impact
- **Narrative**: Bridge between business value and technical excellence

### Tech Stack & Rationale

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.3.5 | App Router, RSC, optimal performance |
| React | 19.0.0 | Latest concurrent features |
| TypeScript | 5.x | Type safety, better DX |
| Tailwind CSS | 3.4.17 | Utility-first styling (v4 upgrade planned) |
| shadcn/ui | 2.5.0 | Accessible components (pending install) |

### Project Structure

```
personal-website-2025/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Homepage (currently placeholder)
│   │   ├── api/               # API routes (planned)
│   │   │   ├── github/        # GitHub integration
│   │   │   └── contact/       # Contact form handler
│   │   ├── blog/              # Blog section (planned)
│   │   │   └── [slug]/        # Dynamic blog posts
│   │   └── projects/          # Project showcases (planned)
│   │       └── [id]/          # Dynamic project pages
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── sections/          # Page sections
│   │   │   ├── hero.tsx       # Landing section
│   │   │   ├── experience.tsx # Work history
│   │   │   ├── projects.tsx   # Project showcase
│   │   │   ├── skills.tsx     # Tech stack
│   │   │   ├── about.tsx      # Personal story
│   │   │   └── contact.tsx    # Contact form
│   │   ├── features/          # Complex features
│   │   │   ├── command-palette.tsx    # ⌘K navigation
│   │   │   ├── theme-switcher.tsx     # Dark/light mode
│   │   │   ├── github-activity.tsx    # Live contributions
│   │   │   └── currently-building.tsx # Dynamic updates
│   │   └── common/            # Shared components
│   │       ├── navbar.tsx     # Navigation
│   │       ├── footer.tsx     # Site footer
│   │       └── seo.tsx        # SEO meta tags
│   └── lib/
│       ├── utils/             # Helper functions
│       ├── hooks/             # Custom React hooks
│       └── api/               # API client utilities
├── content/                   # Content management (planned)
│   ├── blog/                  # MDX blog posts
│   ├── projects/              # Project data (JSON)
│   └── experience/            # Work experience data
├── public/                    # Static assets
│   ├── resume/                # Resume PDF
│   └── images/                # Optimized images
└── docs/                      # Project documentation

Current Status: Basic placeholder site deployed, ready for feature implementation
```

## Key Features Implementation Guide

### 1. Command Palette (⌘K)
- Use `cmdk` library for base functionality
- Index all navigable content (sections, projects, blog posts)
- Include search functionality with fuzzy matching
- Keyboard-first design with proper ARIA labels

### 2. GitHub Activity Integration
```typescript
// Fetch from GitHub GraphQL API
// Cache results for 1 hour
// Display contribution graph and recent commits
// Show "Currently Building" from pinned repos
```

### 3. Project Showcase Format
Use STAR method for all projects:
```json
{
  "situation": "Business problem context",
  "task": "Technical requirements",
  "action": "Implementation details + code samples",
  "result": "Measurable impact (users, performance, revenue)"
}
```

### 4. Performance Dashboard
Display real metrics:
- API response time improvements (e.g., 2s → 200ms)
- User growth (e.g., 5K → 30K DAU)
- Infrastructure cost reduction
- Feature adoption rates

## Content Guidelines

### Project Descriptions
- **DO**: Include specific metrics, dates, technologies
- **DO**: Emphasize business impact alongside technical achievements
- **DON'T**: Use vague timeframes like "recently" or "past year"
- **DON'T**: Lead with bootcamp or tutorial projects

### Experience Section
- Focus on progression and growth
- Include team size and scope of impact
- Highlight technical decisions and trade-offs
- Show leadership and mentorship where applicable

### Technical Writing
- Write for senior engineers as audience
- Include architecture decisions and rationale
- Show understanding of trade-offs
- Demonstrate system design thinking

## Performance Requirements

### Core Web Vitals Targets
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **TTFB**: < 600ms (Time to First Byte)

### Lighthouse Scores
- Performance: 95+ 
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Bundle Size Budgets
- Initial JS: < 100KB
- Total Page Weight: < 500KB
- Images: WebP format with proper sizing

## Styling System

### Design Tokens
```css
/* Already configured in globals.css */
--radius: 0.5rem;
--background: Light/Dark mode aware
--foreground: Light/Dark mode aware
--primary/secondary/accent: Theme colors
```

### Animation Standards
```typescript
const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms'
  },
  easing: {
    default: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
}
```

### Component Guidelines
- Mobile-first responsive design
- Use Tailwind utilities exclusively
- Implement proper loading states
- Include error boundaries
- Ensure keyboard navigation

## Security & Best Practices

### Environment Variables
```bash
# .env.local (create this file, it's gitignored)
GITHUB_TOKEN=          # For GitHub API
RESEND_API_KEY=        # For contact form
PLAUSIBLE_DOMAIN=      # Analytics tracking
```

### Headers Configuration
Configure in `next.config.ts`:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## Deployment & Operations

### Vercel Deployment
- Automatic deployments from `main` branch
- Preview deployments for PRs
- Environment variables in Vercel dashboard
- Edge config for feature flags

### Monitoring Setup
1. **Vercel Analytics** - Web Vitals monitoring
2. **Plausible** - Privacy-focused user analytics
3. **Sentry** - Error tracking (to be configured)
4. **Uptime monitoring** - Via Vercel

## Current Status & Next Steps

### ✅ Completed
- Project initialization with Next.js 15
- Basic TypeScript configuration
- Tailwind CSS setup
- Git repository connected
- Initial deployment structure

### 🚧 In Progress
- Homepage placeholder deployed

### 📋 TODO (Priority Order)
1. **Install shadcn/ui**: `npx --legacy-peer-deps shadcn@latest init`
2. **Create Hero Section**: Compelling introduction with CTAs
3. **Build Experience Timeline**: Interactive work history
4. **Implement Projects Grid**: STAR-formatted showcases
5. **Add Command Palette**: Power user navigation
6. **Integrate GitHub API**: Activity graph and current projects
7. **Setup Contact Form**: With proper validation and email service
8. **Create Blog System**: MDX support with syntax highlighting
9. **Add Analytics**: Plausible integration
10. **Performance Optimization**: Achieve target scores

## Troubleshooting

### Common Issues

**shadcn/ui installation fails**
```bash
npx --legacy-peer-deps shadcn@latest init
```

**Type errors with React 19**
- Ensure `@types/react` and `@types/react-dom` are version 19+
- Check for incompatible dependencies

**Tailwind classes not applying**
- Verify content paths in `tailwind.config.ts`
- Check for typos in class names
- Ensure proper imports in `globals.css`

## Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS v3](https://tailwindcss.com/docs)
- [React 19 Features](https://react.dev/blog/2024/12/05/react-19)

### Project Files
- [Technical Implementation Plan](./technical-implementation-plan.md)
- [Old Website Summary](./old-website-summary.txt)
- [Resume PDF](./Jerry-Safter-Brown.pdf)

---

*Last updated: 2025-07-12*