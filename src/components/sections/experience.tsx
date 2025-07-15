'use client'

import * as React from 'react'
import { experiences } from '@/data/experience'
import { cn } from '@/lib/utils'
import { Building2, MapPin, Calendar } from 'lucide-react'

// Prevent orphaned words by adding non-breaking spaces
function preventOrphans(text: string): string {
  // Replace space before last word with non-breaking space
  return text.replace(/ ([^ ]+)$/, '\u00A0$1')
}

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)

  return (
    <section
      id="experience"
      className="bg-muted/50 px-4 py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
          <p className="text-lg text-muted-foreground">
            A journey from product to engineering, building at scale
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-0 top-0 w-0.5 -translate-x-1/2 bg-border md:left-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={cn(
                  'relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12',
                  index % 2 === 0 ? 'md:text-right' : 'md:direction-rtl'
                )}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 md:left-1/2">
                  <div
                    className={cn(
                      'absolute inset-0 animate-ping rounded-full bg-primary',
                      hoveredId === exp.id ? 'opacity-75' : 'opacity-0'
                    )}
                  />
                </div>

                {/* Content */}
                <div
                  className={cn(
                    'space-y-4',
                    index % 2 === 0 ? '' : 'md:col-start-2'
                  )}
                >
                  <div
                    className={cn(
                      'rounded-lg border bg-card p-4 transition-all duration-300 sm:p-5 md:p-6',
                      hoveredId === exp.id ? 'border-primary/50 shadow-lg' : ''
                    )}
                  >
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {exp.period.start} - {exp.period.end}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm text-muted-foreground">
                      {preventOrphans(exp.description)}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-4 space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="grid grid-cols-[auto_1fr] gap-3 text-sm"
                        >
                          <span className="mt-0.5 text-primary">•</span>
                          <span className="leading-relaxed">
                            {preventOrphans(achievement)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-primary/10 px-2 py-1 text-xs text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div
                  className={cn(
                    'hidden md:block',
                    index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
