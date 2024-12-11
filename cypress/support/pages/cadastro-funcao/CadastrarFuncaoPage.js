class CadastrarFuncaoPage  {
    visit() {
        cy.visit("/cadastros/jornadas")
    }

    iniciarCadastro() {
        cy.contains("Nova Função").click()
    }

    preencherCamposPrimeiraAba(randomTitle,randomDescription) {
        cy.get("input[name=nome]").type(randomTitle)

        cy.get("textarea[name=descricao]").type(randomDescription)
    }

    avancarParaProximaAba(){
        cy.contains("Prosseguir").parent().click()
    }

    preencherHorasSemanais() {
        cy.get("input[name=horasSemanais]").parent().type(33)
    }

    cadastrarFuncao() {
        cy.contains("Confirmar").click()
    }


}

export default new CadastrarFuncaoPage()