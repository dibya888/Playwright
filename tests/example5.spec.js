const { test, expect } = require('@playwright/test');

test.describe("Different Tests", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
    })

    test.skip("Testing Checkbox", async ({ page }) => {
        await page.goto('/checkboxes');
        await page.locator("input[type='checkbox']").first().check();
        await page.locator("input[type='checkbox']").last().uncheck();
    })
    test.skip("Testing Drag & Drop", async ({ page }) => {
        await page.goto('/drag_and_drop');
        await page.dragAndDrop('#column-a', '#column-b');
        await page.dragAndDrop('#column-b', '#column-a');
    })
    test("Testing Drop Down", async ({ page }) => {
        await page.goto('/dropdown');
        await page.locator('#dropdown').selectOption('1');
        await expect(page.locator('#dropdown')).toHaveValue('1');
        await page.locator('#dropdown').selectOption({ label: 'Option 2' });
        await expect(page.locator('#dropdown')).toHaveValue('2');
    })
})