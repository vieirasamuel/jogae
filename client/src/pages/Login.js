import React from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';

const Login = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>{/* <Link to="/usuario">Usuario</Link> */}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Login;
