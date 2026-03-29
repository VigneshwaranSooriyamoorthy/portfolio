import { test, expect } from '@playwright/test';

test.describe('Section Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
  });

  test('should navigate to About section when clicking the About menu item', async ({ page }) => {
    const aboutMenuItem = page.locator('a[title="About"]');
    await aboutMenuItem.click();

    const aboutSection = page.locator('#About');
    await expect(aboutSection).toBeVisible();
    await expect(aboutSection).toHaveClass(/active/);

    const homeSection = page.locator('#Home');
    await expect(homeSection).not.toBeVisible();
  });

  test('should navigate to Skills section when clicking the Skills menu item', async ({ page }) => {
    const skillsMenuItem = page.locator('a[title="Skills"]');
    await skillsMenuItem.click();

    const skillsSection = page.locator('#Skills');
    await expect(skillsSection).toBeVisible();
    await expect(skillsSection).toHaveClass(/active/);
  });

  test('should navigate to Contact section when clicking the Contact menu item', async ({ page }) => {
    const contactMenuItem = page.locator('a[title="Contact"]');
    await contactMenuItem.click();

    const contactSection = page.locator('#Contact');
    await expect(contactSection).toBeVisible();
    await expect(contactSection).toHaveClass(/active/);
  });

  test('should show only one section at a time', async ({ page }) => {
    const sections = ['Home', 'About', 'Skills', 'Contact'];

    for (const activeSection of sections) {
      const menuItem = page.locator(`a[title="${activeSection}"]`);
      await menuItem.click();

      for (const section of sections) {
        const sectionEl = page.locator(`#${section}`);
        if (section === activeSection) {
          await expect(sectionEl).toHaveClass(/active/);
        } else {
          await expect(sectionEl).not.toHaveClass(/active/);
        }
      }
    }
  });

  test('should highlight the correct menu item when navigating', async ({ page }) => {
    const sections = ['Home', 'About', 'Skills', 'Contact'];

    for (const activeSection of sections) {
      const menuItem = page.locator(`a[title="${activeSection}"]`);
      await menuItem.click();

      for (const section of sections) {
        const item = page.locator(`a[title="${section}"]`);
        if (section === activeSection) {
          await expect(item).toHaveClass(/active/);
        } else {
          await expect(item).not.toHaveClass(/active/);
        }
      }
    }
  });

  test('should be able to navigate back to Home from another section', async ({ page }) => {
    // Navigate away
    await page.locator('a[title="Contact"]').click();
    await expect(page.locator('#Contact')).toBeVisible();

    // Navigate back to Home
    await page.locator('a[title="Home"]').click();
    await expect(page.locator('#Home')).toBeVisible();
    await expect(page.locator('#Home')).toHaveClass(/active/);
    await expect(page.locator('#Contact')).not.toBeVisible();
  });

  test('should navigate through all sections in sequence', async ({ page }) => {
    const sequence = ['About', 'Skills', 'Contact', 'Home'];

    for (const section of sequence) {
      await page.locator(`a[title="${section}"]`).click();
      await expect(page.locator(`#${section}`)).toBeVisible();
      await expect(page.locator(`#${section}`)).toHaveClass(/active/);
    }
  });

  test('should apply fadeIn animation to the active section', async ({ page }) => {
    await page.locator('a[title="About"]').click();
    const aboutSection = page.locator('#About');
    await expect(aboutSection).toHaveCSS('animation-name', 'fadeIn');
  });
});
