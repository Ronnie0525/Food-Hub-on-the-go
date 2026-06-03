import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from './Icons'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null) // { src, alt }
  const open = useCallback((next) => setItem(next), [])
  const close = useCallback(() => setItem(null), [])

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      <LightboxOverlay item={item} onClose={close} />
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  return useContext(LightboxContext)
}

function LightboxOverlay({ item, onClose }) {
  const [shown, setShown] = useState(false) // drives the fade/scale-in
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!item) return
    setZoomed(false)
    // next frame -> trigger entrance transition
    const id = requestAnimationFrame(() => setShown(true))
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(id)
      setShown(false)
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  if (!item) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || 'Image preview'}
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm transition-opacity duration-300 sm:p-8 ${
        shown ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-coal/70 text-cream transition-colors hover:border-gold-500/60 hover:text-gold-200 sm:right-6 sm:top-6"
      >
        <CloseIcon className="h-6 w-6" />
      </button>

      <figure
        className="flex max-h-full max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt || ''}
          onClick={() => setZoomed((z) => !z)}
          className={`max-h-[78vh] w-auto rounded-xl border border-surface-border object-contain shadow-card transition-transform duration-500 ease-out-soft ${
            shown ? 'scale-100' : 'scale-95'
          } ${zoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
        />
        {item.alt && (
          <figcaption className="max-w-xl text-center text-sm text-cream-muted">
            {item.alt}
          </figcaption>
        )}
      </figure>
    </div>,
    document.body,
  )
}
