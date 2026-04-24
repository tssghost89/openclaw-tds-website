import { ContactCta } from '../components/sections/ContactCta'
import { ImagePanel } from '../components/ui/ImagePanel'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Trao đổi nhu cầu thiết kế và tìm hướng đi phù hợp cho dự án của bạn"
        description="Nếu bạn đang chuẩn bị một dự án mới hoặc muốn rà soát phương án hiện có, TDS sẵn sàng đồng hành từ những bước đầu tiên."
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
              <p>Chia sẻ ngắn gọn loại công trình, mục tiêu sử dụng và những điều bạn đang quan tâm. TDS sẽ phản hồi với hướng tư vấn phù hợp.</p>
              <div className="form-placeholder">
                <span>Họ và tên</span>
                <span>Email</span>
                <span>Loại hình công trình</span>
                <span>Nội dung yêu cầu</span>
              </div>
            </article>
          </div>
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Hình ảnh minh họa không gian làm việc kiến trúc"
            eyebrow="Consultation flow"
            title="Một cuộc trao đổi rõ ràng từ đầu sẽ giúp phương án đi đúng hướng ngay từ những bước đầu tiên"
          />
        </div>
      </section>
      <ContactCta cta={siteData.cta} />
    </>
  )
}
