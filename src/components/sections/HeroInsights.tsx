export function HeroInsights() {
  const insights = [
    {
      value: '08+',
      label: 'Nhóm loại hình công trình trọng tâm',
    },
    {
      value: '2D / 3D',
      label: 'Quy trình triển khai đồng bộ từ kỹ thuật đến trình bày',
    },
    {
      value: 'Function First',
      label: 'Tư duy lấy công năng và vận hành làm nền tảng',
    },
  ]

  return (
    <div className="hero-insights">
      {insights.map((item) => (
        <article key={item.label} className="hero-insight-card reveal-up">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  )
}
