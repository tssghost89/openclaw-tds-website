import { Link } from 'react-router-dom'

interface PrimaryButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: string
}

export function PrimaryButton({ label, variant = 'primary', to = '/lien-he' }: PrimaryButtonProps) {
  return (
    <Link to={to} className={`button button--${variant}`}>
      {label}
    </Link>
  )
}
