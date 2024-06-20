describe('Login Scnerio', () => {
  it('Login Scnerio Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.wait(1000);
    cy.get('h1').should('be.visible');
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.wait(1000)
    cy.get('[aria-label="Log on options"]>a.selected-item.login-button.only-one-link').click({force: true});
    
    cy.wait(1000)
    cy.get('[aria-label="Continue to page"]').click();
    
    cy.get('div.col-sm-12.userHeading>h2.pull-left.heading.t28l>span').contains('Log On');
   
    cy.get('#username').type('abc@example.com');
   cy.get('#username_submit_btn').should('be visible');
   cy.get('.icon.icon-circle-help-solid.help-icon').click();
    
  })
})