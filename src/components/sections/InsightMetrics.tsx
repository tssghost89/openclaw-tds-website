export function InsightMetrics() {
  const items = [
    {
      title: 'Cách tiếp cận',
      value: 'Rõ từ đầu',
      description: 'Mỗi dự án đều được bắt đầu bằng việc làm rõ mục tiêu sử dụng, đối tượng khai thác và các yêu cầu vận hành cốt lõi.',
    },
    {
      title: 'Chất lượng trình bày',
      value: 'Mạch lạc',
      description: 'Hồ sơ 2D, phối cảnh 3D và tài liệu trình bày được phát triển đồng bộ để chủ đầu tư dễ theo dõi và đánh giá.',
    },
    {
      title: 'Giá trị lâu dài',
      value: 'Bền vững',
      description: 'Giải pháp thiết kế không chỉ hướng đến hình ảnh công trình, mà còn ưu tiên hiệu quả sử dụng và khả năng vận hành về lâu dài.',
    },
  ]

  return (
    <section className="section">
      <div className="container insight-metrics">
        {items.map((item) => (
          <article key={item.title} className="insight-metric-card reveal-up">
            <span>{item.title}</span>
            <strong>{item.value}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
