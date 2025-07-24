'use client'

import * as React from 'react'

interface GitHubStats {
  totalCommits: number
  totalRepos: number
  followers: number
  following: number
}

interface CachedGitHubStats extends GitHubStats {
  timestamp: number
}

interface UseGitHubStatsReturn {
  commits: string
  repos: number
  followers: number
  following: number
  isLoading: boolean
  error: Error | null
}

const CACHE_KEY = 'github-stats-cache'
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

function formatCommitCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K+`
  }
  return `${count}+`
}

function getCachedStats(): CachedGitHubStats | null {
  if (typeof window === 'undefined') return null

  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return null

    const data = JSON.parse(cached) as CachedGitHubStats
    const now = Date.now()

    // Check if cache is still valid
    if (now - data.timestamp < CACHE_DURATION) {
      return data
    }

    return null
  } catch (error) {
    console.error('Error reading cached GitHub stats:', error)
    return null
  }
}

function setCachedStats(stats: GitHubStats): void {
  if (typeof window === 'undefined') return

  try {
    const data: CachedGitHubStats = {
      ...stats,
      timestamp: Date.now(),
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Error caching GitHub stats:', error)
  }
}

export function useGitHubStats(): UseGitHubStatsReturn {
  // Start with null to ensure server/client consistency
  const [stats, setStats] = React.useState<GitHubStats | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)
  const [isHydrated, setIsHydrated] = React.useState(false)

  // Handle hydration - load cached data after mount
  React.useEffect(() => {
    setIsHydrated(true)
    const cached = getCachedStats()
    if (cached) {
      setStats({
        totalCommits: cached.totalCommits,
        totalRepos: cached.totalRepos,
        followers: cached.followers,
        following: cached.following,
      })
      // If we have fresh cache, no need to show loading
      if (Date.now() - cached.timestamp < CACHE_DURATION) {
        setIsLoading(false)
      }
    }
  }, [])

  React.useEffect(() => {
    // Skip if not hydrated yet
    if (!isHydrated) return

    const fetchStats = async () => {
      try {
        // Check if we already have valid cached data
        const cached = getCachedStats()
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
          // Already loaded in hydration effect
          return
        }

        // Fetch fresh data
        setIsLoading(true)
        const response = await fetch('/api/github/stats')

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub stats: ${response.status}`)
        }

        const data = (await response.json()) as GitHubStats

        // Only update if we got real data (not zeros from fallback)
        if (data.totalCommits > 0) {
          setStats(data)
          setCachedStats(data)
        } else {
          // If API returned zeros and we have no cached data, check for existing cache
          const existingCache = getCachedStats()
          if (!existingCache) {
            // No cache available, set minimal stats
            setStats(data)
          }
        }
        setError(null)
      } catch (err) {
        console.error('Failed to fetch GitHub stats:', err)
        setError(err instanceof Error ? err : new Error('Unknown error'))

        // If we have cached data, use it even if expired
        const cached = getCachedStats()
        if (cached) {
          setStats({
            totalCommits: cached.totalCommits,
            totalRepos: cached.totalRepos,
            followers: cached.followers,
            following: cached.following,
          })
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [isHydrated])

  // Only use minimal defaults when there's no cached data at all
  const currentStats = stats || {
    totalCommits: 0,
    totalRepos: 0,
    followers: 0,
    following: 0,
  }

  return {
    commits:
      currentStats.totalCommits > 0
        ? formatCommitCount(currentStats.totalCommits)
        : '—',
    repos: currentStats.totalRepos,
    followers: currentStats.followers,
    following: currentStats.following,
    isLoading,
    error,
  }
}
