interface DetailFeatureListProps {
  title: string
  items: string[]
}

export function DetailFeatureList({ title, items }: DetailFeatureListProps) {
  return (
    <article className="info-card detail-feature-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
