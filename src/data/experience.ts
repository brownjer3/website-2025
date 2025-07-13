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
    id: "stickk",
    company: "stickK",
    role: "Senior Software Engineer",
    period: {
      start: "March 2024",
      end: "Present"
    },
    location: "Remote",
    description: "Leading development of AI-powered features and scaling infrastructure for behavior change platform with 2M+ users.",
    achievements: [
      "Architected and deployed AI goal-setting features, increasing user engagement by 40%",
      "Reduced API response times from 2s to 200ms through database optimization",
      "Built ML pipeline for personalized recommendations serving 30K+ daily active users",
      "Led migration to microservices architecture, improving deployment frequency by 3x"
    ],
    technologies: ["Python", "React", "TypeScript", "AWS", "PostgreSQL", "Redis", "Docker", "AI/ML"]
  },
  {
    id: "freelance",
    company: "Freelance Consultant",
    role: "Full Stack Developer",
    period: {
      start: "January 2023",
      end: "March 2024"
    },
    location: "Remote",
    description: "Delivered high-impact solutions for startups and enterprises, focusing on scalable web applications.",
    achievements: [
      "Built MVP for fintech startup that secured $500K in seed funding",
      "Optimized e-commerce platform, increasing conversion rate by 25%",
      "Developed custom CRM system handling 100K+ daily transactions",
      "Mentored 5 junior developers on best practices and system design"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe", "GraphQL", "Tailwind CSS"]
  },
  {
    id: "previous",
    company: "Previous Experience",
    role: "Product Manager → Engineer",
    period: {
      start: "2014",
      end: "2022"
    },
    location: "San Francisco, CA",
    description: "Transitioned from product management to engineering, bringing unique perspective to technical solutions.",
    achievements: [
      "Led product strategy for features impacting 1M+ users",
      "Self-taught programming and built production features within 6 months",
      "Bridged communication between technical and business teams",
      "Established data-driven decision making culture"
    ],
    technologies: ["JavaScript", "React", "Python", "SQL", "Analytics", "A/B Testing", "Agile"]
  }
]