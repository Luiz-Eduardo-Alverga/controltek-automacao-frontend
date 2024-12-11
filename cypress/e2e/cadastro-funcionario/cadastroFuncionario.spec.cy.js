import CadastroFuncionarioPage from '../../support/pages/cadastro-funcionario/CadastroFuncionarioPage';
import { faker } from '@faker-js/faker';

describe('Cadastro de funcionário', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Deve cadastrar um funcionário', () => {   
        const randomName = faker.person.fullName()

        CadastroFuncionarioPage.visit()
        
        CadastroFuncionarioPage.iniciarCadastro()
        
        CadastroFuncionarioPage.preencherCampos(randomName)

        CadastroFuncionarioPage.cadastrar()

        CadastroFuncionarioPage.confirmacaoCadastro()
    });
});
