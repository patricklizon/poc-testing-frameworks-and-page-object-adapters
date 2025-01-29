import { screen as _screen } from '@testing-library/vue';
import { type TestAdapter } from './adapter.interface';


export class TestingLibraryAdapter implements TestAdapter<HTMLElement> {
  constructor (private screen: typeof _screen = _screen)  {}
  async getByTestId(selector: string): Promise<HTMLElement> {
    return Promise.resolve(this.screen.getByTestId(selector));
  }

  async findAllByTestId(selector: string): Promise<HTMLElement[]> {
    return this.screen.findAllByTestId(selector);
  }

  async getByText(selector: string): Promise<HTMLElement> {
    return (await this.getByText(selector));
  }
}
