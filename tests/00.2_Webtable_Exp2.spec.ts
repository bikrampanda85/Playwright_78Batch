

import { test } from "@playwright/test";

test('Web Table in HRMS App', async ({ page }) => {

    //Open the Application
    await page.goto("https://sureshitacademy.in/hrms/login.php");
    await page.waitForTimeout(3000);
    console.log("Application Opened..");

    //Log in to the Application
    await page.locator("//input[@name='txtUserName']").fill('sureshit');
    await page.locator("//input[@name='txtPassword']").fill('sureshit');
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(3000);
    console.log("Login Worked..");

    // Search Employee with First name as Bikram
    const frame = page.frameLocator("//iframe[@id='rightMenu']");
    await frame.locator("//select[@id='loc_code']").selectOption('Emp. First Name');
    await page.waitForTimeout(3000);
    console.log("Emp. First Name selected from the Search By dropdown..");
    await frame.locator("//input[@id='loc_name']").fill('Bikram');
    await page.waitForTimeout(3000);
    console.log("First name filled as Bikram in the Search Box..");
    await frame.locator("//input[@value='Search']").click();
    await page.waitForTimeout(3000);
    console.log("Search Button clicked and presented a web table");

    // Get the no fo rows in the Web table with First name as Bikram and Display the data of web table

    let rowcount = await frame.locator("//*[@id='standardView']/table/tbody/tr").count();
    await page.waitForTimeout(3000);
    console.log("Total no of Rows in the Web Table is: " + rowcount);

    for (let i = 1; i <= rowcount; i++) {
        let tabledata = await frame.locator("//*[@id='standardView']/table/tbody/tr[" + i + "]").innerText();
        console.log(tabledata);
    }
    await page.waitForTimeout(3000);
})