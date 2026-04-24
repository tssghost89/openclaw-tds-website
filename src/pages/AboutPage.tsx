import { ContactCta } from '../components/sections/ContactCta'
import { ImagePanel } from '../components/ui/ImagePanel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="Thiết kế rõ công năng"
        description="TDS theo đuổi giải pháp gọn, rõ và dễ triển khai."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Giới thiệu' }]}
        imageSrc="/assets/about-architecture.jpg"
        imageAlt="Không gian kiến trúc hiện đại"
      />
      <section className="section">
        <div className="container about-story-layout">
          <div className="card-grid card-grid--two">
            <article className="info-card info-card--feature">
              <h3>Tầm nhìn</h3>
              <p>Trở thành đối tác thiết kế đáng tin cậy cho các công trình yêu cầu tiêu chuẩn cao.</p>
            </article>
            <article className="info-card info-card--feature">
              <h3>Triết lý thiết kế</h3>
              <p>Bắt đầu từ nhu cầu thật, triển khai bằng tư duy hệ thống.</p>
            </article>
          </div>
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Không gian kiến trúc hiện đại"
            eyebrow="Studio mindset"
            title="Thiết kế rõ ràng giúp công trình giữ giá trị sử dụng lâu dài"
          />
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Năng lực theo lĩnh vực"
            title="Năng lực theo từng nhóm công trình"
            description="Giải pháp được phát triển theo đúng đặc thù sử dụng của từng dự án."
          />
          <div className="card-grid card-grid--four">
            {siteData.sectors.map((sector) => (
              <article key={sector.title} className="info-card">
                <h3>{sector.title}</h3>
                <p>{sector.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCta cta={siteData.cta} />
    </>
  )
}
