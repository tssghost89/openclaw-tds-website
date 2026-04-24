import type { HeroData } from '../../types'
import { PrimaryButton } from '../ui/PrimaryButton'
import { HeroInsights } from './HeroInsights'

interface HeroSectionProps {
  hero: HeroData
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero-section hero-section--premium" id="trang-chu">
      <div className="container">
        <div className="hero-banner">
          <img src="/assets/hero-building.jpg" alt="Công trình kiến trúc hiện đại" className="hero-banner__image" />
          <img src="/assets/hero-overlay.jpg" alt="Chi tiết kiến trúc hiện đại" className="hero-banner__image hero-banner__image--secondary" />
          <div className="hero-banner__overlay" />
          <div className="hero-banner__glow" />
          <div className="hero-banner__content hero-entrance">
            <span className="section-heading__eyebrow hero-entrance__eyebrow">{hero.eyebrow}</span>
            <h1 className="hero-entrance__title">{hero.title}</h1>
            <p className="hero-entrance__description">{hero.description}</p>
            <div className="hero-section__actions hero-entrance__actions">
              <PrimaryButton label={hero.primaryAction} to="/dich-vu" />
              <PrimaryButton label={hero.secondaryAction} variant="secondary" to="/du-an" />
            </div>
          </div>
          <div className="hero-banner__aside hero-entrance__aside">
            <div className="hero-floating-card hero-floating-card--glass hero-floating-card--vision">
              <strong>TDS Project Vision</strong>
              <p>Thiết kế được phát triển để công trình giữ được hình ảnh chuyên nghiệp, công năng rõ ràng và hiệu quả sử dụng lâu dài.</p>
            </div>
            <div className="hero-visual__panel hero-visual__panel--secondary premium-hero-info hero-floating-card--panel">
              <span>Năng lực trọng tâm</span>
              <ul>
                {hero.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <HeroInsights />
      </div>
    </section>
  )
}
