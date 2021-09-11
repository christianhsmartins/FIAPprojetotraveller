const Database = require("../db/config");

module.exports = {
    async create(req, res) {
        const db = await Database();
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;

        await db.run(
            `INSERT INTO usuarios (
                nome,
                email,
                senha,
            ) VALUES (
                ${nome},
                ${email},
                ${senha}
            )`
        );

        await db.close();

        res.redirect(`/Profile/${usuarioId}`);
    }
}