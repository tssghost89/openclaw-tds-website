import type { AboutSnapshotData } from '../../types'
import { ImagePanel } from '../ui/ImagePanel'
import { SectionHeading } from '../ui/SectionHeading'
import { StatCard } from '../ui/StatCard'

interface AboutSnapshotProps {
  about: AboutSnapshotData
}

export function AboutSnapshot({ about }: AboutSnapshotProps) {
  return (
    <section className="section section--light" id="gioi-thieu">
      <div className="container about-snapshot premium-about-layout">
        <div className="about-snapshot__content">
          <SectionHeading
            eyebrow={about.eyebrow}
            title="Thiết kế rõ công năng, dễ triển khai"
            description="TDS phát triển phương án ngắn gọn, rõ ràng và bám sát nhu cầu sử dụng thực tế."
          />
          <div className="about-snapshot__quote">
            <span>Design for real use</span>
            <p>TDS ưu tiên công năng rõ, triển khai gọn và hiệu quả sử dụng lâu dài.</p>
          </div>
        </div>
        <div className="premium-about-layout__visuals">
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Khối kiến trúc hiện đại"
            eyebrow="Architectural Direction"
            title="Thiết kế hiện đại cần đi cùng công năng rõ ràng"
          />
          <div className="about-snapshot__stats about-snapshot__stats--compact">
            {about.stats.slice(0, 2).map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
