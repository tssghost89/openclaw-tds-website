import type { SectorItem } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'

interface SectorExpertiseProps {
  sectors: SectorItem[]
}

export function SectorExpertise({ sectors }: SectorExpertiseProps) {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeading
          eyebrow="Lĩnh vực công trình"
          title="Các lĩnh vực TDS triển khai"
          description="Mỗi nhóm công trình có yêu cầu riêng và cách xử lý phù hợp."
        />
        <div className="card-grid card-grid--four sector-grid-premium">
          {sectors.slice(0, 6).map((sector, index) => (
            <article key={sector.title} className="sector-card" data-reveal>
              <span className="sector-card__index">{`0${index + 1}`}</span>
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
