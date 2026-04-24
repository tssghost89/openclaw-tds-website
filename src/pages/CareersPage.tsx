import { FilterChips } from '../components/ui/FilterChips'
import { JobCard } from '../components/ui/JobCard'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Tuyển dụng"
        title="Cơ hội tham gia đội ngũ thiết kế cho những công trình đa lĩnh vực"
        description="Trang tuyển dụng giữ tinh thần gọn, rõ và chuyên nghiệp để phù hợp với nhóm ứng viên ngành thiết kế xây dựng."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Tuyển dụng' }]}
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', 'Architecture', 'Technical Drawing', 'Visualization']} />
        </div>
      </section>
      <section className="section section--compact-top">
        <div className="container jobs-list">
          {siteData.jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>
    </>
  )
}
