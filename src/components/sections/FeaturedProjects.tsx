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
          title="Một số dự án tiêu biểu"
          description="Các dự án tiêu biểu theo từng bài toán thiết kế."
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
