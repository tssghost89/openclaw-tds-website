import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function PageTransition() {
  const location = useLocation()

  useEffect(() => {
    document.body.classList.remove('page-is-entering')
    window.requestAnimationFrame(() => {
      document.body.classList.add('page-is-entering')
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })

    const timeout = window.setTimeout(() => {
      document.body.classList.remove('page-is-entering')
    }, 520)

    return () => {
      window.clearTimeout(timeout)
      document.body.classList.remove('page-is-entering')
    }
  }, [location.pathname])

  return null
}
