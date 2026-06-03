# Food Hub on the Go

A modern, elegant, multi-page website for **Food Hub on the Go** — Chef Archie's premium Asian
fusion comfort food kitchen. Cooked to order and made for pickup or delivery, ordered through
WhatsApp. Built with a dark, cinematic, luxurious aesthetic: charcoal backgrounds, warm gold
accents, Playfair Display + Inter typography, and smooth, accessible interactions.

> **Concept:** there is no physical storefront — the site drives orders to WhatsApp
> (**050 493 2367**) and a built-in order form that composes a WhatsApp message for you.

## Tech stack

- **React 18** + **Vite 5**
- **React Router 6** (multi-page routing)
- **Tailwind CSS 3** (custom dark/gold design system)
- **sharp** (dev-only) to optimize the dish photography
- No heavy animation libraries — entrance animations use a lightweight IntersectionObserver hook

## Pages

| Route      | Page    | Highlights                                                              |
| ---------- | ------- | ----------------------------------------------------------------------- |
| `/`        | Home    | Cinematic hero, signature dishes, why-Food-Hub, story, WhatsApp CTA     |
| `/menu`    | Menu    | 3 categories with photos, sticky in-page nav, badges                    |
| `/about`   | About   | Chef Archie's story, philosophy, sourcing, "how it works", testimonials |
| `/contact` | Contact | Order form (opens WhatsApp), WhatsApp/email/hours, "how to order"        |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev
```

### Other commands

```bash
npm run build     # Production build to /dist
npm run preview   # Preview the production build locally
```

## The menu — adding prices & dishes

Everything lives in **`src/data/menu.js`**. Prices are currently placeholders (`'—'`).

- **To add a price:** change `price: '—'` to e.g. `price: 'AED 35'` — no layout changes needed.
- **To add/edit a dish:** edit the relevant category's `items` array. Photos are referenced from
  `src/data/images.js`.

### Dish photos

The original full-resolution photos live in **`Menu Assets/`**. They're optimized into web-ready
JPEGs in **`public/menu/`** by:

```bash
node scripts/optimize-images.mjs
```

Re-run that script if you add or replace photos in `Menu Assets/`.

## Updating contact details

All brand + contact info is centralized in **`src/data/site.js`** — name, Chef name, WhatsApp
number, email, kitchen hours, and social links. The WhatsApp number is stored once
(`WA_NUMBER_INTL`) and the `waLink()` helper builds pre-filled `wa.me` links everywhere.

## Design system

- **Background:** near-black `#0a0908` / charcoal surfaces with a subtle warm vignette
- **Accent:** gold/copper scale (primary `#c8954a`, highlights `#d8ab57`)
- **Type:** Playfair Display (headings) · Inter (body) — the "Classic Elegant" luxury pairing
- **Accessibility:** semantic HTML, labelled form fields, visible focus rings, alt text on every
  image, keyboard-friendly nav, skip link, and full `prefers-reduced-motion` support

## Notes

- The contact form has no backend; on submit it opens WhatsApp with the order details pre-filled —
  the real ordering channel for the business. Adjust the message format in
  `src/components/ContactForm.jsx` if needed.
- The `<Img>` component falls back to an elegant gold-on-charcoal gradient if any image fails to
  load, so the layout never breaks.
