import { Page } from '@playwright/test';

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://valentinos-magic-beans.click/');
  }

  async checkTitle() {
    await this.page.waitForSelector('h1');
  }

  async addFeaturedProductToCart() {
    await this.page.locator('[data-test-id="featured-product-add-to-cart-504"]').click();
  }

  async setCartQuantity(qty: string) {
    await this.page.getByRole('button', { name: qty }).click();
  }

  async checkShipping() {
    await this.page.getByRole('main').waitFor();
    await this.page.locator('span.text-coffee-600:has-text("Shipping")').waitFor();
    await this.page.getByText('$5.99').waitFor();
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test-id="proceed-to-checkout"]').click();
  }

  async fillCheckoutForm() {
    await this.page.locator('[data-test-id="checkout-firstname-input"]').fill('ad');
    await this.page.locator('[data-test-id="checkout-lastname-input"]').fill('kad');
    await this.page.locator('[data-test-id="checkout-email-input"]').fill('daou@gmail.com');
    await this.page.locator('[data-test-id="checkout-address-input"]').fill('16 rue inconnue');
    await this.page.locator('[data-test-id="checkout-city-input"]').fill('cityboyz');
    await this.page.locator('[data-test-id="checkout-zipcode-input"]').fill('78260');
    await this.page.locator('[data-test-id="checkout-country-input"]').fill('france');
    await this.page.locator('[data-test-id="checkout-cardname-input"]').fill('ad daou');
    await this.page.locator('[data-test-id="checkout-cardnumber-input"]').fill('1111 2222 3333 4444');
    await this.page.locator('[data-test-id="checkout-cardexpiry-input"]').fill('12/28');
    await this.page.locator('[data-test-id="checkout-cardcvc-input"]').fill('125');
  }

  async placeOrder() {
    await this.page.locator('[data-test-id="place-order-button"]').click();
  }

  async checkOrderConfirmation() {
    await this.page.getByText('A confirmation email will be').waitFor();
    await this.page.getByRole('heading', { name: 'Order Confirmed!' }).waitFor();
  }
}
