import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, "../public");
const cacheFile = path.join(__dirname, "compress-cache.json");

const validExt = [".jpg", ".jpeg", ".png"];
const MIN_SIZE_KB = 50;

let cache = {};
let cacheExists = false;
let compressedAny = false;

if (fs.existsSync(cacheFile)) {
  cacheExists = true;
  cache = JSON.parse(fs.readFileSync(cacheFile, "utf-8"));
}

async function compressImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await compressImages(fullPath);
    } else if (
      validExt.includes(path.extname(file).toLowerCase()) &&
      stat.size > MIN_SIZE_KB * 1024
    ) {
      const mtime = stat.mtimeMs;
      if (cache[fullPath] && cache[fullPath] === mtime) {
        continue;
      }
      compressedAny = true;

      const isPng = path.extname(file).toLowerCase().includes("png");
      const buffer = fs.readFileSync(fullPath);
      const compressed = await sharp(buffer)
        .toFormat(isPng ? "png" : "jpeg", {
          quality: isPng ? 80 : 70,
          progressive: !isPng,
          compressionLevel: isPng ? 9 : undefined,
        })
        .toBuffer();
      fs.writeFileSync(fullPath, compressed);

      const newStat = fs.statSync(fullPath);
      cache[fullPath] = newStat.mtimeMs;
    }
  }
}

compressImages(inputDir)
  .then(() => {
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
    if (!cacheExists) {
      console.log("No previous cache found. Created new cache after compressing all images.");
    } else if (compressedAny) {
      console.log("Done compressing changed/new images.");
    } else {
      console.log("No new or changed images to compress.");
    }
  })
  .catch(console.error);
