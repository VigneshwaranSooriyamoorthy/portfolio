import { test, expect } from '@playwright/test';

test.describe('Page Meta & SEO', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Vigneshwaran Sooriyamoorthy | Portfolio/);
  });

  test('should have a meta description', async ({ page }) => {
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Vigneshwaran Sooriyamoorthy/);
  });

  test('should have a viewport meta tag', async ({ page }) => {
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('should have a favicon', async ({ page }) => {
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute('href', /favicon\.svg/);
  });

  test('should set lang attribute to en on html element', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });

  test('should load Google Material Symbols font', async ({ page }) => {
    const fontLink = page.locator('link[href*="fonts.googleapis.com"][href*="Material+Symbols"]');
    await expect(fontLink).toBeAttached();
  });
});
