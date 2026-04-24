import { ContactCta } from '../components/sections/ContactCta'
import { ShowcasePanel } from '../components/ui/ShowcasePanel'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Trao đổi nhu cầu thiết kế và nhận định hướng phù hợp cho dự án của bạn"
        description="Trang liên hệ được xử lý như một điểm chốt CTA rõ ràng, tập trung vào thông tin doanh nghiệp và form giả lập."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Liên hệ' }]}
      />
      <section className="section section--light">
        <div className="container contact-layout">
          <div className="card-grid card-grid--two">
            <article className="info-card">
              <h3>Thông tin liên hệ</h3>
              <p>{siteData.footer.description}</p>
              <ul>
                <li>{siteData.footer.address}</li>
                <li>{siteData.footer.email}</li>
                <li>{siteData.footer.phone}</li>
              </ul>
            </article>
            <article className="info-card">
              <h3>Gửi yêu cầu dự án</h3>
              <p>Mô phỏng khu vực form liên hệ để bước sau có thể phát triển thành form thật hoặc tích hợp CRM.</p>
              <div className="form-placeholder">
                <span>Họ và tên</span>
                <span>Email</span>
                <span>Loại hình công trình</span>
                <span>Nội dung yêu cầu</span>
              </div>
            </article>
          </div>
          <ShowcasePanel
            eyebrow="Consultation flow"
            title="Khối minh họa cho bản đồ / ảnh văn phòng / visual liên hệ"
            description="Ở phiên bản hoàn thiện, đây là nơi có thể hiển thị map, sơ đồ khu vực hoặc ảnh không gian làm việc của TDS."
            variant="editorial"
          />
        </div>
      </section>
      <ContactCta cta={siteData.cta} />
    </>
  )
}
