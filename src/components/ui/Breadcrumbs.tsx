import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label} className="breadcrumbs__item">
          {item.href && index !== items.length - 1 ? (
            <Link to={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index !== items.length - 1 ? <span className="breadcrumbs__divider">/</span> : null}
        </span>
      ))}
    </nav>
  )
}
