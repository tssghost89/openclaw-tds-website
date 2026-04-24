interface StatCardProps {
  value: string
  label: string
}

const iconMap: Record<string, string> = {
  'Tư vấn': '◌',
  'Tiêu chuẩn': '◇',
}

export function StatCard({ value, label }: StatCardProps) {
  const icon = iconMap[value] ?? '•'

  return (
    <article className="info-card info-card--compact stat-card">
      <span className="stat-card__icon" aria-hidden="true">{icon}</span>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  )
}
