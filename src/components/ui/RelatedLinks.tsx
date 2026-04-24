import { Link } from 'react-router-dom'

interface RelatedLinkItem {
  title: string
  href: string
  meta?: string
}

interface RelatedLinksProps {
  title: string
  items: RelatedLinkItem[]
}

function resolveRelatedImage(meta?: string) {
  const value = (meta ?? '').toLowerCase()

  if (value.includes('giáo dục') || value.includes('school')) return '/assets/school-project.jpg'
  if (value.includes('y tế') || value.includes('hospital')) return '/assets/hospital-project.jpg'
  if (value.includes('công nghiệp') || value.includes('factory') || value.includes('industrial')) return '/assets/industrial-project.jpg'
  return '/assets/office-project.jpg'
}

export function RelatedLinks({ title, items }: RelatedLinksProps) {
  return (
    <section className="section section--light">
      <div className="container">
        <div className="related-links__header">
          <span className="section-heading__eyebrow">Liên quan</span>
          <h2>{title}</h2>
        </div>
        <div className="card-grid card-grid--three">
          {items.map((item) => (
            <article key={item.href} className="info-card related-card reveal-up">
              <img src={resolveRelatedImage(item.meta)} alt={item.title} className="related-card__image" />
              <div className="related-card__content">
                {item.meta ? <span className="related-card__meta">{item.meta}</span> : null}
                <h3>{item.title}</h3>
                <Link to={item.href}>Xem thêm</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
