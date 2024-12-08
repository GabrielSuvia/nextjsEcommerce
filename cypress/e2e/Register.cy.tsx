describe('Register', () => {
  it('put the value in the input ', () => {
    cy.visit('http://localhost:3000/pages/register')
    //show the input
    cy.get('input[id="email"]').type('testuser@example.com')
    cy.get('input[id="name"]').type('jose123')
    cy.get('input[id="password"]').type('355829212')
    cy.get('input[id="confirPassword"]').type('355829212')
    cy.get('input[id="address"]').type('doble via la guardia')
    cy.get('input[id="phone"]').type('3558292929')
    cy.get('input[id="country"]').type('thebestplace')
    cy.get('input[id="city"]').type('thebestcity')
  })
  it('verify the button and the signin',()=>{
    cy.visit('http://localhost:3000/pages/register')
    cy.get('button#btn').click()
    cy.get('a[id="link"]').click()
  })
})