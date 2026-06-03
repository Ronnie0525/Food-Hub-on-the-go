import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(800)

// Full top strip
await page.screenshot({ path: 'scripts/shot-top.png', clip: { x: 0, y: 0, width: 1280, height: 120 } })

// Close-up of the logo link
const logo = page.locator('header a[aria-label*="home"]').first()
await logo.screenshot({ path: 'scripts/shot-logo.png' })

// Report computed sizes
const info = await page.evaluate(() => {
  const img = document.querySelector('header img')
  const r = img?.getBoundingClientRect()
  return img
    ? { natural: [img.naturalWidth, img.naturalHeight], rendered: [Math.round(r.width), Math.round(r.height)], complete: img.complete }
    : { error: 'no header img' }
})
console.log(JSON.stringify(info))
await browser.close()
