import { test, expect } from '@playwright/test';

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
    await page.locator('a[title="Contact"]').click();
    await expect(page.locator('#Contact')).toBeVisible();
  });

  test('should display the "Get in Touch" header', async ({ page }) => {
    await expect(page.locator('#Contact .header-part-1')).toContainText('Get in');
    await expect(page.locator('#Contact .header-part-2')).toContainText('Touch');
  });

  test('should display the contact description text', async ({ page }) => {
    const contactText = page.locator('.contact-text');
    await expect(contactText).toBeVisible();
    await expect(contactText).toContainText('currently open to new opportunities');
  });

  test('should display the "Say Hello" button', async ({ page }) => {
    const contactButton = page.locator('.contact-button');
    await expect(contactButton).toBeVisible();
    await expect(contactButton).toHaveText('Say Hello');
  });

  test('should have the correct mailto link', async ({ page }) => {
    const contactButton = page.locator('.contact-button');
    await expect(contactButton).toHaveAttribute('href', 'mailto:hivigneshwarans@gmail.com');
  });

  test('should display a decorative dash under the header', async ({ page }) => {
    const dash = page.locator('#Contact .dash');
    await expect(dash).toBeVisible();
  });
});
