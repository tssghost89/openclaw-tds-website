import { Link } from 'react-router-dom'
import type { JobItem } from '../../types'

interface JobCardProps {
  job: JobItem
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="job-card reveal-up">
      <div>
        <h3>{job.title}</h3>
        <p>{job.summary}</p>
      </div>
      <div className="job-card__meta">
        <span>{job.department}</span>
        <span>{job.type}</span>
        <span>{job.location}</span>
      </div>
      <Link to={`/tuyen-dung/${job.slug}`}>Xem chi tiết</Link>
    </article>
  )
}
