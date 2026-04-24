import type { AboutSnapshotData } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { StatCard } from '../ui/StatCard'

interface AboutSnapshotProps {
  about: AboutSnapshotData
}

export function AboutSnapshot({ about }: AboutSnapshotProps) {
  return (
    <section className="section section--light" id="gioi-thieu">
      <div className="container about-snapshot">
        <div className="about-snapshot__content">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
          <div className="about-snapshot__quote">
            <span>Design for real use</span>
            <p>TDS phát triển giải pháp thiết kế dựa trên hiệu quả sử dụng không gian, không chạy theo hình thức đơn thuần.</p>
          </div>
        </div>
        <div className="about-snapshot__stats">
          {about.stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
