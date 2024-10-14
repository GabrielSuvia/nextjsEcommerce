describe('Products Page', () => {
    beforeEach(() => {
      // Visita la página de productos
      cy.visit('http://localhost:3000/pages/products');
    });
  
    it('should display the heading and product categories', () => {
      // Verifica que el título principal esté presente
      cy.contains('the best products of the markets').should('be.visible');
  
      // Verifica que las categorías de productos estén presentes
      cy.contains('Category of products').should('be.visible');
      cy.contains('All').should('be.visible');
      cy.contains('Celular').should('be.visible');
      cy.contains('Television').should('be.visible');
      cy.contains('Accesorios').should('be.visible');
    });
 
    it('should display all products when "All" category is clicked', () => {
      // Haz clic en la categoría "All"
      cy.contains('All').click();
  
      // Verifica que todos los productos se muestren
      cy.get('[data-testid="product-name"]').should('have.length', 7);
    });

    it('should filter products by "Celular" category', () => {
      // Haz clic en la categoría "Celular"
      cy.contains('Celular').click();
  
      // Verifica que solo los productos de la categoría "Celular" se muestren
      cy.get('[data-testid="product-name"]').should('have.length', 2);
      cy.get('[data-testid="product-name"]').each((item) => {
        cy.wrap(item).should('contain.text', 'celular');
      });
    });
   
    it('should filter products by "Television" category', () => {
      // Haz clic en la categoría "Television"
      cy.contains('Television').click();
  
      // Verifica que solo los productos de la categoría "Television" se muestren
      cy.get('[data-testid="product-name"]').should('have.length', 2);
      cy.get('[data-testid="product-name"]').each((item) => {
        cy.wrap(item).should('contain.text', 'television');
      });
    });

    it('should filter products by "Accesorios" category', () => {
      const listProd = ['teclado','mouse', 'monito']
      // Haz clic en la categoría "Accesorios"
      cy.contains('Accesorios').click();
  
      // Verifica que solo los productos de la categoría "Accesorios" se muestren
      cy.get('[data-testid="product-name"]').should('have.length', 3);
      
      cy.get('[data-testid="product-name"]').each((item,index) => {
        cy.wrap(item).should('contain.text', listProd[index]);
      });
    });
  });