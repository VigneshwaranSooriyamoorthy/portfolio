import { test, expect } from '@playwright/test';

test.describe('About Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio/');
    await page.locator('a[title="About"]').click();
    await expect(page.locator('#About')).toBeVisible();
  });

  test('should display the designation', async ({ page }) => {
    const designation = page.locator('.designation');
    await expect(designation).toBeVisible();
    await expect(designation).toHaveText('Senior Test/Integration Engineer');
  });

  test('should display the location', async ({ page }) => {
    const location = page.locator('.location');
    await expect(location).toBeVisible();
    await expect(location).toHaveText('Eindhoven, The Netherlands');
  });

  test('should display the about-me content with experience', async ({ page }) => {
    const aboutContent = page.locator('.about-me-content');
    await expect(aboutContent).toBeVisible();
    await expect(aboutContent).toContainText('Passionate Techno-Functional test engineer');

    const currentDate = new Date();
    const dateOfJoining = new Date('2015-06-26');
    const monthDiff = currentDate.getMonth() - dateOfJoining.getMonth();
    const yearDiff = currentDate.getFullYear() - dateOfJoining.getFullYear();
    let experience = '';
    if (monthDiff === 0) {
      experience = `${yearDiff} years`;
    } else if (monthDiff < 0) {
      experience = `${yearDiff - 1} years and ${12 + monthDiff} months`;
    } else {
      experience = `${yearDiff} years and ${monthDiff} months`;
    }
    await expect(aboutContent).toContainText(experience);
  });

  test('should display the Academic Profile section', async ({ page }) => {
    const academy = page.locator('.academy');
    await expect(academy).toBeVisible();
    await expect(academy).toContainText('Academic Profile');
  });

  test('should display the correct academic details', async ({ page }) => {
    const academy = page.locator('.academy');
    await expect(academy).toContainText('Bachelor of Engineering in Mechatronics');
    await expect(academy).toContainText('CGPA 9.2');
    await expect(academy).toContainText('SKCET');
  });

  test('should display Awards section with correct items', async ({ page }) => {
    const awardsSection = page.locator('.detail-section', { has: page.locator('.detail-header:has-text("Awards")') });
    await expect(awardsSection).toBeVisible();

    const awards = [
      'Pursuing Innovation | Mar 21',
      'Exception Client Service | Sep 20',
      'SPOT | Feb 20',
      'SPOT | Mar 19',
      'Pillar of the Month | Jul 17',
      'Olymation Gold Medal | Mar 17'
    ];

    for (const award of awards) {
      await expect(awardsSection.locator(`li:has-text("${award}")`)).toBeVisible();
    }
  });

  test('should display Languages section', async ({ page }) => {
    const languagesSection = page.locator('.detail-section', { has: page.locator('.detail-header:has-text("Languages")') });
    await expect(languagesSection).toBeVisible();
    await expect(languagesSection.locator('li:has-text("Tamil")')).toBeVisible();
    await expect(languagesSection.locator('li:has-text("English")')).toBeVisible();
  });

  test('should display Nationality section', async ({ page }) => {
    const nationalitySection = page.locator('.detail-section', { has: page.locator('.detail-header:has-text("Nationality")') });
    await expect(nationalitySection).toBeVisible();
    await expect(nationalitySection.locator('li:has-text("Indian")')).toBeVisible();
  });

  test('should display Hobbies section', async ({ page }) => {
    const hobbiesSection = page.locator('.detail-section', { has: page.locator('.detail-header:has-text("Hobbies")') });
    await expect(hobbiesSection).toBeVisible();

    const hobbies = ['Carom', 'Chess', 'Sudoku'];
    for (const hobby of hobbies) {
      await expect(hobbiesSection.locator(`li:has-text("${hobby}")`)).toBeVisible();
    }
  });

  test('should display exactly 4 detail sections', async ({ page }) => {
    const detailSections = page.locator('.detail-section');
    await expect(detailSections).toHaveCount(4);
  });
});
