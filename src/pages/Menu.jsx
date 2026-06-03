import { useReveal } from '../components/useReveal'
import MenuCategory from '../components/MenuCategory'
import Button from '../components/Button'
import Img from '../components/Img'
import { menu } from '../data/menu'
import { images } from '../data/images'
import { useCart } from '../context/CartContext'

export default function Menu() {
  useReveal('menu')
  const { openCart } = useCart()

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <Img
            src={images.sushi}
            alt={images.sushiAlt}
            loading="eager"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/88" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/60" />
        </div>
        <div className="container-x py-24 text-center lg:py-28">
          <span className="eyebrow reveal is-visible mx-auto">The Menu</span>
          <h1 className="reveal is-visible mt-5 font-serif text-4xl text-cream sm:text-5xl lg:text-6xl">
            Made Fresh, Just for You
          </h1>
          <p className="reveal is-visible mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream-soft">
            Every dish is cooked to order. Browse below, then message us on WhatsApp to place your
            order — and kindly let us know of any allergies so we can adapt.
          </p>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav
        aria-label="Menu categories"
        className="sticky top-20 z-30 border-y border-surface-border bg-ink/85 backdrop-blur-md"
      >
        <div className="container-x">
          <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menu.map((cat) => (
              <li key={cat.id} className="shrink-0">
                <a
                  href={`#${cat.id}`}
                  className="inline-block rounded-full border border-surface-border px-4 py-2 text-xs font-medium uppercase tracking-wide2 text-cream-muted transition-colors hover:border-gold-500/50 hover:text-gold-200"
                >
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Categories */}
      <div className="container-x py-20 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-20">
          {menu.map((cat) => (
            <MenuCategory key={cat.id} category={cat} />
          ))}
        </div>

        {/* Closing CTA */}
        <div className="reveal mx-auto mt-24 max-w-2xl rounded-3xl border border-surface-border bg-surface/60 p-10 text-center shadow-card">
          <h2 className="font-serif text-2xl text-cream sm:text-3xl">
            Hungry? Let’s get cooking.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream-muted">
            Add your favourites to the cart, then send the order — we’ll confirm pricing, timing,
            and pickup or delivery, and make it all fresh, just for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button onClick={openCart} size="lg">
              Order Now
            </Button>
            <Button to="/contact" size="lg" variant="outline">
              Use the order form
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
