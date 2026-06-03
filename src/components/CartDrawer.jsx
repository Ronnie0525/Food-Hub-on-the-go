import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { site, waLink } from '../data/site'
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon, BagIcon } from './Icons'
import Img from './Img'

// Build a tidy WhatsApp order message from the cart contents.
function buildOrderMessage(items) {
  const lines = [
    `Hi ${site.chef}! I'd like to order from ${site.name}:`,
    '',
    ...items.map((i) => `• ${i.qty}× ${i.name}`),
    '',
    'Please confirm the total and let me know about pickup or delivery. Thank you!',
  ]
  return lines.join('\n')
}

export default function CartDrawer() {
  const { items, count, isOpen, closeCart, increment, decrement, removeItem, clear } = useCart()

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, closeCart])

  return (
    <>
      {/* Scrim */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={[
          'fixed inset-0 z-[60] bg-ink/70 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        className={[
          'fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col border-l border-surface-border bg-coal shadow-card transition-transform duration-400 ease-out-soft',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-surface-border px-6 py-5">
          <div className="flex items-center gap-3">
            <BagIcon className="h-5 w-5 text-gold-300" />
            <h2 className="font-serif text-xl text-cream">
              Your Order
              {count > 0 && <span className="ml-2 text-sm text-cream-muted">({count})</span>}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-cream transition-colors hover:border-gold-500/50 hover:text-gold-200"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-surface-border text-cream-dim">
              <BagIcon className="h-7 w-7" />
            </span>
            <div>
              <p className="font-serif text-lg text-cream">Your cart is empty</p>
              <p className="mt-2 text-sm text-cream-muted">
                Add a few dishes from the menu and we’ll send the order to {site.chef} on WhatsApp.
              </p>
            </div>
            <Link
              to="/menu"
              onClick={closeCart}
              className="rounded-full border border-gold-500/50 px-6 py-2.5 text-[13px] font-medium uppercase tracking-wide2 text-gold-200 transition-colors hover:border-gold-400 hover:bg-gold-500/10"
            >
              Browse the Menu
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex gap-3 rounded-2xl border border-surface-border bg-surface/50 p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Img src={item.image} alt={item.name} className="h-full w-full" imgClassName="h-full w-full object-cover" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-sm leading-snug text-cream">{item.name}</h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.name)}
                        aria-label={`Remove ${item.name}`}
                        className="shrink-0 text-cream-dim transition-colors hover:text-red-400"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      {/* Quantity stepper */}
                      <div className="flex items-center gap-1 rounded-full border border-surface-border">
                        <button
                          type="button"
                          onClick={() => decrement(item.name)}
                          aria-label={`Decrease ${item.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-cream-soft transition-colors hover:text-gold-200"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="w-5 text-center text-sm tabular-nums text-cream">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => increment(item)}
                          aria-label={`Increase ${item.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-cream-soft transition-colors hover:text-gold-200"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-serif text-sm text-gold-300 tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer / checkout */}
            <div className="border-t border-surface-border px-6 py-5">
              <p className="mb-4 text-center text-xs leading-relaxed text-cream-muted">
                Final pricing is confirmed on WhatsApp. We’ll reply with your total and a pickup or
                delivery time.
              </p>
              <a
                href={waLink(buildOrderMessage(items))}
                target="_blank"
                rel="noreferrer"
                onClick={closeCart}
                className="flex w-full items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium uppercase tracking-wide2 text-ink transition-colors hover:bg-gold-400"
              >
                Order Now
              </a>
              <button
                type="button"
                onClick={clear}
                className="mt-3 w-full text-center text-xs uppercase tracking-wide2 text-cream-dim transition-colors hover:text-cream-soft"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
