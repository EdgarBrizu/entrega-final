export class ShoppingCartPage{
    constructor() {
        this.totalPriceBtn = 'Show total price';
        this.totalPriceNumber = '//p[@id="price"]//descendant::b';
        this.GoToCheckOutBtn = 'Go to Checkout';
    }
clickShowTotalPriceBtn() {
    cy.contains(this.totalPriceBtn).click();
};
totalPriceVerification(){
    return cy.xpath(this.totalPriceNumber).invoke('text');
};
productVerification(article){
    return cy.contains('p',`${article}`).invoke('text');      
};
priceVerification(article) {
    return cy.contains('p',`${article}`).siblings('#productPrice').invoke('text')
};
clickGoToCheckOutBtn() {
    cy.contains(this.GoToCheckOutBtn).click();
};

};  