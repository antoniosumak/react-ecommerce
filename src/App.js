import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Store from './pages/Store';
import { Main } from './lib/styles/generalStyles';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Store} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </Main>
    </>
  );
}

export default App;
