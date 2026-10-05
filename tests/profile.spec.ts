import {test} from "../fixtures/CustomFixtures";
import { validUsers } from "../testdata/TestData";





test.describe('profile tests', () => {

    test('User should be able to see profile', async ({ homePage, page }) => {
        
        await page.goto('https://ndosisimplifiedautomation.vercel.app');
        await homePage.ClickMenu();
        await homePage.ClickMyProfile();
        await homePage.verifyProfileHeading();
        await homePage.ClickEditMyProfile();
        await homePage.EditGitProfileName(validUsers.GitHubUsername.username);

    });

});