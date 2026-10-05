import { validUsers } from "../../testdata/TestData";
import { LoginPage } from "../Pages/LoginPage";
import {test as setup} from "@playwright/test";




const authFile = 'playwright/.auth/users.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.GoToUrl('https://ndosisimplifiedautomation.vercel.app');
    await loginPage.userLogin(validUsers.admin.username, validUsers.admin.password);

    await page.context().storageState({ path: authFile });


});