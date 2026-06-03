import { useState } from 'react'
import { useLightbox } from './Lightbox'

/**
 * Resilient image. If the remote source fails, it gracefully swaps to a warm
 * gold-on-charcoal gradient with the Food Hub monogram, so a broken URL never
 * leaves an ugly placeholder in an otherwise polished layout.
 *
 * Pass `zoomable` to make the image open in the full-screen lightbox on click
 * (keyboard accessible). `zoomSrc` overrides the image shown in the lightbox.
 */
export default function Img({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  loading = 'lazy',
  zoomable = false,
  zoomSrc,
  ...rest
}) {
  const [failed, setFailed] = useState(false)
  const lightbox = useLightbox()

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

  const interactive = zoomable && lightbox
  const openZoom = () => lightbox?.open({ src: zoomSrc || src, alt })

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      onClick={interactive ? openZoom : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                openZoom()
              }
            }
          : undefined
      }
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? `View larger: ${alt}` : undefined}
      className={`${className} ${imgClassName} ${interactive ? 'cursor-zoom-in' : ''}`.trim()}
      {...rest}
    />
  )
}
