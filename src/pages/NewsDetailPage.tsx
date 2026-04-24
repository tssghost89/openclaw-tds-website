import { useParams } from 'react-router-dom'
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
        <div className="container article-layout">
          <article className="info-card article-card">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
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
