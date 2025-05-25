// generate-sitemap.js

import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Necessário para obter __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  "/",
  "/meuportifolio",
  "/cafe",
  "/contato",
  "/privacidade",
  "/termos",
];

const BASE_URL = "https://devlps.vercel.app";
const OUTPUT_PATH = path.resolve(__dirname, "..", "public", "sitemap.xml");

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });
    const writeStream = createWriteStream(OUTPUT_PATH);

    sitemap.pipe(writeStream);

    routes.forEach((route) => {
      sitemap.write({
        url: route,
        changefreq: "monthly",
        priority: route === "/" ? 1.0 : 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    sitemap.end();

    await streamToPromise(sitemap);

    console.log(`✅ Sitemap gerado com sucesso em: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error("❌ Erro ao gerar sitemap:", error);
  }
})();
