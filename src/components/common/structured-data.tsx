export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jerry Safter Brown',
    alternateName: 'Jerry Brown',
    jobTitle: 'Full Stack Software Engineer',
    description: 'Full Stack Software Engineer with 10+ years in tech, building scalable solutions that drive business impact.',
    url: 'https://jerrysafterbrown.com',
    sameAs: [
      'https://github.com/brownjer3',
      'https://www.linkedin.com/in/jerry-safter-brown/',
    ],
    knowsAbout: [
      'Software Engineering',
      'Full Stack Development',
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'Product Development',
      'Web Development',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'St. Lawrence University',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Available for opportunities',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}