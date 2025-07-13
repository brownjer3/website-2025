# Personal Website 2025

Modern personal portfolio website showcasing my journey as a Full Stack Software Engineer with 10+ years in tech, building scalable solutions that drive business impact.

## 🚀 Tech Stack

- **Framework:** Next.js 15.3.5 (App Router)
- **Runtime:** React 19.0.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v3.4.17
- **UI Components:** shadcn/ui
- **Theme:** next-themes (dark/light mode)
- **Deployment:** Vercel

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/brownjer3/website-2025.git
cd personal-website-2025

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage with all sections
│   └── api/            # API routes
│       └── github/     # GitHub stats API
├── components/          
│   ├── ui/             # shadcn/ui components
│   ├── sections/       # Page sections (Hero, Experience, etc.)
│   ├── features/       # Complex features (Theme toggle)
│   ├── common/         # Shared components (Navbar, Footer)
│   └── providers/      # React providers
├── data/               # Static data files
│   ├── experience.ts   # Work history from resume
│   ├── projects.ts     # GitHub projects
│   └── skills.ts       # Technical skills
└── lib/                # Utilities and hooks
```

## 🎯 Key Features

### ✅ Implemented
- **Dynamic GitHub Stats** - Real-time commit count via API
- **Interactive Experience Timeline** - Tabbed work history
- **Project Showcases** - STAR-formatted case studies from real GitHub projects
- **Skills Matrix** - Categorized skills with proficiency levels
- **Dark/Light Theme** - System-aware theme switching
- **Responsive Design** - Mobile-first approach
- **Accessibility** - Skip links, ARIA labels, keyboard navigation
- **Contact Form** - Ready for email integration

### 🚧 Coming Soon
- **Contact Form Integration** - Wire up email service
- **Smooth Animations** - Framer Motion transitions
- **Command Palette (⌘K)** - Quick navigation for power users
- **Blog System** - Technical articles with MDX
- **Enhanced GitHub Activity** - Contribution graph
- **Analytics** - Privacy-focused tracking
- **Performance Optimizations** - Image optimization, lazy loading

## 🎨 Design Philosophy

- **Mobile-first** responsive design
- **Performance-focused** with Core Web Vitals targets
- **Accessible** following WCAG 2.1 AA standards
- **Professional** yet personable aesthetic
- **Content accuracy** - All claims verified against resume

## 📊 Performance Targets

- Lighthouse Score: 95+ Performance, 100 Accessibility
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Bundle Size: < 100KB initial JS (currently ~200KB)

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development
```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Run linting and type checking
npm run lint
npm run type-check

# Format code
npm run format
```

### Environment Variables
Create `.env.local` for local development:
```bash
GITHUB_TOKEN=         # Optional: For higher GitHub API rate limits
RESEND_API_KEY=       # TODO: For contact form
PLAUSIBLE_DOMAIN=     # TODO: For analytics
```

## 📚 Documentation

Detailed documentation available in the `/docs` directory:
- [Architecture](./docs/ARCHITECTURE.md) - Technical architecture and patterns
- [Content Guide](./docs/CONTENT_GUIDE.md) - Writing and content standards
- [Style Guide](./docs/STYLE_GUIDE.md) - Design system and styling rules
- [Deployment](./docs/DEPLOYMENT.md) - Deployment instructions
- [CLAUDE.md](./CLAUDE.md) - Comprehensive development guide

## 🚀 Deployment

The site is configured for automatic deployment via Vercel:
- Production: Deploys from `main` branch
- Preview: Automatic for all PRs
- Domain: TBD

## 📄 License

Private repository - All rights reserved

---

*Building elegant solutions at the intersection of product thinking and engineering excellence.*