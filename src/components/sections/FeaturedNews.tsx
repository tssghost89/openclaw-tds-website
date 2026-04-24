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
          title="Những góc nhìn thực tế về thiết kế xây dựng, công năng và cách tổ chức không gian"
          description="Từ cách trình bày phương án bằng phối cảnh 3D đến việc tối ưu mặt bằng sử dụng, nội dung đều được viết ngắn gọn, rõ ràng và gần với nhu cầu thực tế."
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
