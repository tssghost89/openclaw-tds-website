import { Link } from 'react-router-dom'
import { FilterChips } from '../components/ui/FilterChips'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title="Dịch vụ thiết kế xây dựng được tổ chức rõ theo từng nhóm chuyên môn"
        description="Giúp bạn nhanh chóng tìm được hướng tiếp cận phù hợp với loại công trình và nhu cầu sử dụng."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Dịch vụ' }]}
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', '2D kỹ thuật', '3D phối cảnh', 'Kiến trúc', 'Công năng', 'Tư vấn']} />
        </div>
      </section>
      <section className="section section--compact-top">
        <div className="container card-grid card-grid--three">
          {siteData.services.map((service) => (
            <article key={service.slug} className="info-card info-card--service">
              <div className="info-card__badge">{service.title}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={`/dich-vu/${service.slug}`}>Xem chi tiết dịch vụ</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
