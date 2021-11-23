import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// imports das páginas
import Login from './pages/Login';

const RoutesIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route component={Login} path="/login" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesIndex;
