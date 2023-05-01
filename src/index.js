import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter basename="/rickandmorty">
    <App />

     </BrowserRouter>
  </React.StrictMode>
);

// наш другий основний документ, який прямо привязаний до index.html і там виконується.
// тут малюємо наш головний компонент App.js і огортаємо HOCами такими 
//як BrowserRouter (будуть працювати роути що є всередині) - переходимо в App.js