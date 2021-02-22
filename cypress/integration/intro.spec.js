describe('Intro', () => {
  beforeEach(() => {
    cy.request('GET', '/api/todos');
  });
  it('Visits successfully', () => {
    cy.visit('/');
  });
});
