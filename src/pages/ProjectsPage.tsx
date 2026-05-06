import { FilterChips } from '../components/ui/FilterChips'
import { PageHero } from '../components/ui/PageHero'
import { ProjectCard } from '../components/ui/ProjectCard'
import { siteData } from '../data/siteData'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dự án"
        title="Một số dự án và nhóm công việc tiêu biểu"
        description="Dữ liệu dự án được biên tập lại từ hồ sơ năng lực TDS Việt Nam."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Dự án' }]}
        imageSrc="/assets/project-detail-1.jpg"
        imageAlt="Dự án tiêu biểu của TDS"
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', 'Giao thông hạ tầng', 'Khảo sát giao thông', 'Nền móng – cọc']} />
        </div>
      </section>
      <section className="section section--compact-top">
        <div className="container project-list">
          {siteData.projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}
