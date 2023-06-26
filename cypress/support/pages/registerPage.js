export class RegisterPage {
constructor() {
    this.registerToggleBtn = '#registertoggle';
}
clickIniciaSecion() {
    cy.get(this.registerToggleBtn).dblclick();
}

};