import { useParams } from 'react-router-dom'
import { EditorialQuote } from '../components/ui/EditorialQuote'
import { PageHero } from '../components/ui/PageHero'
import { RelatedLinks } from '../components/ui/RelatedLinks'
import { ShowcasePanel } from '../components/ui/ShowcasePanel'
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
          <article className="info-card article-card">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <EditorialQuote
              quote="Nội dung chuyên môn tốt giúp website doanh nghiệp không chỉ đẹp mà còn đáng tin"
              caption="Content direction for TDS"
            />
          </article>
          <ShowcasePanel
            eyebrow="Editorial cover"
            title="Khối giả lập ảnh cover / hình minh họa chuyên môn"
            description="Tin tức trên website TDS nên có visual kèm theo để tăng cảm giác editorial và chất lượng trình bày."
            variant="editorial"
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
