import { FilterChips } from '../components/ui/FilterChips'
import { PageHero } from '../components/ui/PageHero'
import { ProjectCard } from '../components/ui/ProjectCard'
import { siteData } from '../data/siteData'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dự án"
        title="Một số dự án tiêu biểu"
        description="Các dự án theo từng bài toán thiết kế."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Dự án' }]}
        imageSrc="/assets/project-detail-1.jpg"
        imageAlt="Dự án tiêu biểu của TDS"
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', 'Tòa nhà', 'Trường học', 'Bệnh viện', 'Công cộng', 'Công nghiệp', 'Nhà xưởng']} />
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
