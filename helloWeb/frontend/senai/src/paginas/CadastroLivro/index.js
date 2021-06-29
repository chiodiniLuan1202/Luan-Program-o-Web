import React, {useState} from 'react';
import api from '../services/api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function CadastroLivro() {

    const [idlivro, setIdLivro] = useState('');
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
            <Box width="100%" textAlign="center">          
                <div>       
                    <h1>Cadastro de Livro</h1>
                        <Box width="100%" margin-left= "center">    
                            <form onSubmit={handleCadastro}>
                                
                                <Box display="flex" p={1} bgcolor="background.paper" >
                                    {<TextField id="idlivro" value= {idlivro} label="Id do livro" onChange = {e => setIdLivro(e.target.value)} />}
                                </Box>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    {<TextField id="nome" value= {nome} label="Nome do livro" onChange = {e => setNome(e.target.value)} /> }  
                                </Box>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    {<TextField id="editora" value= {editora} label="Editora do livro" onChange = {e => setEditora(e.target.value)} /> }  
                                </Box>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    {<TextField id="isbn" value= {isbn} label="Isbn" onChange = {e => setIsbn(e.target.value)} /> }  
                                </Box>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    {<TextField id="quantidade" value= {quantidade} label="Quantidade" onChange = {e => setQuantidade(e.target.value)} /> }  
                                </Box>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    {<TextField id="assunto" value= {assunto} label="Assunto" onChange = {e => setAssunto(e.target.value)} />}  
                                </Box>
                                <Box display="flex" p={1} bgcolor="background.paper">
                                    {<TextField id="autor" value= {autor} label="Autor" onChange = {e => setAutor(e.target.value)} />}  
                                </Box>
                                <Button variant="contained" color="primary" type = "submit">Cadastrar</Button>
                                
                            </form>
                        </Box> 
                </div>
            </Box>  
        </div>
    );
}

export default CadastroLivro;