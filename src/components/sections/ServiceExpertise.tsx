import type { ServiceItem } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'

interface ServiceExpertiseProps {
  services: ServiceItem[]
}

export function ServiceExpertise({ services }: ServiceExpertiseProps) {
  return (
    <section className="section" id="dich-vu">
      <div className="container">
        <SectionHeading
          eyebrow="Dịch vụ chuyên môn"
          title="Giải pháp thiết kế được phát triển rõ ràng từ bước đầu tiên đến khi hoàn thiện hồ sơ"
          description="TDS đồng hành cùng chủ đầu tư từ giai đoạn định hướng, tổ chức công năng cho đến trình bày phương án bằng 2D và 3D một cách mạch lạc."
        />
        <div className="card-grid card-grid--three premium-service-grid">
          {services.map((service, index) => (
            <article key={service.title} className="info-card premium-service-card reveal-up">
              <div className="premium-service-card__media">
                <span>{`0${index + 1}`}</span>
              </div>
              <div className="premium-service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
