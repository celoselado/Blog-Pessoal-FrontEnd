import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    function goLogout(){
        setToken('')
        alert('Usuário deslogado! ^^')
        navigate('/login')
    }

    return(
        
        <>
        <AppBar position="static" className='corNavBar' >
                <Toolbar variant="dense"  >
                <Grid container justifyContent={'space-between'} >
                    <Box className='cursor'  >
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className=' text-decoration-none2'  > 
                    <Box mx={1} className='cursor' color='white' >
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                        <Link to='/postagens' className=' text-decoration-none2' >
                        <Box mx={1} className='cursor' color='white'>
                            <Typography variant="h6" color="inherit">
                                | Postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to= '/temas' className='text-decoration-none2'>
                        <Box mx={1} className='cursor' color='white'>
                            <Typography variant="h6" color="inherit">
                                | Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/formularioTema' className=' text-decoration-none'>
                        <Box mx={1} className='cursor' color='white' >
                            <Typography variant="h6" color="inherit">
                                | Cadastrar Tema
                            </Typography>
                        </Box>
                        </Link>
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    | LogOut
                                </Typography>
                            </Box>
                    </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;