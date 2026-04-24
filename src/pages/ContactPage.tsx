import { ContactCta } from '../components/sections/ContactCta'
import { ImagePanel } from '../components/ui/ImagePanel'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Trao đổi về dự án của bạn"
        description="Chia sẻ nhu cầu để TDS tư vấn hướng phù hợp."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Liên hệ' }]}
        imageSrc="/assets/hero-overlay.jpg"
        imageAlt="Liên hệ tư vấn thiết kế cùng TDS"
      />
      <section className="section section--light">
        <div className="container contact-layout contact-layout--premium">
          <div className="contact-stack">
            <article className="info-card info-card--feature">
              <h3>Liên hệ tư vấn</h3>
              <p>TDS tiếp nhận nhu cầu thiết kế cho công trình dân dụng, công cộng và công nghiệp.</p>
              <ul>
                <li>{siteData.footer.address}</li>
                <li>{siteData.footer.email}</li>
                <li>{siteData.footer.phone}</li>
              </ul>
            </article>
            <article className="info-card">
              <h3>Quy trình trao đổi</h3>
              <div className="contact-process">
                <div>
                  <strong>01</strong>
                  <p>Tiếp nhận nhu cầu và loại công trình.</p>
                </div>
                <div>
                  <strong>02</strong>
                  <p>Rà soát phạm vi và hướng tiếp cận phù hợp.</p>
                </div>
                <div>
                  <strong>03</strong>
                  <p>Phản hồi bước đầu để bắt đầu làm việc.</p>
                </div>
              </div>
            </article>
            <article className="info-card">
              <h3>Thông tin nên gửi</h3>
              <div className="form-placeholder form-placeholder--premium">
                <span>Họ và tên / đơn vị</span>
                <span>Email / số điện thoại</span>
                <span>Loại công trình / quy mô</span>
                <span>Nhu cầu thiết kế / phạm vi công việc</span>
              </div>
            </article>
          </div>
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Hình ảnh minh họa không gian làm việc kiến trúc"
            eyebrow="Consultation flow"
            title="Một trao đổi rõ ràng từ đầu sẽ giúp dự án đi đúng hướng hơn"
          />
        </div>
      </section>
      <ContactCta cta={siteData.cta} />
    </>
  )
}
