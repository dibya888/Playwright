const { test, expect } = require('@playwright/test');

test.describe("Authentication", () => {

    test.use({
        storageState: 'auth/automationauthdemo.json'
    })

    test.beforeEach(async ({ page }) => {
        await page.pause();
        await page.goto('https://parabank.parasoft.com/');
    })

    test.skip("saving Authentication", async ({ page }) => {
        await page.pause();
        await page.goto('https://parabank.parasoft.com/');
        await page.locator('input[name="username"]').click();
        await page.locator('input[name="username"]').fill('automationauthdemo');
        await page.locator('input[name="password"]').click();
        await page.locator('input[name="password"]').fill('admin');
        await page.getByRole('button', { name: 'Log In' }).click();
        await page.context().storageState({ path: 'auth/automationauthdemo.json' })
    })

    test("Transfer Fund", async ({ page }) => {
        await page.getByRole('link', { name: 'Transfer Funds' }).click();
        await page.locator('#amount').click();
        await page.locator('#amount').fill('100');
        await page.getByRole('button', { name: 'Transfer' }).click();
    })

    test("Update Contact Info", async ({ page }) => {
        await page.getByRole('link', { name: 'Update Contact Info' }).click();
        await page.locator('[id="customer.firstName"]').click();
        await page.locator('[id="customer.firstName"]').fill('Demo Test');
        await page.locator('[id="customer.lastName"]').click();
        await page.locator('[id="customer.lastName"]').fill('Demo Test');
        await page.locator('[id="customer.address.street"]').click();
        await page.locator('[id="customer.address.street"]').fill('Demo Test');
        await page.locator('[id="customer.address.city"]').click();
        await page.locator('[id="customer.address.city"]').fill('Demo Test');
        await page.locator('[id="customer.address.state"]').click();
        await page.locator('[id="customer.address.state"]').fill('Demo Test');
        await page.locator('[id="customer.address.zipCode"]').click();
        await page.locator('[id="customer.address.zipCode"]').fill('Demo Test');
        await page.locator('[id="customer.phoneNumber"]').click();
        await page.locator('[id="customer.phoneNumber"]').fill('Demo Test');
        await page.getByRole('button', { name: 'Update Profile' }).click();
    })
})