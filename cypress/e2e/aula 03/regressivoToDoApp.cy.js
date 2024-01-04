import telaInicial from '../../support/pageObjects/tela-inicial.pageObject'

describe('Regressivo ToDo App', () => {

    context('Validar a tela inicial',()=>{
        beforeEach(() => {
            cy.visit('/')
        });

        it('Validar area label do input de dados', () => {
            telaInicial.validarInput('What needs to be done')
        });

    })

    context('Validar a adição de itens',()=>{
        beforeEach(() => {
            cy.visit('/')
        });

        it('Adicionar mais de um item à lista', () => {
        
            var todoItens = ["Maçã", "Banana", "Cenoura"]
                todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
            //validar que o contador é igual a 3
            telaInicial.validarContador(3)
        });

    })

    context('Validar a conclusão de itens',()=>{
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Cenoura"]
    
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
        })

        it('Concluir um item da lista de ToDo', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(2)
            
        });
    

    })

    context('Validar o filtro da aplicação',()=>{

        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Cenoura"]
    
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
    
            telaInicial.concluirItem()
        })

        it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2)

        });

        it('Validar a lista de itens concluídos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeToDo(1)
        });


    })

    context('Validar a remoção de itens',()=>{
        
    beforeEach(() => {
        cy.visit('/')
        var todoItens = ["Maçã", "Banana", "Cenoura"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })
    })

    it('deleção de um item da lista', () => {
        telaInicial.deletarItem()
        telaInicial.validarSizeToDo(2)
    });
    })
})

