// Full menu for Food Hub on the Go.
//
// PRICES: set to '—' as placeholders. To publish prices, just edit each item's
// `price` value below (e.g. price: 'AED 35'). No layout changes needed — items
// with '—' simply show a dash. Badges: "Chef's Choice" | "Spicy" | "Popular" | "Vegetarian"
import { dishImages } from './images'

export const menu = [
  {
    id: 'sushi',
    title: 'Sushi & Rolls',
    note: 'Rolled fresh to order — light, clean, and full of flavor.',
    items: [
      {
        name: 'Green Sushi',
        description:
          'Ripe avocado and crisp cucumber rolled in seasoned rice and nori, finished with toasted sesame.',
        price: '—',
        image: dishImages.greenSushi,
        alt: 'Green sushi rolls with avocado and cucumber',
        badge: 'Vegetarian',
      },
      {
        name: 'Salmon Teriyaki Roll',
        description:
          'Tender salmon and a glossy teriyaki glaze wrapped in seasoned rice — rich, savory, and umami-packed.',
        price: '—',
        image: dishImages.salmonTeriyaki,
        alt: 'Salmon teriyaki sushi roll glazed and sliced',
        badge: 'Popular',
      },
      {
        name: 'Tempura Sushi Roll',
        description:
          'Crisp tempura prawn rolled with rice and nori, finished with a drizzle of house sauce — crunchy and indulgent.',
        price: '—',
        image: dishImages.tempuraRoll,
        alt: 'Crispy tempura prawn sushi roll',
        badge: "Chef's Choice",
      },
    ],
  },
  {
    id: 'rice-meals',
    title: 'Rice Meals',
    note: 'Hearty, satisfying plates built around our signature rice.',
    items: [
      {
        name: 'Chicken Fried Rice',
        description:
          'Wok-tossed fried rice with tender chicken, egg, and scallions — smoky, savory, and made to share.',
        price: '—',
        image: dishImages.chickenFriedRice,
        alt: 'Chicken fried rice with egg and scallions',
      },
      {
        name: 'Chinese Barbeque Chicken with Java Rice',
        description:
          'Char-grilled chicken lacquered in sweet-savory Chinese BBQ glaze, paired with golden java rice.',
        price: '—',
        image: dishImages.chineseBbq,
        alt: 'Chinese barbeque chicken served with java rice',
        badge: 'Popular',
      },
      {
        name: 'Lechon Belly 250g with Rice',
        description:
          'Crispy-skinned roast pork belly, slow-cooked until meltingly tender. A generous 250g portion with steamed rice.',
        price: '—',
        image: dishImages.lechonBelly,
        alt: 'Crispy lechon belly with steamed rice',
        badge: "Chef's Choice",
      },
      {
        name: 'Macau Chicken Wings with Fried Rice',
        description:
          'Crispy Macau-style wings tossed in a glossy, savory glaze, served with a side of fried rice.',
        price: '—',
        image: dishImages.macauWings,
        alt: 'Macau-style chicken wings with fried rice',
      },
      {
        name: 'Pork Barbeque with Java Rice',
        description:
          'Skewers of pork marinated overnight and grilled over fire, served with golden java rice and tangy atchara.',
        price: '—',
        image: dishImages.porkBbq,
        alt: 'Grilled pork barbeque skewers with java rice',
        badge: 'Popular',
      },
    ],
  },
  {
    id: 'chicken-noodles',
    title: 'Chicken & Noodles',
    note: 'Crowd-pleasers, fired fresh in the wok and over the grill.',
    items: [
      {
        name: 'Baby Chicken',
        description:
          'Whole spatchcocked baby chicken, marinated and roasted to a deep golden crisp, with our house chili-garlic dip.',
        price: '—',
        image: dishImages.babyChicken,
        alt: 'Roast baby chicken with chili-garlic dip',
        badge: "Chef's Choice",
      },
      {
        name: 'Stir Fry Noodles Chicken',
        description:
          'Wok-fried noodles with chicken and crisp seasonal vegetables in a savory soy-based sauce.',
        price: '—',
        image: dishImages.stirFryNoodles,
        alt: 'Stir-fry noodles with chicken and vegetables',
      },
    ],
  },
]

// Convenience: a flat list, handy for the home page "signature dishes".
export const allDishes = menu.flatMap((c) => c.items)
