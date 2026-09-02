
import { test } from "@playwright/test";

test('Alert Test TC003', async ({ page }) => {

    //Handeling Alerts
    page.on('dialog', async (dialog) => {

        console.log(dialog.message());
        await page.waitForTimeout(4000);
        dialog.accept();
        //await page.waitForTimeout(4000);
        //dialog.dismiss()
    });

    //Launch Application
    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout(4000);
    console.log("Application Launched");

    //Enter User name, Password and Click on Log in Button..
    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    await page.waitForTimeout(4000);
    console.log("Credentials Entered")
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(4000);
    console.log("Login Worked..");

    //Once Logged in click on Search Button [ its on a frame] which will generate an alert pop . Capture the alert message, click on OK
    const frame = page.frameLocator ("//iframe[@id='rightMenu']");
    await frame.locator ("//input[@value='Search']").click()
    console.log ("Clicked on Search Button- which is on a Frame..");

    //Click on Logout and close the browser
    await page.getByRole('link',{name: 'Logout'}).click();
    console.log("Logout success..")

});