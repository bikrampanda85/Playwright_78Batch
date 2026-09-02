import { test, expect } from "@playwright/test";

test.describe('Regression Test Suite', async () => {

    test('TC007_Passing_Data_Variable', async ({ page }) => {
        //************ Declare Data Variable *********/
        const url: string = 'https://sureshitacademy.in/hrms/login.php';
        const username: string = 'admin';
        const password: string = 'admin';

        //**************************** */

        await page.goto(url);
        await page.waitForTimeout(3000);
        console.log("Application Opened...");

        //Verify the Login Name and Password Labels
        // Enter User Name and Password

        await expect(page.getByText('Login Name : ')).toHaveText('Login Name : ');
        console.log("Login Name Text Verified...");
        await page.locator("//input[@name='txtUserName']").fill(username);
        await page.waitForTimeout(3000);

        await expect(page.getByText('Password : ')).toHaveText('Password : ');
        console.log("Password Text Verified...");
        await page.locator("//input[@name='txtPassword']").fill(password);
        await page.waitForTimeout(3000);

        console.log('Credentials entered')

        // Check that Login Button is enabled. If yes then click on it.
        await expect(page.locator("//input[@name='Submit']")).toBeEnabled();
        console.log("Login Button Enabled...");
        await page.locator("//input[@name='Submit']").click();
        await page.waitForTimeout(3000);
        console.log('Login Worked');

        // Check that Page Title is verified
        await expect(page).toHaveTitle('SureshIT');
        console.log('Page Title Verified');
        await page.waitForTimeout(3000);

        // Click on Logout
        await page.getByRole('link', { name: 'Logout' }).click()
        await page.waitForTimeout(3000);
        console.log('Logout Success')

    });

    test('TC008_Mouse Over', async ({ page }) => {

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
        await page.getByRole('link', { name: 'Logout' }).click()
        await page.waitForTimeout(3000);
        console.log("Log out Completed..");

    });


});