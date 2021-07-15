import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartItemsProvider } from './context/CartItemsContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartItemsProvider>
        <App />
      </CartItemsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
