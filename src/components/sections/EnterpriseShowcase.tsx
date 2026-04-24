import { ImagePanel } from '../ui/ImagePanel'
import { SectionHeading } from '../ui/SectionHeading'

export function EnterpriseShowcase() {
  return (
    <section className="section section--light">
      <div className="container enterprise-showcase">
        <div>
          <SectionHeading
            eyebrow="Năng lực triển khai"
            title="Năng lực theo từng loại công trình"
            description="Giải pháp được phát triển theo đúng tính chất sử dụng của từng dự án."
          />
          <div className="enterprise-showcase__list">
            <article className="info-card">
              <h3>Thiết kế cho nhiều lĩnh vực</h3>
              <p>Từ công trình giáo dục, y tế đến công nghiệp và công cộng, cách làm việc luôn giữ được sự chỉn chu và logic rõ ràng.</p>
            </article>
            <article className="info-card">
              <h3>Trình bày phương án mạch lạc</h3>
              <p>Bản vẽ kỹ thuật, phối cảnh 3D và tài liệu trình bày được phát triển đồng bộ để hỗ trợ quyết định nhanh và chính xác hơn.</p>
            </article>
          </div>
        </div>
        <div className="enterprise-showcase__visuals">
          <ImagePanel
            src="/assets/industrial-project.jpg"
            alt="Dự án công nghiệp hiện đại"
            eyebrow="Industrial"
            title="Giải pháp cho khu công nghiệp và nhà xưởng với trọng tâm là vận hành và mở rộng lâu dài"
          />
          <ImagePanel
            src="/assets/school-project.jpg"
            alt="Không gian trường học hiện đại"
            eyebrow="Education"
            title="Không gian học tập được tổ chức rõ ràng, thân thiện và giàu tính kết nối"
          />
        </div>
      </div>
    </section>
  )
}
