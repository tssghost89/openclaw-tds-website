import { FilterChips } from '../components/ui/FilterChips'
import { NewsCard } from '../components/ui/NewsCard'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tin tức"
        title="Chuyên mục kiến thức và cập nhật xoay quanh thiết kế xây dựng"
        description="Nội dung tin tức được xây như một content hub chuyên môn, phục vụ cả thương hiệu lẫn SEO."
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
