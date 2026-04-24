import { useParams } from 'react-router-dom'
import { DetailFeatureList } from '../components/ui/DetailFeatureList'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { siteData } from '../data/siteData'

export function CareerDetailPage() {
  const { slug } = useParams()
  const job = siteData.jobs.find((item) => item.slug === slug)

  if (!job) {
    return <div className="container empty-state">Không tìm thấy vị trí tuyển dụng.</div>
  }

  return (
    <>
      <PageHero
        eyebrow="Tuyển dụng"
        title={job.title}
        description="Thông tin chính của vị trí này."
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tuyển dụng', href: '/tuyen-dung' },
          { label: job.title },
        ]}
        imageSrc="/assets/office-project.jpg"
        imageAlt={job.title}
      />
      <section className="section section--compact-top">
        <div className="container detail-hero-grid">
          <div className="detail-visual detail-visual--career reveal-up">
            <span>{job.department}</span>
            <h3>{job.type}</h3>
            <p>{job.location}</p>
          </div>
          <div className="detail-summary-card detail-summary-card--compact reveal-up reveal-delay-1">
            <span className="section-heading__eyebrow">Mô tả nhanh</span>
            <p>{job.summary}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid card-grid--two">
          <DetailFeatureList title="Yêu cầu" items={job.requirements} />
          <DetailFeatureList title="Quyền lợi" items={job.benefits} />
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <DetailFeatureList title="Trách nhiệm công việc" items={job.responsibilities} />
        </div>
      </section>
      <RelatedLinks
        title="Vị trí liên quan"
        items={siteData.jobs
          .filter((item) => item.slug !== job.slug)
          .slice(0, 3)
          .map((item) => ({ title: item.title, href: `/tuyen-dung/${item.slug}`, meta: item.department }))}
      />
    </>
  )
}
