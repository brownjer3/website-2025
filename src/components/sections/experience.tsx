'use client'

import * as React from 'react'
import { experiences } from '@/data/experience'
import { cn } from '@/lib/utils'
import {
  Building2,
  MapPin,
  Calendar,
  GraduationCap,
  ChevronDown,
} from 'lucide-react'

// Prevent orphaned words by adding non-breaking spaces
function preventOrphans(text: string): string {
  // Replace space before last word with non-breaking space
  return text.replace(/ ([^ ]+)$/, '\u00A0$1')
}

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)
  const [expandedId, setExpandedId] = React.useState<string | null>(null)

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
                <div
                  className={cn(
                    'absolute left-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full transition-all duration-300 md:left-1/2',
                    exp.type === 'education' ? 'bg-primary/60' : 'bg-primary'
                  )}
                >
                  <div
                    className={cn(
                      'absolute inset-0 animate-ping rounded-full',
                      exp.type === 'education' ? 'bg-primary/60' : 'bg-primary',
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
                      'rounded-lg border p-4 transition-all duration-300 sm:p-5 md:p-6',
                      exp.type === 'education'
                        ? 'border-dashed border-primary/30 bg-primary/5'
                        : 'bg-card',
                      hoveredId === exp.id ? 'border-primary/50 shadow-lg' : ''
                    )}
                  >
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        {exp.type === 'education' && (
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Education
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {exp.type === 'education' ? (
                            <GraduationCap className="h-3 w-3 shrink-0" />
                          ) : (
                            <Building2 className="h-3 w-3 shrink-0" />
                          )}
                          <span className="truncate">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 shrink-0" />
                          <span className="whitespace-nowrap">
                            {exp.period.start} - {exp.period.end}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm text-muted-foreground">
                      {preventOrphans(exp.description)}
                    </p>

                    {/* Expand/Collapse Toggle */}
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === exp.id ? null : exp.id)
                      }
                      className={cn(
                        'mt-4 flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium',
                        'bg-muted/50 transition-all duration-300 hover:bg-muted',
                        expandedId === exp.id && 'bg-muted'
                      )}
                    >
                      <span>
                        {expandedId === exp.id
                          ? 'Hide Details'
                          : 'View Details'}
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-300',
                          expandedId === exp.id && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Expandable Content */}
                    {expandedId === exp.id && (
                      <div className="mt-4 space-y-4 duration-300 animate-in slide-in-from-top-2">
                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold">
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
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
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="mb-2 text-sm font-semibold">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
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
                    )}
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
