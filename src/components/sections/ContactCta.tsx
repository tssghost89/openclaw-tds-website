import type { CtaData } from '../../types'
import { PrimaryButton } from '../ui/PrimaryButton'

interface ContactCtaProps {
  cta: CtaData
}

export function ContactCta({ cta }: ContactCtaProps) {
  return (
    <section className="section" id="lien-he">
      <div className="container cta-banner reveal-up">
        <div>
          <span className="section-heading__eyebrow">{cta.eyebrow}</span>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
        </div>
        <div className="cta-banner__actions">
          <PrimaryButton label={cta.primaryAction} />
          <PrimaryButton label={cta.secondaryAction} variant="secondary" />
        </div>
      </div>
    </section>
  )
}
