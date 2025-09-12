const mysql = require('mysql2/promise')

async function conectar() {
    const conexao = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'jornal'
    });
    return conexao;
}

async function desconectar(conexao){
    conexao.end();
}

module.exports = {conectar, desconectar};