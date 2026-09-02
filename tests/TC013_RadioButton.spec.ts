import { test } from "@playwright/test";

test('@Regression_TC013_Radio Button Example', async ({ page }) => {

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