'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

interface HeroStat {
  value: string
  label: string
}

export function HeroSection() {
  const [githubCommits, setGithubCommits] = React.useState<string>('2.5K+')

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
    { value: '10+', label: 'Years in Tech' },
    { value: githubCommits, label: 'GitHub Commits' },
  ]
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="relative inline-flex">
            <div className="absolute inset-0 animate-pulse rounded-full bg-green-500/20 blur-xl" />
            <div className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-green-500/25">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              Available for opportunities
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Jerry.
              </span>
            </h1>
            <p className="text-2xl font-semibold text-muted-foreground sm:text-3xl md:text-4xl">
              Product-Minded Software Engineer
            </p>
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Product-minded Full-Stack Engineer with 10 years in tech. I combine
            deep technical expertise in React and TypeScript with a unique
            product perspective to deliver high-impact features that drive
            business outcomes.
          </p>

          {/* Stats */}
          <div className="flex flex-col items-center justify-center gap-8 pt-8 sm:flex-row sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
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
