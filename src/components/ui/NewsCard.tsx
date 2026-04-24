import { Link } from 'react-router-dom'
import type { NewsItem } from '../../types'

interface NewsCardProps {
  post: NewsItem
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <article className="news-card reveal-up">
      <div className="news-card__cover news-card__cover--image">
        <img src="/assets/news-editorial.jpg" alt={post.title} />
        <span>{post.category}</span>
      </div>
      <div className="news-card__meta">
        <span>{post.category}</span>
        <span>{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <Link to={`/tin-tuc/${post.slug}`}>Đọc bài viết</Link>
    </article>
  )
}
