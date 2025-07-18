export interface Experience {
  id: string
  company: string
  role: string
  period: {
    start: string
    end: string | 'Present'
  }
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
  type?: 'work' | 'education' // New field to distinguish entry types
}

export const experiences: Experience[] = [
  {
    id: 'bluepine',
    company: 'Bluepine',
    role: 'Full-Stack Software Engineer',
    period: {
      start: 'April 2024',
      end: 'Present',
    },
    location: 'Chicago, IL (Hybrid)',
    description:
      'Driving revenue generation and strategic product development for property management platform.',
    achievements: [
      'Architected and implemented complete Stripe billing infrastructure and onboarding systems, enabling revenue from 100% of customers',
      'Influenced strategic pivot through 6 months of cross-functional collaboration, developing functional, production-ready prototypes',
      'Built business-critical infrastructure including automated pipelines, analytics dashboards, and reporting systems driving decision-making',
      'Delivered beyond engineering scope by developing Interactive User Map, Automated Slack Bots, Bug Report System, and iOS room scan app',
      'Led cross-functional product development with leadership to define Admin functionalities including sales tracking and revenue forecasting',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'tRPC',
      'Prisma ORM',
      'MySQL',
      'Redis',
      'Stripe',
      'Vercel',
    ],
  },
  {
    id: 'stickk',
    company: 'stickK',
    role: 'Full-Stack Software Engineer',
    period: {
      start: 'February 2023',
      end: 'April 2024',
    },
    location: 'Los Angeles, CA (Remote)',
    description:
      'Modernized legacy infrastructure and pioneered AI features for behavior change platform.',
    achievements: [
      'Modernized legacy infrastructure by updating 30 legacy API endpoints, improving response times by 40%',
      'Empowered enterprise clients through admin dashboards with real-time analytics and custom reporting',
      'Inspired product vision by integrating various OpenAI APIs to create 6 internal feature prototypes',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Python',
      'MySQL',
      'Redis',
      'OpenAI API',
      'REST APIs',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Software Engineer',
    period: {
      start: 'October 2020',
      end: 'February 2023',
    },
    location: 'Los Angeles, CA (Remote)',
    description:
      'Founded analytics platform and delivered custom solutions for emerging tech companies.',
    achievements: [
      'Founded analytics platform for an emerging NFT marketplace, building a team and web app from scratch',
      'Drove project success by architecting elegant, custom web applications for the Crypto/NFT space',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'Web3',
      'Analytics',
      'NFT',
    ],
  },
  {
    id: 'flatiron',
    company: 'Flatiron School',
    role: 'Full-Stack Software Engineering Bootcamp',
    period: {
      start: 'October 2020',
      end: 'April 2021',
    },
    location: 'Remote',
    description:
      'Intensive full-stack software engineering program focused on modern web development.',
    achievements: [
      'Completed 600+ hours of hands-on curriculum in software engineering fundamentals',
      'Built multiple full-stack applications using React, Ruby on Rails, and PostgreSQL',
      'Mastered core CS concepts including data structures, algorithms, and OOP principles',
      'Collaborated on team projects using Git, pair programming, and Agile methodologies',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Ruby',
      'Ruby on Rails',
      'PostgreSQL',
      'HTML/CSS',
      'Git',
      'REST APIs',
    ],
    type: 'education',
  },
  {
    id: 'stickk-pm',
    company: 'stickK',
    role: 'Product Manager',
    period: {
      start: 'May 2017',
      end: 'October 2020',
    },
    location: 'Brooklyn, NY (Remote)',
    description:
      'Drove product strategy and began transition to engineering through hands-on technical contributions.',
    achievements: [
      'Generated new revenue stream by launching a self-serve product, scaling to 1,000 users within six months',
      'Reduced operational burden by 35% through building a comprehensive Help Center in JavaScript',
    ],
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'Analytics',
      'Product Management',
      'Agile',
    ],
  },
]
