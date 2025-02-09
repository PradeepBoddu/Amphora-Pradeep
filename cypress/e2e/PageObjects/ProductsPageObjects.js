export class ProductsPageObjects {


    productsDropdown() {

        return cy.xpath("//li[@id='menu-item-32']//a[contains(text(),'Products')]");
    }


    itemInProducts(item) {

        return cy.xpath("//li[@id='menu-item-32']//a[contains(text(),'Products')]//following-sibling::ul//li//a[text()='" + item + "']");
    }


    productNameOnHomePage(name) {

        return cy.xpath("//h1[contains(text(),'" + name + "')]")
    }










}