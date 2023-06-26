export class LoginPage {
    constructor() {
        this.userInput = '//input[@name="user"]';
        this.passwordInput = '//input[contains(@name,"pass")]';
        this.loginBtn = '//button[starts-with(text(),"Log")]';
    }
    escribirUsuario(usuario) {
        cy.xpath(this.userInput).type(usuario);
    };

    escribirContraseña(contraseña) {
        cy.xpath(this.passwordInput).type(contraseña);
    };

    clickLoginBtn() {
        cy.xpath(this.loginBtn).click();
    };

    
};