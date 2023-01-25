/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar produtos da lista', () => {
        cy.get('[class="product-block grid"]').eq(3).click()
    });

    it.only('Deve adicionar um produtos da lista ao carrinho', () => {
        var quantity = 10
        const productName = 'Abominable Hoodie'
        cy.get('[class="product-block grid"]').contains(productName).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantity)
        cy.get('.single_add_to_cart_button').click()
        cy.get('[class="mini-cart-items"]').should('contain', quantity)
        cy.get('.woocommerce-message').should('contain', quantity + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
});



