import React, {useState} from 'react';
import api from '../services/api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CadastroUsuario() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
   
    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            nome,
            senha,
            email,
            endereco
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
            <div>
                <h1>Cadastro Usuário</h1>

                <form onSubmit={handleCadastro} >
                    
                    <TextField id="nome" value= {nome} label="Nome" onChange = {e => setNome(e.target.value)} />
                    <TextField id="senha" value= {senha} label="Senha" onChange = {e => setSenha(e.target.value)} />
                    <TextField id="email" value= {email} label="Email" onChange = {e => setEmail(e.target.value)} />
                    <TextField id="endereco" value= {endereco} label="Endereço" onChange = {e => setEndereco(e.target.value)} />
                    
                    <Button variant="contained" color="primary" type = "submit">Cadastrar</Button>
                    
                </form>
    

            </div>
        </div>

    );
}

export default CadastroUsuario;