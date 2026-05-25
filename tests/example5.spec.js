const { test, expect } = require('@playwright/test');

test.describe("Checkbox", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
    })

    test("Testing Checkbox", async ({ page }) => {
        await page.goto('/checkboxes');
        await page.locator("input[type='checkbox']").first().check();
        await page.locator("input[type='checkbox']").last().uncheck();
    })
})