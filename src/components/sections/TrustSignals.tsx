export function TrustSignals() {
  const items = [
    'Thiết kế cho công trình dân dụng, công cộng và công nghiệp',
    'Khả năng triển khai từ định hướng đến hồ sơ trình bày',
    'Tối ưu công năng, lưu thông và hiệu quả sử dụng',
    'Phối hợp 2D kỹ thuật và phối cảnh 3D trong cùng một quy trình',
  ]

  return (
    <section className="section section--compact-top">
      <div className="container trust-signals">
        {items.map((item) => (
          <div key={item} className="trust-signals__item reveal-up">
            <span />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
