import { ProductsPageObjects } from "../PageObjects/ProductsPageObjects";


var productPOs = new ProductsPageObjects();


export class ProductsPageImplementations {




    validateItemsInProducts(item) {



        productPOs.productsDropdown().trigger('mouseover');

        productPOs.itemInProducts(item).click({ force: true });

        productPOs.productNameOnHomePage(item).should("contain.text", item);

        cy.log(item + " in product dropdown has been clicked and verified successfully");
    }
}