import { chromium } from "playwright";

const URL = process.env.SMOKE_URL || "http://localhost:3137";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });

// trigger reveals
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);

await page.locator("#top").screenshot({ path: "/tmp/detail-hero.png" });
await page.locator("#projects").screenshot({ path: "/tmp/detail-projects.png" });

await browser.close();
console.log("captured");
