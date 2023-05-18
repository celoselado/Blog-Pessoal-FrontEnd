import React from 'react';
import './Login.css';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Login() {
    return (
    <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' item xs={6}>
                <Box paddingX={20}>
                    <form >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}> Entrar </Typography>
                        <TextField id="usuario" label="Usuário" variant="outlined" fullWidth margin='normal'/>
                        <TextField id="senha" label="Senha" variant="outlined" fullWidth type='password' margin='normal'/>
                        <Box marginTop={2} textAlign='center' className='text-decoration-none'>
                            <Link to='/home'>
                                <Button variant="contained">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'> Ainda não tem uma conta? </Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}> Cadastre-se </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs= {6} style={{
                backgroundImage: `url(https://i.imgur.com/Rn1QO.jpeg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
            </Grid>
        </Grid>
    </>
    )
}

export default Login;