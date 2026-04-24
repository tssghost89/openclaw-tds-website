import { useParams } from 'react-router-dom'
import { DetailFeatureList } from '../components/ui/DetailFeatureList'
import { EditorialQuote } from '../components/ui/EditorialQuote'
import { ImagePanel } from '../components/ui/ImagePanel'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { siteData } from '../data/siteData'

const projectImages = {
  'khoi-nha-dieu-hanh-khu-cong-nghiep': '/assets/industrial-project.jpg',
  'truong-lien-cap-hien-dai': '/assets/school-project.jpg',
  'trung-tam-y-te-khu-vuc': '/assets/hospital-project.jpg',
} as const

const galleryImages = ['/assets/project-detail-1.jpg', '/assets/project-detail-2.jpg', '/assets/project-detail-3.jpg']

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = siteData.projects.find((item) => item.slug === slug)

  if (!project) {
    return <div className="container empty-state">Không tìm thấy dự án.</div>
  }

  const imageSrc = projectImages[project.slug as keyof typeof projectImages] ?? '/assets/office-project.jpg'

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description="Thông tin chính và cách tiếp cận dự án."
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Dự án', href: '/du-an' },
          { label: project.title },
        ]}
        imageSrc={imageSrc}
        imageAlt={project.title}
      />
      <section className="section section--compact-top">
        <div className="container detail-hero-grid">
          <ImagePanel
            src={imageSrc}
            alt={project.title}
            eyebrow={project.category}
            title={project.title}
          />
          <div className="detail-summary-card detail-summary-card--compact reveal-up reveal-delay-1">
            <span className="section-heading__eyebrow">Bài toán dự án</span>
            <p>{project.challenge}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container project-detail-layout">
          <div className="project-detail-layout__main">
            <div className="card-grid card-grid--two">
              <DetailFeatureList title="Giải pháp thiết kế" items={project.solution} />
              <DetailFeatureList title="Kết quả đạt được" items={project.outcomes} />
            </div>
            <div className="card-grid card-grid--three gallery-grid gallery-grid--image">
              {project.gallery.map((item, index) => (
                <article key={item} className="gallery-card gallery-card--image" data-reveal>
                  <img src={galleryImages[index % galleryImages.length]} alt={item} />
                  <div className="gallery-card__overlay">
                    <span>Gallery</span>
                    <h3>{item}</h3>
                  </div>
                </article>
              ))}
            </div>
            <EditorialQuote
              quote="Một dự án tốt bắt đầu từ nhu cầu rõ ràng và kết thúc ở trải nghiệm sử dụng tốt."
              caption="Góc nhìn từ TDS"
            />
          </div>
          <div className="detail-visual detail-visual--project" data-reveal>
            <span>{project.category}</span>
            <h3>{project.meta}</h3>
            <p>Cân bằng giữa hình ảnh công trình, công năng và vận hành.</p>
          </div>
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
