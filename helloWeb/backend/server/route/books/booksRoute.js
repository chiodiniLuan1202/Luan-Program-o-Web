const express = require('express');
const router = express.Router();
const booksService =  require('../../service/booksService');

// vai retornar todos os livros inseridos no banco de dados
router.get('/books', async function(req, res){
    const books = await booksService.getBooks();
    res.json(books);
});

// vai retornar somente passado por id
router.get('/book/:id',async function(req, res){
    const book = await booksService.getBooks(req.params.id);
    res.json(book);
});

router.delete('/book/:id', async function(req, res){
return res.json([{message: 'registro excluido com sucesso!'}]);
});

router.put('/book', async function(req,res){
 const book = req.body;
 const newBook = await booksService.saveBook(book);
 res.json(newBook);
});

module.exports = router;