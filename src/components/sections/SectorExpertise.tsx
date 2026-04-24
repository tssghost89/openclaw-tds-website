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
          title="Một đội ngũ thiết kế có thể làm việc linh hoạt trên nhiều loại hình công trình khác nhau"
          description="Dù là giáo dục, y tế, công cộng hay công nghiệp, điều TDS giữ nhất quán luôn là tư duy công năng rõ ràng và hình ảnh kiến trúc chỉn chu."
        />
        <div className="card-grid card-grid--four sector-grid-premium">
          {sectors.map((sector, index) => (
            <article key={sector.title} className="sector-card reveal-up">
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
