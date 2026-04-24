import type { HeroData } from '../../types'
import { ImagePanel } from '../ui/ImagePanel'
import { PrimaryButton } from '../ui/PrimaryButton'
import { HeroInsights } from './HeroInsights'

interface HeroSectionProps {
  hero: HeroData
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="hero-section hero-section--premium" id="trang-chu">
      <div className="container hero-section__grid premium-hero-layout">
        <div className="hero-section__content reveal-up">
          <span className="section-heading__eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-section__actions">
            <PrimaryButton label={hero.primaryAction} to="/dich-vu" />
            <PrimaryButton label={hero.secondaryAction} variant="secondary" to="/du-an" />
          </div>
          <HeroInsights />
        </div>
        <div className="hero-visual reveal-up reveal-delay-1">
          <ImagePanel
            src="/assets/hero-building.jpg"
            alt="Công trình kiến trúc hiện đại"
            eyebrow="TDS Project Vision"
            title="Thiết kế được phát triển để công trình giữ được hình ảnh chuyên nghiệp và hiệu quả sử dụng lâu dài"
          />
          <div className="hero-visual__panel hero-visual__panel--secondary premium-hero-info">
            <span>Năng lực trọng tâm</span>
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
