import { Link, useParams } from 'react-router-dom'
import { DetailFeatureList } from '../components/ui/DetailFeatureList'
import { ImagePanel } from '../components/ui/ImagePanel'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { siteData } from '../data/siteData'

const serviceImages = {
  'thi-cong-xay-lap-va-tong-thau': '/assets/industrial-project.jpg',
  'khao-sat-dia-hinh-dia-chat-cong-trinh': '/assets/project-detail-1.jpg',
  'thi-nghiem-va-kiem-dinh-chat-luong-cong-trinh': '/assets/project-detail-2.jpg',
  'thi-nghiem-coc-va-nen-mong': '/assets/project-detail-3.jpg',
  'tu-van-dau-tu-va-tu-van-xay-dung': '/assets/about-architecture.jpg',
  'tham-tra-thiet-ke-va-du-toan': '/assets/office-project.jpg',
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
        eyebrow="Dịch vụ"
        title={service.title}
        description="Phạm vi công việc, đầu ra kỹ thuật và nhóm nhu cầu phù hợp của dịch vụ này."
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Dịch vụ', href: '/dich-vu' },
          { label: service.title },
        ]}
        imageSrc={imageSrc}
        imageAlt={service.title}
      />
      <section className="section section--compact-top">
        <div className="container detail-hero-grid">
          <ImagePanel
            src={imageSrc}
            alt={service.title}
            eyebrow="Dịch vụ chuyên môn"
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
            <h3>Quy trình triển khai dịch vụ</h3>
            <div className="timeline-grid timeline-grid--detail">
              {service.process.map((step, index) => (
                <div key={step} className="timeline-card reveal-up">
                  <span>{`0${index + 1}`}</span>
                  <h3>{step}</h3>
                </div>
              ))}
            </div>
            <Link to="/lien-he">Liên hệ tư vấn dịch vụ này</Link>
          </article>
          <div className="detail-visual detail-visual--service reveal-up">
            <span>Góc nhìn triển khai</span>
            <h3>Dịch vụ được tổ chức theo hướng rõ phạm vi, rõ đầu ra và bám sát nhu cầu kỹ thuật của dự án</h3>
            <p>TDS Việt Nam ưu tiên cách tiếp cận thực tế, đồng bộ giữa hiện trường, hồ sơ kỹ thuật và yêu cầu chất lượng.</p>
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
