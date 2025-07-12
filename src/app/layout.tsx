import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { SkipLinks } from '@/components/common/skip-links'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Jerry Safter Brown - Technical Product Engineer',
  description: 'Technical Product Engineer with 10+ years in tech, building scalable solutions that drive business impact.',
  keywords: ['software engineer', 'product engineer', 'full stack developer', 'react', 'typescript', 'nextjs'],
  authors: [{ name: 'Jerry Safter Brown' }],
  creator: 'Jerry Safter Brown',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jerrysafterbrown.com',
    siteName: 'Jerry Safter Brown',
    title: 'Jerry Safter Brown - Technical Product Engineer',
    description: 'Technical Product Engineer with 10+ years in tech, building scalable solutions that drive business impact.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerry Safter Brown - Technical Product Engineer',
    description: 'Technical Product Engineer with 10+ years in tech, building scalable solutions that drive business impact.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SkipLinks />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}