/// <reference types="cypress" />
import { HomePage } from "../support/pages/homePage"
import { LoginPage } from "../support/pages/loginPage"
import { RegisterPage} from "../support/pages/registerPage"
import { ProductsPage} from "../support/pages/productsPage"
import { ShoppingCartPage } from "../support/pages/shoppingCartPage"
describe('Actividad Pre-entrega', ()=>{
    let data;
    let totalPrice;
    const registerPage = new RegisterPage();
    const homePage = new HomePage();
    const loginpage = new LoginPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();

    before('Acceso a datos fixture', ()=>{
        cy.fixture('data').then(datos =>{
            data=datos;
            totalPrice=data.articulos.articulo1.precio + data.articulos.articulo2.precio;
        })
    });
    beforeEach('Visita pagina y login', ()=>{
        cy.visit('');
        registerPage.clickIniciaSecion();
        loginpage.escribirUsuario(data.datosLogin.usuario);
        loginpage.escribirContraseña(data.datosLogin.contraseña);
        loginpage.clickLoginBtn();
    });
    it("Debe elegir dos productos y los añade al carrito", () =>{
        homePage.clickOnlineShopButton();
        productsPage.addItemToCart(data.articulos.articulo1.nombre);
        productsPage.closeModalBtn();
        productsPage.addItemToCart(data.articulos.articulo2.nombre);
        productsPage.closeModalBtn();
        productsPage.clickGoShoppingCartBtn();
        shoppingCartPage.clickShowTotalPriceBtn();
        shoppingCartPage.productVerification(data.articulos.articulo1.nombre);
        shoppingCartPage.productVerification(`${data.articulos.articulo2.nombre}`);
        shoppingCartPage.priceVerification(data.articulos.articulo1.nombre,data.articulos.articulo1.precio);
        shoppingCartPage.priceVerification(data.articulos.articulo2.nombre,data.articulos.articulo2.precio);
        shoppingCartPage.devolverPrecio(totalPrice);
    });
})