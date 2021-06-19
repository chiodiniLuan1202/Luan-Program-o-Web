import React, {useState} from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function CadastroLivro() {

    const [idlivro, setID] = useState('');
    const [nome, setNome] = useState('');
    const [editora, setEditora] = useState('');
    const [isbn, setIsbn] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [assunto, setAssunto] = useState('');
    const [autor, setAutor] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            idlivro,
            nome,
            editora,
            isbn,
            quantidade,
            assunto,
            autor
        };

        try {
            console.log(dados);
            const response = await api.put('book', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do livro é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar livro " + error.message);            
        }
    }

    return (
       
       
       <div>
         
            <div id = 'inputs'>
                <h1>Cadastro de Livro</h1>

                <form onSubmit={handleCadastro}>
                    
                <TextField
                        placeholder="ID"
                        value={idlivro}
                        onChange={e => setID(e.target.value)}
                        variant="outlined"/> 
                     <TextField
                        placeholder="Descricao do livro"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        variant="outlined"/> 

                <TextField
                        placeholder="Editora do livro"
                        value={editora}
                        onChange={e => setEditora(e.target.value)}
                        variant="outlined"/> 

                <TextField
                        placeholder="Isbn"
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}
                        variant="outlined"/> 

                <TextField 
                        placeholder="quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}
                        variant="outlined"/> 

                <TextField 
                        placeholder="assunto"
                        value={assunto}
                        onChange={e => setAssunto(e.target.value)}
                        variant="outlined"/> 

                <TextField      
                        placeholder="autor"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}
                        variant="outlined"/> 
                     <Button variant="contained" color="primary" type="submit" >Cadastro</Button>   
                </form>
            </div>
        </div>

    );
}

export default CadastroLivro;