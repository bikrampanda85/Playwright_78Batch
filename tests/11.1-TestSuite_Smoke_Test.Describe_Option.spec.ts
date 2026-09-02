import {test} from "@playwright/test";

test.describe('Smoke Test Suite', async () => {
    
test('TC002_OpenApp_CloseApp', async({page})=>{
    //-- Test Steps- Launch the Browser, enter the URL and close the browser
    await page.goto('https://google.com');
    await page.waitForTimeout(3000);
    console.log("Application Opened Successfully");

});

test('TC003_Login_Logout_HRMS_App', async ({page}) => {
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

   
});