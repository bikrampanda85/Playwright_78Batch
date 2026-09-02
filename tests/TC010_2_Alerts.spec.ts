// Check alert on entering Password and no User Name. Click on Log in button, Capture Alert

import { expect, test } from "@playwright/test";

test('Alert TC02', async ({ page }) => {

    //Handeling Alerts
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await page.waitForTimeout(4000);
        dialog.accept();
        await page.waitForTimeout(4000);
        //dialog.dismiss();       
    })

    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout(4000);
    console.log("Application Launched");

    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(4000);

    await page.locator("//input[@value='Clear']").click();
    await page.waitForTimeout(4000);

    await expect(page.locator("//input[@name='txtPassword']")).toBeEmpty();
    console.log("Password Cleared..");
    await page.waitForTimeout(4000);

    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    await page.waitForTimeout(4000);
    console.log("Credentials Entered")

    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(4000);
    console.log("Login Success");

    await page.locator("//a[text()='Logout']").click();
    //await page.waitForTimeout(4000);
    console.log("Logout success..")




})