## Bootcamp #02 Qualiters Club

Bootcamp de Desenvolvimento de Automação Web realizado pela comunidade Qualiters Club ao longo de 3 dias. Este repositório é o resultado do aprendizado obtido durante o bootcamp.

### Automação Web todoMVC com Cypress

Este projeto realiza a automação do site [todoMVC](https://todomvc.com/) utilizando o framework Cypress.

### Tecnologias Utilizadas

- Node.js (v18.16.1)
- Cypress

### Documentações

- [Site todoMVC](https://todomvc.com/)

### Estrutura de PageObjects para Automação

O projeto utiliza uma estrutura de PageObjects para organizar a automação.

### Configuração do Projeto

1. Instale o Node.js: [Baixe aqui](https://nodejs.org/)
2. Instale o Yarn:

    ```bash
    npm install -g yarn
    ```

3. Crie a pasta do projeto
4. Abra o Visual Studio Code para instalar o Cypress:

    ```bash
    npm install -g cypress
    ```

5. Inicialize o projeto:

    ```bash
    npm init
    ```

6. Adicione o Cypress ao seu projeto:

    ```bash
    yarn add cypress --dev
    ```

### Como Rodar os Testes

1. Abra o Cypress:

    ```bash
    yarn run cypress open
    ```

2. Escolha uma spec para executar.

### Testes Criados

- Adicionar Texto
- Concluir Item
- Filtrar Item
- Deletar Item

### Specs de Testes

- Cada ação no site possui specs de testes separados.
- Existe também a spec regressiva `regressivoToDoApp`, que engloba todas as ações em uma única spec.

---

Este projeto faz parte do meu progresso no Bootcamp #02 da Qualiters Club. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para contribuir ou entrar em contato.