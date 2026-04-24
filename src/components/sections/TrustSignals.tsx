const items = [
  {
    title: 'Loại công trình',
    text: 'Dân dụng, công cộng và công nghiệp.',
  },
  {
    title: 'Phạm vi dịch vụ',
    text: 'Thiết kế 2D, 3D và giải pháp công năng.',
  },
  {
    title: 'Cách triển khai',
    text: 'Từ định hướng ban đầu đến hồ sơ trình bày.',
  },
  {
    title: 'Trọng tâm',
    text: 'Công năng, lưu thông và tính khả thi thực tế.',
  },
]

export function TrustSignals() {
  return (
    <section className="section section--compact-top">
      <div className="container">
        <div className="trust-signals__header">
          <span className="section-heading__eyebrow">Năng lực chính</span>
          <h2>Tín hiệu năng lực cốt lõi</h2>
        </div>
        <div className="trust-signals">
          {items.map((item) => (
            <div key={item.title} className="trust-signals__item" data-reveal>
              <span />
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
