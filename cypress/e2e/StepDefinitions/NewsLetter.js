import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { NewsLetterPageObjects } from "../PageObjects/NewsLetterPageObjects";
import { NewsLetterPageImplementations } from "../PageImplementations/NewsLetterPageImplementations";


var newsLetterPO = new NewsLetterPageObjects();
var newsLetterPageImpl = new NewsLetterPageImplementations();


Given('Click on the Resources dropdown and click on newsletter sign-up', () => {

    // URL is been triggered by the beforeEach() method in commands.js file


    newsLetterPO.resourcesDropdown().click();
    cy.log("Resources dropdown clicked successfully");


    newsLetterPO.newsLetterSignup().click({ force: true });
    cy.log("clicked on newsletter signup");
})


Then('enter the user credentials {string} {string} {string}', (email, fName, lName) => {

    newsLetterPageImpl.enterCredentials(email, fName, lName);

})

Then('validate the signup message after clicking on signup', () => {


    newsLetterPO.signUp().click();

    newsLetterPO.signUpMessage().should('be.visible');
})