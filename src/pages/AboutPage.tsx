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
        title="TDS theo đuổi thiết kế rõ công năng và dễ triển khai"
        description="TDS cân bằng giữa công năng, hình ảnh kiến trúc và tính thực tế trong từng phương án."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Giới thiệu' }]}
      />
      <section className="section">
        <div className="container about-story-layout">
          <div className="card-grid card-grid--two">
            <article className="info-card info-card--feature">
              <h3>Tầm nhìn</h3>
              <p>Trở thành đối tác thiết kế đáng tin cậy cho những công trình cần sự hài hòa giữa hình ảnh kiến trúc, trải nghiệm sử dụng và tính vận hành bền vững.</p>
            </article>
            <article className="info-card info-card--feature">
              <h3>Triết lý thiết kế</h3>
              <p>Mỗi phương án được bắt đầu từ nhu cầu thật, được phát triển bằng tư duy hệ thống và hoàn thiện bằng tinh thần chỉn chu trong từng chi tiết.</p>
            </article>
          </div>
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Không gian kiến trúc hiện đại"
            eyebrow="Studio mindset"
            title="Một ngôn ngữ thiết kế rõ ràng giúp công trình giữ được giá trị sử dụng lâu dài"
          />
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Năng lực theo lĩnh vực"
            title="Giải pháp được phát triển phù hợp với tính chất riêng của từng loại công trình"
            description="Từ giáo dục, y tế đến công nghiệp, TDS luôn đặt trọng tâm vào công năng, trải nghiệm sử dụng và tính đồng bộ trong hình ảnh công trình."
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
