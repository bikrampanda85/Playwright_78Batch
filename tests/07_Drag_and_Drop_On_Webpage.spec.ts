//USe the Application to drag the draggale object to Droppble object location using dragTo() method of Playwright

import { test } from "@playwright/test";

test('Drag and Drop on Web Page', async ({ page }) => {

    //Open the Application

    await page.goto('https://jqueryui.com/droppable/');
    await page.waitForTimeout(3000);
    console.log('Application Loaded');

    //Enter into the Frame and perform the drag and drop

    const frame = page.frameLocator('.demo-frame');
    await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
    await page.waitForTimeout(3000);
    console.log('Object Successfully Dropped..');

})