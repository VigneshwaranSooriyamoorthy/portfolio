import { test, expect } from '@playwright/test';

test.describe('Skills Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
    await page.locator('a[title="Skills"]').click();
    await expect(page.locator('#Skills')).toBeVisible();
  });

  test('should display the "Technical Skills" header', async ({ page }) => {
    await expect(page.locator('.header-part-1')).toContainText('Technical');
    await expect(page.locator('.header-part-2')).toContainText('Skills');
  });

  test('should display 3 skill columns', async ({ page }) => {
    const columns = page.locator('.content-container > .column');
    await expect(columns).toHaveCount(3);
  });

  test('should display Automation Tools category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("Automation Tools")');
    await expect(header).toBeVisible();
  });

  test('should display all automation tools', async ({ page }) => {
    const tools = ['PlayWright', 'Cypress', 'Selenium Webdriver', 'UiPath', 'UFT', 'VBA - Macro'];
    for (const tool of tools) {
      await expect(page.locator(`.skill-name:has-text("${tool}")`)).toBeVisible();
    }
  });

  test('should display Testing Framework category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("Testing Framework")');
    await expect(header).toBeVisible();
  });

  test('should display all testing frameworks', async ({ page }) => {
    const tools = ['Cucumber', 'NUnit', 'PyTest', 'TestNG'];
    for (const tool of tools) {
      await expect(page.locator(`.skill-name:has-text("${tool}")`)).toBeVisible();
    }
  });

  test('should display Version Control category with Git', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("Version Control")');
    await expect(header).toBeVisible();
    await expect(page.locator('.skill-name:has-text("Git")')).toBeVisible();
  });

  test('should display Language category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("Language")');
    await expect(header).toBeVisible();
  });

  test('should display all programming languages', async ({ page }) => {
    const tools = ['JavaScript', 'TypeScript', 'Java', 'Python', '.Net C#'];
    for (const tool of tools) {
      await expect(page.locator(`.skill-name:has-text("${tool}")`)).toBeVisible();
    }
  });

  test('should display API Automation Testing category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("API Automation Testing")');
    await expect(header).toBeVisible();
    await expect(page.locator('.skill-name:has-text("Karate")')).toBeVisible();
    await expect(page.locator('.skill-name:has-text("RestSharp")')).toBeVisible();
  });

  test('should display IDE category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("IDE")');
    await expect(header).toBeVisible();

    const ides = ['IntelliJ', 'VS Code', 'Visual Studio'];
    for (const ide of ides) {
      await expect(page.locator(`.skill-name:has-text("${ide}")`)).toBeVisible();
    }
  });

  test('should display Database category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("Database")');
    await expect(header).toBeVisible();
    await expect(page.locator('.skill-name:has-text("Microsoft SQL Server")')).toBeVisible();
    await expect(page.locator('.skill-name:has-text("MongoDB")')).toBeVisible();
  });

  test('should display CI-CD category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("CI-CD")');
    await expect(header).toBeVisible();
    await expect(page.locator('.skill-name:has-text("Atlassian Bamboo")')).toBeVisible();
  });

  test('should display Project Management category', async ({ page }) => {
    const header = page.locator('.detail-header:has-text("Project Management")');
    await expect(header).toBeVisible();

    const tools = ['Atlassian Jira', 'ALM'];
    for (const tool of tools) {
      await expect(page.locator(`.skill-name:has-text("${tool}")`)).toBeVisible();
    }
  });

  test('should render progress bars for each skill', async ({ page }) => {
    const progressBars = page.locator('.progress-bar-fill');
    const count = await progressBars.count();
    expect(count).toBeGreaterThan(0);

    // Verify progress bars have width styles set
    for (let i = 0; i < count; i++) {
      const style = await progressBars.nth(i).getAttribute('style');
      expect(style).toContain('width:');
    }
  });

  test('should have exactly 9 skill area categories', async ({ page }) => {
    const skillAreas = page.locator('.skill-area');
    await expect(skillAreas).toHaveCount(9);
  });
});
