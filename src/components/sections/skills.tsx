"use client"

import * as React from "react"
import { skills, skillCategories, proficiencyLevels } from "@/data/skills"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Package, Database, Wrench, Cloud, Calendar } from "lucide-react"

const iconMap = {
  Code,
  Package,
  Database,
  Wrench,
  Cloud,
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [selectedProficiency, setSelectedProficiency] = React.useState("all")

  const filteredSkills = React.useMemo(() => {
    let filtered = skills

    if (selectedCategory !== "all") {
      filtered = filtered.filter((skill) => skill.category === selectedCategory)
    }

    if (selectedProficiency !== "all") {
      filtered = filtered.filter((skill) => skill.proficiency === selectedProficiency)
    }

    return filtered
  }, [selectedCategory, selectedProficiency])

  const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
    const proficiency = proficiencyLevels.find((p) => p.value === skill.proficiency)!

    return (
      <div
        className={cn(
          "relative p-3 sm:p-4 rounded-lg border bg-card transition-all duration-300",
          "hover:shadow-md hover:border-primary/50",
          proficiency.bgColor
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h4 className="font-medium text-sm sm:text-base">{skill.name}</h4>
            {skill.yearsExperience && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">{skill.yearsExperience}+ yrs</span>
              </div>
            )}
          </div>
          <Badge
            variant="outline"
            className={cn("text-xs px-2 py-0.5", proficiency.color)}
          >
            {proficiency.label}
          </Badge>
        </div>

        {/* Proficiency indicator */}
        <div className="mt-3 flex gap-1">
          {[1, 2, 3].map((level) => (
            <div
              key={level}
              className={cn(
                "h-1 w-8 rounded-full transition-all duration-300",
                level <= (skill.proficiency === "expert" ? 3 : skill.proficiency === "proficient" ? 2 : 1)
                  ? proficiency.color.replace("text-", "bg-")
                  : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            A decade of continuous learning and growth
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </div>

        {/* Proficiency Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {proficiencyLevels.map((level) => (
            <div key={level.value} className="flex items-center gap-2">
              <div className={cn("flex gap-1", level.color)}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1 w-6 rounded-full",
                      i <= (level.value === "expert" ? 3 : level.value === "proficient" ? 2 : 1)
                        ? level.color.replace("text-", "bg-")
                        : "bg-muted"
                    )}
                  />
                ))}
              </div>
              <div>
                <span className={cn("font-medium text-sm", level.color)}>{level.label}</span>
                <span className="text-xs text-muted-foreground ml-2">{level.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Category Filter */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="flex-1">
            <div className="w-full overflow-x-auto pb-2">
              <TabsList className="flex w-max sm:grid sm:w-full sm:grid-cols-6">
                <TabsTrigger value="all" className="min-w-[80px] sm:min-w-0">All</TabsTrigger>
                {skillCategories.map((cat) => {
                  const Icon = iconMap[cat.icon as keyof typeof iconMap]
                  return (
                    <TabsTrigger key={cat.value} value={cat.value} className="text-xs min-w-[100px] sm:min-w-0 flex items-center">
                      <Icon className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="whitespace-nowrap">{cat.label}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>
          </Tabs>

          {/* Proficiency Filter */}
          <select
            value={selectedProficiency}
            onChange={(e) => setSelectedProficiency(e.target.value)}
            className="px-3 py-2 text-sm bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Levels</option>
            {proficiencyLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skills found matching your criteria.</p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Always exploring new technologies and best practices. Current focus areas include{" "}
            <span className="font-medium text-foreground">AI/ML integration</span>,{" "}
            <span className="font-medium text-foreground">performance optimization</span>, and{" "}
            <span className="font-medium text-foreground">system design</span>.
          </p>
        </div>
      </div>
    </section>
  )
}