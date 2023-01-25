/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade de Pré Cadastro', () => {
    
        let randomFirstName = faker.name.firstName();
        let randomLastName = faker.name.lastName();
        let randomEmail = faker.internet.email();

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/my-account/") 
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(randomEmail)
        cy.get('#reg_password').type("teste@teste.com")
        cy.get(':nth-child(4) > .button').click()
        
        cy.get('[href="http://lojaebac.ebaconline.art.br/my-account/edit-account/"]').click()
        cy.get('#account_first_name').type(randomFirstName)
        cy.get('#account_last_name').type(randomLastName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Conta já registrada com e-mail selecionado', () => {
        cy.get('#reg_email').type(randomEmail)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Uma conta já está registrada com seu endereço de e-mail. Faça login.')
    });
});