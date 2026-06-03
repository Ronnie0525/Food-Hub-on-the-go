import { Link } from 'react-router-dom'
import { navLinks, site, waLink } from '../data/site'
import { PhoneIcon, MailIcon, WhatsAppIcon } from './Icons'

export default function Footer() {
  const year = 2026

  return (
    <footer className="border-t border-surface-border bg-coal">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
              <img src="/logo.png" alt={`${site.name} logo`} className="h-14 w-auto" />
              <span className="flex flex-col border-l border-surface-border pl-3 leading-none">
                <span className="font-serif text-lg text-cream">Food Hub</span>
                <span className="text-[9px] uppercase tracking-eyebrow text-cream-muted">
                  on the go
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-muted">
              Asian fusion comfort food, cooked to order by {site.chef}. Bold flavors, fresh
              ingredients — made fresh and ready to go.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wide2 text-gold-300">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-soft transition-colors hover:text-gold-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cream-soft transition-colors hover:text-gold-200"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </nav>

          {/* Order / contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wide2 text-gold-300">
              Order &amp; Contact
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-cream-soft">
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500/80" />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold-200"
                >
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500/80" />
                <span>{site.whatsapp.intl}</span>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500/80" />
                <a
                  href={site.emailHref}
                  className="break-all transition-colors hover:text-gold-200"
                >
                  {site.email}
                </a>
              </li>
              <li className="pt-1 text-xs text-cream-muted">{site.service}</li>
            </ul>
          </div>

          {/* Hours + Social */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wide2 text-gold-300">
              {site.hoursLabel}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-cream-soft">
              {site.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="text-cream">{h.days}</span>
                  <span className="text-cream-muted">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-wide2 text-cream-muted transition-colors hover:text-gold-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 text-xs text-cream-dim sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold-500" />
            Cooked fresh by {site.chef}
          </p>
        </div>
      </div>
    </footer>
  )
}
