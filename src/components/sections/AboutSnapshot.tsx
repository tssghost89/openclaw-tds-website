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
            <p>TDS ưu tiên một cách tiếp cận điềm tĩnh, chuẩn xác và đủ chiều sâu để mỗi công trình vừa đẹp, vừa dễ sử dụng, vừa bền giá trị theo thời gian.</p>
          </div>
        </div>
        <div className="premium-about-layout__visuals">
          <ImagePanel
            src="/assets/about-architecture.jpg"
            alt="Khối kiến trúc hiện đại"
            eyebrow="Architectural Direction"
            title="Ngôn ngữ kiến trúc hiện đại luôn đi cùng tổ chức công năng mạch lạc"
          />
          <div className="about-snapshot__stats">
            {about.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
