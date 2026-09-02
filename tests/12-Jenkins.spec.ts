/*Followig are the steps to configure a Jenkins Test job integrated with playwright for CI-CD

Step1- Download and Install Jenkins.exe- [One time for Project]
Step2- Install node.js plug in Jenkins- go to manage jenkins->Plugin and install it.[One time for Project]
Step3- Configure Nodejs - go to manage jenkins->tools- [ give name as node and check install automatically]-  [One time for Project]
Step4- Create a Jenkins Scheduler

Steps to create a Jenkins Scheduler for Playwrite Testing

1. Go to jenkins home and click on new item->enter name as Batch78 or any name you want . choose freestyle Project. Click on OK
2. In the Description give a description e.g jenkins test job for laywrite integration for HRMS project
3. TRIGGER-> Select Build Periodically and on schedule give H 20 * * * which means the job will run at 20:00 hours . You can provide the data as per your need
4. BUILD STEP-> Select Execute Windows batch command and provide below command
    cd /d C:\Playwright_Learning\playwright_WS\78Batch
    call npx playwright install
    call npx playwright test TC003_Login_Logout.spec.ts

5. Once done click on Save and Apply. Bingo your jenkins job for playwright is created and scheduled to run

How to run the job manually

1. Go to Jenkins Home-> Navigate to the Job
2. Hover arround the Jenkins Job Name i.e 78Batch , you wlll see a drop down containing various options like 
                         changes
                         workspace
                         Build Now
                         Delete Project
                         Configure
                         Rename
3. Click on Build Now and bingo your job wil run 

You can check the result from Clicking the Job->Navigating to Builds->Select the Build No->Click on console output

Note- all the steps are mentioned in Study material (hard and soft copy)- 03.Playwright_003.pdf

*/