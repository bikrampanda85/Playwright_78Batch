import {test, expect} from "@playwright/test";

test ('@Regression_TC009_Frames_Add_Emp_Reset Button', async ({page}) =>{

const url = 'https://sureshitacademy.in/hrms/login.php';
const username = 'admin';
const password = 'admin';

//Open App, enter user name and password. Click on Log in
await page.goto (url);
await page.locator ("//input[@name='txtUserName']").fill(username);
await page.locator("//input[@name='txtPassword']").fill(password);
await page.waitForTimeout(3000);
console.log ("Credentials entered");

await page.locator("//input[@value='Login']").click();
await page.waitForTimeout(3000);
console.log ("Login Success..");

//Mouse over PIM Menu and then click on Add Employee
await page.getByText('PIM').hover();
console.log ('Mouse over PIM Menu worked...')
await page.getByText('Add Employee').click();
await page.waitForTimeout(3000);
console.log ("Add Employee click worked ...");

//Go inside Add Employee frame, enter First Name and Last Name, Click on Reset

const frame = page.frameLocator("//iframe[@id='rightMenu']");
await frame.locator ("//input[@name='txtEmpFirstName']").fill('Bikram1');
await frame.locator ("//input[@name='txtEmpLastName']").fill('Panda1');
await page.waitForTimeout (3000);
console.log ("First Name and Last Name Entered ...");
await frame.locator ("//input[@class='resetbutton']").click();
await page.waitForTimeout (3000);
console.log ("Reset Button Clicked ...");

//Check that the Previously entered data for First Name and Last Name cleared after clicking Reset Button
await expect (frame.locator ("//input[@name='txtEmpFirstName']")).toBeEmpty();
await expect (frame.locator ("//input[@name='txtEmpLastName']")).toBeEmpty();
console.log ("Previously entered data of First Name and Last Name cleared ...");

//Click on Log out Button and Close the Application

await page.getByRole('link',{name: 'Logout'}).click()
console.log ("Logout Success ...");
console.log ("Application Closed");

});