import Badge from './Badge'
import Img from './Img'
import { useCart } from '../context/CartContext'
import { PlusIcon, MinusIcon } from './Icons'

function AddControl({ item }) {
  const { qtyOf, addItem, increment, decrement } = useCart()
  const qty = qtyOf(item.name)

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => addItem(item)}
        className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wide2 text-gold-200 transition-colors hover:border-gold-400 hover:bg-gold-500/10"
      >
        <PlusIcon className="h-3.5 w-3.5" />
        Add
      </button>
    )
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-gold-500 text-ink">
      <button
        type="button"
        onClick={() => decrement(item.name)}
        aria-label={`Decrease ${item.name}`}
        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gold-400"
      >
        <MinusIcon className="h-4 w-4" />
      </button>
      <span className="w-5 text-center text-sm font-semibold tabular-nums">{qty}</span>
      <button
        type="button"
        onClick={() => increment(item)}
        aria-label={`Increase ${item.name}`}
        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gold-400"
      >
        <PlusIcon className="h-4 w-4" />
      </button>
    </div>
  )
}

/**
 * One menu section: title, note, and a grid of dish cards. Each item shows a real
 * photo, name, description, badge, price, and an add-to-cart control. Prices set
 * to '—' render as a quiet dash until real values are added in src/data/menu.js.
 */
export default function MenuCategory({ category }) {
  return (
    <section id={category.id} className="reveal scroll-mt-36">
      <div className="mb-8 flex flex-col gap-2 border-b border-surface-border pb-5">
        <h2 className="font-serif text-2xl text-cream sm:text-3xl">{category.title}</h2>
        {category.note && <p className="text-sm italic text-cream-muted">{category.note}</p>}
      </div>

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="group flex gap-4 rounded-2xl border border-surface-border bg-surface/50 p-3 transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-gold-500/40 hover:bg-surface"
          >
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl">
              <Img
                src={item.image}
                alt={item.alt || item.name}
                className="h-full w-full"
                imgClassName="h-full w-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-110"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col py-1 pr-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg leading-snug text-cream transition-colors group-hover:text-gold-100">
                  {item.name}
                </h3>
                <span className="shrink-0 font-serif text-base text-gold-300 tabular-nums">
                  {item.price}
                </span>
              </div>
              {item.badge && (
                <div className="mt-1.5">
                  <Badge>{item.badge}</Badge>
                </div>
              )}
              <p className="mt-2 text-sm leading-relaxed text-cream-muted">{item.description}</p>
              <div className="mt-3 flex items-center justify-end pt-1">
                <AddControl item={item} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
