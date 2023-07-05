export class ReciptPage {
    constructor() {
        this.Text = '#name';
        this.cardNumber = '#creditCard';
        this.totalPrice = '#totalPrice';

        
    }

sucsesfullMessage() {
    return cy.get(this.Text).invoke('text');
};
productVerification(article){
    return cy.get(this.Text).siblings('p').contains(`${article}`).invoke('text');      
};
cardNumberVerification(){
    return cy.get(this.cardNumber).invoke('text');      
};
totalPriceVerification(){
    return cy.get(this.totalPrice).invoke('text');
};
}
