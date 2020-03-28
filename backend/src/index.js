const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use(cors());
/*
rotas /recursos

métodos http:
get: buscar informação do backend
post: criar uma informação no backend
put: alterar informação no backend
delete: deletar uma informação no backend

TIPOS DE PARÂMETRO:
query params: parametros nomeados enviados na rota apóes "?" (filtros/paginação)
 & adiciona parametros
 Route params: parametros para indentificar recursos( especificos)
 Request body: corpo da requisição, criar ou alterar recursos

Banco de dados
driver: select * from users
query builder:

 */

app.listen(3333);
