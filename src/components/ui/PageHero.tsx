import { Breadcrumbs } from './Breadcrumbs'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  breadcrumbs: { label: string; href?: string }[]
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <div className="page-hero__panel">
          <span className="section-heading__eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}
