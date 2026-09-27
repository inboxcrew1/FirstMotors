const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'C:/Users/Sumit/.gemini/antigravity/brain/eda07e59-2f0c-4db9-9792-883dd4fc6f17/.user_uploaded/media_1790493629356.png';
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const appDir = path.join(rootDir, 'app');

async function generate() {
  console.log('Generating favicon and icon assets in:', publicDir, 'and', appDir);

  // 1. Generate PNG variants for public/
  await sharp(src).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(src).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(src).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(src).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(src).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
  await sharp(src).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));

  // 2. Generate Next.js App Router convention icons in app/
  await sharp(src).resize(512, 512).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(src).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));

  // 3. Build multi-size ICO file (16, 32, 48) for public/favicon.ico and app/favicon.ico
  const sizes = [16, 32, 48];
  const pngs = [];
  for (const s of sizes) {
    const buf = await sharp(src).resize(s, s).png().toBuffer();
    pngs.push({ size: s, data: buf });
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = 1 (icon)
  header.writeUInt16LE(pngs.length, 4); // count

  let offset = 6 + pngs.length * 16;
  const entries = [];
  for (const item of pngs) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0); // width
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.data.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += item.data.length;
  }

  const icoBuf = Buffer.concat([header, ...entries, ...pngs.map(p => p.data)]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuf);

  console.log('All favicon and icon assets generated successfully.');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
