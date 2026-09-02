/* import { test, expect } from "@playwright/test";
test('HRMS Test', async ({ page }) => {

    // Declare the Variables
    const URL = "https://sureshitacademy.in/hrms/login.php";
    const UserName = "sureshit";
    const Password = "sureshit";

    // Open the Page, Enter the Credentials and Click on Log in
    await page.goto(URL);
    await page.waitForTimeout(3000);
    console.log("Page Laoded Successfully");

    await expect(page.locator("//td[text()='Login Name : ']")).toHaveText('Login Name : ');
    console.log("User Name Label Verified");
    await expect(page.locator("//td[text()='Password : ']")).toHaveText('Password : ');
    console.log("Password Label Verified");

    await page.locator("//input[@name='txtUserName']").fill(UserName);
    await page.locator("//input[@name='txtPassword']").fill(Password);
    await page.waitForTimeout(3000);
    console.log("Credentials Entered..");

    await expect(page.locator("//input[@value='Login']")).toBeEnabled();
    console.log("Log in Button Enabled..");

    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(3000);
    console.log("Log in Success..");

    // Verify the page Title

    //const pagetitle = await page.title();
    //console.log (pagetitle);
    await expect(page).toHaveTitle('SureshIT');
    console.log("Page Title Verified");

    // Do mouse over on PIM Menu and then Click on Add Employee Sub Menu 

    await page.getByText('PIM').hover();
    await page.waitForTimeout(3000);
    console.log("Mouse over PIM Module Success..")

    await page.locator("//span[text()='Add Employee']").click();
    await page.waitForTimeout(3000);
    console.log("Add Employee Page Presented..")

    //Enter into the Add Employee Frame, Enter First name and last name , Click on Reset and check the the data is getting cleared

    const frame = page.frameLocator("//iframe[@id='rightMenu']")
    await frame.locator("//input[@name='txtEmpFirstName']").fill('Bikram1');
    await frame.locator("//input[@name='txtEmpLastName']").fill('Panda1');
    await page.waitForTimeout(3000);
    console.log("First name and Last Name entered in the Employee Info Frame");

    await frame.locator("//input[@class='resetbutton']").click();
    await page.waitForTimeout(3000);
    console.log("Reset Button on Employee Inofrmation Frame Clicked Successfully");

    await expect (frame.locator("//input[@name='txtEmpFirstName']")).toBeEmpty();
    await expect (frame.locator("//input[@name='txtEmpLastName']")).toBeEmpty();
    await page.waitForTimeout(3000);
    console.log("First name and last name got cleared after clicking Reset Button..");


    //Click on Logout

    await page.locator("//a[text()='Logout']").click();
    await page.waitForTimeout(3000);
    console.log("Logout success..");

}); */


/*
// Verify alerts

import { test } from "@playwright/test";

test('Alerts', async ({ page }) => {

    // Handling the Alerts

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await page.waitForTimeout(4000);
        dialog.accept();
        //await page.waitForTimeout(4000);
        //dialog.dismiss()

    })

    // Declare the Variables
    const URL = "https://sureshitacademy.in/hrms/login.php";
    const UserName = "sureshit";
    const Password = "sureshit";

    await page.goto(URL);
    await page.waitForTimeout(3000);
    console.log("Page Laoded Successfully");

    await page.locator("//input[@name='txtUserName']").fill(UserName);
    await page.locator("//input[@value='Login']").click();
    //await page.waitForTimeout(3000);

    await page.locator("//input[@name='txtPassword']").fill(Password);
    await page.waitForTimeout(3000);
    console.log("Credentials Entered..");
    await page.locator("//input[@value='Login']").click();
    console.log("Log in Success..");

    //Click on Logout

    await page.locator("//a[text()='Logout']").click();
    await page.waitForTimeout(3000);
    console.log("Logout success..");

});  */


/*
import { test } from "@playwright/test";

test('Drop Down Example', async ({ page }) => {

    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout(3000);
    console.log("Application Loaded");

    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit')
    await page.waitForTimeout(3000);
    console.log("Credential Entered");

    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(3000);
    console.log("Log in Success");

    const frame = page.frameLocator("//iframe[@id='rightMenu']");

    // Select Employee Id from drop down using Visible Text
    //await frame.locator ("//select[@name='loc_code']").selectOption('Emp. ID');

    // Select Employee Id from drop dowin using index
    //await frame.locator ("//select[@id='loc_code']").selectOption ({index: 1});

    // Select Employee Id from drop dowin using Value Attribute
    await frame.locator("//select[@id='loc_code']").selectOption({ value: "0" });

    await page.waitForTimeout(3000);
    console.log("Emp. ID Selected from Drop Down");

    // Fill the Emp id in Search Box and then click on Search Button

    await frame.locator("//input[@name='loc_name']").fill('9997');
    await page.waitForTimeout(3000);
    await frame.locator("//input[@value='Search']").click();
    await page.waitForTimeout(3000);
    console.log("Search Button Clicked");

    //Click on Radio Button i.e check it and perform delete operation
    await frame.locator("//input[@name='chkLocID[]']").check();
    await page.waitForTimeout(3000);
    console.log("Radio Button Checked");

    await frame.locator("//input[@value='Delete']").click();
    await page.waitForTimeout(3000);
    console.log("Delete Success");
    
    //Click on Logout 

    await page.getByRole('link', {name: 'Logout'}).click();
    await page.waitForTimeout(3000);
    console.log("Logout Success");


});

*/
/*

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

}); */

/*

import { test } from "@playwright/test";

test('Screen Shot', async ({ page }) => {

    await page.goto('https://sureshitacademy.in/hrms/login.php');
    await page.waitForTimeout(3000);
    console.log('Application Loaded');
    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    await page.waitForTimeout(3000);
    console.log('Credentials Entered..');

    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(3000);
    console.log('Login Success ..');

    //Take a Screenshot of Full Page after Log in

    await page.screenshot({path: 'C:\\Playwright_Learning\\playwright_WS\\78Batch\\playwright-report\\Screenshots\\fullscreenshot.png' , fullPage: true});
    await page.waitForTimeout(3000);
    console.log('Full Page Screenshot Taken..');

}) */

/*
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


});  */


// Screenshot of Particular Area

import { test } from "@playwright/test";
test('Screen shot of Particular Area', async ({ page }) => {
    await page.goto('https://sureshitacademy.in/hrms/login.php');
    console.log("Application Loaded");
    await page.waitForTimeout(3000);

    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    console.log("Credentials Entered");
    await page.waitForTimeout(3000);

    await page.locator("//input[@value='Login']").click();
    console.log("Login Worked");
    await page.waitForTimeout(3000);


    //Take a Screenshot of Particular Area

    await page.screenshot({ path: 'C:\\Playwright_Learning\\playwright_WS\\78Batch\\playwright-report\\Screenshots\\area.png', clip: { x: 0, y: 0, width: 500, height: 500 } })
    console.log("Screenshot of Particular Area Taken");
    await page.waitForTimeout(3000);

    await page.locator("//a[text()='Logout']").click();
    console.log("Logout Success");
    await page.waitForTimeout(3000);

})



































