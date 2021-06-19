const database = require('../database/database');

exports.getUsuarios = function(){
    return database.query('select * from usuario');
}

exports.getUsuario = function(usuarioID){
    return database.query('select * from usuario where idUsuario = $1',[usuarioID])
}

exports.deleteUsuario = function(usuarioID){
    return database.none('delete from usuario where idUsuario = $1',[usuarioID])
}

exports.saveUsuario = function(usuario){
    return database.one('insert into usuario(nome,senha,email,endereco) values($1,$2,$3,$4) returning *',
    [usuario.nome, usuario.senha, usuario.email, usuario.endereco])};
