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
    <div className="hero-insights">
      {insights.map((item) => (
        <article key={item.label} className="hero-insight-card">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  )
}
