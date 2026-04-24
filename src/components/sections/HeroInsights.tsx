export function HeroInsights() {
  const insights = [
    {
      value: 'Thiết kế có cơ sở',
      label: 'Mỗi phương án đều bắt đầu từ nhu cầu thật và điều kiện thực tế.',
    },
    {
      value: 'Triển khai mạch lạc',
      label: 'Hồ sơ, phối cảnh và trình bày được phát triển trong cùng một logic.',
    },
    {
      value: 'Chuẩn mực chuyên nghiệp',
      label: 'Quy trình rõ ràng, phối hợp hiệu quả và dễ đi đến bước tiếp theo.',
    },
  ]

  return (
    <div className="hero-insights" data-reveal>
      {insights.map((item, index) => (
        <article
          key={item.label}
          className="hero-insight-card"
          style={{ transitionDelay: `${120 + index * 120}ms` }}
        >
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  )
}
