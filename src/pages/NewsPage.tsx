import { FilterChips } from '../components/ui/FilterChips'
import { NewsCard } from '../components/ui/NewsCard'
import { PageHero } from '../components/ui/PageHero'
import { siteData } from '../data/siteData'

export function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tin tức"
        title="Tin tức và chia sẻ chuyên môn"
        description="Các nội dung định hướng theo năng lực khảo sát, thí nghiệm, kiểm định và xây dựng của TDS Việt Nam."
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }, { label: 'Tin tức' }]}
        imageSrc="/assets/news-editorial.jpg"
        imageAlt="Tin tức và chia sẻ từ TDS"
      />
      <section className="section section--light section--compact-top">
        <div className="container">
          <FilterChips items={['Tất cả', 'Kiến thức chuyên môn', 'Khảo sát công trình', 'Kiểm định công trình']} />
        </div>
      </section>
      <section className="section section--compact-top">
        <div className="container editorial-intro-layout">
          <div className="editorial-intro-layout__main">
            <span className="section-heading__eyebrow">Biên tập nội dung</span>
            <h2>Nội dung ngắn gọn, tập trung vào điều quan trọng.</h2>
          </div>
          <div className="editorial-intro-layout__aside">
            <p>TDS chia sẻ các góc nhìn ngắn, rõ và có ích cho người đang làm việc với bài toán thiết kế xây dựng.</p>
          </div>
        </div>
        <div className="container card-grid card-grid--three news-grid-premium">
          {siteData.news.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  )
}
