

import { expect } from "@playwright/test";
import { test } from "../fixtures/CustomFixtures";
import { validUsers } from "../testdata/TestData";


test.describe('Login Tests', () => {

    test('Admin should be able to login', async ({ page, loginPage }) => {

        await page.goto('https://ndosisimplifiedautomation.vercel.app');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.admin.username,validUsers.admin.password);

       
    });

    test('User should be able to login', async ({ page, loginPage }) => {

        await loginPage.GoToUrl('https://ndosisimplifiedautomation.vercel.app');
        await loginPage.navigateToLoginPage();
        await loginPage.userLogin(validUsers.user.username,validUsers.user.password);


    });


});
