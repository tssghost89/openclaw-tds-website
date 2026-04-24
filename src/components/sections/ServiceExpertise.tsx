import type { ServiceItem } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'

interface ServiceExpertiseProps {
  services: ServiceItem[]
}

const serviceImages = {
  'thiet-ke-2d-ky-thuat': '/assets/service-2d.jpg',
  'thiet-ke-3d-phoi-canh': '/assets/service-3d.jpg',
  'thiet-ke-kien-truc-cong-trinh': '/assets/service-architecture.jpg',
  'thiet-ke-canh-quan': '/assets/service-landscape.jpg',
  'toi-uu-cong-nang-su-dung': '/assets/service-function.jpg',
  'tu-van-giai-phap-thiet-ke': '/assets/service-consulting.jpg',
} as const

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
          {services.map((service, index) => {
            const imageSrc = serviceImages[service.slug as keyof typeof serviceImages] ?? '/assets/service-architecture.jpg'
            return (
              <article key={service.title} className="info-card premium-service-card" data-reveal>
                <div className="premium-service-card__media premium-service-card__media--image">
                  <img src={imageSrc} alt={service.title} />
                  <div className="premium-service-card__overlay">
                    <span>{`0${index + 1}`}</span>
                  </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
