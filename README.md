# test-back-end-nodejs

# Premissas

- Utilizar Node.js
- Ultilizar framework Express.js

# Desafio

Desenvolver a API de um produto similar ao Pensador. O objetivo é que usuários possam se cadastrar, e após cadastro publicar seus pensamentos (citações). Essas citações podem ser curtida tanto pelo proprio usuário, como também por outros usuários logados.

# Funcionalidades

- O usuário pode criar, excluir, editar e visualizar sua conta.
- O usuário pode criar, excluir, editar e visualizar suas citações.
- O usuário pode visualizar a listagem de todas as citações de todos usuários, ordenadas por data.

# Restriçôes

- O usuário NÃO PODE excluir e editar a conta de outros usuários.
- O usuário NÃ0 PODE excluir e editar as publicações de outros usuários.

# Requisitos 

- node ( npm install )
- bcrypt ( npm install bcrypt ) Uma biblioteca para ajudá-lo a fazer hash de senhas.
- body-parser ( npm install body-parser ) Middleware de análise do corpo do Node.js.
- cookie-parser (npm install cookie-parser) Analise o Cookiecabeçalho e preencha req.cookiescom um objeto codificado pelos nomes dos cookies.
- express ( npm install express --save ) O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
- express-session ( npm install express-session ) Caso não tenha sido instalado na instalação do express.
- express-validator ( npm install --save express-validator ) express-validator é um conjunto de middlewares express.js que envolve funções validator e sanitizador validator.js.

# Para rodar o projeto

Instale os requisitos

1 - No terminal abra a pasta raiz do projeto. E execute: npm start
