interface FilterChipsProps {
  items: string[]
}

export function FilterChips({ items }: FilterChipsProps) {
  return (
    <div className="filter-chips" aria-label="Content filters">
      {items.map((item, index) => (
        <button key={item} type="button" className={`filter-chip ${index === 0 ? 'is-active' : ''}`}>
          {item}
        </button>
      ))}
    </div>
  )
}
