import {test} from "@playwright/test";

test ('@Regression_TC008_Mouse Over', async ({page})=>{

    await page.goto('https://sureshitacademy.in/hrms/login.php');
    await page.waitForTimeout(3000);

    await page.locator("//input[@name='txtUserName']").fill('admin');
    await page.locator("//input[@name='txtPassword']").fill('admin');
    await page.waitForTimeout(3000);
    console.log("Credential Provided..")

    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(3000);
    console.log("Login Worked");

    //Mouse hover on PIM Main Menu
    await page.getByText('PIM').hover();
    console.log("Completed Mouse hover on PIM main menu..");

    await page.locator("//span[text()='Add Employee']").click()
    await page.waitForTimeout(3000);
    console.log("Clicked on Add Employee Sub Element");

   //Click on Logout
   await page.getByRole('link',{name: 'Logout'}).click()
   await page.waitForTimeout(3000);
   console.log("Log out Completed..");

});