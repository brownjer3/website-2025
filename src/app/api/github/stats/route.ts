import { NextResponse } from 'next/server'

interface GitHubStats {
  totalCommits: number
  totalRepos: number
  followers: number
  following: number
}

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql'

interface UserInfoResponse {
  data: {
    user: {
      createdAt: string
      repositories: {
        totalCount: number
      }
      followers: {
        totalCount: number
      }
      following: {
        totalCount: number
      }
    }
  }
}

interface ContributionsResponse {
  data: {
    user: {
      contributionsCollection: {
        totalCommitContributions: number
        totalIssueContributions: number
        totalPullRequestContributions: number
        totalPullRequestReviewContributions: number
      }
    }
  }
}

export async function GET() {
  try {
    const username = 'brownjer3'
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      // If no token, fall back to REST API with limited data
      return await fetchWithRestAPI(username)
    }

    // First, get user info including account creation date
    const userInfoQuery = `
      query($username: String!) {
        user(login: $username) {
          createdAt
          repositories {
            totalCount
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
        }
      }
    `

    const userInfoResponse = await fetch(GITHUB_GRAPHQL_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: userInfoQuery,
        variables: { username },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!userInfoResponse.ok) {
      throw new Error(
        `GitHub GraphQL API responded with ${userInfoResponse.status}`
      )
    }

    const userInfo = (await userInfoResponse.json()) as UserInfoResponse

    if (!userInfo.data?.user) {
      throw new Error('Invalid response from GitHub GraphQL API')
    }

    const user = userInfo.data.user
    const accountCreatedAt = new Date(user.createdAt)
    const currentDate = new Date()

    // Calculate the years since account creation
    const yearsSinceCreation =
      currentDate.getFullYear() - accountCreatedAt.getFullYear()

    // Query contributions for each year
    let totalCommits = 0
    const contributionsQuery = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
          }
        }
      }
    `

    // Fetch contributions year by year
    for (let i = 0; i <= yearsSinceCreation; i++) {
      const yearStart = new Date(
        accountCreatedAt.getFullYear() + i,
        accountCreatedAt.getMonth(),
        accountCreatedAt.getDate()
      )
      const yearEnd = new Date(
        yearStart.getFullYear() + 1,
        yearStart.getMonth(),
        yearStart.getDate()
      )

      // Don't query beyond current date
      if (yearStart > currentDate) break

      const actualYearEnd = yearEnd > currentDate ? currentDate : yearEnd

      try {
        const contributionsResponse = await fetch(GITHUB_GRAPHQL_API, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: contributionsQuery,
            variables: {
              username,
              from: yearStart.toISOString(),
              to: actualYearEnd.toISOString(),
            },
          }),
        })

        if (contributionsResponse.ok) {
          const contributionsData =
            (await contributionsResponse.json()) as ContributionsResponse
          if (contributionsData.data?.user?.contributionsCollection) {
            totalCommits +=
              contributionsData.data.user.contributionsCollection
                .totalCommitContributions
          }
        }
      } catch (err) {
        console.error(`Error fetching contributions for year ${i}:`, err)
      }
    }

    const stats: GitHubStats = {
      totalCommits,
      totalRepos: user.repositories.totalCount,
      followers: user.followers.totalCount,
      following: user.following.totalCount,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)

    // Return minimal fallback data - let the client use cached values
    return NextResponse.json({
      totalCommits: 0,
      totalRepos: 0,
      followers: 0,
      following: 0,
    })
  }
}

// Fallback function using REST API when no token is available
async function fetchWithRestAPI(username: string) {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
    }

    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    )

    if (!userResponse.ok) {
      throw new Error(`GitHub API responded with ${userResponse.status}`)
    }

    const userData = await userResponse.json()

    // With REST API, we can only get limited data
    // Return actual data without estimates - let client use cached values
    const stats: GitHubStats = {
      totalCommits: 0, // No commit data available without token
      totalRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching from REST API:', error)

    // Return zeros to let client use cached values
    return NextResponse.json({
      totalCommits: 0,
      totalRepos: 0,
      followers: 0,
      following: 0,
    })
  }
}
