describe('My First Test', () => {

  it('Visits the initial project page', () => {
  
    cy.visit('/');
    cy.contains('0');
    cy.get('input').click();
    cy.contains('1');
    cy.get('input').click();
    //que tenga 0
    // que de eventoclick
    //que cambie el contador a 1

  })

})
