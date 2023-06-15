describe("template palidrome page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get("textarea").type("redder");
    cy.get('[data-test-id="input-length"]').should("contain", "6/1000");
    cy.get('[data-test-id="submit-button"]').click();
    cy.get('[data-test-id="ans-box"]').should("contain", "redder");
  });
});
