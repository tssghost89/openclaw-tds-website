import { FilterChips } from '../components/ui/FilterChips'
import { NewsCard } from '../components/ui/NewsCard'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tin tức"
        title="Kiến thức và cập nhật xoay quanh thiết kế xây dựng"
        description="Những bài viết ngắn gọn, rõ ràng và hữu ích cho người đang quan tâm đến thiết kế xây dựng."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Tin tức' }]}
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', 'Kiến thức chuyên môn', 'Giáo dục', 'Y tế', 'Công nghiệp']} />
        </div>
      </section>
      <section className="section section--compact-top">
        <div className="container card-grid card-grid--three">
          {siteData.news.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
