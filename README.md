# Coleta e Exibição de Dados usando JavaScript

Este documento fornece uma explicação do script JavaScript que lida com a coleta, validação e exibição de dados de um formulário HTML, além de permitir a exclusão dos dados exibidos.

[Projeto de Coleta e Exibição de Dados](https://dinhosilwa.github.io/Coleta-e-exibicao-de-dados-usando-javascripts/)

![Print da tela inicial](https://i.imgur.com/sqjUz9M.png).

## Funcionalidades

### 1. Coleta de Dados

- Quando o botão com o ID `btn-cadastrar` é clicado, o evento dispara a função `coletarDados`.
- Os valores dos campos de entrada de texto com IDs `nome`, `email` e `telefone` são coletados e armazenados no objeto `dados`.

### 2. Validação de Dados

- A função `validardados` é chamada após a coleta dos dados.
- Verifica se algum campo (nome, email ou telefone) no objeto `dados` está vazio.
- Se algum campo estiver vazio, a classe `mostraavisoErro` é adicionada a um elemento com ID `erro` para exibir um aviso de erro.
- Após 3 segundos (3000 milissegundos), a página é recarregada automaticamente.

### 3. Exibição de Dados

- Se todos os campos estiverem preenchidos, a função `exibirDados` é chamada.
- Os dados coletados são exibidos nos elementos HTML com IDs `nomedados`, `emaildados` e `telefonedados`.

### 4. Limpeza de Campos

- A função `limparCampos` é chamada após a exibição dos dados.
- Ela redefine os campos de entrada de texto para ficarem vazios.

### 5. Exclusão de Dados

- Quando o elemento com ID `delete` é clicado, o evento dispara a função `apagardados`.
- A classe `none` é alternada na seção de dados com ID `dados-contatos`, permitindo ocultar ou exibir esses dados.

## Fluxo de Funcionamento

1. O usuário preenche os campos de entrada de texto com `nome`, `email` e `telefone`.
2. O usuário clica no botão "Cadastrar" (`btn-cadastrar`).
3. Se todos os campos estiverem preenchidos, os dados são coletados e exibidos.
4. Se algum campo estiver vazio, um aviso de erro é exibido por 3 segundos.
5. O usuário pode clicar no ícone de exclusão (`delete`) para ocultar os dados exibidos.
6. Os campos de entrada são limpos para permitir a inserção de novos dados.

Grande Abraço!! 
Deixe seu Star se gostou😉
