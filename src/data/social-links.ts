import { Github, Linkedin, LucideIcon, Mail } from 'lucide-react'

export interface SocialLink {
  name: string
  icon: LucideIcon
  href: string
}

export const socialLinks: SocialLink[] = [
  { name: 'Email', icon: Mail, href: 'mailto:brownjer3@gmail.com' },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/jerry-brown-',
  },
  { name: 'GitHub', icon: Github, href: 'https://github.com/brownjer3' },
]
