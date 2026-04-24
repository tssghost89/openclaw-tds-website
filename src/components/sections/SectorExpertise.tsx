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
          title="Giải pháp thiết kế cho nhiều nhóm công trình với cùng một tinh thần chỉn chu và mạch lạc"
          description="Mỗi lĩnh vực có yêu cầu riêng, nhưng đều cần một cách tiếp cận rõ ràng về công năng, hình ảnh và trải nghiệm sử dụng."
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
