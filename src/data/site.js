// Central source of truth for brand + contact details so copy stays consistent.

// WhatsApp ordering — primary way guests reach Chef Archie.
const WA_NUMBER_INTL = '971504932367' // +971 50 493 2367 (UAE), digits only for wa.me

export const site = {
  name: 'Food Hub on the Go',
  shortName: 'Food Hub',
  chef: 'Chef Archie',
  tagline: 'A Refined Taste of Asia',
  cuisine: 'Asian fusion comfort food',
  // No storefront yet — this is a made-to-order, WhatsApp-first kitchen.
  email: 'hello@foodhubonthego.com',
  emailHref: 'mailto:hello@foodhubonthego.com',
  whatsapp: {
    display: '050 493 2367',
    intl: '+971 50 493 2367',
  },
  hoursLabel: 'Kitchen Hours',
  hours: [
    { days: 'Monday – Thursday', time: '11:00 AM – 10:00 PM' },
    { days: 'Friday – Saturday', time: '11:00 AM – 11:30 PM' },
    { days: 'Sunday', time: '12:00 PM – 9:30 PM' },
  ],
  service: 'Pickup & delivery · Order ahead on WhatsApp',
  social: [
    { label: 'Instagram', handle: '@foodhubonthego', href: 'https://instagram.com' },
    { label: 'Facebook', handle: 'Food Hub on the Go', href: 'https://facebook.com' },
    { label: 'TikTok', handle: '@foodhubonthego', href: 'https://tiktok.com' },
  ],
}

// Build a WhatsApp deep link with an optional pre-filled message.
export const waLink = (message) => {
  const text = message ?? `Hi ${site.chef}! I'd like to place an order with ${site.name}.`
  return `https://wa.me/${WA_NUMBER_INTL}?text=${encodeURIComponent(text)}`
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
