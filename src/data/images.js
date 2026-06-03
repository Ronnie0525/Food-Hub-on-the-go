// Real dish photography (shot for Food Hub on the Go), optimized into /public/menu.
// Served locally, so they load fast and reliably; the <Img> component still provides
// a graceful fallback just in case.

const m = (file) => `/menu/${file}`

export const dishImages = {
  babyChicken: m('baby-chicken.jpg'),
  chickenFriedRice: m('chicken-fried-rice.jpg'),
  chineseBbq: m('chinese-barbeque-chicken-with-java-rice.jpg'),
  greenSushi: m('green-sushi.jpg'),
  lechonBelly: m('lechon-belly-250g-with-rice.jpg'),
  macauWings: m('macau-chicken-wings-with-fried-rice.jpg'),
  porkBbq: m('pork-barbeque-with-java-rice.jpg'),
  salmonTeriyaki: m('salmon-teriyaki-roll.jpg'),
  stirFryNoodles: m('stir-fry-noodles-chicken.jpg'),
  tempuraRoll: m('tempura-sushi-roll.jpg'),
}

export const images = {
  // Hero — the dramatic roast baby chicken on dark wood
  hero: dishImages.babyChicken,
  heroAlt: 'Golden roast baby chicken on a wooden board with chili-garlic dip',

  // Section imagery (all real dishes)
  story: dishImages.chineseBbq,
  storyAlt: 'Char-grilled Chinese barbeque chicken glazed and plated with java rice',
  ctaBg: dishImages.stirFryNoodles,
  ctaAlt: 'Wok-fried stir-fry noodles with chicken',
  sourcing: dishImages.lechonBelly,
  sourcingAlt: 'Crispy roast lechon belly served with steamed rice',
  freshness: dishImages.porkBbq,
  freshnessAlt: 'Skewered pork barbeque with golden java rice',
  sushi: dishImages.greenSushi,
  sushiAlt: 'Fresh avocado and cucumber green sushi rolls',
  order: dishImages.macauWings,
  orderAlt: 'Crispy Macau-style chicken wings with fried rice',
}
