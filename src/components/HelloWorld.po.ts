import type { TestAdapter } from "@/lib/page-object/adapter.interface";

export class HelloWorldPageObject<T> {
  static defaultRootTid = "hello-world";
  private adapter: TestAdapter<T>;
  private rootId: string;

  constructor(adapter: TestAdapter<T>, tid?: string) {
    this.adapter = adapter;
    this.rootId = tid ?? HelloWorldPageObject.defaultRootTid
  }

  async root (): Promise<T> {
    return await this.adapter.getByTestId(this.rootId)
  }

  async getMessage(): Promise<T> {
    return await this.adapter.getByTestId(this.rootId + '.message');
  }

  async getCopy(): Promise<T> {
    return await this.adapter.getByTestId(this.rootId + '.copy');
  }

  async externalLinks(): Promise<T[]> {
    return await this.adapter.findAllByTestId(this.rootId + '.external-link');
  }
}
