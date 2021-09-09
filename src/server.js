//Importando dependencias
const express = require('express');
const route = require('./route');
const path = require('path');

//Criando um servidor
const server = express();
server.listen(3000, () => console.log("O servidor está funcionando"));

//Pedindo pro express utilizar os arquivos
server.use(route);
server.use(express.static("public"));

//Dizendo para o navegador ler os arquivos ejs
server.set('view engine', 'ejs');

//Habilitando a visibilidade da pasta views
server.set('views', path.join(__dirname, 'views'));