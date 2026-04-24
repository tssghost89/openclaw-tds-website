interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="info-card info-card--compact stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  )
}
