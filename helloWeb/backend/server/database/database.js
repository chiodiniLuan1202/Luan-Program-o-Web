const pgp =require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'a',
    host:'localhost',
    port: 3333,
    database: 'postgres'
});

module.exports =db;