export class ShoppingCartPage{
    constructor() {
        this.totalPriceBtn = 'Show total price';
        this.totalPriceNumber = '//p[@id="price"]//descendant::b';
    }
clickShowTotalPriceBtn() {
    cy.contains(this.totalPriceBtn).click();
}
devolverPrecio(price){
    return cy.xpath(this.totalPriceNumber).invoke('text');
}
productVerification(article){
    return cy.contains('p',`${article}`).invoke('text');
        
};
priceVerification(article,price) {
    return cy.contains('p',`${article}`).siblings('#productPrice').invoke('text')
  
};

};  