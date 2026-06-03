import { useReveal } from '../components/useReveal'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
import Img from '../components/Img'
import { images } from '../data/images'
import { site, waLink } from '../data/site'
import { useCart } from '../context/CartContext'
import { PhoneIcon, MailIcon, ClockIcon, WhatsAppIcon } from '../components/Icons'

function DetailItem({ icon: Icon, iconClass = 'text-gold-300', title, children }) {
  return (
    <div className="flex items-start gap-4">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 ${iconClass}`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wide2 text-gold-300">{title}</h3>
        <div className="mt-1.5 text-sm leading-relaxed text-cream-soft">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  useReveal('contact')
  const { openCart } = useCart()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <Img
            src={images.order}
            alt={images.orderAlt}
            loading="eager"
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/88" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/60" />
        </div>
        <div className="container-x py-24 text-center lg:py-28">
          <span className="eyebrow reveal is-visible mx-auto">Orders &amp; Enquiries</span>
          <h1 className="reveal is-visible mt-5 font-serif text-4xl text-cream sm:text-5xl lg:text-6xl">
            Place Your Order
          </h1>
          <p className="reveal is-visible mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream-soft">
            Tell us what you’re craving and when you’d like it. The fastest way to order is
            WhatsApp — or fill in the form below and we’ll take it from there.
          </p>
          <div className="reveal is-visible mt-8 flex justify-center">
            <Button onClick={openCart} size="lg">
              Order Now
            </Button>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section className="container-x py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="reveal mb-6 font-serif text-2xl text-cream sm:text-3xl">
              Send us your order
            </h2>
            <ContactForm />
          </div>

          {/* Details */}
          <aside className="lg:col-span-2">
            <div className="reveal flex flex-col gap-8 rounded-2xl border border-surface-border bg-surface/60 p-7 shadow-card sm:p-8">
              <DetailItem icon={WhatsAppIcon} title="WhatsApp">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold-200"
                >
                  {site.whatsapp.display}
                </a>
                <p className="mt-0.5 text-cream-muted">{site.whatsapp.intl}</p>
              </DetailItem>
              <DetailItem icon={MailIcon} title="Email">
                <a
                  href={site.emailHref}
                  className="break-all transition-colors hover:text-gold-200"
                >
                  {site.email}
                </a>
              </DetailItem>
              <DetailItem icon={PhoneIcon} title="Service">
                {site.service}
              </DetailItem>
              <DetailItem icon={ClockIcon} title={site.hoursLabel}>
                <ul className="space-y-1.5">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex flex-col">
                      <span className="text-cream">{h.days}</span>
                      <span className="text-cream-muted">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </DetailItem>
            </div>

            <p className="reveal mt-6 text-sm leading-relaxed text-cream-muted">
              Planning a party or need catering for a crowd? Message us on WhatsApp and we’ll happily
              build a menu around your occasion.
            </p>
          </aside>
        </div>
      </section>

      {/* How to order — replaces the map (no storefront yet) */}
      <section className="container-x pb-24 lg:pb-32">
        <div className="reveal overflow-hidden rounded-3xl border border-surface-border bg-surface/40 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[260px] lg:min-h-full">
              <Img
                src={images.freshness}
                alt={images.freshnessAlt}
                className="absolute inset-0 h-full w-full"
                imgClassName="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="p-8 sm:p-12">
              <span className="eyebrow">How To Order</span>
              <h2 className="mt-5 font-serif text-2xl text-cream sm:text-3xl">
                Three steps to a fresh-cooked feast
              </h2>
              <ol className="mt-8 space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Message us on WhatsApp',
                    text: 'Send your order, or ask us for recommendations and today’s prices.',
                  },
                  {
                    step: '02',
                    title: 'We confirm the details',
                    text: 'Total, timing, and whether you’d like pickup or delivery.',
                  },
                  {
                    step: '03',
                    title: 'Cooked fresh & on its way',
                    text: 'We make everything to order and have it ready right on time.',
                  },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="font-serif text-xl text-gradient-gold">{s.step}</span>
                    <div>
                      <h3 className="font-serif text-lg text-cream">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-9">
                <Button onClick={openCart} size="lg">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
