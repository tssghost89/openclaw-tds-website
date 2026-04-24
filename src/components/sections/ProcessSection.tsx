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
          title="Quy trình thiết kế rõ ràng từ nhu cầu ban đầu đến hồ sơ hoàn thiện"
          description="Đây là trục UX quan trọng trên website vì nó tăng niềm tin rằng TDS làm việc có phương pháp và có thể đồng hành nghiêm túc với từng dự án."
        />
        <div className="timeline-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="timeline-card">
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
