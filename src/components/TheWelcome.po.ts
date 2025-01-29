import type { TestAdapter } from "../lib/page-object/adapter.interface";
import { HelloWorldPageObject } from "./HelloWorld.po";

export class TheWelcomePo<T> {
  static defaultRootId = "the-welcome";
  private rootId: string;
  private adapter: TestAdapter<T>;
  private helloWorldPo: HelloWorldPageObject<T>;
  private otherHelloWorld: HelloWorldPageObject<T>;

  constructor(adapter: TestAdapter<T>, rootId?: string) {
    this.rootId = rootId ?? TheWelcomePo.defaultRootId;
    this.adapter = adapter;
    this.helloWorldPo = new HelloWorldPageObject(adapter);
    this.otherHelloWorld = new HelloWorldPageObject(adapter,'the-other-hello-world');
  }

  async root(): Promise<T> {
    return await this.adapter.getByTestId(this.rootId);
  }

  async getHelloWorldMessage(): Promise<T> {
   return this.helloWorldPo.getMessage()
  }

  async getOtherHelloWorldMessage(): Promise<T> {
   return this.otherHelloWorld.getMessage()
  }

  async getTooling(): Promise<T> {
    return this.adapter.getByTestId(this.rootId + '.tooling');
  }

  async getEcosystem(): Promise<T> {
    return this.adapter.getByTestId(this.rootId + '.ecosystem');
  }

  async getSupport(): Promise<T> {
    return this.adapter.getByTestId(this.rootId + '.support');
  }

}
