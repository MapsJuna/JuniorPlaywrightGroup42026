import { Page } from "@playwright/test";
import { BasePage } from "../utils/Basepage";

export class HomePage extends BasePage {
    
       

    async ClickMenu() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Menu' }));
    }

    async ClickMyProfile() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Profile' }));
    }

    async ClickEditMyProfile() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Edit Profile'}));

    }

    async EditGitProfileName(username: string) {
       await this.page.getByRole('textbox', { name: 'e.g., octocat' }).fill(username);

    }

    async ClickSave() {
        await this.ClickElement(this.page.getByRole('button', { name: 'Save' }));
    }

    async navigateTOProfilePage() {
        await this.ClickMenu();
        await this.ClickMyProfile();
        await this.ClickEditMyProfile();
        await this.EditGitProfileName('MapsJuna');
        await this.ClickSave();
    }
}