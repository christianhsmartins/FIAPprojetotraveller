//Importando requisicoes
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//Exportando
module.exports = () =>
    open({
        filename: './src/db/usuarios.sqlite',
        driver: sqlite3.Database,
    });