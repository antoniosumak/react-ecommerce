import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Store from './pages/Store';

function App() {
  return (
    <>
      <Route exact path="/" component={Store} />
      <Route path="/login" component={Login} />
      <Route path="/cart" component={Cart} />
    </>
  );
}

export default App;
