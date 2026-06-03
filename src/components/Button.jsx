import { Link } from 'react-router-dom'
import { ArrowIcon } from './Icons'

// Minimal, uniform button system — only the site's gold/charcoal palette.
// `solid` is the single primary action; `outline` and `ghost` are quieter.
const variants = {
  solid: 'bg-gold-500 text-ink hover:bg-gold-400',
  outline: 'border border-gold-500/50 text-gold-200 hover:border-gold-400 hover:bg-gold-500/10',
  ghost: 'text-cream-soft hover:text-gold-200',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-2.5 text-[13px]',
  lg: 'px-7 py-3.5 text-sm',
}

/**
 * Renders an internal <Link>, an external <a>, or a <button> depending on props.
 * Touch-friendly, consistent radius, subtle transitions — no glow, no color noise.
 *
 * `variant` aliases (primary/secondary/whatsapp) map onto the minimal set so older
 * call sites keep working without visual inconsistency.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'solid',
  size = 'md',
  withArrow = false,
  className = '',
  ...rest
}) {
  const resolved =
    variant === 'primary' || variant === 'whatsapp'
      ? 'solid'
      : variant === 'secondary'
        ? 'outline'
        : variant

  const classes = [
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-wide2',
    'transition-colors duration-300 ease-out-soft active:scale-[0.98]',
    variants[resolved] || variants.solid,
    sizes[size],
    className,
  ].join(' ')

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  )
}
