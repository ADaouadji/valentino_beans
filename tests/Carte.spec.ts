import { test, expect } from '@playwright/test';

test('ajouter un item dans le panier', async ({ page }) => {
  await page.goto('https://valentinos-magic-beans.click/');
  await expect(page).toHaveTitle('Valentino\'s Magic Beans - Premium Coffee');
  expect(page.getByRole('heading', { name: 'Brazilian Santos' })).toContainText;
  expect(page.getByText('$22.99')).toHaveValue;
  await page.locator('[data-test-id="featured-product-add-to-cart-504"]').click();
  await page.getByRole('button', { name: '1' }).click();
  expect(page.getByRole('main')).toContainText('Shipping');
  expect(page.getByRole('main')).toContainText('$5.99');
  await page.locator('[data-test-id="proceed-to-checkout"]').click();
  await page.locator('[data-test-id="checkout-firstname-input"]').fill('ad');
  await page.locator('[data-test-id="checkout-lastname-input"]').fill('kad');
  await page.locator('[data-test-id="checkout-email-input"]').fill('daou@gmail.com');
  await page.locator('[data-test-id="checkout-address-input"]').fill('16 rue inconnue');
  await page.locator('[data-test-id="checkout-city-input"]').fill('cityboyz');
  await page.locator('[data-test-id="checkout-zipcode-input"]').fill('78260');
  await page.locator('[data-test-id="checkout-country-input"]').fill('france')
  await page.locator('[data-test-id="checkout-cardname-input"]').fill('ad daou');
  await page.locator('[data-test-id="checkout-cardnumber-input"]').fill('1111 2222 3333 4444');
  await page.locator('[data-test-id="checkout-cardexpiry-input"]').fill('12/28');
  await page.locator('[data-test-id="checkout-cardcvc-input"]').fill('125');
  await page.locator('[data-test-id="place-order-button"]').click();
  await expect(page.getByText('A confirmation email will be')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Order Confirmed!' })).toBeVisible();
})