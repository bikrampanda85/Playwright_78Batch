import {test, chromium} from "@playwright/test"

test ('@Smoke_TC004.3_Manual_Browser_Edge', async () => {
//Launch a Chrome Browser Instance Manually
const browser = await chromium.launch({channel: 'msedge'});
const context = await browser.newContext();
const page = await context.newPage();

await page.goto ("https://google.com");
await page.waitForTimeout(3000);
});