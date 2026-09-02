// Example code for hooks with test.beforeAll() and test.afterAll(). It gets executed once per program

import { test } from "@playwright/test";

test.beforeAll(async () => {
    console.log("Application Opened..");
});

test.afterAll(async () => {
    console.log("Application Closed..");
});

test('TC001', async () => {
    console.log("Login Success");

});

test('TC002', async () => {
    console.log("Logout Success");

});