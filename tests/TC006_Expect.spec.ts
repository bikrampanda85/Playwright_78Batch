import {test, expect} from "@playwright/test";

test ('@Regression_TC006_Expect Method', async({page})=>{

    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout(3000);
    console.log ("Application Opened...");

    //Verify the Login Name and Password Labels
    // Enter User Name and Password

    await expect(page.getByText('Login Name : ')).toHaveText('Login Name : ');
    console.log ("Login Name Text Verified...");
    await page.locator("//input[@name='txtUserName']").fill('admin');
    await page.waitForTimeout(3000);
    
    await expect(page.getByText('Password : ')).toHaveText('Password : ');
    console.log ("Password Text Verified...");
    await page.locator("//input[@name='txtPassword']").fill('admin');
    await page.waitForTimeout(3000);

    console.log ('Credentials entered')

    // Check that Login Button is enabled. If yes then click on it.
    await expect(page.locator("//input[@name='Submit']")).toBeEnabled();
    console.log ("Login Button Enabled...");
    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(3000);
    console.log ('Login Worked');
 
    // Check that Page Title is verified
    await expect(page).toHaveTitle('SureshIT');
    console.log ('Page Title Verified');
    await page.waitForTimeout(3000);
    
    // Click on Logout
    await page.getByRole('link',{name:'Logout'}).click()
    await page.waitForTimeout(3000);
    console.log ('Logout Success')

});