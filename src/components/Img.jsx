import { useState } from 'react'

/**
 * Resilient image. If the remote source fails, it gracefully swaps to a warm
 * gold-on-charcoal gradient with the Food Hub monogram, so a broken URL never
 * leaves an ugly placeholder in an otherwise polished layout.
 */
export default function Img({ src, alt = '', className = '', imgClassName = '', loading = 'lazy', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-surface-light via-surface to-coal ${className}`}
      >
        <span className="select-none font-serif text-3xl tracking-tight text-gold-500/40">FH</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`.trim()}
      {...rest}
    />
  )
}
