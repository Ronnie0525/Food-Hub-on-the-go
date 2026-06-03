import { useEffect } from 'react'

/**
 * Adds the `is-visible` class to every `.reveal` element once it scrolls into
 * view, driving the subtle CSS entrance animation. Re-runs per route via the
 * `key` argument so freshly mounted pages animate in correctly.
 */
export function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!els.length) return

    // Fallback: if IntersectionObserver is unavailable, show everything.
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])
}
