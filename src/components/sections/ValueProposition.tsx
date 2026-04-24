import type { ValueItem } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'

interface ValuePropositionProps {
  values: ValueItem[]
}

export function ValueProposition({ values }: ValuePropositionProps) {
  return (
    <section className="section section--light">
      <div className="container">
        <SectionHeading
          eyebrow="Vì sao chọn TDS"
          title="Thiết kế không chỉ để trình bày, mà để công trình hoạt động hiệu quả"
          description="Thương hiệu TDS được nhấn mạnh bằng các lợi thế cạnh tranh mang tính chuyên môn, không dùng ngôn ngữ sales quá đà."
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
    </section>
  )
}
