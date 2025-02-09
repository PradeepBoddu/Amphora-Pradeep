import { NewsLetterPageObjects } from "../PageObjects/NewsLetterPageObjects";

var newsLetterPO = new NewsLetterPageObjects();


export class NewsLetterPageImplementations {


    enterCredentials(email, fName, Lname) {

        newsLetterPO.email().type(email);
        cy.log("email ID entered successfully");

        newsLetterPO.firstName().type(fName);
        cy.log("first name entered successfully");

        newsLetterPO.lastName().type(Lname);
        cy.log("last name entered successfully");




    }
}