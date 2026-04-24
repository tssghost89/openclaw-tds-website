import type { JobItem } from '../../types'
import { JobCard } from '../ui/JobCard'
import { SectionHeading } from '../ui/SectionHeading'

interface RecruitmentTeaserProps {
  jobs: JobItem[]
}

export function RecruitmentTeaser({ jobs }: RecruitmentTeaserProps) {
  return (
    <section className="section section--light" id="tuyen-dung">
      <div className="container">
        <SectionHeading
          eyebrow="Tuyển dụng"
          title="Tìm kiếm đội ngũ thiết kế cùng xây dựng những công trình có giá trị sử dụng cao"
          description="Trang tuyển dụng nên giữ phong cách chuyên nghiệp, súc tích và phù hợp với nhóm vị trí kiến trúc, họa viên kỹ thuật và visualizer."
        />
        <div className="jobs-list">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
