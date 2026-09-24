

import { expect } from "@playwright/test";
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

    test('User should be able to edit GitUsername', async ({ HomePage }) => {
        await HomePage.ClickMenu();
        await HomePage.ClickMyProfile();
        await HomePage.ClickEditProfile();
        await HomePage.EditGitProfileName(validUsers.githubUser.username);
       

    })


});
