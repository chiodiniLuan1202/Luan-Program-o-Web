const express = require('express');
const router = express.Router();
const cadastrosService =  require('../../service/usuariosService.js');

// vai retornar todos os livros inseridos no banco de dados
router.get('/usuarios', async function(req, res){
    const usuarios = await usuariosService.getUsuarios();
    res.json(usuarios);
});

// vai retornar somente passado por id
router.get('/usuario/:id',async function(req, res){
    const usuario = await usuarioService.getUsuario(req.params.id);
    res.json(usuario);
});

// para a exclusão do livro 
router.delete('/usuario/:id', async function(req, res){
    const deleteCadastro= await usuarioService.deleteUsuario(req.params.id);
return res.json([{message: 'registro excluido com sucesso!'}]);
});

router.put('/usuario', async function(req,res){
 const usuario = req.body;
 const newUsuario = await usuarioService.saveUsuario(usuario);
 res.json(newUsuario);
});

module.exports = router;