// One-off: optimize the large PNGs in "Menu Assets" into web-friendly JPEGs
// under public/menu/. Run with: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import { statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Resolve paths relative to the project root (parent of /scripts) so this runs
// regardless of the current working directory.
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'Menu Assets')
const OUT = path.join(ROOT, 'public', 'menu')

const slug = (name) =>
  name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

await mkdir(OUT, { recursive: true })
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f))

for (const file of files) {
  const inPath = path.join(SRC, file)
  const outName = `${slug(file)}.jpg`
  const outPath = path.join(OUT, outName)
  await sharp(inPath)
    .rotate() // respect EXIF orientation
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outPath)
  const before = (statSync(inPath).size / 1024 / 1024).toFixed(1)
  const after = (statSync(outPath).size / 1024).toFixed(0)
  console.log(`${file}  ${before}MB  ->  /menu/${outName}  ${after}KB`)
}
console.log(`\nDone. ${files.length} images optimized into ${OUT}/`)
