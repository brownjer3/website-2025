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
  category: 'web' | 'mobile' | 'ml' | 'backend'
}

export const projects: Project[] = [
  {
    id: 'pipe',
    title: 'Pipe MCP Server',
    subtitle: 'Unified developer context through Model Context Protocol',
    period: 'July 2025',
    status: 'production',
    featured: true,
    metrics: {
      performance: 'Real-time sync across platforms',
      impact: 'Multi-platform integration',
      scale: 'Enterprise-ready architecture',
    },
    star: {
      situation:
        'Developers needed a unified way to access context across GitHub, Slack, Jira, Linear, and Notion without constantly switching between platforms',
      task: 'Build an MCP server that integrates multiple developer platforms into a unified context graph with real-time updates',
      action:
        'Implemented Model Context Protocol server with PostgreSQL for storage, Redis for caching/queues, Neo4j for graph relationships, OAuth authentication for each platform, WebSocket real-time updates, and BullMQ background job processing',
      result:
        'Created a functional MCP server that unifies developer context across platforms with JWT authentication, real-time sync capabilities, and modular architecture for easy platform additions',
    },
    technologies: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Neo4j',
      'Express',
      'WebSocket',
      'Prisma',
      'BullMQ',
    ],
    links: {
      live: 'https://pipe-production.up.railway.app/',
      github: 'https://github.com/brownjer3/pipe',
    },
    category: 'backend',
  },
  {
    id: 'barrow',
    title: 'Barrow',
    subtitle: 'Peer-to-peer marketplace for tool and equipment sharing',
    period: 'July 2025',
    status: 'prototype',
    featured: false,
    metrics: {
      impact: 'Community building app',
      scale: 'Mobile-first platform',
      performance: 'Native mobile animations',
    },
    star: {
      situation:
        'Communities needed a fun, accessible way to share tools and equipment locally, reducing waste and building neighborhood connections',
      task: 'Build a mobile app that makes borrowing and lending tools as easy and playful as "kids sharing toys in the neighborhood"',
      action:
        'Developed React Native/Expo app with TypeScript, implemented playful animations throughout, created Airtable backend integration, designed warm community-focused UI with spring animations and micro-interactions',
      result:
        'Delivered MVP-ready mobile app with complete UI foundation, 11 animated components, and scalable architecture ready for community testing',
    },
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Airtable',
      'Redux Toolkit',
      'React Navigation',
    ],
    links: {
      github: 'https://github.com/brownjer3/barrow',
    },
    category: 'mobile',
  },
  {
    id: 'devflow',
    title: 'DevFlow Components',
    subtitle: 'AI-enhanced React components for modern developers',
    period: 'July 2025',
    status: 'prototype',
    featured: true,
    metrics: {
      performance: '< 100ms renders',
      impact: 'Streaming AI features',
      scale: 'React 19 ready',
    },
    star: {
      situation:
        'Modern React developers needed production-ready components with integrated AI capabilities and exceptional performance',
      task: 'Build a component library featuring streaming AI, React 19 features, and a professional design system',
      action:
        'Created SmartDataTable and AISearchBar components with TypeScript, implemented real-time streaming AI responses, built comprehensive design system with electric blue (#0066FF) branding, optimized for < 100ms renders and < 45KB bundles',
      result:
        'Delivered production-ready React 19 components with streaming AI, optimistic updates, and comprehensive documentation on live demo site',
    },
    technologies: [
      'TypeScript',
      'React 19',
      'Next.js',
      'Tailwind CSS',
      'OpenAI',
      'Vercel',
    ],
    links: {
      live: 'https://devflow-components.vercel.app/',
      github: 'https://github.com/brownjer3/devflow',
    },
    category: 'web',
  },
  {
    id: 'elizara',
    title: 'Elara News - AI Agent',
    subtitle:
      'Autonomous AI agent for the SUI blockchain built on Eliza framework',
    period: 'June 2025',
    status: 'production',
    featured: true,
    metrics: {
      scale: 'Multi-platform deployment',
      impact: 'AI agent automation',
      performance: 'Real-time responses',
    },
    star: {
      situation:
        'Needed to explore cutting-edge AI agent technology and build autonomous systems using the latest Eliza framework',
      task: 'Develop an AI agent capable of autonomous operation across multiple platforms and contexts',
      action:
        'Built comprehensive AI agent using Eliza framework with TypeScript, implemented multi-platform integrations, created custom behaviors and response systems',
      result:
        'Delivered fully functional AI agent with autonomous capabilities, demonstrating expertise in modern AI development frameworks',
    },
    technologies: [
      'TypeScript',
      'Eliza Framework',
      'AI/ML',
      'Node.js',
      'OpenAI',
    ],
    links: {
      live: 'https://www.elara.news/',
      github: 'https://github.com/brownjer3/elizara',
    },
    category: 'ml',
  },
  {
    id: 'room-scan',
    title: 'iOS Room Scanning App',
    subtitle: '3D room scanning using RoomPlan API',
    period: 'May 2025',
    status: 'prototype',
    featured: true,
    metrics: {
      performance: 'Real-time 3D scanning',
      impact: 'Mobile 3D capture',
      scale: 'iOS production ready',
    },
    star: {
      situation:
        'Modern iOS applications needed sophisticated 3D room scanning capabilities for real estate and interior design use cases',
      task: "Build native iOS application leveraging Apple's RoomPlan API for accurate 3D room capture and measurement",
      action:
        'Developed Swift/SwiftUI application with RoomPlan integration, implemented real-time 3D scanning interface, created export functionality for captured room data',
      result:
        'Delivered production-ready iOS app with seamless 3D room scanning, demonstrating expertise in cutting-edge Apple frameworks',
    },
    technologies: ['Swift', 'SwiftUI', 'RoomPlan', 'iOS', 'Core Data'],
    links: {
      github: 'https://github.com/brownjer3/room-scan',
    },
    category: 'mobile',
  },
  {
    id: 'bluepiners-map',
    title: 'Bluepiners Map',
    subtitle: 'Interactive service provider location mapping',
    period: 'April 2025',
    status: 'production',
    featured: false,
    metrics: {
      users: '500+ providers',
      impact: 'Geographic visualization',
      performance: 'Real-time updates',
    },
    star: {
      situation:
        'Bluepine needed geographic visualization of service providers to optimize territory management and customer matching',
      task: 'Create interactive mapping solution showing provider locations, availability, and service areas',
      action:
        'Built React-based mapping application with geographic data visualization, implemented real-time provider status updates, created territory management tools',
      result:
        'Delivered interactive mapping platform improving operational efficiency and customer-provider matching',
    },
    technologies: ['React', 'TypeScript', 'Mapbox', 'Next.js', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/brownjer3/bluepiners-map',
    },
    category: 'web',
  },
  {
    id: 'bluepine-admin',
    title: 'Bluepine Admin Panel',
    subtitle: 'Administrative dashboard for service management',
    period: 'March 2025',
    status: 'production',
    featured: false,
    metrics: {
      users: '100+ admins',
      impact: 'Operations management',
      scale: 'Multi-tenant platform',
    },
    star: {
      situation:
        'Bluepine platform needed comprehensive administrative tools for managing service providers and operations',
      task: 'Build scalable admin dashboard with user management, analytics, and operational controls',
      action:
        'Developed Next.js admin panel with TypeScript, implemented role-based access control, created analytics dashboards, built service provider management tools',
      result:
        'Delivered production admin platform serving 100+ users with comprehensive operational management capabilities',
    },
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'MySQL',
      'Azure',
    ],
    links: {
      github: 'https://github.com/brownjer3/bluepine-admin',
    },
    category: 'web',
  },
  {
    id: 'stickk-plaiground',
    title: 'stickK plAIground',
    subtitle: 'AI-powered prototypes for goal commitment platform',
    period: 'February 2024',
    status: 'production',
    featured: false,
    metrics: {
      impact: '6 AI prototypes',
      scale: 'Enterprise integration',
      performance: 'OpenAI API optimization',
    },
    star: {
      situation:
        'stickK.com needed to explore how AI could enhance their goal commitment platform across various use cases from commitment creation to support',
      task: 'Build 6 distinct AI prototypes demonstrating different applications of OpenAI APIs within the stickK ecosystem',
      action:
        'Developed Next.js/TypeScript platform with OpenAI Assistant API integration, implemented commitment creation chat with DALL-E 3 image generation, built evidence verification with Vision API, created dynamic nudge generator and support bot, added admin tools for data analysis',
      result:
        'Delivered production-ready AI playground deployed on Vercel showcasing practical AI implementations for goal commitment enhancement',
    },
    technologies: [
      'TypeScript',
      'Next.js',
      'OpenAI API',
      'Mantine UI',
      'Vercel',
      'Assistant API',
      'DALL-E 3',
      'Vision API',
    ],
    links: {
      live: 'https://stickk-plaiground.vercel.app',
      github: 'https://github.com/brownjer3/stickK-plAIground',
    },
    category: 'ml',
  },
  {
    id: 'dookey-leaderboard',
    title: 'DookeyDashBored',
    subtitle: 'Real-time leaderboard for Bored Ape Yacht Club game',
    period: 'January 2023',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'Community gaming tool',
      scale: 'Real-time updates',
      performance: 'Live leaderboard tracking',
    },
    star: {
      situation:
        'Bored Ape Yacht Club community needed a comprehensive leaderboard to track Dookey Dash game scores with real-time updates and tier-based rankings',
      task: 'Build a full-stack web application displaying live game scores, tier rankings, and player statistics with automatic data updates',
      action:
        'Developed Next.js application with server-side rendering for performance, implemented Prisma ORM with database migrations, created real-time data fetching with automatic updates, built responsive UI with tier filtering and pagination',
      result:
        'Delivered production leaderboard deployed on Vercel providing real-time game rankings and statistics for the BAYC community during the Dookey Dash event',
    },
    technologies: [
      'Next.js',
      'React',
      'JavaScript',
      'Prisma',
      'CSS Modules',
      'Vercel',
    ],
    links: {
      live: 'https://dookey-dash-bored.vercel.app',
      github: 'https://github.com/brownjer3/dookey-leaderboard',
    },
    category: 'web',
  },
  {
    id: 'nft-drop-cal-v2',
    title: 'NFT Drop Calendar v2',
    subtitle: 'Enhanced NFT release tracking platform',
    period: 'November 2022',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'NFT community tool',
      scale: 'Multi-version iterations',
    },
    star: {
      situation:
        'NFT collectors needed improved tracking system for upcoming releases with better UX and more comprehensive data',
      task: 'Rebuild NFT drop calendar with enhanced features, better performance, and improved user experience',
      action:
        'Developed React-based calendar application with enhanced UI/UX, implemented advanced filtering and search capabilities, added comprehensive drop information and notifications',
      result:
        'Delivered improved NFT tracking tool with better user experience during peak NFT market activity',
    },
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Web3'],
    links: {
      github: 'https://github.com/brownjer3/nft-drop-cal-v2',
    },
    category: 'web',
  },
  {
    id: 'nft-portfolio',
    title: 'NFT Portfolio Dashboard',
    subtitle: 'Ethereum wallet NFT viewer with Alchemy integration',
    period: 'November 2022',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'Web3 portfolio tool',
      scale: 'Ethereum mainnet',
      performance: 'Infinite scrolling',
    },
    star: {
      situation:
        'Hologram Labs needed a technical assessment showcasing ability to build Web3 applications with wallet connectivity and blockchain data visualization',
      task: 'Create React webpage allowing users to connect Ethereum wallet and view their NFT collection in an organized grid layout',
      action:
        'Built Next.js application with web3.js wallet integration, implemented Alchemy API for NFT data retrieval, created responsive grid layout with React Bootstrap, added infinite scrolling functionality for large collections',
      result:
        'Delivered complete NFT portfolio viewer meeting all requirements with clean UI, wallet connection, and efficient NFT display capabilities',
    },
    technologies: [
      'React',
      'Next.js',
      'Web3.js',
      'Alchemy API',
      'React Bootstrap',
      'JavaScript',
    ],
    links: {
      github: 'https://github.com/brownjer3/nft-portfolio',
    },
    category: 'web',
  },
  {
    id: 'gme-rarity-frontend',
    title: 'GameStop NFT Rarity Tool',
    subtitle: 'NFT rarity analysis and ranking system',
    period: 'August 2022',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'NFT community tool',
      scale: 'GameStop marketplace',
    },
    star: {
      situation:
        'GameStop NFT marketplace users needed tools to analyze rarity and value of NFT collections',
      task: 'Build frontend application to display NFT rarity rankings and analysis for GameStop marketplace',
      action:
        'Created React application with rarity calculation algorithms, implemented collection browsing interface, integrated with GameStop NFT marketplace data',
      result:
        'Delivered community tool helping users make informed decisions about NFT purchases and collection value',
    },
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Web3'],
    links: {
      github: 'https://github.com/brownjer3/gme-rarity-frontend',
    },
    category: 'web',
  },
  {
    id: 'cadence-tunes-v2',
    title: 'Cadence Tunes',
    subtitle: 'Running playlist generator based on cadence',
    period: 'December 2021',
    status: 'archived',
    featured: false,
    metrics: {
      impact: 'Fitness music tool',
      scale: 'Spotify integration',
    },
    star: {
      situation:
        'Runners needed curated playlists matching their running cadence (steps per minute) for optimal performance',
      task: 'Build web application that generates running playlists based on target cadence and music preferences',
      action:
        'Developed full-stack application with vanilla JavaScript frontend and Ruby on Rails backend, integrated Spotify API for music recommendations, implemented cadence-based song matching algorithm',
      result:
        'Delivered functional running playlist generator helping athletes optimize their training with tempo-matched music',
    },
    technologies: ['JavaScript', 'Ruby', 'Rails', 'Spotify API', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/brownjer3/cadence-tunes-v2',
    },
    category: 'web',
  },
]
