// Renders resume/curriculo.html to public/Curriculo_Pedro_Lopes.pdf with headless Chromium.
// Usage: node resume/build.mjs [portfolio-url]
// Needs Playwright (global install is fine) and network access to Google Fonts.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require(join(execSync("npm root -g").toString().trim(), "playwright")));
}

const dir = dirname(fileURLToPath(import.meta.url));
const out = join(dir, "..", "public", "Curriculo_Pedro_Lopes.pdf");
const portfolio = process.argv[2];

let html = readFileSync(join(dir, "curriculo.html"), "utf8");
if (portfolio) {
  const label = portfolio.replace(/^https?:\/\//, "").replace(/\/$/, "");
  html = html.replace("<!--PORTFOLIO-->", `<span><a href="${portfolio}">${label}</a></span>`);
}
const tmp = join(dir, ".render.html");
writeFileSync(tmp, html);

const browser = await chromium.launch(
  process.env.HTTPS_PROXY ? { proxy: { server: process.env.HTTPS_PROXY } } : {},
);
const page = await browser.newPage();
await page.goto(pathToFileURL(tmp).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const overflow = await page.evaluate(() => document.querySelector(".page").scrollHeight);
await page.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
rmSync(tmp);

const mm = (overflow * 25.4) / 96;
console.log(`PDF: ${out}\nContent height: ${mm.toFixed(1)}mm (A4 = 297mm)`);
