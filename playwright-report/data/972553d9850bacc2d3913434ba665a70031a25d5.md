# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example4.spec.js >> Authentication >> Update Contact Info
- Location: tests\example4.spec.js:32:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('[id="customer.firstName"]')
    - waiting for" https://parabank.parasoft.com/parabank/updateprofile.htm" navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/updateprofile.htm"
    - waiting for" https://parabank.parasoft.com/parabank/findtrans.htm" navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/findtrans.htm"
    - waiting for" https://parabank.parasoft.com/parabank/transfer.htm" navigation to finish...
    - navigated to "https://parabank.parasoft.com/parabank/transfer.htm"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe("Authentication", () => {
  4  | 
  5  |     test.use({
  6  |         storageState: 'auth/automationauthdemo.json'
  7  |     })
  8  | 
  9  |     test.beforeEach(async ({ page }) => {
  10 |         await page.pause();
  11 |         await page.goto('https://parabank.parasoft.com/');
  12 |     })
  13 | 
  14 |     test.skip("saving Authentication", async ({ page }) => {
  15 |         await page.pause();
  16 |         await page.goto('https://parabank.parasoft.com/');
  17 |         await page.locator('input[name="username"]').click();
  18 |         await page.locator('input[name="username"]').fill('automationauthdemo');
  19 |         await page.locator('input[name="password"]').click();
  20 |         await page.locator('input[name="password"]').fill('admin');
  21 |         await page.getByRole('button', { name: 'Log In' }).click();
  22 |         await page.context().storageState({ path: 'auth/automationauthdemo.json' })
  23 |     })
  24 | 
  25 |     test("Transfer Fund", async ({ page }) => {
  26 |         await page.getByRole('link', { name: 'Transfer Funds' }).click();
  27 |         await page.locator('#amount').click();
  28 |         await page.locator('#amount').fill('100');
  29 |         await page.getByRole('button', { name: 'Transfer' }).click();
  30 |     })
  31 | 
  32 |     test("Update Contact Info", async ({ page }) => {
  33 |         await page.getByRole('link', { name: 'Update Contact Info' }).click();
> 34 |         await page.locator('[id="customer.firstName"]').click();
     |                                                         ^ Error: locator.click: Target page, context or browser has been closed
  35 |         await page.locator('[id="customer.firstName"]').fill('Demo Test');
  36 |         await page.locator('[id="customer.lastName"]').click();
  37 |         await page.locator('[id="customer.lastName"]').fill('Demo Test');
  38 |         await page.locator('[id="customer.address.street"]').click();
  39 |         await page.locator('[id="customer.address.street"]').fill('Demo Test');
  40 |         await page.locator('[id="customer.address.city"]').click();
  41 |         await page.locator('[id="customer.address.city"]').fill('Demo Test');
  42 |         await page.locator('[id="customer.address.state"]').click();
  43 |         await page.locator('[id="customer.address.state"]').fill('Demo Test');
  44 |         await page.locator('[id="customer.address.zipCode"]').click();
  45 |         await page.locator('[id="customer.address.zipCode"]').fill('Demo Test');
  46 |         await page.locator('[id="customer.phoneNumber"]').click();
  47 |         await page.locator('[id="customer.phoneNumber"]').fill('Demo Test');
  48 |         await page.getByRole('button', { name: 'Update Profile' }).click();
  49 |     })
  50 | })
```