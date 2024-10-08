// cypress/e2e/mycart.cy.tsx
import React from 'react';
import { MyCart } from '../../src/app/components/mycart'
import { userSett } from '@/context/loginContext';

// Crear un contexto simulado para el test
const mockUserSett = {
  cart: ['Product 1', 'Product 2', 'Product 3'],
  setCart: cy.stub(), // Usamos un stub para las actualizaciones de estado
};

// Mockeamos el contexto de usuario
cy.stub(userSett, 'setCart').returns(mockUserSett);

describe('MyCarts Component', () => {
  beforeEach(() => {
    // Montar el componente antes de cada prueba
    cy.mount(<MyCart />);
  });

  it('debe mostrar los productos del carrito', () => {
    // Verificar que los productos se renderizan correctamente
    cy.get('li').should('have.length', mockUserSett.cart.length);
  });

  it('debe eliminar un producto del carrito al hacer clic en delete', () => {
    // Simular clic en el botón de eliminar para el primer producto
    cy.get('button').contains('delete').first().click();

    // Verificar que el producto se elimina
    cy.get('li').should('have.length', mockUserSett.cart.length - 1);
  });

  it('debe abrir el modal al hacer clic en confirm purchase', () => {
    // Simular clic en el botón de confirm purchase
    cy.get('button').contains('confirm purchase').click();

    // Verificar que el modal se abre
    cy.get('[data-cy="modal"]').should('be.visible');
  });
});