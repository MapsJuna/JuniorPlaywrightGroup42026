import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
    constructor(public page: Page){
        
    }

    async navigateTo(url: string) { 
        await this.page.goto(url);
    }

    async ClickElement(locator: Locator) {
        await locator.click()
    }
    
    async EnterText(locator: Locator, text: string) {
        await locator.fill(text)
    }

    async verifyElementIsVisible(locator: Locator) {
        await expect(locator).toBeVisible()

    }

    async GetElementText(locator: Locator) {
        return await locator.textContent();
    }
}

