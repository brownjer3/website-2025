'use client'

import * as React from 'react'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ExternalLink,
  Github,
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  ChevronDown,
  Sparkles,
} from 'lucide-react'

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ml', label: 'AI/ML' },
  { value: 'infrastructure', label: 'Infrastructure' },
]

const statusColors = {
  production: 'success',
  prototype: 'secondary',
  archived: 'outline',
} as const

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [expandedProject, setExpandedProject] = React.useState<string | null>(
    null
  )

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === 'all') return projects
    return projects.filter((project) => project.category === selectedCategory)
  }, [selectedCategory])

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const otherProjects = filteredProjects.filter((p) => !p.featured)

  const MetricIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'users':
        return <Users className="h-4 w-4" />
      case 'performance':
        return <Zap className="h-4 w-4" />
      case 'impact':
        return <TrendingUp className="h-4 w-4" />
      case 'scale':
        return <BarChart3 className="h-4 w-4" />
      default:
        return null
    }
  }

  const ProjectCard = ({
    project,
    featured = false,
  }: {
    project: (typeof projects)[0]
    featured?: boolean
  }) => {
    const isExpanded = expandedProject === project.id

    return (
      <div
        className={cn(
          'overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg',
          featured && 'md:col-span-2',
          isExpanded && 'ring-2 ring-primary'
        )}
      >
        <div className="space-y-4 p-4 sm:p-5 md:p-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
              <Badge
                variant={statusColors[project.status]}
                className="shrink-0"
              >
                {project.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{project.period}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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

          {/* Case Study Toggle */}
          <button
            onClick={() => setExpandedProject(isExpanded ? null : project.id)}
            className={cn(
              'group relative w-full overflow-hidden rounded-lg transition-all duration-300',
              'bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5',
              'hover:from-primary/10 hover:via-primary/15 hover:to-primary/10',
              'border border-primary/20 hover:border-primary/30',
              'px-4 py-3',
              isExpanded &&
                'border-primary/30 from-primary/10 via-primary/15 to-primary/10'
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {isExpanded ? 'Hide Case Study' : 'View Case Study'}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  'h-4 w-4 text-primary transition-transform duration-300',
                  isExpanded && 'rotate-180'
                )}
              />
            </div>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-1000 group-hover:translate-x-0" />
          </button>

          {/* Case Study Details */}
          {isExpanded && (
            <div className="space-y-4 duration-300 animate-in slide-in-from-top-2">
              <div className="space-y-4 rounded-lg bg-gradient-to-br from-primary/5 via-transparent to-primary/5 p-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Situation
                      </h4>
                    </div>
                    <p className="pl-4 text-sm leading-relaxed text-muted-foreground">
                      {project.star.situation}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-primary delay-75" />
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Task
                      </h4>
                    </div>
                    <p className="pl-4 text-sm leading-relaxed text-muted-foreground">
                      {project.star.task}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-primary delay-150" />
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Action
                      </h4>
                    </div>
                    <p className="pl-4 text-sm leading-relaxed text-muted-foreground">
                      {project.star.action}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-primary delay-300" />
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Result
                      </h4>
                    </div>
                    <p className="pl-4 text-sm font-medium leading-relaxed text-muted-foreground">
                      {project.star.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.links.live && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
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
    <section id="projects" className="px-4 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Production-scale solutions with measurable impact
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        {/* Category Filter */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="mb-8"
        >
          <div className="w-full overflow-x-auto pb-2">
            <TabsList className="mx-auto flex w-max sm:grid sm:w-full sm:max-w-xl sm:grid-cols-5">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="min-w-[100px] sm:min-w-0"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold">Featured Projects</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="mb-6 text-xl font-semibold">More Projects</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
