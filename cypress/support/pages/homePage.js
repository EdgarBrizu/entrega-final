export class HomePage {
    constructor() {
        this.onlineShopBtn = 'onlineshoplink';
    }

    clickOnlineShopButton() {
        cy.contains(this.onlineShoptBtn, { timeout: 30000 }).click();
    };
};