/// <reference types="cypress" />

import { TestAdapter } from "./adapter.interface";

type TElement<T = HTMLElement> = Cypress.Chainable<JQuery<T>>;

export class CypressAdapter implements TestAdapter<TElement> {
  async getByTestId(selector: string): Promise<TElement> {
    return cy.get(`[data-testid="${selector}"]`);
  }

  async findAllByTestId(selector: string): Promise<TElement[]> {
    return cy.get(`[data-testid="${selector}"]`)
  }

  async getText(selector: string): Promise<TElement> {
    return this.getByTestId(selector)
  }
}
