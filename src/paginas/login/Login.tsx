import React, {ChangeEvent, useState, useEffect} from 'react';
import './Login.css';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';

function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');


    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect(() => {
        if(token != ''){
            navigate('/home')
        }

    },[token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        }catch(error){
            alert('Usuário/Senha incorreto ou inexistênte')
        }

    }   

    return (
    <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' item xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1' > Entrar </Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário" variant="outlined" name='usuario' fullWidth margin='normal'/>
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name='senha' fullWidth type='password' margin='normal'/>
                        <Box marginTop={2} textAlign='center' className='text-decoration-none'>
                        
                                <Button variant="contained" type='submit'>
                                    Logar
                                </Button>
                        
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'> Ainda não tem uma conta? </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1' > Cadastre-se </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= {6} className="imagem">
            </Grid>
        </Grid>
    </>
    )
}

export default Login;