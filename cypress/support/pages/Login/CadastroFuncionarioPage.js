class CadastrarFuncionarioPage {


    visit() {
        cy.visit("/cadastros/funcionarios");
    }

    iniciarCadastro() {      
        cy.contains('Novo Cadastro').click();
    }

    preencherCampos (randomName) {
        cy.get("#username").type(randomName);

        cy.findByRole('combobox').click()
            
        cy.get('select').select(1,{ force: true});
    }

    cadastrar (){
        cy.contains('Cadastrar').click()
    }

    confirmacaoCadastro() {
        cy.contains("Funcionário cadastrado com sucesso!")
    }
}

export default new CadastrarFuncionarioPage();