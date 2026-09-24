


import { test } from "../fixtures/CustomFixtures";
import { validUsers } from "../testdata/TestData";


test.describe('Login Tests', () => {

    test('Admin should be able to login', async ({ loginPage }) => {

        await loginPage.GoToUrl('https://ndosisimplifiedautomation.vercel.app');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username,validUsers.admin.password);
        await loginPage.verifyDashboardHeading();
         

    });


    test('User should be able to login', async ({ loginPage }) => {

        await loginPage.GoToUrl('https://ndosisimplifiedautomation.vercel.app');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.studentUser.username,validUsers.studentUser.password);
        await loginPage.verifyDashboardHeading();


    });

    test('User should be able to edit GitUsername', async ({ homePage, loginPage }) => {

        await loginPage.GoToUrl('https://ndosisimplifiedautomation.vercel.app');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.studentUser.username,validUsers.studentUser.password
    );


        await homePage.ClickMenu(); 
        await homePage.ClickMyProfile();
        await homePage.ClickEditMyProfile();
        await homePage.EditGitProfileName(validUsers.GitHubUsername.username);
       

    })


});
