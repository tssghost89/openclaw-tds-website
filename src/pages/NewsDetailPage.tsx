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
        description="Nội dung chuyên môn được biên tập theo định hướng năng lực và lĩnh vực hoạt động của TDS Việt Nam."
        breadcrumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tức', href: '/tin-tuc' },
          { label: post.title },
        ]}
        imageSrc="/assets/news-editorial.jpg"
        imageAlt={post.title}
      />
      <section className="section section--compact-top">
        <div className="container editorial-layout">
          <article className="info-card article-card article-card--premium reveal-up">
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
              quote="TDS Việt Nam ưu tiên chia sẻ các nội dung ngắn gọn nhưng có giá trị thực tiễn cho chủ đầu tư, nhà thầu và các đơn vị làm việc trong lĩnh vực xây dựng."
              caption="Chuyên mục chia sẻ chuyên môn"
            />
          </article>
          <ImagePanel
            src="/assets/news-editorial.jpg"
            alt="Hình ảnh minh họa cho bài viết chuyên môn"
            eyebrow="Chia sẻ chuyên môn"
            title="Thông tin thực tế, ngắn gọn và bám sát nhu cầu kỹ thuật của dự án"
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
