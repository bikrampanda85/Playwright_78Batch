/* ==Web table : displaying the data in table format on webpage  
1. Retrieve Count : -- count(); --XPath
   --Row Count : to get no of rows 
   --Col Count :  to get no of columns
   --Row_Col Count :  to get no of rows+colmn

2. Retrieve Data : --textContent(); / innerText()  --XPath
   --Particular Cell -  
   --The Whole Table
*/

//use the Web table example file and get the Count i.e Row count ,Column Count , Row+ Column Count
//use the Web table example file and get the data of perticular cell and data of whole web table.


import { test } from "@playwright/test";

test('Web Table Example', async ({ page }) => {

   await page.goto("file:///C:/Playwright_Learning/Ref_files/WebTable.html");
   await page.waitForTimeout(3000);
   console.log("Application Opened..");

   //Get the Count i.e Row count ,Column Count , Row+ Column Count

   // Get the Row Count
   //let rowcount = await page.locator("//*[@id='idCourse']/tbody/tr[4]/td[1]").count(); // it will return 1 row only because we are reditecting to 4th row and 1st column and getting the count
   let rowcount = await page.locator("//*[@id='idCourse']/tbody/tr").count(); // It returns all rows including the header
   console.log("Total no of Rows in the table are: " + rowcount);

   // Get the Col Count
   let colcount = await page.locator("//*[@id='idCourse']/tbody/tr[1]/td").count();
   console.log("Total no of Columns in the table are: " + colcount);

   // Get the Row + Col Count
   let rowcolcount = await page.locator("//*[@id='idCourse']/tbody/tr/td").count();
   await page.waitForTimeout(3000);
   console.log("Total no of Rows+ Columns in the table are: " + rowcolcount);

   //Get the data of perticular cell and data of whole web table.

   // Get Data of perticular cell

   let celldata = await page.locator("//*[@id='idCourse']/tbody/tr[2]/td[2]").textContent();
   console.log("Data in the cell is " + celldata);
   await page.waitForTimeout(3000);
   celldata = await page.locator("//*[@id='idCourse']/tbody/tr[6]/td[4]").textContent();
   console.log("Data in the cell is " + celldata);
   await page.waitForTimeout(3000);

   // Get Data from whole table
   for (let i = 1; i <= rowcount; i++) {
      //let tabledata = await page.locator("//*[@id='idCourse']/tbody/tr["+i+"]").textContent(); // It wont give a nie table 
      let tabledata = await page.locator("//*[@id='idCourse']/tbody/tr[" + i + "]").innerText();
      console.log(tabledata);
   }
   await page.waitForTimeout(3000);
});
