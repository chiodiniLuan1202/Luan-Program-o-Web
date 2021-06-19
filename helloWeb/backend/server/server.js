const express = require ('express');
const cors = require('cors');
const app = express();
const booksRoute= require('./route/books/booksRoute');
const usuariosRoute= require('./route/usuarios/usuariosRoute')


app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(usuariosRoute);
app.listen(3333);