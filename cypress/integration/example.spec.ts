describe('E2E Test', () => {
    it('should visit the home page', () => {
        cy.visit('http://localhost:3000'); // Cambia la URL según sea necesario
        cy.contains('Welcome'); // Verifica que haya un texto específico
    });
});