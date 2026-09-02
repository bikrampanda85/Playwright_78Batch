// Check alert on entering User Name and No Password. Click on Log in button, Capture Alert

import {test} from "@playwright/test";

test ('Example_Alerts', async ({page})=> {

   // Handling the Alerts
    page.on ('dialog', async (dialog) => {
        console.log (dialog.message());
        await page.waitForTimeout (4000);
        dialog.accept();
        await page.waitForTimeout (4000);
        //dialog.dismiss();
    }) 

// Test Steps
// Log in to Application, Enter User Name, Click on Log in, Capture the Alert Message and click on ok
    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout (4000);
    console.log ("Applicaton Launched..");
    await page.locator ("//input[@name='txtUserName']").fill('sureshit');
    await page.waitForTimeout (4000);
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout (4000);
    console.log ("Clicked on Log in button..");
    await page.locator ("//input[@name='txtPassword']").fill('sureshit');
    await page.waitForTimeout (4000);
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout (4000);
    console.log ("Login Completed...");
    await page.locator("//a[text()='Logout']").click();
    await page.waitForTimeout (4000);
    console.log ("Logout Completed");
});



