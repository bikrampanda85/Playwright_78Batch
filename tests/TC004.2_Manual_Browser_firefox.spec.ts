import {test, chromium, firefox} from "@playwright/test"

test ('@Smoke_TC004.2_Manual_Browser_Firefox', async () => {
//Launch a Chrome Browser Instance Manually
const browser = await firefox.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto ("https://google.com");
await page.waitForTimeout(3000);
});