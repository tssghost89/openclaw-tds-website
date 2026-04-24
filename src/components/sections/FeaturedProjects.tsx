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
          title="Những dự án thể hiện rõ cách TDS xử lý công năng, hình ảnh kiến trúc và trải nghiệm sử dụng"
          description="Mỗi dự án đều được phát triển từ bối cảnh cụ thể, nhu cầu sử dụng rõ ràng và mục tiêu đầu tư thực tế của chủ đầu tư."
        />
        <div className="project-list premium-project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
