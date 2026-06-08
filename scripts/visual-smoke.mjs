import { chromium } from "playwright";

const URL = process.env.SMOKE_URL || "http://localhost:3137";

const errors = [];
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
});
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });

// Scroll through the page so all `whileInView` reveal animations fire,
// then return to top before capturing a full-page screenshot.
async function scrollThrough() {
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.8);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 400));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);
}
await scrollThrough();
// give the typewriter + github calendar a moment
await page.waitForTimeout(2000);

// Structural checks
const sections = await page.$$eval("section[id]", (els) => els.map((e) => e.id));
const archSvgs = await page.$$eval('svg[role="img"]', (e) => e.length);
const stackIcons = await page.$$eval('[style*="mask-image"]', (e) => e.length);
const calendar = await page.$$eval(
  ".react-activity-calendar, [class*='ContributionCalendar'], svg",
  () => true
).catch(() => false);
const calendarText = await page
  .locator("text=Less")
  .first()
  .isVisible()
  .catch(() => false);

await page.screenshot({ path: "/tmp/portfolio-desktop.png", fullPage: true });

// Mobile pass
await page.setViewportSize({ width: 390, height: 844 });
await scrollThrough();
await page.waitForTimeout(1500);
await page.screenshot({ path: "/tmp/portfolio-mobile.png", fullPage: true });

await browser.close();

console.log(
  JSON.stringify(
    {
      sections,
      archDiagrams: archSvgs,
      maskedStackIcons: stackIcons,
      githubCalendarRendered: calendarText || calendar,
      consoleOrPageErrors: errors,
    },
    null,
    2
  )
);
