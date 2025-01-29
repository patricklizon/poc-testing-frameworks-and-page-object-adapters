export interface TestAdapter<T> {
  getByTestId(selector: string): Promise<T>;
  findAllByTestId(selector: string): Promise<T[]>;
  getByText(selector: string): Promise<T>;
}
