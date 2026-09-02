// Full Page Screenshot

import { test } from "@playwright/test";

test('Screen Shot of Full Page', async ({ page }) => {

    await page.goto('https://sureshitacademy.in/hrms/login.php');
    await page.waitForTimeout(3000);
    console.log('Application Loaded');
    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    await page.waitForTimeout(3000);
    console.log('Credentials Entered..');

    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(3000);
    console.log('Login Success ..');

    //Take a Full Page Screenshot after Log in

    await page.screenshot({path: 'C:\\Playwright_Learning\\playwright_WS\\78Batch\\playwright-report\\Screenshots\\fullscreenshot.png' , fullPage: true});
    await page.waitForTimeout(3000);
    console.log('Full Page Screenshot Taken..');

})