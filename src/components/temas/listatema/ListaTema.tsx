import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Action, addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function ListaTemas() {
const [temas, setTemas] = useState<Tema[]>([])
const navigate = useNavigate();
const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

const dispatch= useDispatch()

useEffect(()=>{
    if(token == ''){
        toast.warn('Você precisa estar logado para acessar! :/', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    navigate("/login")
    }
}, [token])


async function getTemas() {
    // alterado a função pra dentro de um try catch, para poder verificar a validade do token do usuário
    try {
      // a parte do TRY, fica igual ao que ja tinha antes
    await busca('/temas', setTemas, {
        headers: {
        Authorization: token
        }
    })
    } catch (error: any) {
      // a parte do catch, vai receber qlquer mensagem de erro que chegue, e caso a mensagem tenha um 403 no seu texto
      // significa que o token já expirou. Iremos alertar o usuário sobre isso, apagar o token do navegador, e levá-lo para a tela de login
    if(error.toString().includes('403')) {
        toast.warn('Seu token expirou! Logue novamente! :/', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        dispatch(addToken(''))
        navigate('/login')
    }
    }
}

useEffect(() => {
    getTemas()
}, [])

return (
    <>
    {temas.map((tema) => (
        <Box m={2} >
        <Card variant="outlined">
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Tema numero {tema.id}
            </Typography>
            <Typography variant="h5" component="h2">
            Descrição do tema: {tema.descricao}
            </Typography>
        </CardContent>
        <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

            <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    Atualizar
                </Button>
                </Box>
            </Link>
            <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                <Button variant="contained" size='small' color="secondary">
                    Deletar
                </Button>
                </Box>
            </Link>
            </Box>
        </CardActions>
        </Card>
    </Box>
    ))}
    </>
);
}

export default ListaTemas

function dispatch(arg0: Action) {
    throw new Error('Function not implemented.');
}
