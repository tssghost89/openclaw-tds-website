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
          title="Năng lực thiết kế xây dựng từ bản vẽ kỹ thuật đến phối cảnh trực quan"
          description="TDS xây dựng hệ dịch vụ tập trung vào triển khai kỹ thuật, giải pháp kiến trúc và tối ưu công năng cho nhiều loại hình công trình."
        />
        <div className="card-grid card-grid--three">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
