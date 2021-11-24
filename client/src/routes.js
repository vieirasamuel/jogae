import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// imports das páginas
import Login from './pages/Login';
import Feed from './pages/Feed';
const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route element={<Feed />} path="/feed" />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
