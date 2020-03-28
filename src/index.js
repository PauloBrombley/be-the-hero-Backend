const express = require('express'); //pacote
const routes = require('./routes');  //arquivo
const cors = require('cors')

const app = express();

/**comando para utilização de seguransa cors 
 * em produção podemos pasar o parametro origin que vai informar qual endereço poderá acessar nossa aplicação
*/
app.use(cors());

/** comando para que a applicação entenda que sera utilisado JSON e passamos da biblioteca do express */
app.use(express.json());

/**comando que define o uso do nosso arquivo criado de rotas */
app.use(routes);

/*
fazer a instalação do nodemon para ambiente de desenvolvimento:
npm install nodemon -D
depois no package.json modificar o script para:
 "scripts": {
    "start": "nodemon index.js" // pagina main
  }

  e o comando para iniciar o servidor não vai ser mais node index.js
  vai ser npm start
  que vai estartar o servidor e vai poder reconhecer alterações feitas no nosso main index.js
*/

/*
* Rota ex: http://localhost:3333/users
* Recurso ex: /users
*/

/* Métodos HTTP:
*GET: Buscar Informação simples no back-end
*POST: Buscar Informação com segurança e criar informação no back-end
*PUT: Inserir Informação no back-end
*DELETE: Deletar Informação no back-end
*/

/* Tipos de parametros
*
*Query Params: Parametros nomeados e enviados na rota apos '?' serve para filtros, paginação "request.query"
*Route Params: Parametros utilizados para identificar recursos (/users/:id) "request.params"
*Request Body: Corpo da requisição usado para Alterar, Incluir dados e enviar informação mais segura "request.body"
*/

/** Bancos de dados
 * SQL: MySql, SQLite, PostgresSQL, Oracle, Microsoft sql server 
 * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * como conectar com banco de dados
 * 
 * Driver: instalando ele (Nomenclatura: SELECT * FROM users)
 * Query Builder: escrevendo utilizando JS (Nomenclatura: table('users').select('*').where() ) utilazaremos KNEX
 * instalando knex e sqlite
 * npm install knex / npm install sqlite3
 * 
 */


app.listen(3333);