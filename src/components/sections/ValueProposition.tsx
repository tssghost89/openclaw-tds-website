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
          eyebrow="Giá trị cốt lõi"
          title="Một giải pháp tốt luôn cân bằng giữa công năng, hình ảnh và khả năng triển khai"
          description="Đó là cách TDS giữ chất lượng thiết kế nhất quán trên nhiều loại hình công trình khác nhau."
        />
        <div className="card-grid card-grid--two value-grid-compact">
          {values.slice(0, 4).map((value) => (
            <article key={value.title} className="info-card info-card--feature" data-reveal>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
