"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroStat {
  value: string
  label: string
}

export function HeroSection() {
  const [githubCommits, setGithubCommits] = React.useState<string>("2.5K+")
  
  React.useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('/api/github/stats')
        if (response.ok) {
          const data = await response.json()
          // Format the number nicely
          if (data.totalCommits >= 1000) {
            setGithubCommits(`${(data.totalCommits / 1000).toFixed(1)}K+`)
          } else {
            setGithubCommits(`${data.totalCommits}+`)
          }
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error)
      }
    }
    
    fetchGitHubStats()
  }, [])
  
  const stats: HeroStat[] = [
    { value: "10+", label: "Years in Tech" },
    { value: githubCommits, label: "GitHub Commits" },
    { value: "15+", label: "Projects Shipped" },
  ]
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary">
            Available for opportunities
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Jerry.
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
              Full Stack Software Engineer
            </p>
          </div>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Product-minded Full Stack Engineer with 10 years in tech. 
            I combine deep technical expertise in React and TypeScript with a unique product perspective 
            to deliver high-impact features that drive business outcomes.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Jerry-Brown.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}