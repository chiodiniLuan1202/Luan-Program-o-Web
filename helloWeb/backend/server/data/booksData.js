const database = require('../database/database');

exports.getBooks = function(){
    return database.query('select * from livro');
}

exports.getBook = function(bookID){
    return database.query('select * from livro where codigo = $1',[bookID])
}

exports.deleteBook = function(bookID){
    return database.none('delete * from livro where codigo = $1',[bookID])
}

exports.saveBook = function(book){
    return database.one('insert into livro(codigo, nome, codigoeditora, isbn, quantidade, codigo_assunto) values($1, $2, $3, $4, $5, $6) returning *')
    ([book.codigo, book.nome, book.codigoeditora, book.isbn, book.quantidade, book.codigo_assunto]);
}

//swagger