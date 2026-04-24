import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    elements.forEach((element) => {
      element.classList.remove('is-visible')
    })

    const revealVisibleElements = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.top < viewportHeight - 48) {
          element.classList.add('is-visible')
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const raf = window.requestAnimationFrame(() => {
      revealVisibleElements()
      elements
        .filter((element) => !element.classList.contains('is-visible'))
        .forEach((element) => observer.observe(element))
    })

    return () => {
      window.cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [location.pathname])

  return null
}
