"use client"

import * as React from "react"
import { experiences } from "@/data/experience"
import { cn } from "@/lib/utils"
import { Building2, MapPin, Calendar } from "lucide-react"

export function ExperienceSection() {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground text-lg">
            A journey from product to engineering, building at scale
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
                  index % 2 === 0 ? "md:text-right" : "md:direction-rtl"
                )}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 transition-all duration-300">
                  <div className={cn(
                    "absolute inset-0 bg-primary rounded-full animate-ping",
                    hoveredId === exp.id ? "opacity-75" : "opacity-0"
                  )} />
                </div>

                {/* Content */}
                <div className={cn(
                  "space-y-4",
                  index % 2 === 0 ? "" : "md:col-start-2"
                )}>
                  <div className={cn(
                    "bg-card p-4 sm:p-5 md:p-6 rounded-lg border transition-all duration-300",
                    hoveredId === exp.id ? "shadow-lg border-primary/50" : ""
                  )}>
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period.start} - {exp.period.end}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div className={cn(
                  "hidden md:block",
                  index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                )} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}