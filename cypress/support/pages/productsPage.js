export class ProductsPage {
    constructor() {
        this.modalBtn = '//button[text()="Close"]';
        this.goShoppingCartBtn = '#goShoppingCart';
    }
addItemToCart(article) {
    cy.contains(article, {timeput: 30000}).siblings('button').click();
}
closeModalBtn() {
    cy.xpath(this.modalBtn).click();
}
clickGoShoppingCartBtn() {
    cy.get(this.goShoppingCartBtn).click();
}
};