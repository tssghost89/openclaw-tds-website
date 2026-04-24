export interface NavigationItem {
  label: string
  href: string
}

export interface HeroMetric {
  value: string
  label: string
}

export interface HeroData {
  eyebrow: string
  title: string
  description: string
  primaryAction: string
  secondaryAction: string
  metrics: HeroMetric[]
  highlights: string[]
}

export interface AboutSnapshotData {
  eyebrow: string
  title: string
  description: string
  stats: HeroMetric[]
}

export interface ServiceItem {
  slug: string
  title: string
  description: string
  deliverables: string[]
  audience: string[]
  process: string[]
}

export interface SectorItem {
  title: string
  description: string
}

export interface ProjectItem {
  slug: string
  title: string
  category: string
  meta: string
  description: string
  challenge: string
  solution: string[]
}

export interface ValueItem {
  title: string
  description: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface NewsItem {
  slug: string
  title: string
  category: string
  date: string
  summary: string
  content: string[]
}

export interface JobItem {
  slug: string
  title: string
  department: string
  type: string
  location: string
  summary: string
  requirements: string[]
  benefits: string[]
}

export interface CtaData {
  eyebrow: string
  title: string
  description: string
  primaryAction: string
  secondaryAction: string
}

export interface FooterData {
  company: string
  description: string
  address: string
  email: string
  phone: string
  links: NavigationItem[]
}
