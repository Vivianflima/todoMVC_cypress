import telaInicial from '../../support/pageObjects/tela-inicial.pageObject'

describe('Validar os filtros da aplicação após adição de itens', () => {
/* dado = before - antes do primeiro teste
before each - antes de cada teste
*/

    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Maçã", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
    })
/*
Clicar no filtro
o item ser exibido
o contador bater com a informação
*/

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")
        
    });

    it.skip('Filtrar itens concluídos', () => {
        
        
    });




});