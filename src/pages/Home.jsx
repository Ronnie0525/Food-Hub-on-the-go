import { useReveal } from '../components/useReveal'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import DishCard from '../components/DishCard'
import FeatureCard from '../components/FeatureCard'
import Img from '../components/Img'
import { StarIcon } from '../components/Icons'
import { signatureDishes, experienceFeatures } from '../data/dishes'
import { images } from '../data/images'
import { site } from '../data/site'
import { useCart } from '../context/CartContext'

export default function Home() {
  useReveal('home')
  const { openCart } = useCart()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-dvh items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Img
            src={images.hero}
            alt={images.heroAlt}
            loading="eager"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover animate-slow-zoom"
          />
          {/* Cinematic overlays: darken + warm glow + bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
          <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold-500/20 blur-[120px]" />
        </div>

        <div className="container-x py-32">
          <div className="max-w-2xl">
            <span className="eyebrow reveal is-visible">
              {site.cuisine} · {site.chef}
            </span>
            <h1 className="reveal is-visible mt-6 font-serif text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              A Refined Taste <br />
              of <span className="text-gradient-gold">Asia</span>
            </h1>
            <p className="reveal is-visible mt-7 max-w-xl text-lg leading-relaxed text-cream-soft">
              Bold flavors and the freshest ingredients, cooked to order by {site.chef} — from
              crispy lechon belly to hand-rolled sushi. Made fresh, packed beautifully, and ready
              to go.
            </p>
            <div className="reveal is-visible mt-10 flex flex-col gap-4 sm:flex-row">
              <Button onClick={openCart} size="lg">
                Order Now
              </Button>
              <Button to="/menu" size="lg" variant="outline">
                View Menu
              </Button>
            </div>

            <div className="reveal is-visible mt-12 flex items-center gap-5 text-sm text-cream-muted">
              <span className="flex items-center gap-1 text-gold-300">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span>Loved by 1,200+ happy customers</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-dim md:flex">
          <span className="text-[10px] uppercase tracking-eyebrow">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold-500/70 to-transparent" />
        </div>
      </section>

      {/* ── Signature Dishes ─────────────────────────────────── */}
      <section className="container-x py-24 lg:py-32">
        <SectionTitle
          eyebrow="Signature Dishes"
          title="The plates everyone orders"
          subtitle="A handful of the dishes our regulars keep coming back for — each one a small study in balance, texture, and fire."
        />
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
        <div className="reveal mt-12 flex justify-center">
          <Button to="/menu" variant="outline">
            Explore the full menu
          </Button>
        </div>
      </section>

      {/* ── Dining Experience ────────────────────────────────── */}
      <section className="relative border-y border-surface-border bg-coal/60">
        <div className="container-x py-24 lg:py-32">
          <SectionTitle
            eyebrow="Why Food Hub"
            title="Comfort food, done with finesse"
            subtitle="More than a quick bite — real cooking, real ingredients, and the care of a chef who refuses to cut corners."
          />
          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
            {experienceFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Chef / Story preview ─────────────────────────────── */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-3xl border border-surface-border shadow-card">
              <Img
                src={images.story}
                alt={images.storyAlt}
                className="aspect-[4/5] w-full"
                imgClassName="h-full w-full object-cover transition-transform duration-700 ease-out-soft hover:scale-105"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold-500/30 bg-surface/90 p-5 shadow-glow backdrop-blur sm:block">
              <p className="font-serif text-3xl text-gradient-gold">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-cream-muted">
                Cooked to order
              </p>
            </div>
          </div>

          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-cream sm:text-4xl">
              A kitchen built on passion and patience
            </h2>
            <p className="mt-6 leading-relaxed text-cream-muted">
              Food Hub on the Go began with a simple belief: that great Asian comfort food shouldn’t
              have to wait for a special occasion. {site.chef} blends Filipino soul, Japanese
              precision, and Chinese fire — cooking each order by hand, the way it should be.
            </p>
            <p className="mt-4 leading-relaxed text-cream-muted">
              No storefront, no shortcuts — just honest, crave-worthy food, made fresh and brought
              straight to you.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="outline">
                Meet {site.chef}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Order CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Img
            src={images.ctaBg}
            alt={images.ctaAlt}
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/80" />
        </div>
        <div className="container-x py-28 text-center lg:py-36">
          <span className="eyebrow reveal mx-auto">Order Now</span>
          <h2 className="reveal mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            Order Your Feast Tonight
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-soft">
            Date night, family dinner, or a craving that won’t quit — message us on WhatsApp and
            we’ll have it made fresh and ready for pickup or delivery.
          </p>
          <div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={openCart} size="lg">
              Order Now
            </Button>
            <Button to="/contact" size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
          <p className="reveal mt-6 text-sm text-cream-muted">
            or message {site.whatsapp.display}
          </p>
        </div>
      </section>
    </>
  )
}
