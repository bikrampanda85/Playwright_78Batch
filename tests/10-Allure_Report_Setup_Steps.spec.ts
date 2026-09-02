/*

// Steps to run Allure Report in Playwright

	***Step-1 and Step2 - One time for a project
Step-1:-[Install Allure Report Playwright Dependencies- Once per Project]
	npm install -D allure-playwright allure-commandline

Step-2:-[Update Playwright Config File- Once per Project]
	reporter : [['html'], ['allure-playwright']],

Step-3:-[Execute any Playwright Automation Program]
	Note- After execution of the automation script or Test cases it will generate a folder called allure-results in the workspace.

Step4:- [Generate clean Allure Results in clean format]
	npx allure generate allure-results --clean
	Note- After this it generate a folder called allure- report in workspace.
		
Step5:- [Open Allure Report]
	npx allure open

Note- Make sure JDK [ Min 11] got installed in the system as sometimes allure report gives error.

*/