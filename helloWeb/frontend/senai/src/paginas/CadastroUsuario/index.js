import React, {useState} from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './style.css';

function CadastroUsuario() {

    const [idusuario, setID] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    
    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            idusuario,
            nome,
            email,
            senha,
            telefone,
            
        };

        try {
            console.log(dados);
            const response = await api.put('usuario', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do usuario é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar usuario " + error.message);            
        }
    }

    return (
      
       <div id="inputs">
            <div>
                <h1>Cadastro de Usuario</h1>

                <form onSubmit={handleCadastro}>
                    
                <TextField
                           
                            id="ID"
                             label="ID"
                             value={idusuario}
                            onChange={e => setID(e.target.value)}
                            variant="outlined"/>
                      
                <TextField
                           
                            id="nome"
                             label="NOME"
                             value={nome}
                            onChange={e => setNome(e.target.value)}
                            variant="outlined"/>
                          
                <TextField
                            
                            id="email"
                             label="EMAIL"
                             value={email}
                            onChange={e => setEmail(e.target.value)}
                            variant="outlined"/>                    
                    

                <TextField
                           
                            id="senha"
                            label="SENHA"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            variant="outlined"/>       
                       
                <TextField
                        
                            id="telefone"
                            label="TELEFONE"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        
                            variant="outlined"/> 
                        
                  <div id ="botao">
                  <Button variant="contained" color="primary" type="submit" >Cadastro</Button>
                  </div>
                </form>
    

            </div>
        </div>
      
       
    );
}

export default CadastroUsuario;