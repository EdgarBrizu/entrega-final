export class ProductsPage {
    constructor() {
        this.modalBtn = '#closeModal'
        this.goShoppingCartBtn = '#goShoppingCart'
    }
addItemToCart(article) {
    cy.contains(article, {timeput: 30000}).siblings('button').click();
}
closeModalBtn() {
    cy.get(this.modalBtn).click();
}
clickGoShoppingCartBtn() {
    cy.get(this.goShoppingCartBtn).click();
}
};