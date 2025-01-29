import { type Page, type Locator } from '@playwright/test';
import { type TestAdapter } from './adapter.interface';


export class PlaywrightAdapter implements TestAdapter<Locator> {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getByTestId(selector: string): Promise<Locator> {
    return this.page.getByTestId(selector);
  }

  async findAllByTestId(selector: string): Promise<Locator[]> {
    return this.page.locator(`[data-testid="${selector}"]`).all();
  }

  async getByText(selector: string): Promise<Locator> {
    return this.getByTestId(selector);
  }
}
