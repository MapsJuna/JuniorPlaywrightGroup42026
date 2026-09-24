
import { BasePage } from "../utils/Basepage";

export class HomePage extends BasePage {

    async openNdosiWebsite() {
        await this.GoToUrl('https://ndosisimplifiedautomation.vercel.app');
    }

    async navigateTOProfilePage() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Menu' }));
        await this.ClickElement(this.page.getByRole('button', { name: 'Profile' }));
        await this.ClickElement(this.page.getByRole('button', { name: 'Edit Profile' }));
        await this.page.getByRole('textbox').fill('MapsJuna');
        await this.ClickElement(this.page.getByRole('button', { name: 'Save' }));
    }

}