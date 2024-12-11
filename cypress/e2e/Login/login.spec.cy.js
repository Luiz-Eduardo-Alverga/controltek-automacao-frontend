import LoginPage from "../../support/pages/Login/LoginPage"

describe('Login', () => {
  it('Login deve ser realizado e selecionado empresa com sucesso', () => {
    LoginPage.visit()
    cy.fixture('user').then( (user) => {
      LoginPage.preencherCredenciais(user.valid.username,user.valid.password)
    })
  
    LoginPage.fazerLogin()

    LoginPage.selecionarEmpresa()

  })
})