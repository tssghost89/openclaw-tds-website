import { NavLink } from 'react-router-dom'
import type { NavigationItem } from '../../types'
import { PrimaryButton } from '../ui/PrimaryButton'

interface MainHeaderProps {
  navigation: NavigationItem[]
}

export function MainHeader({ navigation }: MainHeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink className="site-logo" to="/" aria-label="TDS home">
          <span className="site-logo__mark">TDS</span>
          <span className="site-logo__text">Construction Design</span>
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.label} to={item.href} className={({ isActive }) => (isActive ? 'is-active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <PrimaryButton label="Nhận tư vấn" />
      </div>
    </header>
  )
}
