import type { ProjectItem } from '../../types'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'

interface FeaturedProjectsProps {
  projects: ProjectItem[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="section" id="du-an">
      <div className="container">
        <SectionHeading
          eyebrow="Dự án tiêu biểu"
          title="Những định hướng thiết kế thể hiện rõ bài toán công năng và loại hình công trình"
          description="Dự án được giới thiệu theo hướng portfolio doanh nghiệp: rõ loại hình, rõ quy mô và rõ giá trị thiết kế mang lại."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
