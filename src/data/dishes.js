import { allDishes } from './menu'

// Featured on the home page "Signature Dishes" section — pulled from the real
// menu so names, photos, and descriptions never drift out of sync.
const pick = (name) => allDishes.find((d) => d.name === name)

export const signatureDishes = [
  pick('Lechon Belly 250g with Rice'),
  pick('Pork Barbeque with Java Rice'),
  pick('Tempura Sushi Roll'),
  pick('Macau Chicken Wings with Fried Rice'),
].filter(Boolean)

// "What makes us special" feature blocks on the home page.
export const experienceFeatures = [
  {
    title: 'Fresh Seasonal Ingredients',
    description:
      'We shop the market daily and cook in small batches, so every order tastes like it was made just for you — because it was.',
    icon: 'leaf',
  },
  {
    title: 'Chef-Crafted Asian Fusion',
    description:
      'Filipino soul, Japanese precision, and Chinese fire — composed by Chef Archie into comfort food with real finesse.',
    icon: 'spark',
  },
  {
    title: 'Made Fresh, Ready to Go',
    description:
      'Cooked to order and packed to travel beautifully. Message us on WhatsApp and pick up or have it delivered, hot and ready.',
    icon: 'flame',
  },
]
