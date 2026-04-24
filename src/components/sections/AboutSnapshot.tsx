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
            title={about.title}
            description={about.description}
          />
          <div className="about-snapshot__quote">
            <span>Design for real use</span>
            <p>TDS ưu tiên giải pháp rõ ràng, dễ sử dụng và có giá trị lâu dài cho từng loại công trình.</p>
          </div>
        </div>
        <div className="premium-about-layout__visuals">
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Khối kiến trúc hiện đại"
            eyebrow="Architectural Direction"
            title="Một ngôn ngữ thiết kế hiện đại luôn cần đi cùng công năng mạch lạc"
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
