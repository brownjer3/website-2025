export interface Experience {
  id: string
  company: string
  role: string
  period: {
    start: string
    end: string | "Present"
  }
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
}

export const experiences: Experience[] = [
  {
    id: "bluepine",
    company: "Bluepine",
    role: "Full-Stack Software Engineer",
    period: {
      start: "April 2024",
      end: "Present"
    },
    location: "Chicago, IL (Hybrid)",
    description: "Driving revenue generation and strategic product development for property management platform.",
    achievements: [
      "Enabled revenue generation by architecting and implementing complete Stripe billing infrastructure and onboarding systems, supporting 100% of customers",
      "Influenced strategic pivot through 6 months of direct collaboration with operations team, developing functional prototypes that shaped executive decision",
      "Built business-critical data infrastructure including automated pipelines, analytics dashboards, and reporting systems driving executive decision-making",
      "Delivered beyond engineering scope by proactively developing Interactive User Map, Automated Slack Bots, Bug Report System, and iOS room scan app",
      "Led cross-functional product development partnering with leadership to define Admin functionalities including sales funnel tracking and revenue forecasting"
    ],
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "tRPC", "Prisma ORM", "MySQL", "Redis", "Stripe", "Vercel"]
  },
  {
    id: "stickk",
    company: "stickK",
    role: "Full-Stack Software Engineer",
    period: {
      start: "February 2023",
      end: "April 2024"
    },
    location: "Los Angeles, CA (Remote)",
    description: "Modernized legacy infrastructure and pioneered AI features for behavior change platform.",
    achievements: [
      "Modernized legacy infrastructure by updating 30 legacy API endpoints, improving response times by 40%",
      "Empowered enterprise clients through admin dashboards with real-time analytics and custom reporting",
      "Inspired product vision by integrating various OpenAI APIs to create 6 internal feature prototypes"
    ],
    technologies: ["JavaScript", "React", "Node.js", "Python", "MySQL", "Redis", "OpenAI API", "REST APIs"]
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Full-Stack Software Engineer",
    period: {
      start: "October 2020",
      end: "February 2023"
    },
    location: "Los Angeles, CA (Remote)",
    description: "Founded analytics platform and delivered custom solutions for emerging tech companies.",
    achievements: [
      "Founded analytics platform for an emerging NFT marketplace, building a team and web app from scratch",
      "Drove project success by architecting elegant, custom web applications for the Crypto/NFT space"
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Web3", "Analytics", "NFT"]
  },
  {
    id: "stickk-pm",
    company: "stickK",
    role: "Product Manager",
    period: {
      start: "May 2017",
      end: "October 2020"
    },
    location: "Brooklyn, NY (Remote)",
    description: "Drove product strategy and began transition to engineering through hands-on technical contributions.",
    achievements: [
      "Generated new revenue stream by launching a self-serve product, scaling to 1,000 users within six months",
      "Reduced operational burden by 35% through building a comprehensive Help Center in JavaScript"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Analytics", "Product Management", "Agile"]
  }
]