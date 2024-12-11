import { faker } from "@faker-js/faker";
import CadastrarFuncaoPage from "../../support/pages/cadastro-funcao/CadastrarFuncaoPage";



describe('Cadastro de funcionário', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Deve cadastrar um funcionário', () => {   
      const randomTitle = faker.company.name()
      const randomDescription = faker.company.catchPhrase()

      CadastrarFuncaoPage.visit()

      CadastrarFuncaoPage.iniciarCadastro()

      CadastrarFuncaoPage.preencherCamposPrimeiraAba(randomTitle,randomDescription)

      CadastrarFuncaoPage.avancarParaProximaAba()

      CadastrarFuncaoPage.preencherHorasSemanais()

      CadastrarFuncaoPage.cadastrarFuncao()
    });
});
