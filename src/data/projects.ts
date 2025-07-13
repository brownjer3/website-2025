export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  status: 'production' | 'prototype' | 'archived'
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
  category: 'web' | 'mobile' | 'ml' | 'infrastructure'
}

export const projects: Project[] = [
  {
    id: 'elara-news',
    title: 'Elara News - AI Blockchain Journalist',
    subtitle: 'AI-powered SUI blockchain ecosystem news platform',
    period: 'January 2025 - Present',
    status: 'production',
    featured: true,
    metrics: {
      scale: 'Multi-phase roadmap',
      impact: 'SUI ecosystem coverage',
      performance: 'Real-time updates',
    },
    star: {
      situation:
        'SUI blockchain ecosystem lacked comprehensive AI-powered news and analytics coverage',
      task: 'Build an AI journalism platform focused on SUI blockchain with future data marketplace capabilities',
      action:
        'Developed Next.js application with TypeScript, implemented AI-powered content generation, designed token economics with burn mechanism, created multi-phase development roadmap',
      result:
        'Launched platform providing exclusive insights and analytics for SUI cryptocurrency market, with plans for AI developer data marketplace',
    },
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Vercel',
      'AI/ML',
    ],
    links: {
      live: 'https://www.elara.news/',
    },
    category: 'web',
  },
  {
    id: 'nft-drop-calendar',
    title: 'NFT Drop Calendar',
    subtitle: 'Track upcoming NFT releases',
    period: 'March 2021 - November 2022',
    status: 'archived',
    featured: true,
    metrics: {
      impact: 'NFT community tool',
      scale: 'Multi-version iterations',
    },
    star: {
      situation:
        'NFT collectors needed a centralized place to track upcoming drops across multiple platforms',
      task: 'Create a web application to aggregate and display NFT drop information',
      action:
        'Built full-stack JavaScript application with Ruby backend API, implemented calendar view and filtering features, iterated through multiple versions based on user feedback',
      result:
        'Delivered community tool that helped NFT collectors stay informed about upcoming releases during the 2021-2022 NFT boom',
    },
    technologies: ['JavaScript', 'React', 'Ruby', 'Rails', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/brownjer3/nft-drop-calendar',
    },
    category: 'web',
  },
  {
    id: 'personal-portfolio-v1',
    title: 'Personal Portfolio Website',
    subtitle: 'Showcase projects and UI experiments',
    period: '2020 - 2024',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'Career development',
      scale: '4 years active',
    },
    star: {
      situation:
        'Needed a professional online presence to showcase projects and demonstrate frontend skills',
      task: 'Build a personal website that effectively presents my work and allows for UI experimentation',
      action:
        'Created custom JavaScript website with project showcase, implemented various UI experiments and animations, deployed on Netlify for continuous updates',
      result:
        'Successfully maintained professional web presence for 4 years, helping secure multiple opportunities',
    },
    technologies: ['JavaScript', 'HTML', 'CSS', 'Netlify'],
    links: {
      live: 'https://jerry-codes.netlify.app/',
      github: 'https://github.com/brownjer3/personal-website',
    },
    category: 'web',
  },
  {
    id: 'bluepine-ops',
    title: 'Bluepine Ops',
    subtitle: 'Operations management platform',
    period: 'TBD',
    status: 'production',
    featured: false,
    metrics: {
      users: 'TBD',
      impact: 'TBD',
    },
    star: {
      situation: 'TBD',
      task: 'TBD',
      action: 'TBD',
      result: 'TBD',
    },
    technologies: ['TBD'],
    links: {},
    category: 'web',
  },
  {
    id: 'stickk-playground',
    title: 'stickK PlAIground',
    subtitle: 'AI-powered goal setting platform',
    period: 'TBD',
    status: 'prototype',
    featured: false,
    metrics: {
      impact: 'TBD',
    },
    star: {
      situation: 'TBD',
      task: 'TBD',
      action: 'TBD',
      result: 'TBD',
    },
    technologies: ['TBD'],
    links: {},
    category: 'web',
  },
  {
    id: 'dookey-dash-leaderboard',
    title: 'Dookey Dash Leaderboard',
    subtitle: 'Game leaderboard tracking system',
    period: 'TBD',
    status: 'archived',
    featured: false,
    metrics: {
      users: 'TBD',
    },
    star: {
      situation: 'TBD',
      task: 'TBD',
      action: 'TBD',
      result: 'TBD',
    },
    technologies: ['TBD'],
    links: {},
    category: 'web',
  },
  {
    id: 'nft-portfolio',
    title: 'NFT Portfolio',
    subtitle: 'NFT collection management tool',
    period: 'TBD',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'TBD',
    },
    star: {
      situation: 'TBD',
      task: 'TBD',
      action: 'TBD',
      result: 'TBD',
    },
    technologies: ['TBD'],
    links: {},
    category: 'web',
  },
  {
    id: 'ios-room-scanning',
    title: 'iOS Room Scanning App',
    subtitle: '3D room scanning using RoomPlan API',
    period: 'TBD',
    status: 'prototype',
    featured: false,
    metrics: {
      performance: 'TBD',
    },
    star: {
      situation: 'TBD',
      task: 'TBD',
      action: 'TBD',
      result: 'TBD',
    },
    technologies: ['Swift', 'SwiftUI', 'RoomPlan'],
    links: {},
    category: 'mobile',
  },
  {
    id: 'barrow',
    title: 'Barrow',
    subtitle: 'Mobile lending platform',
    period: 'TBD',
    status: 'archived',
    featured: false,
    metrics: {
      users: 'TBD',
    },
    star: {
      situation: 'TBD',
      task: 'TBD',
      action: 'TBD',
      result: 'TBD',
    },
    technologies: ['TBD'],
    links: {},
    category: 'mobile',
  },
  {
    id: 'cadence-tunes',
    title: 'Cadence Tunes',
    subtitle: 'Music discovery platform',
    period: 'TBD',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'TBD',
    },
    star: {
      situation: 'TBD',
      task: 'TBD',
      action: 'TBD',
      result: 'TBD',
    },
    technologies: ['TBD'],
    links: {},
    category: 'web',
  },
]
