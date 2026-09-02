import {test} from "@playwright/test";

test ('Wait Examples', async ({page}) => {

    await page.goto ("https://sureshitacademy.in/hrms/login.php");
    // Example of waitForTimeout() where it will wait for specified time 
    await page.waitForTimeout(3000);  
    console.log ("Application Loaded");

    // Example for waitFor() where we will check that it will wait for the User name label to be visible
    await page.locator("//td[text()='Login Name : ']").waitFor({state:'visible'});

    await page.locator ("//input[@name='txtUserName']").fill('sureshit');
    await page.locator ("//input[@name='txtPassword']").fill('sureshit');

    //Example for waitFor() where we will check that it will wait for the Login button to be visible 
    await page.locator("//input[@value='Login']").waitFor({state:'visible'});

    await page.locator("//input[@value='Login']").click();

    //Example for waitForLoadState() where we will check that the page is fully loaded
    await page.waitForLoadState('load');

    page.getByRole('link',{name:'Logout'});
    console.log ("Logout Success..")

});