import { AppPageObject } from "@/App.po";
import { TheWelcomePo } from "@/components/TheWelcome.po";
import type { TestAdapter } from "@/lib/page-object/adapter.interface";

export class HomeViewPageObject<T> {
  static defaultRootTid = "home-page";
  static welcomeTid = "welcome";
  private adapter: TestAdapter<T>;
  private rootId: string;

  private appPo: AppPageObject<T>;
  private welcomePo: TheWelcomePo<T>;

  constructor(adapter: TestAdapter<T>, tid?: string) {
    this.adapter = adapter;
    this.rootId = tid ?? HomeViewPageObject.defaultRootTid
    this.appPo = new AppPageObject(adapter);
    this.welcomePo = new TheWelcomePo(adapter, 'welcome');
  }

  async root (): Promise<T> {
    return await this.adapter.getByTestId(this.rootId)
  }

  async getHelloWorldMessage(): Promise<T> {
    return this.welcomePo.getHelloWorldMessage()
  }

  async getOtherHelloWorldMessage(): Promise<T> {
    return this.welcomePo.getOtherHelloWorldMessage()
  }

  async getNavigationLinkToAbout(): Promise<T> {
    return await this.appPo.getNavigationLinkToAbout();
  }
}
