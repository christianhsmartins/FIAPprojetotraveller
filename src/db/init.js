const Database = require("./config");

const initDb = {
    async init(){
        const db = await Database();
        
        db.exec(
            `CREATE TABLE usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT,
                senha TEXT
            )`
        );
        
        await db.close();
    }
}

initDb.init();