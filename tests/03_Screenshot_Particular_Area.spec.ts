// Screenshot of Particular Area

import { test } from "@playwright/test";
test('Screen shot of Particular Area', async ({ page }) => {
    await page.goto('https://sureshitacademy.in/hrms/login.php');
    console.log("Application Loaded");
    await page.waitForTimeout(3000);

    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    console.log("Credentials Entered");
    await page.waitForTimeout(3000);

    await page.locator("//input[@value='Login']").click();
    console.log("Login Worked");
    await page.waitForTimeout(3000);


    //Take a Screenshot of Particular Area

    await page.screenshot({ path: 'C:\\Playwright_Learning\\playwright_WS\\78Batch\\playwright-report\\Screenshots\\area.png', clip: { x: 0, y: 0, width: 500, height: 500 } })
    console.log("Screenshot of Particular Area Taken");
    await page.waitForTimeout(3000);

    await page.locator("//a[text()='Logout']").click();
    console.log("Logout Success");
    await page.waitForTimeout(3000);

})