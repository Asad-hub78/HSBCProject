describe('HSBC India Navigation', () => {
  it('should hover over the Banking menu', () => {
    
   cy.visit('https://www.hsbc.co.in/');       
   cy.wait(2000);    
   cy.get('.header-main-navigation-title').contains('Banking').trigger('mouseover');
   cy.get('a').contains('Credit Cards').click({force: true});
   cy.url().should('include', '/credit-cards');
   cy.get('h1').contains('Credit cards').should('be.visible');
   cy.get('h3').contains('HSBC Cashback Credit Card').should('be.visible');
   cy.get('a').contains('HSBC Cashback Credit Card').click({force: true});
   cy.get('a#pp_intro_button_1').contains('Apply now').should('be.visible');   
   cy.url().should('include', 'credit-cards/products/visa-cashback');    
   cy.get('#pp_intro_image_3').should('be.visible');
   cy.get('#pp_tools_richtext_2').contains('INR999').should('be.visible');
   cy.get('#pp_tools_richtext_3').contains('INR999 (waived if you spend more than INR200,000 per year) ').should('be.visible');
   cy.get('img[src="https://www.hsbc.co.in/content/dam/hsbc/in/images/webchat/chat-button-en-pwsimg-2841.png"][alt="Chat"]').should('be.visible');   
   cy.get('[alt="HSBC India Bank"]').first().click();
   cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');      
   cy.screenshot('creditcard');
           
        });
});
