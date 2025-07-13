# Style Guide

## Code Style

### TypeScript

#### General Principles
- Use TypeScript strict mode
- Prefer interfaces over types for object shapes
- Use explicit return types for functions
- Avoid `any` - use `unknown` if type is truly unknown

#### Naming Conventions

```typescript
// Components - PascalCase
export function UserProfile() {}

// Functions - camelCase
export function getUserData() {}

// Constants - UPPER_SNAKE_CASE
export const MAX_RETRIES = 3

// Interfaces - PascalCase with 'I' prefix avoided
interface UserProfile {
  name: string
  email: string
}

// Types - PascalCase
type ButtonVariant = 'primary' | 'secondary'

// Enums - PascalCase (members UPPER_SNAKE_CASE)
enum Status {
  PENDING = 'pending',
  ACTIVE = 'active'
}
```

#### File Organization

```typescript
// 1. Imports (grouped and sorted)
import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import type { UserProfile } from '@/types'

// 2. Type definitions
interface Props {
  user: UserProfile
  onUpdate: (user: UserProfile) => void
}

// 3. Component/Function
export function ProfileCard({ user, onUpdate }: Props) {
  // Implementation
}

// 4. Subcomponents (if any)
function ProfileAvatar() {}

// 5. Utilities (if any)
function formatUserName() {}
```

### React/Next.js

#### Component Structure

```typescript
// Prefer function declarations for components
export function ComponentName() {
  // 1. Hooks
  const [state, setState] = useState()
  const router = useRouter()

  // 2. Derived state
  const isActive = state === 'active'

  // 3. Effects
  useEffect(() => {
    // Effect logic
  }, [])

  // 4. Handlers
  const handleClick = () => {
    // Handler logic
  }

  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

#### Hooks Rules
- Custom hooks start with 'use'
- Keep hooks at the top level
- Follow Rules of Hooks

### CSS/Tailwind

#### Class Organization

```tsx
// Use cn() utility for conditional classes
<div 
  className={cn(
    // Base classes
    "flex items-center justify-center",
    // Responsive classes
    "px-4 md:px-6 lg:px-8",
    // State classes
    "hover:bg-gray-100 focus:outline-none",
    // Dark mode classes
    "dark:bg-gray-800 dark:hover:bg-gray-700",
    // Conditional classes
    isActive && "bg-blue-500 text-white",
    className // Allow className prop override
  )}
/>
```

#### Tailwind Best Practices
1. **Mobile-first**: Start with mobile styles, add responsive modifiers
2. **Consistent spacing**: Use Tailwind's spacing scale (4, 8, 12, 16, etc.)
3. **Color usage**: Use semantic color names from CSS variables
4. **Avoid arbitrary values**: Prefer Tailwind utilities over `[123px]`

### Design System

#### Colors

Our color system uses CSS variables that adapt to theme:

```css
/* Light mode colors (default) */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;
--secondary: 210 40% 96.1%;
--accent: 210 40% 96.1%;
--destructive: 0 84.2% 60.2%;
--muted: 210 40% 96.1%;
--card: 0 0% 100%;
--popover: 0 0% 100%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 222.2 84% 4.9%;
```

Usage in Tailwind:
```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Click me
  </button>
</div>
```

#### Typography

```css
/* Font sizes follow Tailwind's type scale */
text-xs    // 0.75rem (12px)
text-sm    // 0.875rem (14px)
text-base  // 1rem (16px)
text-lg    // 1.125rem (18px)
text-xl    // 1.25rem (20px)
text-2xl   // 1.5rem (24px)
text-3xl   // 1.875rem (30px)
text-4xl   // 2.25rem (36px)
text-5xl   // 3rem (48px)
```

#### Spacing

Follow 4px grid system:
```css
/* Common spacing values */
p-1   // 4px
p-2   // 8px
p-3   // 12px
p-4   // 16px
p-6   // 24px
p-8   // 32px
p-12  // 48px
p-16  // 64px
```

#### Shadows

```css
/* Use Tailwind's shadow utilities */
shadow-sm     // Subtle shadow
shadow        // Default shadow
shadow-md     // Medium shadow
shadow-lg     // Large shadow
shadow-xl     // Extra large shadow
```

### Component Patterns

#### Button Component

```tsx
// Primary button
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Click me</Button>

// Ghost button
<Button variant="ghost">Click me</Button>

// With icon
<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

#### Form Controls

```tsx
// Input with label
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="Enter your email"
  />
</div>

// Textarea
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea 
    id="message" 
    placeholder="Enter your message"
    rows={4}
  />
</div>
```

#### Cards and Sections

```tsx
// Section wrapper
<section className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    {/* Content */}
  </div>
</section>

// Card pattern
<div className="rounded-lg border bg-card p-6">
  <h3 className="text-lg font-semibold">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```

### Animation Guidelines

#### Transitions

```tsx
// Use Tailwind's transition utilities
<div className="transition-colors hover:bg-gray-100">
  Hover me
</div>

// Multiple properties
<div className="transition-all duration-200 ease-in-out">
  Smooth transitions
</div>
```

#### Animation Classes

```css
/* Custom animations in tailwind.config.ts */
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
}
```

### Accessibility

#### ARIA Labels

```tsx
// Navigation
<nav aria-label="Main navigation">
  {/* Nav items */}
</nav>

// Interactive elements
<button aria-label="Close dialog">
  <X className="h-4 w-4" />
</button>

// Form controls
<input aria-label="Search" type="search" />
```

#### Focus States

```tsx
// Always visible focus indicators
<button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Click me
</button>
```

#### Skip Links

```tsx
// At the start of the page
<SkipLinks />
```

### Dark Mode

#### Implementation

```tsx
// Components should support both themes
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-gray-100">
    Adapts to theme
  </p>
</div>
```

#### Best Practices
1. Test all components in both themes
2. Ensure sufficient contrast in both modes
3. Use semantic color variables
4. Avoid hard-coded colors

### Performance Guidelines

#### Image Optimization

```tsx
// Use next/image for automatic optimization
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

#### Code Splitting

```tsx
// Dynamic imports for heavy components
const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { loading: () => <Skeleton /> }
)
```

#### Lazy Loading

```tsx
// Intersection Observer for below-fold content
const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.1
})

<div ref={ref}>
  {inView && <ExpensiveComponent />}
</div>
```

### Git Commit Messages

Follow conventional commits:

```
feat: add contact form validation
fix: resolve mobile menu z-index issue
docs: update README with new features
style: format code with prettier
refactor: extract common button styles
test: add unit tests for form validation
chore: update dependencies
```

### Code Review Checklist

Before submitting PR:
- [ ] TypeScript compiles without errors
- [ ] ESLint passes
- [ ] Prettier formatted
- [ ] Mobile responsive
- [ ] Dark mode tested
- [ ] Accessibility checked
- [ ] Performance considered
- [ ] Browser tested (Chrome, Firefox, Safari)

---

*Last updated: 2025-07-12*