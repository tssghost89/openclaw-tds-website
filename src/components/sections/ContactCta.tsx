import type { CtaData } from '../../types'
import { PrimaryButton } from '../ui/PrimaryButton'

interface ContactCtaProps {
  cta: CtaData
}

export function ContactCta({ cta }: ContactCtaProps) {
  return (
    <section className="section" id="lien-he">
      <div className="container cta-banner" data-reveal>
        <div>
          <span className="section-heading__eyebrow">{cta.eyebrow}</span>
          <h2>Cùng trao đổi về dự án của bạn</h2>
          <p>Chia sẻ ngắn gọn nhu cầu để TDS tư vấn hướng phù hợp.</p>
        </div>
        <div className="cta-banner__actions">
          <PrimaryButton label={cta.primaryAction} />
          <PrimaryButton label={cta.secondaryAction} variant="secondary" />
        </div>
      </div>
    </section>
  )
}
