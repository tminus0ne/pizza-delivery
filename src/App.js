import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { setPizzas } from './redux/actions/pizzas';

export function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
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
