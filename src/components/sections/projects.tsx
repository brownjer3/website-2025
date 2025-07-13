"use client"

import * as React from "react"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, BarChart3, Users, Zap, TrendingUp } from "lucide-react"

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "ml", label: "AI/ML" },
  { value: "infrastructure", label: "Infrastructure" },
]

const statusColors = {
  production: "success",
  prototype: "secondary",
  archived: "outline",
} as const

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [expandedProject, setExpandedProject] = React.useState<string | null>(null)

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "all") return projects
    return projects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const otherProjects = filteredProjects.filter((p) => !p.featured)

  const MetricIcon = ({ type }: { type: string }) => {
    switch (type) {
      case "users":
        return <Users className="h-4 w-4" />
      case "performance":
        return <Zap className="h-4 w-4" />
      case "impact":
        return <TrendingUp className="h-4 w-4" />
      case "scale":
        return <BarChart3 className="h-4 w-4" />
      default:
        return null
    }
  }

  const ProjectCard = ({ project, featured = false }: { project: typeof projects[0]; featured?: boolean }) => {
    const isExpanded = expandedProject === project.id

    return (
      <div
        className={cn(
          "bg-card border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg",
          featured && "md:col-span-2",
          isExpanded && "ring-2 ring-primary"
        )}
      >
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.subtitle}</p>
              </div>
              <Badge variant={statusColors[project.status]} className="shrink-0">
                {project.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{project.period}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <MetricIcon type={key} />
                <div>
                  <div className="text-sm font-medium">{value}</div>
                  <div className="text-xs text-muted-foreground">{key}</div>
                </div>
              </div>
            ))}
          </div>

          {/* STAR Format Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpandedProject(isExpanded ? null : project.id)}
            className="w-full"
          >
            {isExpanded ? "Hide Details" : "View Case Study (STAR Format)"}
          </Button>

          {/* STAR Details */}
          {isExpanded && (
            <div className="space-y-4 pt-4 border-t animate-in slide-in-from-top-2 duration-300">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-primary">Situation</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.star.situation}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary">Task</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.star.task}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary">Action</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.star.action}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary">Result</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.star.result}</p>
                </div>
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.links.live && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Production-scale solutions with measurable impact
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>

        {/* Category Filter */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-5">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-6">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}