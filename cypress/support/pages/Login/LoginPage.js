class LoginPage {
    visit() {
        cy.visit('/')
    }

    preencherCredenciais(username, password) {      
        cy.get('#username').type(username)
        cy.get('#password').type(password)
    }

    fazerLogin () {
        cy.contains('Acessar painel').click()
    }

    selecionarEmpresa (){
        cy.url().should('include', '/empresas')

        cy.contains('CFR CONSTRUÇÕES').click()

        cy.url().should('include', '/app')
    }
}

export default new LoginPage();