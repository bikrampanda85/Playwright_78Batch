import {test} from "@playwright/test"

test('@Smoke_TC002_OpenApp_CloseApp', async({page})=>{
    //-- Test Steps- Launch the Browser, enter the URL and close the browser
    await page.goto('https://google.com');
    await page.waitForTimeout(3000);
    console.log("Application Opened Successfully");

})