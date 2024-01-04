import telaInicial from '../../support/pageObjects/tela-inicial.pageObject'

describe('Adicionar itens na minha lista de ToDo', () => {
/* dado = before - antes do primeiro teste
before each - antes de cada teste
*/

    beforeEach(() => {
        cy.visit('/')
    })

//it.skip = pula teste
    it.skip('adicionar um item na lista', () => {
        telaInicial.inputText("dado1")
       
    })
// código otimizado

    it('Adicionar mais de um item à lista', () => {
        
        var todoItens = ["Maçã", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    });



});