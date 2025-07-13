export interface Skill {
  name: string
  category: "language" | "framework" | "tool" | "database" | "cloud"
  proficiency: "expert" | "proficient" | "learning"
  yearsExperience?: number
  icon?: string
}

export const skills: Skill[] = [
  // Expert Level - Daily use, production experience
  { name: "TypeScript", category: "language", proficiency: "expert", yearsExperience: 4 },
  { name: "JavaScript", category: "language", proficiency: "expert", yearsExperience: 6 },
  { name: "Python", category: "language", proficiency: "expert", yearsExperience: 5 },
  { name: "React", category: "framework", proficiency: "expert", yearsExperience: 5 },
  { name: "Next.js", category: "framework", proficiency: "expert", yearsExperience: 3 },
  { name: "Node.js", category: "framework", proficiency: "expert", yearsExperience: 5 },
  { name: "PostgreSQL", category: "database", proficiency: "expert", yearsExperience: 5 },
  { name: "Git", category: "tool", proficiency: "expert", yearsExperience: 8 },
  { name: "AWS", category: "cloud", proficiency: "expert", yearsExperience: 4 },
  
  // Proficient - Regular use, strong understanding
  { name: "Go", category: "language", proficiency: "proficient", yearsExperience: 2 },
  { name: "SQL", category: "language", proficiency: "proficient", yearsExperience: 6 },
  { name: "React Native", category: "framework", proficiency: "proficient", yearsExperience: 2 },
  { name: "Express.js", category: "framework", proficiency: "proficient", yearsExperience: 4 },
  { name: "Django", category: "framework", proficiency: "proficient", yearsExperience: 3 },
  { name: "FastAPI", category: "framework", proficiency: "proficient", yearsExperience: 2 },
  { name: "Redis", category: "database", proficiency: "proficient", yearsExperience: 3 },
  { name: "MongoDB", category: "database", proficiency: "proficient", yearsExperience: 2 },
  { name: "Docker", category: "tool", proficiency: "proficient", yearsExperience: 4 },
  { name: "Kubernetes", category: "tool", proficiency: "proficient", yearsExperience: 2 },
  { name: "GraphQL", category: "tool", proficiency: "proficient", yearsExperience: 3 },
  { name: "Vercel", category: "cloud", proficiency: "proficient", yearsExperience: 3 },
  { name: "GitHub Actions", category: "tool", proficiency: "proficient", yearsExperience: 2 },
  
  // Learning - Active exploration, side projects
  { name: "Rust", category: "language", proficiency: "learning" },
  { name: "Swift", category: "language", proficiency: "learning" },
  { name: "Svelte", category: "framework", proficiency: "learning" },
  { name: "Deno", category: "framework", proficiency: "learning" },
  { name: "Terraform", category: "tool", proficiency: "learning" },
  { name: "Web3", category: "tool", proficiency: "learning" },
  { name: "Google Cloud", category: "cloud", proficiency: "learning" },
]

export const skillCategories = [
  { value: "language", label: "Languages", icon: "Code" },
  { value: "framework", label: "Frameworks", icon: "Package" },
  { value: "database", label: "Databases", icon: "Database" },
  { value: "tool", label: "Tools", icon: "Wrench" },
  { value: "cloud", label: "Cloud", icon: "Cloud" },
]

export const proficiencyLevels = [
  {
    value: "expert",
    label: "Expert",
    description: "Daily use, production experience",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    value: "proficient",
    label: "Proficient",
    description: "Regular use, strong understanding",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    value: "learning",
    label: "Learning",
    description: "Active exploration, side projects",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-500/10",
  },
]