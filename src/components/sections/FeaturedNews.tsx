import type { NewsItem } from '../../types'
import { NewsCard } from '../ui/NewsCard'
import { SectionHeading } from '../ui/SectionHeading'

interface FeaturedNewsProps {
  posts: NewsItem[]
}

export function FeaturedNews({ posts }: FeaturedNewsProps) {
  return (
    <section className="section" id="tin-tuc">
      <div className="container">
        <SectionHeading
          eyebrow="Tin tức & chuyên môn"
          title="Không chỉ là profile doanh nghiệp, website còn cần chiều sâu kiến thức thiết kế"
          description="Khối tin tức giúp TDS xây dựng niềm tin chuyên môn và hỗ trợ SEO cho các chủ đề liên quan đến thiết kế xây dựng."
        />
        <div className="card-grid card-grid--three">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
