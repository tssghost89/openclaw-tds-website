interface ImagePanelProps {
  src: string
  alt: string
  eyebrow?: string
  title?: string
}

export function ImagePanel({ src, alt, eyebrow, title }: ImagePanelProps) {
  return (
    <div className="image-panel">
      <img src={src} alt={alt} />
      {(eyebrow || title) && (
        <div className="image-panel__overlay">
          {eyebrow ? <span>{eyebrow}</span> : null}
          {title ? <h3>{title}</h3> : null}
        </div>
      )}
    </div>
  )
}
