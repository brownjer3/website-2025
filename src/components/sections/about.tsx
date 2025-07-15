import { CheckCircle2 } from 'lucide-react'

const highlights = [
  '10+ years of experience building production software',
  'Full-stack expertise in TypeScript, React, and Node.js',
  'Product-minded approach to engineering decisions',
  'Track record of delivering business value through code',
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
              <div className="h-1 w-20 rounded-full bg-primary" />
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I&apos;m a{' '}
                <span className="font-semibold text-foreground">
                  Full Stack Software Engineer
                </span>{' '}
                with over 10 years of experience building products that solve
                real business problems. My unique background combines deep
                technical expertise with a product-focused mindset.
              </p>

              <p className="text-lg leading-relaxed">
                I&apos;ve spent my career at the intersection of engineering and
                product, working with startups and established companies to ship
                features that move metrics. From architecting scalable systems
                to implementing complex features, I bring both strategic
                thinking and hands-on coding skills to every project.
              </p>

              <p className="text-lg leading-relaxed">
                What sets me apart is my ability to see the big picture while
                diving deep into the details. I don&apos;t just write code—I
                understand user needs, business constraints, and technical
                trade-offs to deliver solutions that actually matter.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
              <div className="space-y-6">
                {/* Code snippet visual */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">const</span>
                    <span className="text-foreground">engineer</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-muted-foreground">{'{'}</span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div>
                      <span className="text-muted-foreground">mindset:</span>
                      <span className="text-green-600 dark:text-green-400">
                        {' '}
                        &quot;product-first&quot;
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-muted-foreground">approach:</span>
                      <span className="text-green-600 dark:text-green-400">
                        {' '}
                        &quot;data-driven&quot;
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-muted-foreground">skills:</span>
                      <span className="text-muted-foreground"> [</span>
                      <span className="text-green-600 dark:text-green-400">
                        &quot;full-stack&quot;
                      </span>
                      ,
                      <span className="text-green-600 dark:text-green-400">
                        {' '}
                        &quot;system-design&quot;
                      </span>
                      ,
                      <span className="text-green-600 dark:text-green-400">
                        {' '}
                        &quot;product&quot;
                      </span>
                      <span className="text-muted-foreground">]</span>,
                    </div>
                    <div>
                      <span className="text-muted-foreground">experience:</span>
                      <span className="text-blue-600 dark:text-blue-400">
                        {' '}
                        10
                      </span>
                      <span className="text-muted-foreground"> +</span>
                      <span className="text-green-600 dark:text-green-400">
                        {' '}
                        &quot;years&quot;
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-muted-foreground">focus:</span>
                      <span className="text-green-600 dark:text-green-400">
                        {' '}
                        &quot;business impact&quot;
                      </span>
                    </div>
                  </div>
                  <div className="text-muted-foreground">{'}'};</div>
                </div>

                {/* Animated cursor */}
                <div className="inline-block h-5 w-2.5 animate-pulse bg-primary" />
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl sm:h-48 sm:w-48 md:h-72 md:w-72" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl sm:h-48 sm:w-48 md:h-72 md:w-72" />
          </div>
        </div>
      </div>
    </section>
  )
}
