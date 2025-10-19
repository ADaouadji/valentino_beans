import { test, expect } from '@playwright/test';

test('ajouter un item dans le panier', async ({ page }) => {
  await page.goto('https://valentinos-magic-beans.click/');
  await expect(page).toHaveTitle('Valentino\'s Magic Beans - Premium Coffee');
  expect(page.getByRole('heading', { name: 'Brazilian Santos' })).toContainText;
  expect(page.getByText('$22.99')).toHaveValue;
  await page.locator('[data-test-id="featured-product-add-to-cart-504"]').click();
  await page.getByRole('button', { name: '1' }).click();
})