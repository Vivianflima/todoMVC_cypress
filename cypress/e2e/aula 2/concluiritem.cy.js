import telaInicial from '../../support/pageObjects/tela-inicial.pageObject'

describe('Concluir itens na lista de ToDo', () => {
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

// código otimizado

    it('Concluir um item da lista de ToDo', () => {
        telaInicial.concluirItem()
        
    });



});