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

// 2. Types/Interfaces
interface ComponentProps {
  title: string
}

// 3. Constants
const ANIMATION_DURATION = 300

// 4. Component
export function Component({ title }: ComponentProps) {
  // Implementation
}

// 5. Helper functions
function helperFunction() {}
```

### React/Next.js

#### Component Structure

```typescript
// Prefer function declarations for components
export function ProfileCard({ user }: ProfileCardProps) {
  // 1. Hooks
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  
  // 2. Derived state
  const fullName = `${user.firstName} ${user.lastName}`
  
  // 3. Effects
  useEffect(() => {
    // Effect logic
  }, [dependency])
  
  // 4. Handlers
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  // 5. Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

#### Props Interface

```typescript
// Always define props interface above component
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ 
  variant = 'primary',
  size = 'md',
  children,
  onClick 
}: ButtonProps) {
  // Implementation
}
```

### CSS/Tailwind

#### Class Organization

```typescript
// Use cn() utility for conditional classes
import { cn } from '@/lib/utils'

<div 
  className={cn(
    // Base classes
    "flex items-center justify-center",
    // Spacing
    "p-4 m-2",
    // Typography
    "text-sm font-medium",
    // Colors
    "bg-white text-gray-900",
    // Dark mode
    "dark:bg-gray-900 dark:text-white",
    // States
    "hover:bg-gray-50 focus:outline-none",
    // Responsive
    "md:p-6 lg:text-base",
    // Conditional
    isActive && "bg-blue-500 text-white"
  )}
/>
```

#### Component Styling Pattern

```typescript
// Define variant styles as objects
const buttonVariants = {
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  variants: {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  },
  sizes: {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-11 px-8",
  }
}
```

### File Naming

```
components/
├── ui/
│   ├── button.tsx          # Lowercase, singular
│   └── dialog.tsx
├── sections/
│   ├── hero-section.tsx    # Kebab-case for multi-word
│   └── project-grid.tsx
└── features/
    ├── command-palette/    # Feature folders
    │   ├── index.tsx
    │   └── command-palette-item.tsx
    └── github-activity.tsx
```

## Git Commit Conventions

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, semicolons, etc)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding missing tests
- `chore`: Changes to build process or auxiliary tools

### Examples

```bash
feat(hero): add animated gradient background

fix(nav): correct mobile menu z-index issue

docs: update README with new setup instructions

style: format all files with prettier

refactor(api): extract GitHub service into separate module

perf(images): implement lazy loading for project images
```

## Component Documentation

### Component Comments

```typescript
/**
 * ProfileCard displays user information in a card format
 * 
 * @example
 * <ProfileCard 
 *   user={{
 *     name: "John Doe",
 *     role: "Developer",
 *     avatar: "/avatar.jpg"
 *   }}
 *   variant="compact"
 * />
 */
export function ProfileCard({ user, variant = 'default' }: ProfileCardProps) {
  // Implementation
}
```

### Prop Documentation

```typescript
interface ProfileCardProps {
  /** User object containing profile information */
  user: {
    /** Display name of the user */
    name: string
    /** Professional role or title */
    role: string
    /** URL to avatar image */
    avatar?: string
  }
  /** Visual variant of the card */
  variant?: 'default' | 'compact' | 'detailed'
  /** Callback fired when card is clicked */
  onClick?: () => void
}
```

## Accessibility Guidelines

### ARIA Labels

```typescript
// Always provide meaningful labels
<button
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
  aria-controls="navigation-menu"
>
  <MenuIcon />
</button>

// Use semantic HTML
<nav aria-label="Main navigation">
  <ul role="list">
    <li>
      <a href="/about">About</a>
    </li>
  </ul>
</nav>
```

### Focus Management

```typescript
// Visible focus indicators
className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

// Keyboard navigation
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    handleAction()
  }
}}
```

## Performance Guidelines

### Image Optimization

```typescript
import Image from 'next/image'

// Always use Next.js Image component
<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>
```

### Component Optimization

```typescript
// Memoize expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])

// Prevent unnecessary re-renders
const MemoizedComponent = memo(Component)

// Lazy load heavy components
const HeavyComponent = dynamic(
  () => import('./heavy-component'),
  { 
    loading: () => <Skeleton />,
    ssr: false 
  }
)
```

---

*Follow these guidelines to maintain consistency and quality across the codebase.*