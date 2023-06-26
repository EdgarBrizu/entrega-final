export class OnlineShopPage {
    cosntructor() {
        this.article1 = 'data.articulos.articulo1.nombre';
        this.article2 = 'data.articulos.articulo2.nombre';
        this.modalBtn = '#closeModal'
        this.goShoppingCartBtn = '#goShoppingCart'
    }
addItem1ToCart() {
    cy.contains(`${this.article1}`).siblings('button');
}
addItem2ToCart() {
    cy.contains(`${this.article1}`).siblings('button');
}
addItemToCart(articulo) {
    cy.contains(articulo).siblings('button');
}
closeModalBtn() {
    cy.get(this.modalBtn).click();
}
clickGoShoppingCartBtn() {
    cy.get('#goShoppingCart').click();
}
};