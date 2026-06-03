import { icons } from './Icons'

/**
 * Feature block for the "Dining Experience" section: refined icon, title, copy.
 */
export default function FeatureCard({ title, description, icon }) {
  const Icon = icons[icon] || icons.spark

  return (
    <article className="reveal group rounded-2xl border border-surface-border bg-surface/60 p-8 transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:border-gold-500/40 hover:bg-surface">
      <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-300 transition-all duration-500 group-hover:scale-105 group-hover:border-gold-500/60 group-hover:text-gold-200">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mb-3 font-serif text-xl text-cream">{title}</h3>
      <p className="text-sm leading-relaxed text-cream-muted">{description}</p>
    </article>
  )
}
