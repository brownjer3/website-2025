export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  status: "production" | "prototype" | "archived"
  featured: boolean
  metrics: {
    users?: string
    performance?: string
    impact?: string
    scale?: string
  }
  star: {
    situation: string
    task: string
    action: string
    result: string
  }
  technologies: string[]
  links: {
    live?: string
    github?: string
    caseStudy?: string
  }
  category: "web" | "mobile" | "ml" | "infrastructure"
}

export const projects: Project[] = [
  {
    id: "stripe-billing-system",
    title: "Complete Stripe Billing Infrastructure",
    subtitle: "Revenue-enabling payment system",
    period: "April 2024 - Present",
    status: "production",
    featured: true,
    metrics: {
      users: "100% of customers",
      impact: "Enabled monetization",
      performance: "99.9% uptime",
      scale: "Foundation for growth"
    },
    star: {
      situation: "Company needed to monetize platform but lacked any billing infrastructure or payment processing",
      task: "Build complete billing system from scratch to enable revenue generation",
      action: "Architected and implemented Stripe integration with subscription management, payment processing, invoice generation, and customer portal. Built onboarding flow with KYC compliance",
      result: "Enabled company to start generating revenue, supporting 100% of customers with automated billing and establishing foundation for scale"
    },
    technologies: ["TypeScript", "Stripe API", "Next.js", "tRPC", "Prisma", "MySQL", "React"],
    links: {
      live: "https://bluepineapp.com"
    },
    category: "web"
  },
  {
    id: "fintech-mvp",
    title: "Fintech Investment Platform MVP",
    subtitle: "Democratizing investment access",
    period: "October 2023 - January 2024",
    status: "production",
    featured: true,
    metrics: {
      users: "5K+ beta users",
      impact: "$500K seed funding",
      performance: "99.9% uptime",
      scale: "100K+ transactions/day"
    },
    star: {
      situation: "Startup needed MVP to demonstrate product-market fit for seed funding round",
      task: "Build secure, scalable investment platform in 12 weeks with real-time trading",
      action: "Architected microservices with Next.js frontend, Node.js APIs, and PostgreSQL. Integrated Plaid for banking and Alpaca for trading. Implemented comprehensive testing and monitoring",
      result: "Delivered on time, helped secure $500K funding, platform processed $2M in transactions in first month"
    },
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Plaid API", "Stripe", "AWS", "Docker"],
    links: {
      github: "https://github.com",
      caseStudy: "#"
    },
    category: "web"
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Performance Optimization",
    subtitle: "Speed equals revenue",
    period: "June 2023 - August 2023",
    status: "production",
    featured: false,
    metrics: {
      performance: "3s → 1.2s load time",
      impact: "25% conversion increase",
      scale: "1M+ monthly visitors"
    },
    star: {
      situation: "E-commerce site losing $50K/month due to slow page loads and poor mobile experience",
      task: "Optimize performance to achieve sub-2s load times and improve conversion rates",
      action: "Implemented code splitting, image optimization, CDN integration, and database query optimization. Migrated to edge functions for dynamic content",
      result: "Achieved 60% faster load times, 25% increase in conversions, and $150K additional monthly revenue"
    },
    technologies: ["React", "Next.js", "Cloudflare", "PostgreSQL", "Redis", "Vercel"],
    links: {
      caseStudy: "#"
    },
    category: "web"
  },
  {
    id: "ml-recommendation",
    title: "ML Recommendation Engine",
    subtitle: "Personalization at scale",
    period: "January 2023 - March 2023",
    status: "production",
    featured: false,
    metrics: {
      users: "50K+ daily",
      impact: "35% CTR improvement",
      performance: "50ms inference"
    },
    star: {
      situation: "Generic recommendations leading to low engagement and high churn rates",
      task: "Build ML system for real-time personalized recommendations",
      action: "Developed collaborative filtering model with TensorFlow, deployed on Kubernetes with auto-scaling. Built feature store for real-time inference",
      result: "Increased click-through rates by 35%, reduced churn by 20%, and improved user session time by 45%"
    },
    technologies: ["Python", "TensorFlow", "Kubernetes", "Redis", "PostgreSQL", "FastAPI"],
    links: {
      github: "https://github.com"
    },
    category: "ml"
  },
  {
    id: "mobile-fitness",
    title: "React Native Fitness Tracker",
    subtitle: "Health metrics simplified",
    period: "September 2023",
    status: "prototype",
    featured: false,
    metrics: {
      users: "500+ beta testers",
      performance: "60fps animations"
    },
    star: {
      situation: "Fitness apps overwhelm users with complex features and poor UX",
      task: "Create simple, intuitive fitness tracking app focused on core metrics",
      action: "Built React Native app with focus on performance and simplicity. Integrated HealthKit/Google Fit, implemented smooth animations",
      result: "90% user satisfaction in beta, 4.8 star rating, multiple acquisition offers"
    },
    technologies: ["React Native", "TypeScript", "Firebase", "HealthKit", "Reanimated"],
    links: {
      github: "https://github.com"
    },
    category: "mobile"
  },
  {
    id: "devops-pipeline",
    title: "CI/CD Pipeline Modernization",
    subtitle: "From 2 hours to 10 minutes",
    period: "April 2023",
    status: "production",
    featured: false,
    metrics: {
      performance: "12x faster builds",
      impact: "10+ deploys/day"
    },
    star: {
      situation: "Legacy CI/CD pipeline taking 2+ hours, blocking development velocity",
      task: "Modernize build and deployment pipeline to enable rapid iteration",
      action: "Migrated from Jenkins to GitHub Actions, implemented parallel testing, Docker layer caching, and progressive deployments",
      result: "Reduced deployment time by 92%, enabled 10+ daily deployments, improved developer satisfaction"
    },
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Terraform", "AWS"],
    links: {
      caseStudy: "#"
    },
    category: "infrastructure"
  }
]