const express = require ('express');
const app = express();
const booksRoute= require('./route/books/booksRoute');

app.use(express.json());

app.use(booksRoute);
app.listen(3000);

