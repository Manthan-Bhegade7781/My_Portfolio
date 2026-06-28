import { useEffect, useRef } from 'react'

/**
 * Attach to a container ref — all children with class "fade-up"
 * inside it will animate in when they enter the viewport.
 */
export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('.fade-up')
    targets.forEach((el) => observer.observe(el))

    return () => targets.forEach((el) => observer.unobserve(el))
  }, [])

  return ref
}
