//Importando dependencias
const express = require('express');

//Criando rota
const route = express.Router();
//Area de login
route.get('/', (req, res) => res.render("login", {page: 'logar'}));
route.get('/login', (req, res) => res.render("login", {page: 'logar'}));
route.get('/cadastro', (req, res) => res.render("login", {page: 'cadastro'}));
route.get('/profile', (req, res) => res.render("profile"));

//Exportando as rotas
module.exports = route;