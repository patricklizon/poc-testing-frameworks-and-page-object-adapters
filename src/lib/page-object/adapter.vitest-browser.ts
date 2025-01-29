import type {Locator} from "@vitest/browser/context"
import { render } from 'vitest-browser-vue';
import { type TestAdapter } from './adapter.interface';


export class VitestBrowserAdapter implements TestAdapter<Locator> {
  constructor (private screen: ReturnType<typeof render>) {}

  async getByTestId(selector: string): Promise<Locator> {
    return Promise.resolve(this.screen.getByTestId(selector).first());
  }

  async findAllByTestId(selector: string): Promise<Locator[]> {
    return Promise.resolve(this.screen.getByTestId(selector).all());
  }

  async getByText(selector: string): Promise<Locator> {
    return Promise.resolve(this.screen.getByText(selector).first());
  }
}
