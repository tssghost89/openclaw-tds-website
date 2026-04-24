import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function PageTransition() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const timeout = setTimeout(() => setVisible(false), 450)
    return () => clearTimeout(timeout)
  }, [location.pathname])

  return <div className={`page-transition ${visible ? 'is-visible' : ''}`} aria-hidden="true" />
}
