'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import {
  BarChart3,
  ExternalLink,
  Info,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Code2,
} from 'lucide-react'
import * as React from 'react'

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'ml', label: 'AI/ML' },
  { value: 'backend', label: 'Backend' },
]

const statusColors = {
  production: 'success',
  prototype: 'secondary',
  archived: 'outline',
} as const

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')

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
    return (
      <div
        className={cn(
          'relative flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg',
          featured &&
            'border-primary/20 bg-gradient-to-br from-card via-card to-primary/[0.02]'
        )}
      >
        <div className="flex flex-1 flex-col space-y-4 p-4 sm:p-5 md:p-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {featured && (
                  <Badge
                    variant="outline"
                    className="border-yellow-500/50 bg-yellow-50 text-yellow-700 dark:border-yellow-500/30 dark:bg-yellow-500/10 dark:text-yellow-500"
                  >
                    <Sparkles className="mr-1 h-3 w-3" />
                    Featured
                  </Badge>
                )}
                <Badge
                  variant={statusColors[project.status]}
                  className="shrink-0"
                >
                  {project.status}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{project.period}</p>
          </div>

          {/* Metrics - Full width with 3 columns */}
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="rounded-md bg-muted/30 p-3">
                <div className="flex items-center gap-2">
                  <MetricIcon type={key} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-medium">{value}</div>
                    <div className="text-xs text-muted-foreground">{key}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2">
            {project.links.live && (
              <Button variant="outline" size="sm" asChild className="h-8">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button variant="ghost" size="sm" asChild className="h-8">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="mr-1.5 h-3.5 w-3.5" />
                  Code
                </a>
              </Button>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8">
                  <Info className="mr-1.5 h-3.5 w-3.5" />
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.subtitle}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Situation
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {project.star.situation}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Task
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {project.star.task}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Action
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {project.star.action}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Result
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                      {project.star.result}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Spacer to push technologies to bottom */}
          <div className="flex-1" />

          {/* Technologies - At the bottom with better badge styling */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border-border/50 bg-secondary/50 text-xs"
              >
                {tech}
              </Badge>
            ))}
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
