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
    test.skip("Testing Drop Down", async ({ page }) => {
        await page.goto('/dropdown');
        await page.locator('#dropdown').selectOption('1');
        await expect(page.locator('#dropdown')).toHaveValue('1');
        await page.locator('#dropdown').selectOption({ label: 'Option 2' });
        await expect(page.locator('#dropdown')).toHaveValue('2');
    })
    test.skip("Testing iFrames", async ({ page }) => {
        await page.goto('https://vinothqaacademy.com/iframe/');
        const frameTest = page.frameLocator('iframe[name=registeruser]');
        await frameTest.locator('#vfb-5').fill('Capt.');
        await frameTest.locator('#vfb-7').fill('MacTavish');
        await frameTest.locator('#vfb-31-1').check();
        await frameTest.locator('#vfb-20-0').check();
        await frameTest.locator('#vfb-20-1').check();
        await frameTest.locator('#vfb-20-3').uncheck();
        await frameTest.locator('#vfb-20-4').check();
        await frameTest.locator('#vfb-13-address').fill('69');
        await frameTest.locator('#vfb-13-address-2').fill('1');
        await frameTest.locator('#vfb-13-city').fill('Herefordshire');
        await frameTest.locator('#vfb-13-state').fill('Herefordshire');
        await frameTest.locator('#vfb-13-zip').fill('141');
        await frameTest.locator('[aria-controls="select2-vfb-13-country-container"]').click();
        await frameTest.locator('.select2-search__field').fill('Bangladesh');
        await frameTest.locator('li.select2-results__option', { hasText: 'Bangladesh' }).first().click();
        await frameTest.locator('#vfb-14').fill('capt.mactavish@sas.uk');
        await frameTest.locator('#vfb-18').fill('05/26/26');
        await frameTest.locator('[aria-labelledby="select2-vfb-16-hour-container"]').click();
        await frameTest.locator('li.select2-results__option', { hasText: '05' }).click();
        await frameTest.locator('#vfb-19').fill('01585897854');
        await frameTest.locator('#vfb-23').fill('Test');
        const exampleLabel = await frameTest.locator('text=/Example:\\s*\\d+/').textContent();
        const match = exampleLabel.match(/\d+/);
        const value = match ? match[0] : '33';
        await frameTest.locator('#vfb-3').fill(value);
        await frameTest.locator('#vfb-4').click();
    })
    test.skip("Testing Downloads", async ({ page }) => {
        await page.goto('/download');

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('text=random_data.txt').click(),
        ]);
        const path = await download.path();
        const url = download.url();
        console.log(path);
        console.log(url);
    });
    test.skip("Testing Uploads", async ({ page }) => {
        await page.goto('/upload');
        // await page.setInputFiles('#file-upload', 'Folder/sample.pdf');
        // await page.locator('#file-submit').click();
        // await expect(page.locator('text=File Uploaded!')).toBeVisible();
        // await expect(page.locator('text=sample.pdf')).toBeVisible();
        const [fileChooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            page.locator('#file-upload').click(),
        ]);
        await fileChooser.setFiles('Folder/sample.pdf');
        await page.locator('#file-submit').click();
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
        await expect(page.locator('text=sample.pdf')).toBeVisible();

    });
    test.skip("Generate PDF", async ({ page }) => {
        console.log('PDF Generation Tested.');
    });
    test("Testing Hovering", async ({ page }) => {
        await page.goto('/hovers');
        await page.locator('.figure').nth(0).hover();
        await expect(page.locator('.figure').nth(0).locator('h5')).toHaveText('name: user1');
        await page.locator('.figure').nth(0).locator('text=View profile').click();
        await page.goBack();
        await page.locator('.figure').nth(1).hover();
        await expect(page.locator('.figure').nth(1).locator('h5')).toHaveText('name: user2');
        await page.locator('.figure').nth(1).locator('text=View profile').click();
        await page.goBack();
        await page.locator('.figure').nth(2).hover();
        await expect(page.locator('.figure').nth(2).locator('h5')).toHaveText('name: user3');
        await page.locator('.figure').nth(2).locator('text=View profile').click();
    });
})