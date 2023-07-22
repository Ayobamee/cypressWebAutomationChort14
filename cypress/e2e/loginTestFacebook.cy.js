/// <reference types= "cypress" />

describe("This test is to validate login scenarios into the facebook app", () => {
  it("Verify that a user with an incorrect credential cannot login into the app", () => {
    //cypress is visiting the facebook url
    cy.visit("https://web.facebook.com/?_rdc=1&_rdr");
    //cypress fetches the d.o.m element for the facebook input email field
    cy.get('[data-testid="royal_email"]')
      //cypress types an invalid username in the facebook input field
      .type("quales@test.com");
    //cypress fetches the d.o.m element for the facebook input password field
    cy.get('[data-testid="royal_pass"]').type("quales111!");
    //cypress fetches the d.o.m element for the facebook login button
    cy.get('[data-testid="royal_login_button"]').click();
  });
});
