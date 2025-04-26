/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    fillCreditCardNumber(
      first: string,
      second: string,
      third: string,
      fourth: string
    ): Chainable<Element>;
  }
}

Cypress.Commands.add(
  "fillCreditCardNumber",
  (first: string, second: string, third: string, fourth: string) => {
    cy.get("#card-number-first-input").type(first);
    cy.get("#card-number-second-input").type(second);
    cy.get("#card-number-third-input").type(third);
    cy.get("#card-number-fourth-input").type(fourth);
  }
);
