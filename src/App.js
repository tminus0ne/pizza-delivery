import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { fetchPizzas } from './redux/actions/pizzas';

export function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

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
