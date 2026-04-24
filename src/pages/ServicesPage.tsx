import { Link } from 'react-router-dom'
import { FilterChips } from '../components/ui/FilterChips'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title="Dịch vụ thiết kế chính"
        description="Các nhóm dịch vụ cốt lõi của TDS."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Dịch vụ' }]}
        imageSrc="/assets/service-architecture.jpg"
        imageAlt="Dịch vụ thiết kế kiến trúc"
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', '2D kỹ thuật', '3D phối cảnh', 'Kiến trúc', 'Công năng', 'Tư vấn']} />
        </div>
      </section>
      <section className="section section--compact-top">
        <div className="container services-editorial-list">
          {siteData.services.map((service, index) => (
            <article key={service.slug} className="info-card info-card--service services-editorial-card" data-reveal>
              <div className="services-editorial-card__index">{`0${index + 1}`}</div>
              <div className="services-editorial-card__main">
                <div className="info-card__badge">{service.title}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="services-editorial-card__meta">
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to={`/dich-vu/${service.slug}`}>Xem chi tiết dịch vụ</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
