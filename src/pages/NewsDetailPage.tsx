import { useParams } from 'react-router-dom'
import { EditorialQuote } from '../components/ui/EditorialQuote'
import { ImagePanel } from '../components/ui/ImagePanel'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { siteData } from '../data/siteData'

export function NewsDetailPage() {
  const { slug } = useParams()
  const post = siteData.news.find((item) => item.slug === slug)

  if (!post) {
    return <div className="container empty-state">Không tìm thấy bài viết.</div>
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.summary}
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tức', href: '/tin-tuc' },
          { label: post.title },
        ]}
      />
      <section className="section section--compact-top">
        <div className="container editorial-layout">
          <article className="info-card article-card reveal-up">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="takeaway-list">
              <h3>Điểm chính rút ra</h3>
              <ul>
                {post.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <EditorialQuote
              quote="Một nội dung tốt không cần quá nhiều lời, chỉ cần đủ rõ để người đọc thấy hữu ích và tin tưởng"
              caption="Biên tập nội dung cho TDS"
            />
          </article>
          <ImagePanel
            src="/assets/news-editorial.jpg"
            alt="Hình ảnh minh họa cho bài viết chuyên môn"
            eyebrow="Editorial cover"
            title="Những bài viết được chọn lọc để mang lại góc nhìn rõ ràng và hữu ích cho người đọc"
          />
        </div>
      </section>
      <RelatedLinks
        title="Bài viết liên quan"
        items={siteData.news
          .filter((item) => item.slug !== post.slug)
          .slice(0, 3)
          .map((item) => ({ title: item.title, href: `/tin-tuc/${item.slug}`, meta: item.category }))}
      />
    </>
  )
}
