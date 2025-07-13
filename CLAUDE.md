# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jerry Safter Brown's personal portfolio website - A modern, high-performance showcase for a **Full Stack Software Engineer** with 10+ years in tech. Built with Next.js 15, emphasizing production-scale impact and business value creation through elegant code.

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
- **Identity**: Full Stack Software Engineer (focused on engineering roles)
- **Differentiator**: 10+ years combining product thinking with engineering
- **Evidence**: Real GitHub projects, verifiable experience from resume
- **Narrative**: Product-minded engineer delivering business value through code

### Tech Stack & Rationale

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.3.5 | App Router, RSC, optimal performance |
| React | 19.0.0 | Latest concurrent features |
| TypeScript | 5.x | Type safety, better DX |
| Tailwind CSS | 3.4.17 | Utility-first styling |
| shadcn/ui | Components | Accessible, customizable UI components |
| next-themes | 0.4.6 | SSR-compatible dark mode |

### Project Structure

```
personal-website-2025/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Homepage with all sections
│   │   └── api/               # API routes
│   │       └── github/        # GitHub stats API
│   │           └── stats/     
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── textarea.tsx
│   │   ├── sections/          # Page sections
│   │   │   ├── hero.tsx       # Landing with dynamic GitHub stats
│   │   │   ├── about.tsx      # Personal introduction
│   │   │   ├── experience.tsx # Work history timeline
│   │   │   ├── projects.tsx   # Project showcase (STAR format)
│   │   │   ├── skills.tsx     # Tech stack with proficiency
│   │   │   └── contact.tsx    # Contact form
│   │   ├── features/          # Complex features
│   │   │   └── theme-toggle.tsx # Dark/light mode switcher
│   │   ├── common/            # Shared components
│   │   │   ├── navbar.tsx     # Navigation with mobile menu
│   │   │   ├── footer.tsx     # Site footer with links
│   │   │   └── skip-links.tsx # Accessibility feature
│   │   └── providers/
│   │       └── theme-provider.tsx # Next-themes provider
│   ├── data/                  # Static data
│   │   ├── experience.ts      # Work experience (from resume)
│   │   ├── projects.ts        # GitHub projects data
│   │   └── skills.ts          # Skills with proficiency levels
│   └── lib/
│       ├── utils.ts           # cn() utility for className merging
│       └── hooks/             # Custom React hooks (TODO)
├── public/                    # Static assets
│   └── Jerry-Brown.pdf        # Resume PDF
└── docs/                      # Project documentation
    ├── ARCHITECTURE.md        # Technical architecture
    ├── CONTENT_GUIDE.md       # Content writing guidelines
    ├── DEPLOYMENT.md          # Deployment instructions
    ├── STYLE_GUIDE.md         # Design system & styling
    └── removed-content-tracking.md # Tracking removed inaccurate content

Current Status: Phase 2 implementation complete with all major sections built
```

## Key Features Implementation Status

### ✅ Completed Features

1. **Hero Section**
   - "Hi, I'm Jerry." header with gradient text
   - Dynamic GitHub commits counter via API
   - Resume download button
   - Responsive design with mobile optimization

2. **About Section**  
   - Professional introduction focused on verifiable strengths
   - Code-style visual element
   - Accurate highlights from resume

3. **Experience Timeline**
   - Interactive tabs for each role
   - Data sourced directly from resume
   - Achievements and technologies listed

4. **Projects Showcase**
   - STAR format case studies
   - Real GitHub projects (Elara News, NFT Calendar, Portfolio v1)
   - Live/GitHub links
   - Responsive grid layout

5. **Skills Section**
   - Categorized by type (Languages, Frameworks, etc.)
   - Proficiency levels (Expert, Proficient, Learning)
   - Only includes resume-verified skills + Swift/React Native

6. **Contact Form**
   - Form validation
   - Accessible labels
   - Ready for email integration

7. **Theme System**
   - Dark/light mode toggle
   - System preference detection
   - Persistent across sessions

8. **Navigation**
   - Sticky navbar with smooth scroll
   - Mobile hamburger menu
   - Resume download in nav

9. **Accessibility**
   - Skip to content links
   - Proper ARIA labels
   - Keyboard navigation

10. **GitHub Integration**
    - API route for fetching stats
    - Caching for performance
    - Fallback values

### 🚧 Features In Progress

None currently - Phase 2 implementation is complete

### 📋 TODO Features (Priority Order)

1. **Wire Contact Form** - Connect to email service (Resend/SendGrid)
2. **Add Animations** - Framer Motion for smooth transitions
3. **Command Palette (⌘K)** - Power user navigation
4. **Blog System** - MDX support with syntax highlighting
5. **Enhanced GitHub Activity** - Contribution graph, pinned repos
6. **Analytics Integration** - Plausible for privacy-focused tracking
7. **Performance Optimization** - Image optimization, lazy loading
8. **SEO Enhancement** - Structured data, meta tags
9. **Testing Suite** - Vitest unit tests, Playwright E2E
10. **CI/CD Pipeline** - GitHub Actions for automated checks

