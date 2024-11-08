/// <reference types="cypress"/> 
//no necesary
describe('Login',()=>{

    it('placing the value in input',()=>{
      cy.visit('http://localhost:3000/pages/login')
      //cy.get('a[id="signup"]').click()
      cy.get('input[id="email"]').type('thebestIntheWorld@hotmail.com')
      cy.get('input[id="password"]').type('123456123')
      cy.get('[data-testid="login-auth"]').should('be.visible')
      cy.get('form').submit();

    })

  
    it('click on link signup',()=>{
        cy.visit('http://localhost:3000/pages/login')
        cy.get('button#btn1').click()
        cy.get('a[id="link"]').click()
    })
})