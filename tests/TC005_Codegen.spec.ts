import { test, expect } from '@playwright/test';

//npx playwright codegen appl_url  --> Syntax to use codegen e.g npx playwright codegen https://sureshitacademy.in/hrms/login.php

test('test', async ({ page }) => {
  await page.goto('https://sureshitacademy.in/hrms/login.php');
  await page.locator('input[name="txtUserName"]').click();
  await page.locator('input[name="txtUserName"]').fill('admin');
  await page.locator('input[name="txtPassword"]').click();
  await page.locator('input[name="txtPassword"]').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});