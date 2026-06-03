import { useReveal } from '../components/useReveal'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Img from '../components/Img'
import Timeline from '../components/Timeline'
import { QuoteIcon, StarIcon } from '../components/Icons'
import { images } from '../data/images'
import { chef } from '../data/chef'
import { useCart } from '../context/CartContext'

const reasons = [
  {
    title: 'Plates with a point of view',
    text: 'Nothing leaves the kitchen unless it tells a story — of a region, a season, or a memory.',
  },
  {
    title: 'Cooked to order, every time',
    text: 'No heat lamps, no sitting around. Your food is fired fresh the moment you order it.',
  },
  {
    title: 'Travels beautifully',
    text: 'Packed with care so it arrives hot, crisp, and looking exactly as it should.',
  },
  {
    title: 'Consistency you can trust',
    text: 'The dish you loved last week tastes just as it should today. That’s the craft.',
  },
]

export default function About() {
  useReveal('about')
  const { openCart } = useCart()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <Img
            src={images.freshness}
            alt={images.freshnessAlt}
            loading="eager"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/88" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/60" />
        </div>
        <div className="container-x py-24 text-center lg:py-32">
          <span className="eyebrow reveal is-visible mx-auto">Meet The Chef</span>
          <h1 className="reveal is-visible mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            Two decades of craft, in every order
          </h1>
          <p className="reveal is-visible mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-soft">
            Food Hub on the Go is the work of one chef and a lifetime at the stove — honest Asian
            comfort food, cooked the way it should be.
          </p>
        </div>
      </section>

      {/* Meet Chef Archie */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="reveal lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-surface-border shadow-card">
                <Img
                  src={chef.photo}
                  alt={chef.photoAlt}
                  loading="eager"
                  zoomable
                  className="aspect-[4/5] w-full"
                  imgClassName="h-full w-full object-cover"
                />
              </div>
              {/* Signature name plate */}
              <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-gold-500/30 bg-surface/90 px-5 py-4 shadow-glow backdrop-blur">
                <p className="font-serif text-lg text-cream">{chef.fullName}</p>
                <p className="text-xs uppercase tracking-wide2 text-gold-300">{chef.title}</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="reveal lg:col-span-7">
            <span className="eyebrow">Our Chef</span>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-cream sm:text-4xl">
              The story behind the wok
            </h2>
            <div className="mt-6 space-y-4">
              {chef.intro.map((p, i) => (
                <p key={i} className="leading-relaxed text-cream-muted">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-3 gap-4">
              {chef.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-surface-border bg-surface/60 p-5 text-center"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-serif text-3xl text-gradient-gold">{s.value}</span>
                    <span className="mt-1 block text-[11px] uppercase tracking-wide2 text-cream-muted">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Philosophy — pull quote */}
      <section className="border-y border-surface-border bg-coal/60">
        <div className="container-x py-24 text-center lg:py-28">
          <QuoteIcon className="reveal mx-auto mb-8 h-10 w-10 text-gold-500/70" />
          <blockquote className="reveal mx-auto max-w-3xl font-serif text-2xl italic leading-relaxed text-cream sm:text-3xl lg:text-[2.25rem] lg:leading-snug">
            “{chef.philosophy}”
          </blockquote>
          <p className="reveal mt-8 text-sm uppercase tracking-wide2 text-gold-300">
            {chef.fullName} · {chef.title}
          </p>
        </div>
      </section>

      {/* Career journey */}
      <section className="container-x py-24 lg:py-32">
        <SectionTitle
          eyebrow="Career Journey"
          title="A lifetime in professional kitchens"
          subtitle="From Cebu and Quezon City to Doha, Abu Dhabi, and Shanghai — the experience that shapes every plate today."
          align="left"
        />
        <div className="mt-14 max-w-3xl">
          <Timeline items={chef.experience} />
        </div>
      </section>

      {/* Ingredient sourcing */}
      <section className="border-y border-surface-border bg-coal/40">
        <div className="container-x py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="reveal order-2 lg:order-1">
              <span className="eyebrow">Sourcing</span>
              <h2 className="mt-5 font-serif text-3xl leading-tight text-cream sm:text-4xl">
                The best ingredients, treated with respect
              </h2>
              <p className="mt-6 leading-relaxed text-cream-muted">
                Every day begins at the market. Chef Archie hand-picks produce and proteins at their
                peak, then does the slow, unglamorous work that makes the difference — marinating
                overnight, roasting low and slow, and making the sauces and dips from scratch.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Fresh proteins selected daily, never frozen-and-forgotten',
                  'Marinades and glazes built over hours, not minutes',
                  'House-made dips, sauces, and signature java rice',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cream-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal order-1 overflow-hidden rounded-3xl border border-surface-border shadow-card lg:order-2">
              <Img
                src={images.story}
                alt={images.storyAlt}
                zoomable
                className="aspect-[4/3] w-full"
                imgClassName="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works — "on the go" */}
      <section className="relative overflow-hidden border-b border-surface-border">
        <div className="absolute inset-0 -z-10">
          <Img
            src={images.order}
            alt={images.orderAlt}
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/90" />
        </div>
        <div className="container-x py-24 lg:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow reveal">On The Go</span>
            <h2 className="reveal mt-5 font-serif text-3xl leading-tight text-cream sm:text-4xl">
              Fine-dining flavor, made for real life
            </h2>
            <p className="reveal mt-6 leading-relaxed text-cream-soft">
              You shouldn’t have to choose between convenience and quality. Message us on WhatsApp,
              tell us what you’re craving, and we’ll cook it fresh and have it ready for pickup or
              delivery — plated and packed like it matters, because to us, it does.
            </p>
          </div>
          <div className="reveal mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { step: '01', title: 'Message us', text: 'Send your order on WhatsApp.' },
              { step: '02', title: 'We confirm', text: 'Pricing, timing, pickup or delivery.' },
              { step: '03', title: 'Fresh & ready', text: 'Cooked to order and on its way.' },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-surface-border bg-surface/60 p-6"
              >
                <span className="font-serif text-2xl text-gradient-gold">{s.step}</span>
                <h3 className="mt-2 font-serif text-lg text-cream">{s.title}</h3>
                <p className="mt-1 text-sm text-cream-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why customers love Food Hub */}
      <section className="container-x py-24 lg:py-32">
        <SectionTitle
          eyebrow="Why Customers Return"
          title="Why people love Food Hub on the Go"
          subtitle="The details add up to something our regulars find hard to put into words — so they simply keep ordering."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reasons.map((r) => (
            <article
              key={r.title}
              className="reveal rounded-2xl border border-surface-border bg-surface/60 p-7 transition-all duration-500 ease-out-soft hover:-translate-y-1 hover:border-gold-500/40"
            >
              <div className="mb-4 flex items-center gap-1 text-gold-300">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <h3 className="font-serif text-xl text-cream">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-muted">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-col items-center gap-6 rounded-3xl border border-gold-500/20 bg-surface/50 p-10 text-center shadow-card">
          <h2 className="font-serif text-2xl text-cream sm:text-3xl">
            Taste {chef.shortName}’s cooking for yourself
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button to="/menu" variant="outline">
              Browse the Menu
            </Button>
            <Button onClick={openCart}>Order Now</Button>
          </div>
        </div>
      </section>
    </>
  )
}
