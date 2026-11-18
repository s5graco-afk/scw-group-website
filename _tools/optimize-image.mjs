// Make a web-ready copy of a photo: max width, WebP, no EXIF/GPS.
// usage: node _tools/optimize-image.mjs <source> <assets/new-name.webp> [maxWidth=1600] [quality=80]
// sharp ships with the Claude workspace at /opt/npm-tools; elsewhere: npm i sharp
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let sharp;
try { sharp = require('sharp'); } catch { sharp = require('/opt/npm-tools/node_modules/sharp'); }
const [, , src, out, maxW = '1600', q = '80'] = process.argv;
if (!src || !out) { console.error('usage: optimize-image.mjs <src> <out.webp> [maxWidth] [quality]'); process.exit(1); }
const info = await sharp(src).rotate() // apply EXIF orientation, then metadata is dropped
  .resize({ width: +maxW, withoutEnlargement: true })
  .webp({ quality: +q, effort: 5 })
  .toFile(out);
console.log(out, info.width + 'x' + info.height, Math.round(info.size / 1024) + ' KB');
