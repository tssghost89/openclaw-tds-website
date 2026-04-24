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
            <article key={item.href} className="info-card related-card">
              {item.meta ? <span className="related-card__meta">{item.meta}</span> : null}
              <h3>{item.title}</h3>
              <Link to={item.href}>Xem thêm</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
