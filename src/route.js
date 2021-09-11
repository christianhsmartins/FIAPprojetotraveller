//Importando dependencias
const express = require('express');
const CadastroController = require('./controllers/CadastroController');

//Criando rota
const route = express.Router();
//Area de login
route.get('/', (req, res) => res.render("login", {page: 'logar'}));
route.get('/login', (req, res) => res.render("login", {page: 'logar'}));
route.get('/cadastro', (req, res) => res.render("login", {page: 'cadastro'}));
route.get('/profile/:usuario', (req, res) => res.render("profile"));

//Formato que os formulários recebam os dados
route.post('/profile', CadastroController.create);

//Exportando as rotas
module.exports = route;