import { test } from "@playwright/test";

test('Keyboard Example', async ({ page }) => {

    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout (3000);
    console.log ("Application Launched");

    await page.keyboard.press("Tab");
    await page.waitForTimeout (3000);

    await page.keyboard.type('sureshit');  // Enter User Name
    await page.waitForTimeout (3000);
    await page.keyboard.press("Tab");    
    await page.waitForTimeout (3000);
    await page.keyboard.type('sureshit');  // Enter Password
    await page.keyboard.press("Tab");
    await page.waitForTimeout (3000);
    await page.keyboard.press("Enter");   // Press Enter on Log in Button
    await page.waitForTimeout (3000);
    console.log ("Login Success..")

    for (let i=1;i<=2;i++){
        await page.keyboard.press("Tab");
    }
    await page.waitForTimeout (3000);
    await page.keyboard.press("Enter");   // Press Enter on Log out Button
    await page.waitForTimeout (3000);
    console.log ("Logout Success..")    

});