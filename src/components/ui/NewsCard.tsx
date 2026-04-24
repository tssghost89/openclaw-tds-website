import { Link } from 'react-router-dom'
import type { NewsItem } from '../../types'

interface NewsCardProps {
  post: NewsItem
}

const newsImages = {
  'vai-tro-phoi-canh-3d': '/assets/news-3d.jpg',
  'toi-uu-cong-nang-nha-xuong': '/assets/news-factory.jpg',
  'thiet-ke-truong-hoc-hien-dai': '/assets/news-school.jpg',
} as const

export function NewsCard({ post }: NewsCardProps) {
  const imageSrc = newsImages[post.slug as keyof typeof newsImages] ?? '/assets/news-editorial.jpg'

  return (
    <article className="news-card" data-reveal>
      <div className="news-card__cover news-card__cover--image">
        <img src={imageSrc} alt={post.title} />
        <span>{post.category}</span>
      </div>
      <div className="news-card__meta">
        <span>{post.category}</span>
        <span>{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <div className="news-card__accent" />
      <Link to={`/tin-tuc/${post.slug}`}>Đọc bài viết</Link>
    </article>
  )
}
