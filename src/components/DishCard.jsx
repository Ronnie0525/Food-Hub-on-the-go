import { Link } from 'react-router-dom'
import Img from './Img'
import Badge from './Badge'

/**
 * Premium, clickable dish card with image zoom on hover. The whole card links
 * to the menu; a stretched overlay link keeps it accessible and keyboard-focusable.
 */
export default function DishCard({ dish }) {
  return (
    <article className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-card transition-all duration-500 ease-out-soft hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-glow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img
          src={dish.image}
          alt={dish.alt}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/10 to-transparent" />
        {dish.badge && (
          <div className="absolute left-4 top-4">
            <Badge>{dish.badge}</Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl text-cream transition-colors group-hover:text-gold-100">
            {dish.name}
          </h3>
          <span className="shrink-0 font-serif text-lg text-gold-300 tabular-nums">
            {dish.price}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-cream-muted">{dish.description}</p>
      </div>

      {/* Stretched, accessible link covering the whole card */}
      <Link
        to="/menu"
        className="absolute inset-0"
        aria-label={`View ${dish.name} on the menu`}
      />
    </article>
  )
}
