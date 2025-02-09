import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductsPageImplementations } from "../PageImplementations/ProductsPageImplementations";
import { ProductsPageObjects } from "../PageObjects/ProductsPageObjects";


var productsPageImpls = new ProductsPageImplementations();
var productPOs = new ProductsPageObjects();


Given('click on the products dropdown', () => {

    // URL is been triggered by the beforeEach() method in commands.js file

    productPOs.productsDropdown().click();
    cy.log("products dropdown clicked successfully");
});

Then('verify all the items {string} in the products dropdown', (item) => {


    productsPageImpls.validateItemsInProducts(item);
})