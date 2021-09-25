// Importando dependências
import React from 'react';
import ReactDOM from 'react-dom';
import './auth/firebase';
// Importando a aplicação
import App from './app';
// Importando estilo
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);