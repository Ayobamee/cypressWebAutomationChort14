/// <reference types= "cypress" />

describe("This test is to validate that user can search on google", () => {
  it("Ensure that the google logo is visible", () => {
    cy.visit("https://www.google.com/");
    cy.get(".lnXdpd").should("be.visible");
  });

  it("Search for 'Quales' on google using the enter key", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("Quales Consulting{enter}");
    cy.get(
      "#rso > :nth-child(1) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .TbwUpd"
    ).should("be.visible");
  });

  it("Search for 'Quales' on google using the google search button", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("Quales Consulting");
    cy.get(".FPdoLc > center > .gNO89b").click();
    cy.get(
      "#rso > :nth-child(1) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .TbwUpd"
    ).should("be.visible");
  });
});
