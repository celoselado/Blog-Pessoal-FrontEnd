import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';


function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate()
    const dispatch= useDispatch()

    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuario deslogado! Até mais o/', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        navigate('/login')
    }

    var navBarComponent;

    if(token !== ''){
        navBarComponent = <AppBar position="static" className='corNavBar' >
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
                <Link to='' className=' text-decoration-none' >
                <Box mx={1} className='cursor' color='white' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        | LogOut
                    </Typography>
                </Box>
                </Link>
            </Box>
            </Grid>
        </Toolbar>
    </AppBar>

    }

    return(
        
        <>
            {navBarComponent}
        </>
    )
}

export default Navbar;