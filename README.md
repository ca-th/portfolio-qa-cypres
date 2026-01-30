# QA Portfolio - Cypress Automation

Este repositório contém meu portfólio de Automação de Testes utilizando **Cypress**.
O projeto aborda cenários reais de testes **E2E (Ponta a Ponta)**, **API** e **Interface (UI)**.

## Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) - Framework de automação
* [Node.js](https://nodejs.org/) - Ambiente de execução
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação

## Estrutura do Projeto

O projeto segue a arquitetura padrão do Cypress, com testes organizados por responsabilidade:

| Arquivo | Descrição | Tipo de Teste |
///////
| `fluxo_completo.cy.js` | Cria usuário via API e realiza login no Frontend (Abordagem Híbrida) | **E2E / Híbrido** |
| `ui_login.cy.js` | Valida login (sucesso/falha) no site ServeRest | **UI (Frontend)** |
| `api_produtos.cy.js` | Cadastro de usuários com dados dinâmicos | **API (Backend)** |

