import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagens/ListaPostagem';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
    return (
    <>
        <TabContext value={value} >
        <AppBar position="static" >  
            <Tabs centered indicatorColor="secondary" onChange={handleChange} >
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre Nós" value="2" />
            </Tabs>
        </AppBar >
        <TabPanel value="1" color=''> 
            <Box display="flex" flexWrap="wrap" justifyContent="center" >
            <ListaPostagem />
            </Box>
        </TabPanel>
        <TabPanel value="2"> 
            <Typography variant="h5" gutterBottom  component="h5" align="center" >Sobre Nós</Typography>
            <Typography variant="body1" gutterBottom  align="justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam iste nulla tempore perferendis, molestiae deleniti facilis odio reprehenderit quasi obcaecati rem quas dolorum natus odit officiis optio aliquid, nam nobis!</Typography>
        </TabPanel>
        </TabContext>
    </>
    );
}
export default TabPostagem  