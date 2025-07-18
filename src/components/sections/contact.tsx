'use client'

import { socialLinks } from '@/data/social-links'

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let&apos;s discuss how I can help bring your ideas to life
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="mb-2 text-xl font-semibold">Connect With Me</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
                >
                  <link.icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {link.href.replace('mailto:', '').replace('https://', '')}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="rounded-lg bg-muted/50 p-6">
              <h4 className="mb-3 text-center font-semibold">
                Looking for collaboration on:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>Full-stack development projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>Technical product consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>AI/ML integration and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>Performance and scalability improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
