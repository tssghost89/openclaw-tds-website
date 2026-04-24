import { Link, useParams } from 'react-router-dom'
import { DetailFeatureList } from '../components/ui/DetailFeatureList'
import { ImagePanel } from '../components/ui/ImagePanel'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { siteData } from '../data/siteData'

const serviceImages = {
  'thiet-ke-2d-ky-thuat': '/assets/office-project.jpg',
  'thiet-ke-3d-phoi-canh': '/assets/hero-building.jpg',
  'thiet-ke-kien-truc-cong-trinh': '/assets/about-architecture.jpg',
  'thiet-ke-canh-quan': '/assets/school-project.jpg',
  'toi-uu-cong-nang-su-dung': '/assets/hospital-project.jpg',
  'tu-van-giai-phap-thiet-ke': '/assets/industrial-project.jpg',
} as const

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = siteData.services.find((item) => item.slug === slug)

  if (!service) {
    return <div className="container empty-state">Không tìm thấy dịch vụ.</div>
  }

  const imageSrc = serviceImages[service.slug as keyof typeof serviceImages] ?? '/assets/office-project.jpg'

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
          <ImagePanel
            src={imageSrc}
            alt={service.title}
            eyebrow="Service Focus"
            title={service.title}
          />
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
        <div className="container service-detail-bottom">
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
          <div className="detail-visual detail-visual--service reveal-up">
            <span>Service Perspective</span>
            <h3>Giải pháp được phát triển để phục vụ mục tiêu sử dụng thật sự</h3>
            <p>TDS ưu tiên cách tiếp cận rõ ràng, giúp chủ đầu tư hình dung đúng phạm vi công việc và dễ ra quyết định trong từng giai đoạn.</p>
          </div>
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
