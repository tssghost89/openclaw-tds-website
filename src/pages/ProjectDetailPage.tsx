import { useParams } from 'react-router-dom'
import { DetailFeatureList } from '../components/ui/DetailFeatureList'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { siteData } from '../data/siteData'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = siteData.projects.find((item) => item.slug === slug)

  if (!project) {
    return <div className="container empty-state">Không tìm thấy dự án.</div>
  }

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.description}
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Dự án', href: '/du-an' },
          { label: project.title },
        ]}
      />
      <section className="section section--compact-top">
        <div className="container detail-hero-grid">
          <div className="detail-visual detail-visual--project">
            <span>{project.category}</span>
            <h3>{project.meta}</h3>
            <p>Case study được trình bày theo logic bài toán – giải pháp – giá trị sử dụng, đúng tinh thần website TDS.</p>
          </div>
          <div className="detail-summary-card">
            <span className="section-heading__eyebrow">Bài toán dự án</span>
            <p>{project.challenge}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container card-grid card-grid--two">
          <DetailFeatureList title="Giải pháp thiết kế" items={project.solution} />
          <article className="info-card">
            <h3>Thông tin nhanh</h3>
            <p>{project.meta}</p>
            <p>{project.category}</p>
          </article>
        </div>
      </section>
      <RelatedLinks
        title="Dự án liên quan"
        items={siteData.projects
          .filter((item) => item.slug !== project.slug)
          .slice(0, 3)
          .map((item) => ({ title: item.title, href: `/du-an/${item.slug}`, meta: item.category }))}
      />
    </>
  )
}
