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
              <h3>Nhiều nhóm công trình</h3>
              <p>Giáo dục, y tế, công nghiệp và công cộng.</p>
            </article>
            <article className="info-card">
              <h3>Triển khai đồng bộ</h3>
              <p>2D kỹ thuật, 3D phối cảnh và tài liệu trình bày.</p>
            </article>
          </div>
        </div>
        <div className="enterprise-showcase__visuals">
          <ImagePanel
            src="/assets/industrial-project.jpg"
            alt="Dự án công nghiệp hiện đại"
            eyebrow="Industrial"
            title="Giải pháp cho khu công nghiệp và nhà xưởng"
          />
          <ImagePanel
            src="/assets/school-project.jpg"
            alt="Không gian trường học hiện đại"
            eyebrow="Education"
            title="Không gian học tập rõ ràng và thân thiện"
          />
        </div>
      </div>
    </section>
  )
}
