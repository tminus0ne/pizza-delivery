import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </div>
  );
}
