import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
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
                    <Link to='/login' className=' text-decoration-none2'  > 
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
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                | Cadastrar Tema
                            </Typography>
                        </Box>
                        <Link to='/' className=' text-decoration-none' >
                            <Box mx={1} className='cursor' color='white'>
                                <Typography variant="h6" color="inherit">
                                    | LogOut
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;