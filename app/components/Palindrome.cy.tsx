import React from "react";
import { Palindrome, maxLength } from "./Palindrome";

describe("<Palindrome />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Palindrome />);
  });

  it("should show length", () => {
    cy.mount(<Palindrome />);
    cy.get("textarea").type("redder");
    cy.get('[data-test-id="input-length"]').should("contain", "6/1000");
    cy.get('[data-test-id="submit-button"]').click();
    cy.get('[data-test-id="ans-box"]').should("contain", "redder");
  });

  it("should show length error", () => {
    cy.mount(<Palindrome />);
    const inputValue = Array(1001).fill("a").join("");
    cy.get("textarea").type(inputValue, {
      delay: 1,
    });
    cy.get('[data-test-id="input-length"]').should("contain", "1001/1000");
    cy.get('[data-test-id="submit-button"]').click();
    cy.get('[data-test-id="error-box"]').should(
      "contain",
      `Please input text length not more than ${maxLength}`
    );
  });
});
