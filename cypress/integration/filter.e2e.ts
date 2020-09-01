/// <reference types="../support" />

context('Filter', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('/');
    cy.route(
      'GET',
      '/exchange-api/v1/public/asset-service/product/get-products',
      'fixture:products.json'
    ).as('getProducts');
    cy.wait('@getProducts');
  });

  it('should load products', () => {
    cy.getByTestId('productItem').its('length').should('be.eq', 20);
  });

  it('should filter product list', () => {
    cy.getByTestId('searchInput').type('ADA');

    cy.getByTestId('productItem').its('length').should('be.eq', 8);
  });

  it('should check that filter works properly', () => {
    cy.getByTestId('searchInput').type('ADA');

    cy.getByTestId('productItem')
      .findByTestId('baseAsset')
      .each((el) => {
        cy.wrap(el).invoke('text').should('match', /ADA/);
      });
  });
});
