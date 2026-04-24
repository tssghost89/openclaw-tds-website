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
          title="Thiết kế cho đa dạng công trình dân dụng, công cộng và công nghiệp"
          description="Website TDS được định hình để thể hiện năng lực đa lĩnh vực nhưng vẫn giữ cùng một tư duy: công năng rõ ràng, thẩm mỹ hiện đại và tính triển khai cao."
        />
        <div className="card-grid card-grid--four">
          {sectors.map((sector) => (
            <article key={sector.title} className="sector-card">
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
