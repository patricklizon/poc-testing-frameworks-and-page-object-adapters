import { test, expect, type Locator } from '@playwright/test';
import {HomeViewPageObject} from "../src/views/HomeView.po"
import {PlaywrightAdapter} from "../src/lib/page-object/adapter.playwright"

test('has title', async ({ page }) => {
  const po = new HomeViewPageObject<Locator>(new PlaywrightAdapter(page))

  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Vite App/);
  await expect(await po.getHelloWorldMessage()).toContainText('You did it!')
});

test('goes to different page', async ({ page }) => {
  const po = new HomeViewPageObject<Locator>(new PlaywrightAdapter(page))

  await page.goto('/');

  const link = await po.getNavigationLinkToAbout();
  const helloWorldMessage = await po.getHelloWorldMessage();

  await expect(helloWorldMessage).toBeInViewport()
  await expect(link).toBeInViewport()

  // Click the get started link.
  await link.click()

  await page.waitForURL('/about')

  await expect(link).toBeInViewport()
  await expect(helloWorldMessage).not.toBeInViewport()
});
