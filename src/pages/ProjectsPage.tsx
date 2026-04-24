import { FilterChips } from '../components/ui/FilterChips'
import { PageHero } from '../components/ui/PageHero'
import { ProjectCard } from '../components/ui/ProjectCard'
import { siteData } from '../data/siteData'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dự án"
        title="Dự án theo từng loại hình công trình và bài toán thiết kế"
        description="Mỗi dự án là một cách tiếp cận khác nhau cho công năng, hình ảnh và trải nghiệm sử dụng."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Dự án' }]}
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
