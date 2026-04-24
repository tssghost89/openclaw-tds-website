import type { HeroData } from '../../types'
import { PrimaryButton } from '../ui/PrimaryButton'

interface HeroSectionProps {
  hero: HeroData
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero-section" id="trang-chu">
      <div className="container hero-section__grid">
        <div className="hero-section__content">
          <span className="section-heading__eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-section__actions">
            <PrimaryButton label={hero.primaryAction} to="/dich-vu" />
            <PrimaryButton label={hero.secondaryAction} variant="secondary" to="/du-an" />
          </div>
          <div className="hero-section__metrics">
            {hero.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual__panel hero-visual__panel--primary">
            <div className="hero-visual__blueprint" />
            <span>01</span>
            <h3>Technical Design Logic</h3>
            <p>Thiết kế 2D, 3D và định hướng kiến trúc phát triển từ nhu cầu sử dụng thực tế.</p>
          </div>
          <div className="hero-visual__panel hero-visual__panel--secondary">
            <span>Scope</span>
            <ul>
              {hero.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
