import { Link } from 'react-router-dom'
import type { ProjectItem } from '../../types'

interface ProjectCardProps {
  project: ProjectItem
  index?: number
  featured?: boolean
}

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__visual">
        <span>{`0${index + 1}`}</span>
        <p>{project.category}</p>
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">{project.meta}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card__tags">
          {project.solution.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <Link to={`/du-an/${project.slug}`}>Xem chi tiết dự án</Link>
      </div>
    </article>
  )
}
