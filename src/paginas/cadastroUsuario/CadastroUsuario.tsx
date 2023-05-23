import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroUsuario.css'
import { Grid, Typography, TextField, Button} from '@material-ui/core'
import { Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { cadastroUsuario } from '../../services/Service'

function CadastroUsuario() {
    
    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item className="imagem2" xs={6}></Grid>
            <Grid item xs={6} alignItems='center'>
            <Box padding={10}>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2' > Cadastrar </Typography>
                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome" variant="outlined" fullWidth margin='normal' name='nome'/>
                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário" variant="outlined" fullWidth  margin='normal' name='usuario'/>
                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" fullWidth type='password' margin='normal' name='senha'/>
                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="Confirmar Senha" variant="outlined" fullWidth type='password' margin='normal' name='senha' />
                <Box marginTop={2} textAlign='center' className='text-decoration-none'>
                <Button type='submit' variant="contained" color='primary' className='btnCadastrar'>
                    Cadastrar
                </Button>
                <Link to='/login'>
                    <Button variant="contained" color='secondary'>
                        Cancelar
                    </Button>
                </Link>
                </Box>
            </form>
            </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default CadastroUsuario