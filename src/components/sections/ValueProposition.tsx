import type { ValueItem } from '../../types'
import { ShowcasePanel } from '../ui/ShowcasePanel'
import { SectionHeading } from '../ui/SectionHeading'

interface ValuePropositionProps {
  values: ValueItem[]
}

export function ValueProposition({ values }: ValuePropositionProps) {
  return (
    <section className="section section--light">
      <div className="container value-proposition-layout">
        <div>
          <SectionHeading
            eyebrow="Vì sao chọn TDS"
            title="Mỗi phương án được phát triển để công trình vận hành mạch lạc và bền vững"
            description="TDS theo đuổi cách làm việc rõ ràng, chuẩn mực và tập trung vào giá trị sử dụng thực tế của từng không gian."
          />
          <div className="card-grid card-grid--two">
            {values.map((value) => (
              <article key={value.title} className="info-card info-card--feature">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
        <ShowcasePanel
          eyebrow="Architectural framing"
          title="Hệ thống visual của TDS nên gợi cảm giác vừa kỹ thuật vừa cao cấp"
          description="Khối minh họa này đóng vai trò mô phỏng cách các hình ảnh công trình, mặt bằng và bản vẽ có thể hiện diện trong layout thương mại cuối cùng."
          variant="architectural"
        />
      </div>
    </section>
  )
}
