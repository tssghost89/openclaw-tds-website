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
        title="Năng lực thực tế của Công ty Cổ phần TDS Việt Nam"
        description="Doanh nghiệp được thành lập năm 2009, hoạt động trong các lĩnh vực thi công xây lắp, khảo sát, thí nghiệm, kiểm định và tư vấn xây dựng."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Giới thiệu' }]}
        imageSrc="/assets/about-architecture.jpg"
        imageAlt="Không gian kiến trúc hiện đại"
      />
      <section className="section">
        <div className="container about-story-layout">
          <div className="card-grid card-grid--two">
            <article className="info-card info-card--feature">
              <h3>Tầm nhìn</h3>
              <p>Phấn đấu trở thành doanh nghiệp xây dựng, thí nghiệm và kiểm định có uy tín và vị thế tại Việt Nam.</p>
            </article>
            <article className="info-card info-card--feature">
              <h3>Tôn chỉ hoạt động</h3>
              <p>Lấy chữ TÂM, chất lượng, tiến độ, tinh thần học hỏi và sự hài lòng của khách hàng làm nền tảng phát triển doanh nghiệp.</p>
            </article>
          </div>
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Không gian kiến trúc hiện đại"
            eyebrow="Năng lực doanh nghiệp"
            title="TDS Việt Nam kết hợp kinh nghiệm hiện trường, phòng thí nghiệm và tư vấn kỹ thuật để phục vụ dự án một cách đồng bộ"
          />
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Năng lực theo lĩnh vực"
            title="Các nhóm lĩnh vực TDS Việt Nam đang hoạt động"
            description="Từ dân dụng, công nghiệp, giao thông đến thí nghiệm nền móng và kiểm định chất lượng công trình."
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
