export function CapabilityStrip() {
  const items = [
    'Thiết kế công trình dân dụng',
    'Giải pháp cho giáo dục và y tế',
    'Thiết kế công nghiệp và nhà xưởng',
    'Triển khai 2D, 3D và tối ưu công năng',
  ]

  return (
    <section className="capability-strip">
      <div className="container capability-strip__inner">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
