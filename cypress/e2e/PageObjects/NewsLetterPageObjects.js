export class NewsLetterPageObjects {


    resourcesDropdown() {
        return cy.xpath("//li[@id='menu-item-456']//a[contains(text(),'Resources')]");



    }

    newsLetterSignup() {
        return cy.xpath("//li[@id='menu-item-456']//a[contains(text(),'Resources')]//following-sibling::ul//li//a[text()='Newsletter sign-up']");
    }

    email() {
        return cy.xpath("//input[@type='email']")
    }

    firstName() {
        return cy.xpath("//input[@name='contact[first_name]']")
    }

    lastName() {
        return cy.xpath("//input[@name='contact[last_name]']");
    }

    signUp() {
        return cy.xpath("//button[contains(text(),'Sign Up')]");
    }

    signUpMessage() {
        return cy.xpath("//span[contains(text(),'Thank you for signing up for our newsletter')]")
    }
}