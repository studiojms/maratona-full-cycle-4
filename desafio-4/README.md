Neste desafio você deverá criar uma aplicação React.js com TypeScript para listar os dados consumidos de uma API Rest.

Crie a aplicação usando o comando: npx create-react-app --typescript nome-do-projeto.

Instale o react-router para criar uma página de listagem de usuários. Esta página deverá ser acessível, acessando o endereço: http://localhost:3000/users.

Esta listagem de usuários buscará os usuários de uma API Rest externa, use o endpoint: https://reqres.in/api/users.

Faça um AJAX usando a biblioteca axios dentro do componente React de listagem de usuários. Liste os usuários em uma tabela, lista ou como desejar. Não use Docker Compose nesta aplicação, deveremos ter apenas um Dockerfile na raiz do projeto expondo a porta 3000 que é a porta que o servidor disponibilizará a aplição React.js. Você pode usar a configuração Docker deste repositório: https://github.com/codeedu/maratona4-esquenta/tree/master/frontend, como exemplo.

Faça o docker build da aplicação para gerar sua imagem, suba-a no Docker Hub e compartilhe o endereço da imagem na página do desafio.
