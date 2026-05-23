const { test, expect } = require('@playwright/test');

test.describe("Example", () => {

  test("Testing Selectors", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
    await page.locator('#userName').type('Capt.MacTavish');
    await page.locator("[placeholder='name@example.com']").type('captmactavish@sas.com');
    await page.locator('//textarea[@placeholder="Current Address"]').type('Herefordshire, England');
    await page.locator('#permanentAddress').type('Herefordshire, England');
    await page.locator('button:has-text("Submit")').click();


    const name = page.locator('#name');
    const email = page.locator('#email');
    const currentAddress = page.locator('p#currentAddress');
    const permanentAddress = page.locator('p#permanentAddress');

    await expect(name).toBeVisible();
    await expect(name).toHaveText('Name:Capt.MacTavish');
    await expect(email).toBeVisible();
    await expect(email).toHaveText('Email:captmactavish@sas.com');
    await expect(currentAddress).toBeVisible();
    await expect(currentAddress).toHaveText('Current Address :Herefordshire, England');
    await expect(permanentAddress).toBeVisible();
    await expect(permanentAddress).toHaveText('Permananet Address :Herefordshire, England');

    await expect(page).toHaveTitle("demosite");
  })
})