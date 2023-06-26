export class HomePage {
    constructor() {
        this.onlineShopBtn = '#onlineshoplink';
    }

    clickOnlineShopButton() {
        cy.get(this.onlineShopBtn, { timeout: 30000 }).click();
    };
};