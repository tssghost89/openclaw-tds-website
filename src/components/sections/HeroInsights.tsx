export function HeroInsights() {
  const insights = [
    {
      value: '2D / 3D',
      label: 'Triển khai đồng bộ từ kỹ thuật đến trình bày',
    },
    {
      value: 'Multi-sector',
      label: 'Thiết kế cho dân dụng, công cộng và công nghiệp',
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
