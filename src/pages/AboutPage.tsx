import { ContactCta } from '../components/sections/ContactCta'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Giới thiệu"
        title="TDS theo đuổi thiết kế xây dựng có chiều sâu công năng và khả năng triển khai thực tế"
        description="Trang giới thiệu được thiết kế như hồ sơ năng lực ngắn gọn: rõ triết lý, rõ lĩnh vực công trình và rõ cách TDS tiếp cận bài toán không gian."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Giới thiệu' }]}
      />
      <section className="section">
        <div className="container card-grid card-grid--two">
          <article className="info-card info-card--feature">
            <h3>Tầm nhìn</h3>
            <p>Trở thành đối tác thiết kế đáng tin cậy cho các công trình cần sự cân bằng giữa thẩm mỹ, hiệu quả sử dụng và tính tổ chức không gian.</p>
          </article>
          <article className="info-card info-card--feature">
            <h3>Triết lý thiết kế</h3>
            <p>Thiết kế trước hết phải đúng với mục tiêu vận hành. Hình thức kiến trúc, trải nghiệm không gian và cấu trúc sử dụng cần cùng đi một hướng.</p>
          </article>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Năng lực theo lĩnh vực"
            title="TDS triển khai giải pháp cho công trình dân dụng, công cộng và công nghiệp"
            description="Capability section này thay vai trò profile matrix trong website doanh nghiệp."
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
