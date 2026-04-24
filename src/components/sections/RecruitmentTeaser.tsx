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
          title="Gia nhập đội ngũ thiết kế đang theo đuổi những công trình chỉn chu và có giá trị sử dụng lâu dài"
          description="TDS tìm kiếm những cộng sự nghiêm túc với nghề, yêu thích tư duy thiết kế rõ ràng và mong muốn phát triển cùng các dự án đa lĩnh vực."
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
