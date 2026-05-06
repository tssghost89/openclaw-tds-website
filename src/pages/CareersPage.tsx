import { FilterChips } from '../components/ui/FilterChips'
import { JobCard } from '../components/ui/JobCard'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Tuyển dụng"
        title="Cơ hội nghề nghiệp tại TDS Việt Nam"
        description="Các vị trí gợi ý bám sát năng lực hoạt động thực tế của doanh nghiệp."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Tuyển dụng' }]}
        imageSrc="/assets/office-project.jpg"
        imageAlt="Cơ hội nghề nghiệp tại TDS"
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', 'Khảo sát – Địa chất', 'Thí nghiệm – Kiểm định', 'Tư vấn – Thi công']} />
        </div>
      </section>
      <section className="section section--compact-top">
        <div className="container editorial-intro-layout editorial-intro-layout--compact">
          <div className="editorial-intro-layout__main">
            <span className="section-heading__eyebrow">Môi trường làm việc</span>
            <h2>TDS tìm người làm nghề nghiêm túc và có tư duy rõ ràng.</h2>
          </div>
          <div className="editorial-intro-layout__aside">
            <p>Các vị trí dưới đây phù hợp với người muốn phát triển chuyên môn trong môi trường thiết kế gọn, rõ và thực tế.</p>
          </div>
        </div>
        <div className="container jobs-list jobs-list--premium">
          {siteData.jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>
    </>
  )
}
