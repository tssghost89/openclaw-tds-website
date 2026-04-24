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
        description="Những vị trí dành cho người muốn phát triển nghề nghiệp trong môi trường thiết kế xây dựng chỉn chu."
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
