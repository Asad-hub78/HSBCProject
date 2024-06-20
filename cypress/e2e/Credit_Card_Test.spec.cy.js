describe('Credit Card', () => {
  it('Credit Card Test', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.wait(500);
    cy.get('div.header-mobile-doormat-0.header-doormat-mobile-title.sidebar-submenu-trigger>span:nth-of-type(2)').click({force: true,multiple: true});
  cy.wait(1000);
cy.get('a.doormat-heading-link h2.doormat-heading').click({multiple:true,force:true});

cy.get('h1').should('be.visible');
cy.wait(1000);
cy.scrollTo(0, 700);
cy.get('h3#chp_main_link_2>a').click({force:true});
})
})
