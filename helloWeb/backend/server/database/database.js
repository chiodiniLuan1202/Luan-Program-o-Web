const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'a',
    host: 'localhost',
    port: 5432,
    database: 'Livraria'
});

module.exports = db;