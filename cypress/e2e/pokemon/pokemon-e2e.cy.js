/// <reference types="Cypress" />;

describe("Pokemon app testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });

  it("should display pokemon list", () => {
    cy.get("[data-test='pokemon-table-row']").should(
      "have.length.greaterThan",
      0
    );
  });

  it("should search/filter by name", () => {
    const searchInput = cy.get('[data-test="pokemon-search"]');

    searchInput.type("Bulbasaur");
    cy.get("[data-test='pokemon-table-row']").contains("Bulbasaur");

    searchInput.clear().type("Pikachu");
    cy.get("[data-test='pokemon-table-row']").contains("Pikachu");

    searchInput.clear().type("Charmander");
    cy.get("[data-test='pokemon-table-row']").contains("Charmander");
  });

  it("should display clicked pokemon details in sidenav", () => {
    let pokemonNameRow;
    let pokemonNameDetail;

    cy.get(':nth-child(1) > [data-test="pokemon-table-row"]')
      .click()
      .invoke("text")
      .then((pokemonName) => {
        pokemonNameRow = pokemonName;
      });

    cy.get('[data-test="pokemon-detail-name"]')
      .invoke("text")
      .then((pokemonNameDetail) => {
        expect(pokemonNameDetail.trim()).to.equal(pokemonNameRow.trim());
      });
  });

  it("should select pokemon favorite", () => {
    let pokemonNameDetail;

    cy.get(':nth-child(1) > [data-test="pokemon-table-row"]').click();

    cy.get('[data-test="select-favorite-btn"]').click();

    cy.get('[data-test="pokemon-detail-name"]')
      .invoke("text")
      .then((pokemonName) => {
        pokemonNameDetail = pokemonName;
      });

    cy.get(
      '.favorite-screen > app-pokemon-favorite > .mat-mdc-card > .mat-mdc-card-content > .favorite-container > [data-test="pokemon-favorite-name"]'
    )
      .invoke("text")
      .then((pokemonNameFavorite) =>
        expect(pokemonNameFavorite.trim()).to.equal(pokemonNameDetail.trim())
      );
  });

  it("should display favorite pokemon dialog", () => {
    let pokemonFavoriteName;
    cy.get(':nth-child(1) > [data-test="pokemon-table-row"]').click();

    cy.get('[data-test="select-favorite-btn"').click();
    cy.get(
      '.favorite-screen > app-pokemon-favorite > .mat-mdc-card > .mat-mdc-card-content > .favorite-container > [data-test="pokemon-favorite-name"]'
    )
      .click()
      .invoke("text")
      .then((pokemonName) => (pokemonFavoriteName = pokemonName));

    cy.get(
      'app-pokemon-favorite-dialog.ng-star-inserted > .container > .active > .custom-table > :nth-child(1) > [data-test="pokemon-dialog-name"]'
    )
      .invoke("text")
      .then((pokemonDialogName) =>
        expect(pokemonDialogName.trim()).to.equal(pokemonFavoriteName.trim())
      );
  });
});
