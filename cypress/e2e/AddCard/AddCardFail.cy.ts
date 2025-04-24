/// <reference types="cypress" />

describe("Addcard Fail Flow", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("should stop user to being add card if one field is invalid", () => {
    cy.get("#card-number-first-input").type("1234");
    cy.get("#card-number-second-input").type("5678");
    cy.get("#card-number-third-input").type("9012");
    cy.get("#card-number-fourth-input").type("3456");

    cy.get("select").select("BC카드");

    cy.get("#expire-MM-input").type("12");
    cy.get("#expire-YY-input").type("25");

    cy.get("#cvc-input").type("123");

    cy.get("#password-input").type("12");

    cy.get("button").contains("확인");
    cy.get("#password-input").clear();
    cy.get("#password-input").type("1");
    cy.get("button").should("not.exist");
  });
});
