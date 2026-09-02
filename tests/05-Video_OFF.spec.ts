// To on the Video go to Config file --> use and make an entry as video: 'off',. Once the TC is executed video will not be recorded 

import {test} from "@playwright/test"

test('HRMS Application-LogIn and Log Out', async ({page}) => {
    await page.goto ("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout(3000);
    console.log ("HRMS App-Opened Successfully!!");

    // Enter User name and password
    await page.locator("//input[@name='txtUserName']").fill("sureshit"); // fill data in User Name text box
    await page.locator ("//input[@name='txtPassword']").fill("sureshit"); // fill data in Password text box
    await page.waitForTimeout(3000);
    console.log ("Credentials Entered");

    //Click the Login Button
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(3000);
    console.log ("Login worked");

    // Click on Logout
    await page.getByRole ('link', {name: 'Logout'}).click();
    await  page.waitForTimeout(3000);
    console.log ("Logout worked");
    });

