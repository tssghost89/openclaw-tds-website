import { Breadcrumbs } from './Breadcrumbs'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  breadcrumbs: { label: string; href?: string }[]
  imageSrc?: string
  imageAlt?: string
}

export function PageHero({ eyebrow, title, description, breadcrumbs, imageSrc = '/assets/about-architecture.jpg', imageAlt = title }: PageHeroProps) {
  return (
    <section className="page-hero page-hero--immersive">
      <div className="container">
        <div className="page-hero__banner">
          <img src={imageSrc} alt={imageAlt} className="page-hero__image" />
          <div className="page-hero__overlay" />
          <div className="page-hero__content">
            <Breadcrumbs items={breadcrumbs} />
            <div className="page-hero__panel page-hero__panel--immersive">
              <span className="section-heading__eyebrow">{eyebrow}</span>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
