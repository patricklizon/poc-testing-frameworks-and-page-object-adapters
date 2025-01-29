import type { TestAdapter } from "@/lib/page-object/adapter.interface";

export class AppPageObject<T> {
  static defaultRootTid = "app";
  private adapter: TestAdapter<T>;
  private rootId: string;

  constructor(adapter: TestAdapter<T>) {
    this.adapter = adapter;
    this.rootId = AppPageObject.defaultRootTid
  }

  async getNavigationLinkToHome(): Promise<T> {
    return await this.adapter.getByTestId(this.rootId + '.navigation.home');
  }

  async getNavigationLinkToAbout(): Promise<T> {
    return await this.adapter.getByTestId(this.rootId + '.navigation.about');
  }
}
