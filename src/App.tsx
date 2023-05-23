import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./paginas/home/Home";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagem";
import ListaTema from "./components/temas/listatema/ListaTema";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element= {<Login />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/cadastrousuario" element= {<CadastroUsuario />} />
          <Route path="/postagens" element= {<ListaPostagens />} />
          <Route path="/temas" element= {<ListaTema />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

  export default App;
