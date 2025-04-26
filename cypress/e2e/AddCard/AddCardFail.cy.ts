/// <reference types="cypress" />

describe("Addcard Fail Flow", () => {
  beforeEach(() => {
    cy.visit("localhost:5173/react-payments");
  });

  it("하나라도 invalid한 인풋이 있으면 유저가 카드 등록을 할수 없게 해야한다.", () => {
    cy.fillCreditCardNumber("1234", "5678", "9012", "3456");
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