## Content Guidelines

### Accuracy Requirements
- **All content must be verifiable from resume** - No unsubstantiated claims
- **Metrics must be real** - Use actual numbers or remove
- **Projects must exist** - Only showcase real GitHub/deployed projects
- **Skills must be used** - Only list technologies with real experience

### Writing Style
- **Audience**: Senior engineers and technical hiring managers
- **Tone**: Professional yet personable
- **Focus**: Business impact through technical excellence
- **Evidence**: Specific examples over generic claims

### Project Descriptions (STAR Format)
```typescript
{
  situation: "Business context and problem",
  task: "Technical requirements and constraints",
  action: "Implementation approach and decisions",
  result: "Measurable impact and outcomes"
}
```

## Development Workflow

### Making Changes
1. **Read relevant data files** in `src/data/` before editing
2. **Maintain TypeScript types** - Run `npm run type-check`
3. **Follow existing patterns** - Check similar components
4. **Test responsiveness** - Mobile, tablet, desktop views
5. **Verify accessibility** - Keyboard navigation, screen readers

### Code Quality Checklist
- [ ] ESLint passes: `npm run lint`
- [ ] TypeScript compiles: `npm run type-check`  
- [ ] Prettier formatted: `npm run format`
- [ ] No console.logs in production code
- [ ] Components are properly typed
- [ ] Data matches resume/reality

### Git Workflow
```bash
# Before committing
npm run lint
npm run type-check
npm run format

# Commit with descriptive message
git add .
git commit -m "feat: add contact form email integration"
git push origin main
```

## Performance Requirements

### Core Web Vitals Targets
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)  
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **TTFB**: < 600ms (Time to First Byte)

### Current Performance
- Lighthouse Performance: 90+ (room for optimization)
- Bundle size: ~200KB initial JS
- Images: Not yet optimized

### Optimization Opportunities
1. Implement `next/image` for automatic optimization
2. Add loading skeletons for dynamic content
3. Lazy load below-fold sections
4. Optimize font loading strategy

## Styling System

### Design Tokens (CSS Variables)
Located in `src/app/globals.css`:
```css
--background: 0 0% 100%;      /* Light mode */
--foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;
--radius: 0.5rem;
/* Plus 20+ more variables */
```

### Tailwind Configuration
- Custom animations in `tailwind.config.ts`
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Dark mode class strategy

### Component Styling Rules
1. **Use Tailwind utilities exclusively** - No inline styles
2. **Mobile-first approach** - Base styles for mobile
3. **Dark mode consideration** - Use dark: modifier
4. **Consistent spacing** - Follow 4/8px grid system
5. **Accessible contrast** - WCAG AA minimum

## API Routes

### `/api/github/stats`
- **Purpose**: Fetch GitHub statistics dynamically
- **Caching**: 1 hour revalidation
- **Response**: `{ totalCommits, totalRepos, followers, following }`
- **Fallback**: Returns estimated values on error
- **Auth**: Optional GITHUB_TOKEN for higher rate limits

## Environment Variables

```bash
# .env.local (create if adding features)
GITHUB_TOKEN=          # Optional: For GitHub API rate limits
RESEND_API_KEY=        # TODO: For contact form emails
PLAUSIBLE_DOMAIN=      # TODO: For analytics tracking
```

## Deployment

### Current Setup
- **Platform**: Vercel (automatic deployments)
- **Branch**: Deploys from `main`
- **Domain**: TBD
- **SSL**: Automatic via Vercel

### Deployment Checklist
1. [ ] Environment variables set in Vercel
2. [ ] Domain configured
3. [ ] Analytics enabled
4. [ ] Error tracking setup
5. [ ] Performance monitoring active

## Troubleshooting

### Common Issues

**Build fails with type errors**
```bash
npm run type-check  # See specific errors
# Fix types, then rebuild
```

**Tailwind classes not applying**
- Check for typos in class names
- Verify content paths in `tailwind.config.ts`
- Ensure proper imports in component

**Dark mode not working**
- Check ThemeProvider wraps entire app
- Verify `next-themes` is properly configured
- Clear localStorage and retry

**GitHub stats not updating**
- Check API route response: `/api/github/stats`
- Verify GITHUB_TOKEN if hitting rate limits
- Check browser console for errors

## Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS v3](https://tailwindcss.com/docs)
- [React 19 Features](https://react.dev/blog/2024/12/05/react-19)

### Project Files
- [Technical Implementation Plan](./technical-implementation-plan.md)
- [Architecture Documentation](./docs/ARCHITECTURE.md)
- [Content Guidelines](./docs/CONTENT_GUIDE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Style Guide](./docs/STYLE_GUIDE.md)

### Helpful Commands
```bash
# Check bundle size
npm run build
# Analyze bundle (after build)
npx @next/bundle-analyzer

# Update dependencies
npm update
# Check for outdated
npm outdated

# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

*Last updated: 2025-07-12*