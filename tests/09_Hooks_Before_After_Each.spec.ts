// Example code for hooks with test.beforeEach() and test.afterEach(). It gets executed for each Method

import {test} from "@playwright/test";

test.beforeEach(async () => {
    console.log ("Application Opened..");
});

test.afterEach(async () => {
    console.log ("Application Closed..");  
});

test ('TC001', async () => {
    console.log ("Login Success");

});

test ('TC002', async () => {
    console.log ("Logout Success");
        
});