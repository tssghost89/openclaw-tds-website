import { Link, useParams } from 'react-router-dom'
import { DetailFeatureList } from '../components/ui/DetailFeatureList'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { siteData } from '../data/siteData'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = siteData.services.find((item) => item.slug === slug)

  if (!service) {
    return <div className="container empty-state">Không tìm thấy dịch vụ.</div>
  }

  return (
    <>
      <PageHero
        eyebrow="Chi tiết dịch vụ"
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Dịch vụ', href: '/dich-vu' },
          { label: service.title },
        ]}
      />
      <section className="section section--compact-top">
        <div className="container detail-hero-grid">
          <div className="detail-visual detail-visual--service reveal-up">
            <span>Service Focus</span>
            <h3>{service.title}</h3>
            <p>Thiết kế theo hướng rõ đầu ra, đúng nhu cầu sử dụng và dễ kết nối với các bước triển khai tiếp theo.</p>
          </div>
          <div className="detail-summary-card reveal-up reveal-delay-1">
            <span className="section-heading__eyebrow">Tóm tắt</span>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid card-grid--two">
          <DetailFeatureList title="Đầu ra chính" items={service.deliverables} />
          <DetailFeatureList title="Phù hợp với" items={service.audience} />
        </div>
      </section>
      <section className="section section--light">
        <div className="container card-grid card-grid--two">
          <DetailFeatureList title="Phạm vi triển khai" items={service.scope} />
          <article className="info-card info-card--faq">
            <h3>Câu hỏi thường gặp</h3>
            <div className="faq-list">
              {service.faq.map((item) => (
                <div key={item.question} className="faq-item">
                  <strong>{item.question}</strong>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="info-card">
            <h3>Quy trình thực hiện</h3>
            <div className="timeline-grid timeline-grid--detail">
              {service.process.map((step, index) => (
                <div key={step} className="timeline-card reveal-up">
                  <span>{`0${index + 1}`}</span>
                  <h3>{step}</h3>
                </div>
              ))}
            </div>
            <Link to="/lien-he">Liên hệ tư vấn dịch vụ</Link>
          </article>
        </div>
      </section>
      <RelatedLinks
        title="Dịch vụ liên quan"
        items={siteData.services
          .filter((item) => item.slug !== service.slug)
          .slice(0, 3)
          .map((item) => ({ title: item.title, href: `/dich-vu/${item.slug}` }))}
      />
    </>
  )
}
