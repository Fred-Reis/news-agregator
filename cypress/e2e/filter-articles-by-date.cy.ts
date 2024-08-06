describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.viewport(1440, 900);

    cy.contains("News Agregator").should("exist");

    cy.get("button").contains("Filter By").click();

    cy.get("span").contains("Date").should("exist");

    cy.get("button").contains("Filter By").click();
    cy.get("span").contains("Date").should("not.exist");

    cy.get('input[name="search"]').type("nba");
    cy.get('button[type="submit"]').click();

    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/search/v2/articlesearch.json*"
    ).as("matchedUrl");
    cy.intercept("GET", "https://newsapi.ai/api/v1/article/getArticles*").as(
      "matchedUrl"
    );
    cy.intercept("GET", "https://newsapi.org/v2/everything*").as("matchedUrl");
  });
});
