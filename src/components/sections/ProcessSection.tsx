import type { ProcessStep } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'

interface ProcessSectionProps {
  steps: ProcessStep[]
}

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="section section--process">
      <div className="container">
        <SectionHeading
          eyebrow="Quy trình làm việc"
          title="Mỗi dự án đều được phát triển theo một tiến trình rõ ràng, minh bạch và có thể kiểm soát"
          description="TDS chú trọng một quy trình đủ chặt chẽ để kiểm soát chất lượng, nhưng vẫn đủ linh hoạt để phù hợp với từng loại công trình và mục tiêu đầu tư."
        />
        <div className="timeline-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="timeline-card reveal-up">
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
