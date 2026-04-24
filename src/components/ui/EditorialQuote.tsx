interface EditorialQuoteProps {
  quote: string
  caption: string
}

export function EditorialQuote({ quote, caption }: EditorialQuoteProps) {
  return (
    <aside className="editorial-quote">
      <p>“{quote}”</p>
      <span>{caption}</span>
    </aside>
  )
}
