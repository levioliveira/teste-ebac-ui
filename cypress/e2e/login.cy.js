/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/my-account/")
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(1)').should('contain', 'Welcome')
    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
    
        cy.get('#username').type("124@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type("1234")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail')
    })
})