/// <reference types= "cypress" />

describe("This test is to validate login scenarios into the quales app", () => {
  it("Verify user with correct correct credentials can login to the app", () => {
    //cypress visits quales academy url
    cy.visit("https://academy.quales.tech/login");
    //cypress fetches the username/email address field
    cy.get('[data-testid="EmailAddress"]')
      //cypress types an email character in the username/email field
      .type("ay@mail.com");
    //cypress fetches the password field
    cy.get('[data-testid="Password"]')
      //cypress types a password character in the password field
      .type("pass1234");
    //cypress fetches the login field
    cy.get(".MuiButton-contained")
      //cypress clicks the login button
      .click();

    //cypress fetches the 'login successful' text
    cy.contains("Login Successful")
      //cypress confirms that the 'login successful' text is visible
      .should("be.visible");

    cy.contains("Add Course").click();
    cy.viewport("macbook-16");
    cy.get('[data-testid="Title*"]').type("Cypress course");
    cy.get('[data-testid="Description*"]').type("This is a cypress assignment");
    cy.get(".MuiContainer-maxWidthXl").click();
    cy.get('[data-value="1"]').click();
    cy.get('[data-testid="offline"]').click();
    cy.get('[data-testid="Address*"]').type("Quales address");
    cy.contains("Add Course").click();
    cy.contains("Course created successfully").should("be.visible");
  });
});
