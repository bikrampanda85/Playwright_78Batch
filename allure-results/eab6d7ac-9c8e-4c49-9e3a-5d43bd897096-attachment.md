# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: exp2.spec.ts >> Web Table in HRMS App
- Location: tests\exp2.spec.ts:5:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('//iframe[@id=\'rightMenu\']').contentFrame().locator('//select[@id=\'loc_name\']')

```

# Test source

```ts
  1  | 
  2  | 
  3  | import { test } from "@playwright/test";
  4  | 
  5  | test('Web Table in HRMS App', async ({ page }) => {
  6  | 
  7  |     await page.goto("https://sureshitacademy.in/hrms/login.php");
  8  |     await page.waitForTimeout(3000);
  9  |     console.log("Application Opened..");
  10 | 
  11 |     await page.locator("//input[@name='txtUserName']").fill('sureshit');
  12 |     await page.locator("//input[@name='txtPassword']").fill('sureshit');
  13 |     await page.locator("//input[@value='Login']").click();
  14 |     await page.waitForTimeout(3000);
  15 |     console.log("Login Worked..");
  16 | 
  17 |     const frame = page.frameLocator("//iframe[@id='rightMenu']");
  18 |     await frame.locator("//select[@id='loc_code']").selectOption('Emp. First Name');
  19 |     await page.waitForTimeout(3000);
  20 |     console.log(" Emp. First Name selected from the Search By dropdown..");
> 21 |     await frame.locator("//select[@id='loc_name']").fill('Bikram');
     |                                                     ^ Error: locator.fill: Test ended.
  22 |     await page.waitForTimeout(3000);
  23 |     console.log(" First name filled as Bikram in the Search Box..");
  24 |     await frame.locator("//input[@value='Search']").click();
  25 |     await page.waitForTimeout(3000);
  26 |     console.log(" Search Button clicked");
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | })
```