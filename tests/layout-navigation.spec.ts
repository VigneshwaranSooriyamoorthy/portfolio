import { test, expect } from '@playwright/test';

test.describe('Layout & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
  });

  test('should have exactly 4 menu items', async ({ page }) => {
    const menuItems = page.locator('.menu-item');
    await expect(menuItems).toHaveCount(4);
  });

  test('should have menu items for Home, About, Skills, and Contact', async ({ page }) => {
    const titles = ['Home', 'About', 'Skills', 'Contact'];
    for (const title of titles) {
      const menuItem = page.locator(`a[title="${title}"]`);
      await expect(menuItem).toBeVisible();
    }
  });

  test('should highlight the Home menu item as active by default', async ({ page }) => {
    const homeMenuItem = page.locator('a[title="Home"]');
    await expect(homeMenuItem).toHaveClass(/active/);
  });

  test('should display the footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should display footer with correct text', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toContainText('Developed with ❤️ by Vigneshwaran Sooriyamoorthy');
  });
});
