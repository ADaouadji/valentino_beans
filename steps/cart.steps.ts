import { Given, When, Then, AfterAll, BeforeAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { CartPage } from '../pages/cart.page';

setDefaultTimeout(60 * 1000); // timeout 60 secondes

let browser: Browser;
let page: Page;
let cartPage: CartPage;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  cartPage = new CartPage(page);
});

AfterAll(async () => {
  await browser.close();
});

Given('Je suis sur la page d\'accueil', async () => {
  await cartPage.goto();
  await cartPage.checkTitle();
});

When('J\'ajoute le produit vedette au panier', async () => {
  await cartPage.addFeaturedProductToCart();
});

When('Je définis la quantité à {int}', async (quantity: number) => {
  await cartPage.setCartQuantity(quantity.toString());
  await cartPage.checkShipping();
});

When('Je valide le panier', async () => {
  await cartPage.proceedToCheckout();
});

When('Je renseigne les informations de livraison et paiement', async () => {
  await cartPage.fillCheckoutForm();
});

When('Je confirme la commande', async () => {
  await cartPage.placeOrder();
});

Then('Je vois la confirmation de la commande', async () => {
  await cartPage.checkOrderConfirmation();
});
