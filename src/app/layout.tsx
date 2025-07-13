import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { SkipLinks } from '@/components/common/skip-links'
import { StructuredData } from '@/components/common/structured-data'
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
  metadataBase: new URL('https://jerrysafterbrown.com'),
  title: {
    default: 'Jerry Safter Brown - Full Stack Software Engineer',
    template: '%s | Jerry Safter Brown',
  },
  description: 'Full Stack Software Engineer with 10+ years in tech, building scalable solutions that drive business impact. Specializing in React, TypeScript, and modern web technologies.',
  keywords: [
    'Jerry Safter Brown',
    'Jerry Brown',
    'Software Engineer',
    'Full Stack Developer',
    'Product Engineer',
    'React Developer',
    'TypeScript Developer',
    'Next.js Developer',
    'Boston Software Engineer',
    'Web Developer',
  ],
  authors: [{ name: 'Jerry Safter Brown', url: 'https://jerrysafterbrown.com' }],
  creator: 'Jerry Safter Brown',
  publisher: 'Jerry Safter Brown',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jerrysafterbrown.com',
    siteName: 'Jerry Safter Brown - Portfolio',
    title: 'Jerry Safter Brown - Full Stack Software Engineer',
    description: 'Full Stack Software Engineer with 10+ years in tech, building scalable solutions that drive business impact. Specializing in React, TypeScript, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jerry Safter Brown - Full Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerry Safter Brown - Full Stack Software Engineer',
    description: 'Full Stack Software Engineer with 10+ years in tech, building scalable solutions that drive business impact.',
    creator: '@jerrysafterbrown',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://jerrysafterbrown.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}>
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