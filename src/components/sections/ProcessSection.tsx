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
          title="Quy trình làm việc rõ ràng"
          description="Các bước chính từ tiếp nhận yêu cầu đến hoàn thiện hồ sơ."
        />
        <div className="timeline-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="timeline-card" data-reveal>
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
