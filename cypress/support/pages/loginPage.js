export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.passwordInput = '#pass';
        this.loginBtn = '#submitForm';
    }
    escribirUsuario(usuario) {
        cy.get(this.userInput).type(usuario);
    };

    escribirContraseña(contraseña) {
        cy.get(this.passwordInput).type(contraseña);
    };

    clickLoginBtn() {
        cy.get(this.loginBtn).click();
    };

    
};