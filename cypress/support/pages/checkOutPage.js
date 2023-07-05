export class CheckOutPage {
    constructor() {
        this.nombreInput = '//input[@name="firstName"]';
        this.apellidoInput = '//input[contains(@name,"last")]';
        this.cardNumberBtn = '#cardNumber';
        this.purchaseBtn = '//button[starts-with(text(),"Purc")]';
    }
firstNameInput(nombre) {
    cy.xpath(this.nombreInput).type(nombre);
};
lastNameInput(apellido) {
    cy.xpath(this.apellidoInput).type(apellido);
};
cardNumberInput(cardNumbrer) {
    cy.get(this.cardNumberBtn).type(cardNumbrer);
};
clickPurchaseBtn() {
    cy.xpath(this.purchaseBtn).click();
};
};