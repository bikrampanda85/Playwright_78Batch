// Screenshot of perticular Element

import { test } from "@playwright/test";

test(' Screenshot of Element', async ({page}) => {

    await page.goto ('https://sureshitacademy.in/hrms/login.php');
    console.log ("Application Loaded");
    await page.waitForTimeout (3000);

    await page.locator ("//input[@name='txtUserName']").fill('sureshit');
    await page.locator ("//input[@name='txtPassword']").fill('sureshit');
    console.log ("Credentials Entered");
    await page.waitForTimeout (3000);

    await page.locator ("//input[@value='Login']").click();
    console.log ("Login Worked");
    await page.waitForTimeout (3000);


    //Take a Screenshot of Logout Element
    await page.locator ("//a[text()='Logout']").screenshot({path: 'C:\\Playwright_Learning\\playwright_WS\\78Batch\\playwright-report\\Screenshots\\element.png'});
    console.log ("Screenshot of Element Taken");
    await page.waitForTimeout (3000);

    await page.locator ("//a[text()='Logout']").click();
    console.log ("Logout Success");
    await page.waitForTimeout (3000);


});





