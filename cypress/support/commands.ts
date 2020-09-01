Cypress.Commands.add('getByTestId', (label: string) => cy.get(`[data-testid="${label}"]`));

Cypress.Commands.add('findByTestId', { prevSubject: ['element'] }, (subject, label) =>
  subject.find(`[data-testid="${label}"]`)
);
