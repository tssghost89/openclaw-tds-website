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
          title="Giá trị TDS theo đuổi"
          description="Những nguyên tắc cốt lõi trong mỗi phương án thiết kế."
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
