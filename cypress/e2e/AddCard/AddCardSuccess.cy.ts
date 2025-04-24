/// <reference types="cypress" />

describe("Addcard Success Flow", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("should complete the entire card registration flow", () => {
    cy.get("#card-number-first-input").type("1234");
    cy.get("#card-number-second-input").type("5678");
    cy.get("#card-number-third-input").type("9012");
    cy.get("#card-number-fourth-input").type("3456");

    cy.get('[class*="_cardNumber_"]> :nth-child(1)').contains("1234");
    cy.get('[class*="_cardNumber_"]> :nth-child(2)').contains("5678");

    cy.get("select").select("BC카드");
    cy.get('[class*="_previewCard_"]').should(
      "have.css",
      "background-color",
      "rgb(240, 70, 81)"
    );
    cy.get("#expire-MM-input").type("12");
    cy.get("#expire-YY-input").type("25");
    cy.get('[class*="_expire_"]> :nth-child(1)').contains("12");
    cy.get('[class*="_expire_"]> :nth-child(3)').contains("25");

    cy.get("#cvc-input").type("123");

    cy.get("#password-input").type("12");

    cy.get("button").contains("확인").click();

    cy.contains("1234로 시작하는");
    cy.contains("BC카드가 등록되었어요!");
  });
});
