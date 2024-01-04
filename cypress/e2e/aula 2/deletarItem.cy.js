import telaInicial from '../../support/pageObjects/tela-inicial.pageObject'

describe('Deletar itens da lista', () => {
/* dado = before - antes do primeiro teste
before each - antes de cada teste
*/

    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Maçã", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })

    it('deleção de um item da lista', () => {
        telaInicial.deletarItem()
        
    });

   




});