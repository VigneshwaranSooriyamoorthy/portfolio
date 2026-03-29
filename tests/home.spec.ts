import { test, expect } from '@playwright/test';

test.describe('Home Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
  });

  test('should display the home section by default', async ({ page }) => {
    const homeSection = page.locator('#Home');
    await expect(homeSection).toBeVisible();
    await expect(homeSection).toHaveClass(/active/);
  });

  test('should display first name on the home page', async ({ page }) => {
    const firstName = page.locator('.first-name');
    await expect(firstName).toBeVisible();
    await expect(firstName).toHaveText('Vigneshwaran');
  });

  test('should display last name on the home page', async ({ page }) => {
    const lastName = page.locator('.last-name');
    await expect(lastName).toBeVisible();
    await expect(lastName).toHaveText('Sooriyamoorthy');
  });

  test('should display the role description', async ({ page }) => {
    const role = page.locator('.role');
    await expect(role).toBeVisible();
    await expect(role).toContainText('Quality Assurance Engineer');
  });

  test('should have a working link to LinkedIn', async ({ page }) => {
    const linkedinLink = page.getByRole('link', { name: 'LinkedIn' });
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/vigneshwaransooriyamoorthy/');
  });

  test('should have a working link to GitHub', async ({ page }) => {
    const githubLink = page.getByRole('link', { name: 'GitHub' });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/VigneshwaranSooriyamoorthy');
  });

  test('should have a working link to HackerRank', async ({ page }) => {
    const hackerrankLink = page.getByRole('link', { name: 'HackerRank' });
    await expect(hackerrankLink).toBeVisible();
    await expect(hackerrankLink).toHaveAttribute('target', '_blank');
    await expect(hackerrankLink).toHaveAttribute('href', 'https://www.hackerrank.com/VigneshwaranS7');
  });

  test('should have a working link to Credly Acclaim', async ({ page }) => {
    const credlyLink = page.getByRole('link', { name: 'Credly Acclaim' });
    await expect(credlyLink).toBeVisible();
    await expect(credlyLink).toHaveAttribute('target', '_blank');
    await expect(credlyLink).toHaveAttribute('href', 'https://www.youracclaim.com/users/vigneshwaran-sooriyamoorthy');
  });

  test('should display exactly 4 social link icons', async ({ page }) => {
    const socialLinks = page.locator('.apps .app');
    await expect(socialLinks).toHaveCount(4);
  });

  test('should have SVG icons with accessible titles for each social link', async ({ page }) => {
    const expectedTitles = ['LinkedIn', 'GitHub', 'HackerRank', 'Credly Acclaim'];
    for (const title of expectedTitles) {
      const svgTitle = page.locator(`.apps svg title:has-text("${title}")`);
      await expect(svgTitle).toBeAttached();
    }
  });

  test('should have a resume link', async ({ page }) => {
    const resumeLink = page.locator('a.resume');
    await expect(resumeLink).toBeVisible();
    await expect(resumeLink).toHaveAttribute('href', /1drv.ms/);
  });

  test('should open resume link in a new tab', async ({ page }) => {
    const resumeLink = page.locator('a.resume');
    await expect(resumeLink).toHaveAttribute('target', '_blank');
  });

  test('should display "View CV" text on the resume button', async ({ page }) => {
    const resumeLink = page.locator('a.resume');
    await expect(resumeLink).toContainText('View CV');
  });

  test('should display the resume icon', async ({ page }) => {
    const resumeIcon = page.locator('#resume-icon');
    await expect(resumeIcon).toBeVisible();
    await expect(resumeIcon).toHaveAttribute('title', 'View Resume');
  });

  test('should display the report iframe', async ({ page }) => {
    const reportSection = page.locator('.report iframe');
    await expect(reportSection).toBeAttached();
    await expect(reportSection).toHaveAttribute('src', 'report.html');
  });
});
