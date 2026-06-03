// Small dish label. Color-coded but always paired with text (never color-only).
const styles = {
  "Chef's Choice": 'bg-gold-500/15 text-gold-200 border-gold-500/40',
  Popular: 'bg-cream/10 text-cream-soft border-cream/20',
  Spicy: 'bg-red-500/15 text-red-300 border-red-500/40',
  Vegetarian: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
}

export default function Badge({ children }) {
  const cls = styles[children] || 'bg-cream/10 text-cream-soft border-cream/20'
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide2 ${cls}`}
    >
      {children}
    </span>
  )
}
