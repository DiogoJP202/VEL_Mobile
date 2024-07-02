import React from "react";
import ReactDOM from "react-dom/client";

// 1- configurando router
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Paginas/Login/app.jsx";
import Entregas from "./Paginas/Entregas/app.jsx"
import EntregaEspecifica from "./Paginas/EntregaEspecifica/app.jsx";
import RecuperarSenha from "./Paginas/RecuperarSenha/app.jsx";
import GerenciamentoGastos from "./Paginas/GerenciamentoGastos/App.jsx";
import ConfiguracaoInterface from "./Paginas/ConfigInterfac/app.jsx";
import ConfiguracaoUsuario from "./Paginas/ConfigUsuario/app.jsx";
import CodigoSeguranca from "./Paginas/CodigoSeguranca/app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />    
        <Route path="/entregas" element={<Entregas />} />  
        <Route path="/entregaespecifica" element={<EntregaEspecifica />} />  
        <Route path="/gerenciamentogastos" element={<GerenciamentoGastos />} />  
        <Route path="/configuracaointerface" element={<ConfiguracaoInterface />} /> 
        <Route path="/configuracaousuario" element={<ConfiguracaoUsuario />} /> 
        <Route path="/codigoseguranca" element={<CodigoSeguranca />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
