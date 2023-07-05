/// <reference types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { ProductsPage} from "../support/pages/productsPage"
import { ShoppingCartPage } from "../support/pages/shoppingCartPage"
import { CheckOutPage } from "../support/pages/checkOutPage";
import { ReciptPage } from "../support/pages/recipt.Page";
describe('Entrega Final', () =>{
    let data1;
    let data2;
    let data3;
    let totalPrice;
    const numeroRandom = Math.floor(Math.random() * 1000);
    const checkOutPage = new CheckOutPage();
    const reciptPage  = new ReciptPage();
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();

    before('Acceso a fixtures, registro y logueo', ()=>{
        cy.fixture('articulo1').then(datos =>{
            data1=datos;
        });
        cy.fixture('articulo2').then(datos =>{
            data2=datos;
            totalPrice=data1.precio+data2.precio;
        });
        cy.fixture('dataCheckout').then(datos =>{
            data3=datos;
        });
        //registro
        cy.request({
            url:'https://pushing-it.onrender.com/api/register',
            method: 'POST',
            body:{
                username: `brizu${numeroRandom}`,
                password: '123456!',
                gender: 'male',
                day: '20',
                month: '11',
                year: '1991',
                }
        });
        //logueo
        cy.request({
            url:'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body:{
                username: `brizu${numeroRandom}`,
                password: '123456!',
                }
        }).then(respuesta => {
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
            });
    });
    it("Elije dos productos y verifica el ticket final",()=>{
        cy.visit('');
        homePage.clickOnlineShopButton();
        productsPage.addItemToCart(data1.nombre);
        productsPage.addItemToCart(data2.nombre);
        productsPage.clickGoShoppingCartBtn();
        shoppingCartPage.productVerification(data1.nombre).then(nombre1 =>{
            assert.equal(nombre1,data1.nombre)
            });
        shoppingCartPage.productVerification(data2.nombre).then(nombre1 =>{
            assert.equal(nombre1,data2.nombre)
            });
        shoppingCartPage.priceVerification(data1.nombre).then(precio =>{
            assert.equal(precio,`$${data1.precio}`);
            });
        shoppingCartPage.priceVerification(data2.nombre).then(precio =>{
            assert.equal(precio,`$${data2.precio}`);
            });
        shoppingCartPage.clickShowTotalPriceBtn();
        shoppingCartPage.totalPriceVerification(totalPrice).then(precio => {
            assert.equal(precio,totalPrice);
            });
        shoppingCartPage.clickGoToCheckOutBtn();
        checkOutPage.firstNameInput(`${data3.nombre}`);
        checkOutPage.lastNameInput(`${data3.apellido}`);
        checkOutPage.cardNumberInput(data3.tarjetaDeCredito);
        checkOutPage.clickPurchaseBtn();
        cy.WaitForSpinnerNotToExist();
        reciptPage.sucsesfullMessage().then(message =>{
            expect(message).is.equal(`${data3.nombre} ${data3.apellido} has succesfully purchased the following items`);
        });
        reciptPage.productVerification(data1.nombre).then(article =>{
            assert.equal(article, `${data1.nombre}`);
        });
        reciptPage.productVerification(data2.nombre).then(article =>{
            assert.equal(article, `${data2.nombre}`);
        });
        reciptPage.cardNumberVerification().should('be.equal',`${data3.tarjetaDeCredito}`); 
        reciptPage.totalPriceVerification(totalPrice).then(precio => {
            assert.equal(precio,`You have spent $${totalPrice}`);
        });

    });

    after('elimina datos de usuario', ()=>{
        cy.request({
            url:`https://pushing-it.onrender.com/api/deleteuser/brizu${numeroRandom}`,
            method: 'DELETE',
        body:{
            username: `brizu${numeroRandom}`,
            password: '123456!',
            }
        });
    });
});