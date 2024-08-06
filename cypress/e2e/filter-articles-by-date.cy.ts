describe("filter articles", () => {
  it("should be able to filter articles", () => {
    cy.visit("/");
    cy.viewport(1440, 900);

    cy.contains("News Agregator").should("exist");

    cy.get("button").contains("Filter By").click();

    cy.get("span").contains("Date").should("exist");

    cy.get("button").contains("Filter By").click();
    cy.get("span").contains("Date").should("not.exist");
  });
});
