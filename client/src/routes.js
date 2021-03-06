import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// imports das páginas
import Login from './pages/Login';
import Feed from './pages/Feed';
import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import FormaPagamento from './pages/FormaPagamento';
import CadastroEvento from './pages/CadastroEvento';
import DescricaoEvento from './pages/DescricaoEvento';

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route element={<Feed />} path="/feed" />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<FormaPagamento />} path="/formaPagamento" />
        <Route element={<CadastroEvento />} path="/novoEvento" />
        <Route element={<DescricaoEvento />} path="/descricaoEvento" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
