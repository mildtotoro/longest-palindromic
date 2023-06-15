import React from "react";
import { Palindrome } from "./Palindrome";

describe("<Palindrome />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Palindrome />);
  });

  it("correct length", () => {
    cy.mount(<Palindrome />);
    cy.get("textarea").type("redder");
    cy.get('[data-test-id="input-length"]').should("contain", "6/1000");
    cy.get('[data-test-id="submit-button"]').click();
    cy.get('[data-test-id="ans-box"]').should("contain", "redder");
  });
});
