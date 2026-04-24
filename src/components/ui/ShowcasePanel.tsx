interface ShowcasePanelProps {
  eyebrow: string
  title: string
  description: string
  variant?: 'architectural' | 'technical' | 'editorial'
}

export function ShowcasePanel({
  eyebrow,
  title,
  description,
  variant = 'architectural',
}: ShowcasePanelProps) {
  return (
    <div className={`showcase-panel showcase-panel--${variant}`}>
      <span>{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="showcase-panel__grid" />
    </div>
  )
}
