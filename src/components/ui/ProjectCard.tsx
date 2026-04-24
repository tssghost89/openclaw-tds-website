import { Link } from 'react-router-dom'
import type { ProjectItem } from '../../types'

interface ProjectCardProps {
  project: ProjectItem
  index?: number
  featured?: boolean
}

const projectImages = {
  'khoi-nha-dieu-hanh-khu-cong-nghiep': '/assets/industrial-project.jpg',
  'truong-lien-cap-hien-dai': '/assets/school-project.jpg',
  'trung-tam-y-te-khu-vuc': '/assets/hospital-project.jpg',
} as const

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  const imageSrc = projectImages[project.slug as keyof typeof projectImages] ?? '/assets/office-project.jpg'

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__visual project-card__visual--image">
        <img src={imageSrc} alt={project.title} />
        <div className="project-card__visual-overlay">
          <span>{`0${index + 1}`}</span>
          <p>{project.category}</p>
        </div>
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
