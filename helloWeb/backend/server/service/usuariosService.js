const booksData = require('../data/usuariosData');

exports.getUsuarios = function(){
    return usuariosData.getUsuarios;
}

exports.getUsuario = function(usuarioID){
    return usuariosData.getUsuario(usuarioID);
}

exports.deleteUsuario = function (usuarioID) {
    return usuariosData.deleteUsuario(usuarioID);
}

exports.saveUsuario = function(book){
    return usuariosData.saveUsuario(usuario);
}
