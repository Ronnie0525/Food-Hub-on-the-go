import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { MenuIcon, CloseIcon, BagIcon } from './Icons'
import { useCart } from '../context/CartContext'

function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label={`${site.name} — home`}
    >
      <img
        src="/logo.png"
        alt={`${site.name} logo`}
        className="h-12 w-auto shrink-0 transition-opacity group-hover:opacity-90 sm:h-14"
      />
      <span className="hidden flex-col border-l border-surface-border pl-3 leading-none sm:flex">
        <span className="font-serif text-base tracking-wide text-cream">Food Hub</span>
        <span className="text-[9px] uppercase tracking-eyebrow text-cream-muted">
          on the go
        </span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change and lock body scroll while open.
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const { count, openCart } = useCart()

  const linkClass = ({ isActive }) =>
    [
      'link-underline text-sm font-medium tracking-wide transition-colors duration-300',
      isActive ? 'text-gold-300' : 'text-cream-soft hover:text-cream',
    ].join(' ')

  // Uniform "Order Now" cart button with a live item-count badge.
  const OrderButton = ({ full = false }) => (
    <button
      type="button"
      onClick={openCart}
      className={[
        'group relative inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-[13px] font-medium uppercase tracking-wide2 text-ink transition-colors duration-300 hover:bg-gold-400 active:scale-[0.98]',
        full ? 'w-full' : '',
      ].join(' ')}
      aria-label={`Order now — ${count} item${count === 1 ? '' : 's'} in cart`}
    >
      <BagIcon className="h-4 w-4" />
      Order Now
      {count > 0 && (
        <span className="ml-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1 text-[11px] font-semibold text-gold-300">
          {count}
        </span>
      )}
    </button>
  )

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft',
        scrolled || open
          ? 'border-b border-surface-border bg-ink/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <OrderButton />
        </div>

        {/* Mobile: cart + menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-border text-cream transition-colors hover:border-gold-500/50 hover:text-gold-200"
            aria-label={`Open cart — ${count} item${count === 1 ? '' : 's'}`}
          >
            <BagIcon className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-semibold text-ink">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-surface-border text-cream transition-colors hover:border-gold-500/50 hover:text-gold-200"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'overflow-hidden border-t border-surface-border bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out-soft lg:hidden',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-gold-500/10 text-gold-300'
                      : 'text-cream-soft hover:bg-surface hover:text-cream',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="px-4 pb-2 pt-3">
            <OrderButton full />
          </li>
        </ul>
      </div>
    </header>
  )
}
