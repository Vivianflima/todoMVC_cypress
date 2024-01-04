/*describe = feature 
contexto ou beforeEach = background
it  = caso de teste 
*/

import telaInicial from '../../support/pageObjects/tela-inicial.pageObject'

describe('Acessar a página do todoMVC', () => {
  it('abrir o site', () => {
    cy.visit('https://todomvc.com/examples/vanillajs/#/')
    telaInicial.inputText()
  })
})