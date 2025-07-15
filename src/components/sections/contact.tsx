'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { socialLinks } from '@/data/social-links'
import { cn } from '@/lib/utils'
import { CheckCircle2, Send } from 'lucide-react'
import * as React from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // TODO: Implement actual email sending via API route
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Error sending message:', error)
      // Handle error state
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

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

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Send a Message</h3>
              <p className="text-sm text-muted-foreground">
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Michael Scott"
                    className={cn(errors.name && 'border-destructive')}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="michael@dundermifflin.com"
                    className={cn(errors.email && 'border-destructive')}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration"
                  className={cn(errors.subject && 'border-destructive')}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I have a question about..."
                  rows={5}
                  className={cn(errors.message && 'border-destructive')}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {isSuccess && (
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Connect With Me</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Feel free to reach out through any of these channels.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border bg-card p-3 transition-colors hover:bg-accent sm:p-4"
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {link.href
                          .replace('mailto:', '')
                          .replace('https://', '')}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="rounded-lg bg-muted/50 p-4 sm:p-5 md:p-6">
              <h4 className="mb-2 font-semibold">
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
