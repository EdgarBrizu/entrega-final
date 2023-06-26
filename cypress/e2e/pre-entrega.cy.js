/// <reference types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { RegisterPage} from "../support/pages/registerPage"
import { OnlineShopPage} from "../support/pages/onlineShopPage"
describe('Actividad Pre-entrega', ()=>{
    let data;
    const registerPage = new RegisterPage();
    const homePage = new HomePage();
    const loginpage = new LoginPage();
    const onlineShopPage = new OnlineShopPage();

    before('Acceso a datos fixture', ()=>{
        cy.fixture('data').then(datos =>{
            data=datos;
        })
    });
    beforeEach('Visita pagina y login', ()=>{
        cy.visit('')
        registerPage.clickIniciaSecion();
        loginpage.escribirUsuario(data.datosLogin.usuario);
        loginpage.escribirContraseña(data.datosLogin.contraseña);
        loginpage.clickLoginBtn();
    });
    it("Debe elegir dos productos y los añade al carrito", () =>{
        homePage.clickOnlineShopButton();
        onlineShopPage.addItem1ToCart();
        //onlineShopPage.addItemToCart(`${data.articulos.articulo1.nombre}`)
        onlineShopPage.closeModalBtn();
        onlineShopPage.addItem2ToCart();
        onlineShopPage.closeModalBtn();
        onlineShopPage.clickGoShoppingCartBtn();


    });
})