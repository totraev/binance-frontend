/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByTestId(label: string): Chainable<any>;
    findByTestId(label: string): Chainable<any>;
  }
}
