# Personal Website 2025

Modern personal portfolio website showcasing my journey as a Technical Product Engineer with 10+ years in tech, building scalable solutions that drive business impact.

## 🚀 Tech Stack

- **Framework:** Next.js 15.3.5 (App Router)
- **Runtime:** React 19.0.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v3.4.17
- **UI Components:** shadcn/ui (pending setup)
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
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── api/            # API routes (planned)
│   ├── blog/           # Blog posts (planned)
│   └── projects/       # Project showcases (planned)
├── components/          
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections (Hero, Experience, etc.)
│   ├── features/       # Complex features (CommandPalette, etc.)
│   └── common/         # Shared components (Navbar, Footer)
└── lib/                # Utilities, hooks, and helpers
```

## 🎯 Key Features (Planned)

- **Command Palette (⌘K)** - Quick navigation for power users
- **GitHub Integration** - Live contribution graph and activity
- **Dark/Light Theme** - System-aware theme switching
- **Performance Dashboard** - Real metrics from production experience
- **Interactive Timeline** - Visual work history
- **Project Showcases** - STAR-formatted case studies
- **Blog System** - Technical articles with MDX support

## 🚧 Current Status

The project is in early development. Currently implemented:
- ✅ Next.js 15 setup with TypeScript
- ✅ Tailwind CSS configuration
- ✅ Basic project structure
- ✅ Placeholder homepage

## 📋 Roadmap

1. **Phase 1 - Foundation** (Week 1)
   - [ ] Install and configure shadcn/ui
   - [ ] Create core layout components
   - [ ] Implement navigation system

2. **Phase 2 - Core Content** (Week 2)
   - [ ] Build Hero section
   - [ ] Create Experience timeline
   - [ ] Implement Projects showcase
   - [ ] Add Skills section

3. **Phase 3 - Interactive Features** (Week 3)
   - [ ] Add Command Palette
   - [ ] Integrate GitHub API
   - [ ] Implement theme switching
   - [ ] Add animations

4. **Phase 4 - Polish & Deploy** (Week 4)
   - [ ] Write project case studies
   - [ ] Optimize performance
   - [ ] Setup analytics
   - [ ] Deploy to production

## 🎨 Design Philosophy

- **Mobile-first** responsive design
- **Performance-focused** with Core Web Vitals targets
- **Accessible** following WCAG 2.1 AA standards
- **Professional** yet personable aesthetic

## 📊 Performance Targets

- Lighthouse Score: 95+ Performance, 100 Accessibility
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Bundle Size: < 100KB initial JS

## 🔧 Development

For detailed development guidelines, architecture decisions, and implementation notes, see [CLAUDE.md](./CLAUDE.md).

## 📝 Documentation

- [Technical Implementation Plan](./technical-implementation-plan.md) - Comprehensive project blueprint
- [CLAUDE.md](./CLAUDE.md) - Detailed development guide for Claude Code

## 📄 License

Private repository - All rights reserved

---

*Building elegant solutions at the intersection of product thinking and engineering excellence.*