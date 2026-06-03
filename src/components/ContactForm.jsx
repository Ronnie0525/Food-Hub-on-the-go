import { useState } from 'react'
import Button from './Button'
import { site, waLink } from '../data/site'

const initial = {
  name: '',
  phone: '',
  email: '',
  date: '',
  servings: '2',
  message: '',
}

const fieldBase =
  'w-full rounded-xl border border-surface-border bg-coal/60 px-4 py-3 text-cream placeholder:text-cream-dim transition-colors duration-200 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30'

const labelBase = 'mb-2 block text-xs font-medium uppercase tracking-wide2 text-cream-soft'

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please tell us your name.'
    if (!values.phone.trim()) next.phone = 'A contact number helps us confirm your order.'
    if (!values.message.trim()) next.message = 'Let us know what you’d like to order.'
    return next
  }

  // Compose a tidy WhatsApp message from the order details.
  const buildMessage = () => {
    const lines = [
      `Hi ${site.chef}! I'd like to place an order with ${site.name}.`,
      '',
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      values.date ? `Preferred date: ${values.date}` : null,
      `Serving: ${values.servings} ${Number(values.servings) === 1 ? 'person' : 'people'}`,
      '',
      `Order / notes: ${values.message}`,
    ].filter(Boolean)
    return lines.join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(`field-${Object.keys(next)[0]}`)
      first?.focus()
      return
    }
    // Open WhatsApp with the order pre-filled — the real ordering channel.
    window.open(waLink(buildMessage()), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="reveal flex flex-col items-center gap-4 rounded-2xl border border-gold-500/40 bg-surface p-10 text-center shadow-card"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/50 bg-gold-500/10 text-2xl text-gold-300">
          ✓
        </span>
        <h3 className="font-serif text-2xl text-cream">
          Almost there, {values.name.split(' ')[0]}!
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-cream-muted">
          We’ve opened WhatsApp with your order details ready to send to {site.chef}. Just hit send
          and we’ll confirm everything and let you know when it’ll be ready.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={waLink(buildMessage())} target="_blank" rel="noreferrer">
            Open WhatsApp
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setValues(initial)
              setSubmitted(false)
            }}
          >
            Start a new order
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="reveal rounded-2xl border border-surface-border bg-surface/70 p-6 shadow-card sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="field-name" className={labelBase}>
            Name <span className="text-gold-400">*</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
            className={fieldBase}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="err-name" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="field-phone" className={labelBase}>
            Phone / WhatsApp <span className="text-gold-400">*</span>
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            className={fieldBase}
            placeholder="050 000 0000"
          />
          {errors.phone && (
            <p id="err-phone" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="field-email" className={labelBase}>
            Email <span className="text-cream-dim">(optional)</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update}
            className={fieldBase}
            placeholder="you@example.com"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="field-date" className={labelBase}>
            Preferred date
          </label>
          <input
            id="field-date"
            name="date"
            type="date"
            value={values.date}
            onChange={update}
            className={`${fieldBase} [color-scheme:dark]`}
          />
        </div>

        {/* Servings */}
        <div>
          <label htmlFor="field-servings" className={labelBase}>
            Serving for
          </label>
          <select
            id="field-servings"
            name="servings"
            value={values.servings}
            onChange={update}
            className={`${fieldBase} appearance-none`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n} className="bg-coal text-cream">
                {n} {n === 1 ? 'person' : 'people'}
              </option>
            ))}
            <option value="9+" className="bg-coal text-cream">
              9+ (party / catering)
            </option>
          </select>
        </div>

        {/* Message / order */}
        <div className="sm:col-span-2">
          <label htmlFor="field-message" className={labelBase}>
            Your order &amp; notes <span className="text-gold-400">*</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={update}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'err-message' : undefined}
            className={`${fieldBase} resize-none`}
            placeholder="e.g. 1x Lechon Belly with Rice, 2x Salmon Teriyaki Roll. Any allergies or pickup/delivery preferences?"
          />
          {errors.message && (
            <p id="err-message" role="alert" className="mt-1.5 text-xs text-red-400">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-cream-dim">
          <span className="text-gold-400">*</span> Required · we’ll reply to confirm
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Order
        </Button>
      </div>
    </form>
  )
}
